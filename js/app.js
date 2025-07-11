document.addEventListener("DOMContentLoaded", function () {
  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Header animation on scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Hero section animation
  gsap.from(".hero-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(".hero-subtitle", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(".search-box", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.6,
    ease: "power3.out",
  });

  gsap.from(".hero-image", {
    duration: 1,
    x: 100,
    opacity: 0,
    delay: 0.9,
    ease: "power3.out",
  });

  // Features animation
  gsap.from(".feature-card", {
    scrollTrigger: {
      trigger: ".features",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  });

  // How it works animation
  gsap.from(".step", {
    scrollTrigger: {
      trigger: ".how-it-works",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Pricing animation
  gsap.from(".pricing-card", {
    scrollTrigger: {
      trigger: ".pricing",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Testimonial slider
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial) =>
      testimonial.classList.remove("active")
    );
    testimonials[index].classList.add("active");

    // Animation for testimonial change
    gsap.from(testimonials[index], {
      duration: 0.8,
      x: 100,
      opacity: 0,
      ease: "power3.out",
    });
  }

  prevBtn.addEventListener("click", function () {
    currentTestimonial =
      (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  nextBtn.addEventListener("click", function () {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  // Auto-rotate testimonials
  setInterval(function () {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);

  // CTA animation
  gsap.from(".cta-content", {
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  // Footer animation
  gsap.from(".footer-section", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Close mobile menu if open
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");

        // Scroll to target
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: targetElement,
            offsetY: 80,
          },
          ease: "power3.out",
        });
      }
    });
  });
});
