/* ============================================
   TASKLY LANDING PAGE — script.js
   ============================================ */

(function () {
  "use strict";

  // ---- Navbar scroll shadow ----
  const navbar = document.getElementById("navbar");
  let lastScrollY = 0;
  let ticking = false;

  function updateNavbar() {
    if (window.scrollY > 8) {
      navbar.classList.add("navbar--scrolled");
    } else {
      navbar.classList.remove("navbar--scrolled");
    }
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    },
    { passive: true },
  );

  // ---- Mobile drawer ----
  const hamburger = document.getElementById("hamburger");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const drawerClose = document.getElementById("drawerClose");

  function openDrawer() {
    mobileDrawer.classList.add("mobile-drawer--open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
    // Trap focus: focus close button
    drawerClose.focus();
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("mobile-drawer--open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("drawer-open");
    hamburger.focus();
  }

  if (hamburger) {
    hamburger.addEventListener("click", openDrawer);
  }
  if (drawerClose) {
    drawerClose.addEventListener("click", closeDrawer);
  }
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", closeDrawer);
  }

  // Close drawer on link click
  document.querySelectorAll(".mobile-drawer__link").forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      mobileDrawer.classList.contains("mobile-drawer--open")
    ) {
      closeDrawer();
    }
  });

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#") return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = 80; // navbar height + padding
        var top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  });

  // ---- Scroll reveal animations ----
  var revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          if (el.classList.contains("reveal")) {
            el.classList.add("reveal--visible");
          } else if (el.classList.contains("reveal-left")) {
            el.classList.add("reveal-left--visible");
          } else if (el.classList.contains("reveal-right")) {
            el.classList.add("reveal-right--visible");
          }
          revealObserver.unobserve(el);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // ---- Showcase accent stripe animation ----
  var stripeContainers = document.querySelectorAll(
    ".showcase__image-container",
  );

  var stripeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Delay stripe animation slightly after the image fades in
          setTimeout(function () {
            entry.target.classList.add("stripe-visible");
          }, 300);
          stripeObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  stripeContainers.forEach(function (el) {
    stripeObserver.observe(el);
  });

  // ---- Stats count-up animation ----
  var statNumbers = document.querySelectorAll(".stat__number");
  var statsAnimated = false;

  function formatNumber(num, isDecimal) {
    if (isDecimal) {
      return num.toFixed(1);
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M";
    }
    return num.toLocaleString("en-US");
  }

  function animateCountUp(element) {
    var target = parseFloat(element.getAttribute("data-target"));
    var suffix = element.getAttribute("data-suffix") || "";
    var prefix = element.getAttribute("data-prefix") || "";
    var isDecimal = element.getAttribute("data-decimal") === "true";
    var duration = 1500;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = eased * target;
      element.textContent = prefix + formatNumber(current, isDecimal) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Ensure final value is exact
        element.textContent = prefix + formatNumber(target, isDecimal) + suffix;
      }
    }

    window.requestAnimationFrame(step);
  }

  var statsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          statNumbers.forEach(function (el) {
            animateCountUp(el);
          });
          statsObserver.disconnect();
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  var statsBar = document.querySelector(".stats-bar");
  if (statsBar) {
    statsObserver.observe(statsBar);
  }

  // ---- Social proof logo stagger on scroll ----
  var logoTrack = document.querySelector(".social-proof__logo-track");
  if (logoTrack) {
    var logos = logoTrack.querySelectorAll("img:not(.marquee-dup)");
    var logoObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            logos.forEach(function (logo, i) {
              logo.style.opacity = "0";
              logo.style.transition = "opacity 300ms ease " + i * 60 + "ms";
              // Trigger reflow
              void logo.offsetWidth;
              logo.style.opacity = "1";
            });
            logoObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    logoObserver.observe(logoTrack);
  }
})();
