(function () {
  "use strict";

  var navbar = document.getElementById("navbar");
  var menuToggle = document.getElementById("menuToggle");
  var mobileDrawer = document.getElementById("mobileDrawer");
  var drawerBackdrop = document.getElementById("drawerBackdrop");
  var drawerClose = document.getElementById("drawerClose");
  var reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  var focusableSelectors =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  var lastFocused = null;

  function updateNavbarShadow() {
    if (!navbar) {
      return;
    }

    if (window.scrollY > 8) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  }

  function openDrawer() {
    if (!mobileDrawer || !menuToggle) {
      return;
    }

    lastFocused = document.activeElement;
    mobileDrawer.classList.add("is-open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("drawer-open");

    var focusables = mobileDrawer.querySelectorAll(focusableSelectors);
    if (focusables.length > 0) {
      focusables[0].focus();
    }
  }

  function closeDrawer() {
    if (!mobileDrawer || !menuToggle) {
      return;
    }

    mobileDrawer.classList.remove("is-open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("drawer-open");

    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  function trapDrawerFocus(event) {
    if (
      !mobileDrawer ||
      !mobileDrawer.classList.contains("is-open") ||
      event.key !== "Tab"
    ) {
      return;
    }

    var focusables = mobileDrawer.querySelectorAll(focusableSelectors);
    if (!focusables.length) {
      return;
    }

    var first = focusables[0];
    var last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") {
          return;
        }

        var target = document.querySelector(targetId);
        if (!target) {
          return;
        }

        event.preventDefault();
        closeDrawer();

        var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: top,
          behavior: reducedMotion ? "auto" : "smooth",
        });
      });
    });
  }

  function setupReveals() {
    var revealItems = document.querySelectorAll(".reveal");
    var stripeTargets = document.querySelectorAll(".showcase-shot");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
      stripeTargets.forEach(function (item) {
        item.classList.add("is-striped");
      });
      return;
    }

    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });

    var stripeObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-striped");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
      },
    );

    stripeTargets.forEach(function (item) {
      stripeObserver.observe(item);
    });
  }

  function formatCount(value, element) {
    var suffix = element.getAttribute("data-suffix") || "";
    var decimalPlaces = parseInt(
      element.getAttribute("data-decimal") || "0",
      10,
    );
    var format = element.getAttribute("data-format");
    var rendered;

    if (decimalPlaces > 0) {
      rendered = value.toFixed(decimalPlaces);
    } else if (format === "million") {
      rendered =
        value >= 1000000
          ? Math.round(value / 1000000) + "M"
          : Math.round(value).toLocaleString("en-US");
    } else {
      rendered = Math.round(value).toLocaleString("en-US");
    }

    return rendered + suffix;
  }

  function setupCountUp() {
    var statNodes = document.querySelectorAll("[data-countup]");
    if (!statNodes.length) {
      return;
    }

    function runAnimation(element) {
      var target = parseFloat(element.getAttribute("data-countup"));
      var duration = 1500;
      var start = null;

      if (reducedMotion) {
        element.textContent = formatCount(target, element);
        return;
      }

      function tick(timestamp) {
        if (!start) {
          start = timestamp;
        }

        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = target * eased;
        element.textContent = formatCount(current, element);

        if (progress < 1) {
          window.requestAnimationFrame(tick);
        } else {
          element.textContent = formatCount(target, element);
        }
      }

      window.requestAnimationFrame(tick);
    }

    if (reducedMotion || !("IntersectionObserver" in window)) {
      statNodes.forEach(runAnimation);
      return;
    }

    var hasPlayed = false;
    var statsSection = document.querySelector(".stats-bar");
    if (!statsSection) {
      return;
    }

    var statsObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || hasPlayed) {
            return;
          }

          hasPlayed = true;
          statNodes.forEach(runAnimation);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.5,
      },
    );

    statsObserver.observe(statsSection);
  }

  function setupTestimonialsCarousel() {
    var viewport = document.getElementById("testimonialsViewport");
    var dots = Array.prototype.slice.call(
      document.querySelectorAll(".testimonials__dot"),
    );
    if (!viewport || !dots.length) {
      return;
    }

    function setActiveDot(index) {
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === index);
      });
    }

    function syncFromScroll() {
      if (window.innerWidth >= 640) {
        return;
      }

      var cardWidth = viewport.clientWidth - 32 + 18;
      var index = Math.round(viewport.scrollLeft / cardWidth);
      index = Math.max(0, Math.min(index, dots.length - 1));
      setActiveDot(index);
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        if (window.innerWidth >= 640) {
          return;
        }

        var cardWidth = viewport.clientWidth - 32 + 18;
        viewport.scrollTo({
          left: cardWidth * index,
          behavior: reducedMotion ? "auto" : "smooth",
        });
        setActiveDot(index);
      });
    });

    viewport.addEventListener("scroll", syncFromScroll, { passive: true });
    window.addEventListener("resize", syncFromScroll);
    syncFromScroll();
  }

  updateNavbarShadow();
  window.addEventListener("scroll", updateNavbarShadow, { passive: true });

  if (menuToggle) {
    menuToggle.addEventListener("click", openDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", closeDrawer);
  }

  if (drawerClose) {
    drawerClose.addEventListener("click", closeDrawer);
  }

  document.querySelectorAll(".mobile-drawer__link").forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      mobileDrawer &&
      mobileDrawer.classList.contains("is-open")
    ) {
      closeDrawer();
      return;
    }

    trapDrawerFocus(event);
  });

  setupSmoothScroll();
  setupReveals();
  setupCountUp();
  setupTestimonialsCarousel();
})();
