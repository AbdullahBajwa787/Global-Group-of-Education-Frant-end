/* ============================================================
   GLOBAL GROUP OF EDUCATION — Ultra-Smooth Interactive Layer
   ============================================================ */
(function () {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------------------------------------------------------
     SCROLL REVEAL + COUNTERS
  --------------------------------------------------------- */
  function observeReveals() {
    $$(".reveal").forEach(el => el.classList.add("visible"));
  }
  observeReveals();

  /* ---------------------------------------------------------
     DATA: UNIVERSITIES & TESTIMONIALS
  --------------------------------------------------------- */
  const UNIVERSITIES = [
    { name: "University of Chichester", alt: "University of Chichester", loc: "United Kingdom", logo: "assets/universities/logo-1.png" },
    { name: "University of Sunderland", alt: "University of Sunderland", loc: "United Kingdom", logo: "assets/universities/logo-2.png" },
    { name: "University of Bolton", alt: "University of Bolton", loc: "United Kingdom", logo: "assets/universities/logo-3.png" },
    { name: "Falmouth University", alt: "Falmouth University", loc: "United Kingdom", logo: "assets/universities/logo-4.png" },
    { name: "Queen's University Belfast", alt: "Queen's University Belfast", loc: "United Kingdom", logo: "assets/universities/logo-5.png" },
    { name: "University of Surrey", alt: "University of Surrey", loc: "United Kingdom", logo: "assets/universities/logo-6.png" },
    { name: "University of Huddersfield", alt: "University of Huddersfield", loc: "United Kingdom", logo: "assets/universities/logo-7.png" },
    { name: "University of Strathclyde", alt: "University of Strathclyde", loc: "United Kingdom", logo: "assets/universities/logo-8.png" }
  ];


  const TESTIMONIALS = [
    {
      name: "Um-e-Laila",
      uni: "University of Strathclyde — MSc Advanced Chemical Engineering",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
      text: "Hi, I am a lady, I can't trust anyone, but I recommend Global Group of Education. I received my CAS from Strathclyde University in MSc Advance Chemical Engineering and all admission-related services on my demand. Now I am going to uni for my study."
    },
    {
      name: "Babar Zaman",
      uni: "University of Winchester — MSc Digital Marketing",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      text: "I received my CAS from the University of Winchester in MSc Digital Marketing & Analytical for the Nov 2023 intake. I had a great experience with Team Global — their services were up to my requirement related to fees and other expenses. The team supported me at every step. Highly recommended by me."
    },
    {
      name: "Saqib Ali",
      uni: "University of Huddersfield — MSc Pharmaceutical & Analytical Science",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
      text: "Finally, I got admitted to my desired university, the University of Huddersfield, in MSc Pharmaceutical & Analytical Science for the Sep 2022 intake. I had a wonderful experience and would highly recommend this. Well-trained and cooperative staff. Thanks Team Global."
    },
    {
      name: "Muzamil Hussain",
      uni: "UK Skilled Worker Visa",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
      text: "I am Muzamil. I needed services related to a skill work visa for the UK and found Global Group of Education the best. All the work was done by the team and updated information was shared with me timely. I highly appreciate their effort and services. Thanks Team Global."
    },
    {
      name: "Muhammad Saad",
      uni: "University of Surrey — MSc International Tourism Management",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
      text: "Money is nothing when you have good services, a trusted person and a reliable company. I found the solution to every problem on one platform — Global Group of Education. I got admission to the University of Surrey in International Tourism Management MSc FT 2022. Thanks Ma'am Sajida and Team Global."
    },
    {
      name: "Ayesha Malik",
      uni: "University of Sunderland — MSc Nursing & Healthcare",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
      text: "Securing my visa and admission to University of Sunderland was seamless with GGE. Their visa file preparation is top notch. Zero hassle and total transparency from day one!"
    },
    {
      name: "Hamza Tariq",
      uni: "Queen's University Belfast — MSc Data Science",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80",
      text: "Outstanding guidance on scholarships and CAS issuance. The consultants are accessible 24/7 and guided me on every single interview question. Proud Queen's University Belfast student today!"
    }
  ];

  /* ---------------------------------------------------------
     RENDER: UNIVERSITIES (continuous smooth marquee)
  --------------------------------------------------------- */
  const uniGrid = $("#uniGrid");
  function uniInitials(name) {
    return name.split(/\s+/)
      .filter(w => w.length > 2 && w.toLowerCase() !== "the" && !w.startsWith("("))
      .map(w => w[0]).slice(0, 3).join("").toUpperCase() || name.slice(0, 2).toUpperCase();
  }
  function uniCardHTML(u) {
    const initials = uniInitials(u.name || "University Partner");
    const badge = u.logo
      ? `<img src="${u.logo}" alt="${u.alt || u.name || "Partner University"}" loading="lazy" decoding="async" onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('span'),{className:'fallback',textContent:'${initials}'}))">`
      : `<span class="fallback">${initials}</span>`;
    return `
      <a class="uni-card uni-card--logo" href="#contact" aria-label="${u.name || "Partner University"}">
        <div class="uni-card__logo">${badge}</div>
        ${u.name ? `<div class="uni-card__name">${u.name}</div>` : ""}
      </a>`;
  }
  if (uniGrid) {
    const set = UNIVERSITIES.map(uniCardHTML).join("");
    uniGrid.innerHTML = set + set;
  }

  /* ---------------------------------------------------------
     RENDER: TESTIMONIALS (Continuous Smooth Horizontal Marquee)
  --------------------------------------------------------- */
  const track = $("#testiTrack");
  if (track) {
    const cardHTML = t => `
      <div class="testi-card">
        <div class="testi-card__inner">
          <div class="testi-card__quote">&ldquo;</div>
          <p class="testi-card__text">${t.text}</p>
          <div class="testi-card__foot">
            <div class="testi-card__avatar">
              <img src="${t.img}" alt="${t.name}" loading="lazy" decoding="async" onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('div'),{className:'testi-card__avatar',textContent:'${t.name[0]}'}))">
            </div>
            <div class="testi-card__meta">
              <strong>${t.name}</strong>
              <span><i class="fa-solid fa-graduation-cap"></i> ${t.uni}</span>
            </div>
            <div class="testi-card__stars">★★★★★</div>
          </div>
        </div>
      </div>`;
    const set = TESTIMONIALS.map(cardHTML).join("");
    track.innerHTML = set + set;
  }

  /* ---------------------------------------------------------
     HEADER + MOBILE NAV
  --------------------------------------------------------- */
  const header = $("#header");
  const hamburger = $("#hamburger");
  const nav = $("#nav");
  const navCloseBtn = $("#navCloseBtn");
  const navOverlay = $("#navOverlay");
  const destDropdownTrigger = $("#destDropdownTrigger");
  const toTopBtn = $("#toTop");
  const sections = $$("section[id]");
  const navLinks = $$(".nav__link");
  let sectionTops = [];

  function measureSections() {
    sectionTops = sections.map(s => ({ el: s, id: s.id, top: s.offsetTop }));
  }
  measureSections();

  /* ---------------------------------------------------------
     ULTRA-SMOOTH SCROLL HANDLER (DEFER-WORK-UNTIL-SCROLL-ENDS)
  --------------------------------------------------------- */
  let scrollRaf = 0;
  let lastScrolled = false;
  let lastToTop = false;

  function onScroll() {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(() => {
      scrollRaf = 0;
      const y = window.scrollY;

      // Only touch DOM if state actually changed
      const isScrolled = y > 40;
      if (isScrolled !== lastScrolled && header) {
        lastScrolled = isScrolled;
        header.classList.toggle("is-scrolled", isScrolled);
      }

      const showTop = y > 500;
      if (showTop !== lastToTop && toTopBtn) {
        lastToTop = showTop;
        toTopBtn.classList.toggle("show", showTop);
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  // Defer active nav link calculation until scroll completes (no frame drops)
  function updateActiveNav() {
    const y = window.scrollY;
    let current = "home";
    for (let i = 0; i < sectionTops.length; i++) {
      if (y >= sectionTops[i].top - 160) current = sectionTops[i].id;
    }
    navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
  }

  if ("onscrollend" in window) {
    window.addEventListener("scrollend", updateActiveNav, { passive: true });
  } else {
    let scrollEndTimer;
    window.addEventListener("scroll", () => {
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(updateActiveNav, 100);
    }, { passive: true });
  }

  /* ---------------------------------------------------------
     MOBILE DRAWER CONTROLLER (Instant 60/120/240Hz Response)
  --------------------------------------------------------- */
  function openMobileNav() {
    if (!nav) return;
    nav.classList.add("open");
    if (hamburger) {
      hamburger.classList.add("is-active");
      hamburger.setAttribute("aria-expanded", "true");
    }
    if (navOverlay) navOverlay.classList.add("is-active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    if (!nav) return;
    nav.classList.remove("open");
    if (hamburger) {
      hamburger.classList.remove("is-active");
      hamburger.setAttribute("aria-expanded", "false");
    }
    if (navOverlay) navOverlay.classList.remove("is-active");
    document.body.style.overflow = "";
  }

  if (hamburger) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      nav && nav.classList.contains("open") ? closeMobileNav() : openMobileNav();
    });
  }

  if (navCloseBtn) {
    navCloseBtn.addEventListener("click", closeMobileNav);
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeMobileNav);
  }

  // Study Destinations Dropdown Toggle
  if (destDropdownTrigger) {
    destDropdownTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = destDropdownTrigger.closest(".nav__item--dropdown");
      if (parent) {
        const wasOpen = parent.classList.contains("open");
        parent.classList.toggle("open", !wasOpen);
        destDropdownTrigger.setAttribute("aria-expanded", !wasOpen ? "true" : "false");
      }
    });
  }

  // Close when clicking ANY link inside nav (except dropdown trigger)
  $$(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (link === destDropdownTrigger) return;
      if (window.innerWidth <= 960) {
        closeMobileNav();
      }
    });
  });

  // Global click to close desktop dropdown
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav__item--dropdown")) {
      const dropParent = $(".nav__item--dropdown");
      if (dropParent) dropParent.classList.remove("open");
    }
  });

  // Escape key closes mobile nav & dropdowns
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileNav();
      const dropParent = $(".nav__item--dropdown");
      if (dropParent) dropParent.classList.remove("open");
    }
  });

  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------------------------------------------------
     HERO VIDEO SLIDER (Multi-Video Background)
  --------------------------------------------------------- */
  const heroSlider = $("#heroSlider");
  if (heroSlider) {
    const slides = $$(".hero__slide", heroSlider);
    const dots = $$(".hero__dot");
    const prevBtn = $("#heroPrevBtn");
    const nextBtn = $("#heroNextBtn");
    let currentIndex = 0;
    let autoTimer = null;
    const SLIDE_DURATION = 7500; // 7.5 seconds per video slide

    function playActiveVideo() {
      const activeSlide = slides[currentIndex];
      if (!activeSlide) return;
      const vid = activeSlide.querySelector("video");
      if (vid && !document.hidden) {
        const p = vid.play();
        if (p && p.catch) p.catch(() => {});
      }
    }

    function pauseAllVideos() {
      slides.forEach(slide => {
        const v = slide.querySelector("video");
        if (v && !v.paused) v.pause();
      });
    }

    function preloadNextSlide() {
      const nextIdx = (currentIndex + 1) % slides.length;
      const nextVid = slides[nextIdx]?.querySelector("video");
      if (nextVid && nextVid.preload === "none") {
        nextVid.preload = "auto";
        nextVid.load();
      }
    }

    function goToSlide(targetIdx) {
      if (slides.length <= 1) return;
      const cleanIdx = ((targetIdx % slides.length) + slides.length) % slides.length;
      if (cleanIdx === currentIndex && slides[currentIndex].classList.contains("is-active")) {
        return;
      }

      const prevSlide = slides[currentIndex];
      const nextSlide = slides[cleanIdx];

      // Pause old video
      const oldVid = prevSlide.querySelector("video");
      if (oldVid) oldVid.pause();

      prevSlide.classList.remove("is-active");
      nextSlide.classList.add("is-active");

      // Play new video smoothly
      const newVid = nextSlide.querySelector("video");
      if (newVid) {
        if (newVid.preload === "none") {
          newVid.preload = "auto";
          newVid.load();
        }
        if (newVid.readyState >= 2) {
          try { newVid.currentTime = 0; } catch(_) {}
        }
        if (!document.hidden) {
          const p = newVid.play();
          if (p && p.catch) p.catch(() => {});
        }
      }

      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === cleanIdx);
      });

      currentIndex = cleanIdx;

      // Warm up subsequent slide video ahead of time
      setTimeout(preloadNextSlide, 3500);
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startTimer() {
      stopTimer();
      autoTimer = setInterval(nextSlide, SLIDE_DURATION);
    }

    function stopTimer() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    // Controls
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        nextSlide();
        startTimer();
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        prevSlide();
        startTimer();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        goToSlide(idx);
        startTimer();
      });
    });

    // Start first video
    playActiveVideo();
    startTimer();

    // Pause when tab is hidden, resume when tab is visible
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        pauseAllVideos();
        stopTimer();
      } else {
        playActiveVideo();
        startTimer();
      }
    });
  }



  /* ---------------------------------------------------------
     COUNTER ANIMATION
  --------------------------------------------------------- */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const dur = 1800;
    const start = performance.now();

    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = (decimals ? val.toFixed(decimals) : Math.floor(val).toLocaleString()) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = (decimals ? target.toFixed(decimals) : target.toLocaleString()) + suffix;
    }
    requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          animateCount(en.target);
          counterObs.unobserve(en.target);
        }
      });
    }, { threshold: 0.3 });
    $$(".stat__num").forEach(el => counterObs.observe(el));
  } else {
    $$(".stat__num").forEach(animateCount);
  }

  /* ---------------------------------------------------------
     STUDENT REGISTRATION + SUBSCRIBE FORMS
  --------------------------------------------------------- */
  const studentRegForm = $("#studentRegForm");
  if (studentRegForm) {
    const updateFieldState = (el) => {
      const field = el.closest(".reg-field");
      if (!field) return;
      const val = el.value ? el.value.trim() : "";
      if (val !== "") {
        field.classList.add("is-filled");
        field.classList.remove("has-error");
      } else {
        field.classList.remove("is-filled");
      }
    };

    // Live listening on all inputs and selects
    const controls = studentRegForm.querySelectorAll("input, select");
    controls.forEach(el => {
      el.addEventListener("input", () => updateFieldState(el));
      el.addEventListener("change", () => updateFieldState(el));
      el.addEventListener("keyup", () => updateFieldState(el));
      el.addEventListener("blur", () => updateFieldState(el));

      // Initial check for prefilled / restored values
      if (el.value && el.value.trim() !== "") {
        updateFieldState(el);
      }
    });

    studentRegForm.addEventListener("submit", e => {
      e.preventDefault();
      let hasError = false;
      let firstInvalid = null;

      studentRegForm.querySelectorAll(".reg-field[data-required='true']").forEach(field => {
        const control = field.querySelector("input, select");
        const val = control && control.value ? control.value.trim() : "";
        if (!control || val === "") {
          field.classList.add("has-error");
          field.classList.remove("is-filled");
          hasError = true;
          if (!firstInvalid) firstInvalid = control;
        } else {
          field.classList.remove("has-error");
          field.classList.add("is-filled");
        }
      });

      if (hasError) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const note = $("#regNote");
      if (note) {
        note.textContent = "✓ Registration submitted successfully! Our counsellor will contact you shortly.";
        note.classList.add("show");
        setTimeout(() => note.classList.remove("show"), 6000);
      }
      studentRegForm.reset();
      studentRegForm.querySelectorAll(".reg-field").forEach(f => {
        f.classList.remove("has-error");
        f.classList.remove("is-filled");
      });
    });
  }

  const enquiryForm = $("#enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", e => {
      e.preventDefault();
      const note = $("#enquiryNote");
      if (note) {
        note.textContent = "✓ Thank you! Your enquiry has been received. Our team will contact you shortly.";
        note.classList.add("show");
        setTimeout(() => note.classList.remove("show"), 6000);
      }
      e.target.reset();
    });
  }

  const subscribeForm = $("#subscribeForm");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", e => {
      e.preventDefault();
      const note = $("#subscribeNote");
      if (note) {
        note.textContent = "✓ Subscribed successfully!";
        note.classList.add("show");
        setTimeout(() => note.classList.remove("show"), 5000);
      }
      e.target.reset();
    });
  }

  const contactForm = $("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const note = $("#contactNote");
      if (note) {
        note.textContent = "✓ Message sent! Our team will get back to you shortly.";
        note.classList.add("show");
        setTimeout(() => note.classList.remove("show"), 6000);
      }
      e.target.reset();
    });
  }

  window.addEventListener("resize", () => {
    measureSections();
    if (dotsBox) { buildDots(); updateTesti(); }
  });

})();
