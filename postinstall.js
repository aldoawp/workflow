const fs = require("fs");
const path = require("path");

const src = __dirname;
const dest = process.env.INIT_CWD || process.cwd();

// Skip if installing the package itself
if (src === dest) process.exit(0);

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    // Skip symlinks to prevent traversal outside the package directory
    if (entry.isSymbolicLink()) continue;
    const srcPath = path.join(from, entry.name);
    const destPath = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const copies = [
  { from: ".agents", to: ".agents" },
  { from: path.join("templates", "docs"), to: "docs" },
];

for (const { from, to } of copies) {
  const fromPath = path.join(src, from);
  const toPath = path.join(dest, to);
  if (fs.existsSync(fromPath)) {
    copyDir(fromPath, toPath);
    console.log(`  copied: ${to}`);
  }
}

console.log("workflow installed to", dest);

// Detach an npm uninstall so it runs after this postinstall exits
const { spawn } = require("child_process");
// Use cmd /c on Windows instead of shell:true to avoid unnecessary shell exposure
const [bin, args] =
  process.platform === "win32"
    ? ["cmd", ["/c", "npm", "uninstall", "@aldoawp/workflow"]]
    : ["npm", ["uninstall", "@aldoawp/workflow"]];
const child = spawn(bin, args, {
  cwd: dest,
  detached: true,
  stdio: "ignore",
});
child.unref();
