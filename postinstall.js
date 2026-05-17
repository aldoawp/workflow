const fs = require("fs");
const path = require("path");

const src = __dirname;
const dest = process.env.INIT_CWD || process.cwd();

// Skip if installing the package itself
if (src === dest) process.exit(0);

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const srcPath = path.join(from, entry.name);
    const destPath = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const dirs = [".agents", path.join("templates", "docs")];

for (const dir of dirs) {
  const from = path.join(src, dir);
  const to = path.join(dest, dir);
  if (fs.existsSync(from)) {
    copyDir(from, to);
    console.log(`  copied: ${dir}`);
  }
}

console.log("workflow installed to", dest);

// Detach an npm uninstall so it runs after this postinstall exits
const { spawn } = require("child_process");
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const child = spawn(npm, ["uninstall", "@aldoawp/workflow"], {
  cwd: dest,
  detached: true,
  stdio: "ignore",
});
child.unref();
