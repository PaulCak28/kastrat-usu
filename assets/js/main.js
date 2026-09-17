/**
 * Departemen Kajian & Aksi Strategis - BEM FEB UI Clone
 * Main Interactive JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- Header Scroll Effect ---
  const header = document.querySelector(".site-header");
  const backToTopBtn = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  // --- Back to Top ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --- Mobile Navigation Menu ---
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });

    // Close mobile menu on link click
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // --- Flip Cards (Click / Tap Support for Mobile & Desktop) ---
  const flipCards = document.querySelectorAll(".flip-card");
  flipCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // If clicking on button inside card back, don't prevent link navigation
      if (e.target.closest(".flip-card-btn")) return;
      card.classList.toggle("is-flipped");
    });
  });

  // --- Team Member Carousel (Slider) ---
  const slider = document.querySelector(".team-slider");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (slider && prevBtn && nextBtn) {
    const getCardWidth = () => {
      const firstCard = slider.querySelector(".team-card");
      return firstCard ? firstCard.offsetWidth + 24 : 300;
    };

    nextBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: getCardWidth(),
        behavior: "smooth",
      });
    });

    prevBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: -getCardWidth(),
        behavior: "smooth",
      });
    });

    // Mouse drag scrolling
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });
  }
});
