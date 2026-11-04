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

  /* ---------------------------------------------------------
     STUDY DESTINATIONS (Data, Dropdown & Interactive Modal)
  --------------------------------------------------------- */
  const DESTINATIONS_DATA = {
    uk: {
      id: "uk",
      name: "Study In United Kingdom",
      country: "United Kingdom",
      flag: "🇬🇧",
      tag: "British Council Certified Admissions",
      overview: "The United Kingdom is a premier global destination for higher education, renowned for academic excellence, 1-year Master's programs, and world-ranking universities.",
      intakes: "January · May · September",
      workPermit: "2-Year Post-Study Work Visa (Graduate Route)",
      avgFee: "£11,000 – £16,500 / yr (Scholarships available)",
      degrees: "Undergraduate (3 yrs) · Postgraduate (1 yr) · Foundation · PhD",
      universities: "University of Chichester, University of Sunderland, University of Bolton, Falmouth University, Queen's University Belfast, University of Surrey",
      benefits: [
        "1-Year Master's degrees save both tuition fees & living expenses",
        "2-Year Graduate Route post-study work visa upon graduation",
        "Options with and without IELTS (MOI accepted)",
        "20 hours per week part-time work rights during study semesters"
      ],
      waText: "Hello Global Group of Education, I want to inquire about Study In United Kingdom admissions."
    },
    usa: {
      id: "usa",
      name: "Study In United States of America",
      country: "United States of America",
      flag: "🇺🇸",
      tag: "World's Top Ranked Universities",
      overview: "The United States offers unparalleled academic flexibility, cutting-edge research opportunities, and vibrant campus life across top-tier public and private institutions.",
      intakes: "Fall (Aug/Sep) · Spring (Jan) · Summer (May)",
      workPermit: "1 to 3 Years OPT (Optional Practical Training for STEM)",
      avgFee: "$14,000 – $28,000 / yr (Merit Scholarships)",
      degrees: "Bachelor's (4 yrs) · Master's (1.5 - 2 yrs) · Doctorate / PhD",
      universities: "Leading State & Private Universities in New York, California, Texas, Florida, and Illinois",
      benefits: [
        "Up to 36 months (3 years) STEM OPT work permit in Fortune 500 companies",
        "Extensive merit-based scholarships and campus assistantships",
        "Transferable credit system allowing double majors and interdisciplinary minors",
        "On-campus employment allowed up to 20 hours per week during term"
      ],
      waText: "Hello Global Group of Education, I want to inquire about Study In United States of America admissions."
    },
    canada: {
      id: "canada",
      name: "Study In Canada",
      country: "Canada",
      flag: "🇨🇦",
      tag: "Permanent Residency Pathways",
      overview: "Canada is recognized globally for affordable high-quality education, welcoming immigration policies, and exceptional quality of life.",
      intakes: "September (Fall) · January (Winter) · May (Spring)",
      workPermit: "Up to 3-Year Post-Graduation Work Permit (PGWP)",
      avgFee: "CAD $14,000 – $22,000 / yr",
      degrees: "Bachelor's Degrees · Post-Graduate Certificates · Master's Degrees · Diplomas",
      universities: "Designated Learning Institutions (DLIs) across Ontario, British Columbia, and Alberta",
      benefits: [
        "Up to 3-year PGWP allowing open work permit for top Canadian employers",
        "Direct pathways to Canadian Permanent Residency (PR) via Express Entry & PNP",
        "Affordable tuition rates compared to other English-speaking nations",
        "High safety index and student-friendly multicultural cities"
      ],
      waText: "Hello Global Group of Education, I want to inquire about Study In Canada admissions."
    },
    australia: {
      id: "australia",
      name: "Study In Australia",
      country: "Australia",
      flag: "🇦🇺",
      tag: "High Quality of Life & Top Wages",
      overview: "Australia boasts world-renowned Group of Eight universities, breathtaking lifestyle, and strong post-study employment frameworks.",
      intakes: "February (Semester 1) · July (Semester 2) · November",
      workPermit: "Subclass 485 Temporary Graduate Visa (up to 4-5 years)",
      avgFee: "AUD $20,000 – $32,000 / yr",
      degrees: "Bachelor's (3-4 yrs) · Master's (1.5-2 yrs) · VET / Vocational · PhD",
      universities: "Top-tier Universities in Sydney, Melbourne, Brisbane, Adelaide, and Perth",
      benefits: [
        "Extended post-study work rights in regional and metropolitan zones",
        "One of the highest minimum student wages in the world (AUD $23.23+/hr)",
        "Internationally accredited degree qualifications recognized by global employers",
        "Safe, vibrant student-friendly coastal cities with high standard of living"
      ],
      waText: "Hello Global Group of Education, I want to inquire about Study In Australia admissions."
    },
    hungary: {
      id: "hungary",
      name: "Study In Hungary",
      country: "Hungary",
      flag: "🇭🇺",
      tag: "Schengen Visa & Low European Cost",
      overview: "Located in the heart of Central Europe, Hungary offers fully accredited European Union degrees at a fraction of Western European tuition and living expenses.",
      intakes: "September (Main Intake) · February (Spring)",
      workPermit: "9-Month 'Study-to-Work' Visa & Schengen Visa Mobility",
      avgFee: "€3,000 – €6,500 / yr (Extremely Affordable)",
      degrees: "Bachelor's (3-3.5 yrs) · Master's (2 yrs) · Medicine / Dentistry (5-6 yrs)",
      universities: "University of Debrecen, University of Szeged, Corvinus University of Budapest",
      benefits: [
        "Schengen Area resident permit granting free travel across 27 EU countries",
        "Highly competitive tuition fees starting from just €3,000 per year",
        "Low monthly cost of living (€450 – €650 includes accommodation & food)",
        "European Higher Education Area (EHEA) accredited and globally accepted degrees"
      ],
      waText: "Hello Global Group of Education, I want to inquire about Study In Hungary admissions."
    },
    uae: {
      id: "uae",
      name: "Study In United Arab of Emirates",
      country: "United Arab of Emirates",
      flag: "🇦🇪",
      tag: "100% Tax-Free Earnings in Dubai",
      overview: "Dubai is the world's fastest growing education and business hub, hosting prestigious UK, Australian, and US branch campuses with zero tax on earnings.",
      intakes: "September · January · April",
      workPermit: "Green Visa & Golden Visa Options for Talented Graduates",
      avgFee: "AED 35,000 – 65,000 / yr",
      degrees: "Foundation · Undergraduate Degrees · Postgraduate & Executive MBA",
      universities: "Middlesex University Dubai, Heriot-Watt University Dubai, University of Wollongong in Dubai",
      benefits: [
        "Earn a British, Australian, or American degree right in Dubai",
        "100% tax-free income on all part-time and post-graduation employment",
        "Quick and straightforward student visa processing (usually 2–3 weeks)",
        "Seamless option to transfer to the UK or Australian home campus anytime"
      ],
      waText: "Hello Global Group of Education, I want to inquire about Study In United Arab of Emirates admissions."
    }
  };

  const destModal = $("#destModal");
  const destModalClose = $("#destModalClose");
  const destModalBackdrop = $("#destModalBackdrop");
  const destModalApplyBtn = $("#destModalApplyBtn");
  const destModalWaBtn = $("#destModalWaBtn");
  let activeDestKey = null;

  function openDestModal(destKey) {
    const data = DESTINATIONS_DATA[destKey];
    if (!data || !destModal) return;
    activeDestKey = destKey;

    const flagEl = $("#destModalFlag");
    const countryEl = $("#destModalCountry");
    const titleEl = $("#destModalTitle");
    const tagEl = $("#destModalTag");
    const overviewEl = $("#destModalOverview");
    const intakesEl = $("#destModalIntakes");
    const workEl = $("#destModalWork");
    const degreesEl = $("#destModalDegrees");
    const feeEl = $("#destModalFee");
    const unisEl = $("#destModalUnis");

    if (flagEl) flagEl.textContent = data.flag;
    if (countryEl) countryEl.textContent = data.country;
    if (titleEl) titleEl.textContent = data.name;
    if (tagEl) tagEl.textContent = data.tag;
    if (overviewEl) overviewEl.textContent = data.overview;
    if (intakesEl) intakesEl.textContent = data.intakes;
    if (workEl) workEl.textContent = data.workPermit;
    if (degreesEl) degreesEl.textContent = data.degrees;
    if (feeEl) feeEl.textContent = data.avgFee;
    if (unisEl) unisEl.textContent = data.universities;

    const benefitsList = $("#destModalBenefits");
    if (benefitsList) {
      benefitsList.innerHTML = data.benefits
        .map(b => `<li><i class="fa-solid fa-circle-check"></i> <span>${b}</span></li>`)
        .join("");
    }

    if (destModalWaBtn) {
      destModalWaBtn.href = `https://wa.me/447586589659?text=${encodeURIComponent(data.waText)}`;
    }

    // Reset scroll to top
    const modalBody = destModal.querySelector(".dest-modal__body");
    if (modalBody) modalBody.scrollTop = 0;

    // Instant open without frame latency or layout reflow
    document.body.classList.add("modal-open");
    destModal.classList.add("is-open");
    destModal.setAttribute("aria-hidden", "false");
  }

  function closeDestModal() {
    if (!destModal) return;
    destModal.classList.remove("is-open");
    destModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    activeDestKey = null;
  }

  if (destModalClose) destModalClose.addEventListener("click", closeDestModal);
  if (destModalBackdrop) destModalBackdrop.addEventListener("click", closeDestModal);

  if (destModalApplyBtn) {
    destModalApplyBtn.addEventListener("click", () => {
      const data = activeDestKey ? DESTINATIONS_DATA[activeDestKey] : null;
      closeDestModal();

      // Auto-select country in student registration form
      const regCountry = $("#regCountry");
      if (regCountry && data) {
        for (let i = 0; i < regCountry.options.length; i++) {
          if (regCountry.options[i].value === data.country || regCountry.options[i].text.includes(data.country)) {
            regCountry.selectedIndex = i;
            regCountry.dispatchEvent(new Event("change", { bubbles: true }));
            const field = regCountry.closest(".reg-field");
            if (field) field.classList.add("is-filled");
            break;
          }
        }
      }

      // Smooth scroll to Student Registration section
      const enquirySection = $("#enquiry");
      if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          const firstInput = $("#regFirstName");
          if (firstInput) firstInput.focus();
        }, 600);
      }
    });
  }

  // Bind all elements with [data-open-dest] (both cards and dropdown items)
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-dest]");
    if (trigger) {
      e.preventDefault();
      const destKey = trigger.dataset.openDest;
      if (destKey) {
        // Close dropdown immediately
        const dropParent = trigger.closest(".nav__item--dropdown");
        if (dropParent) dropParent.classList.remove("open");
        if (destDropdownTrigger) destDropdownTrigger.setAttribute("aria-expanded", "false");

        // If mobile drawer was open, close cleanly so it doesn't fight the modal for GPU
        if (nav && nav.classList.contains("open")) {
          nav.classList.remove("open");
          if (hamburger) {
            hamburger.classList.remove("is-active");
            hamburger.setAttribute("aria-expanded", "false");
          }
          if (navOverlay) navOverlay.classList.remove("is-active");
        }

        openDestModal(destKey);
      }
    }
  });

  // Dropdown Toggles (Study Destinations & Courses)
  $$(".nav__dropdown-trigger").forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parent = trigger.closest(".nav__item--dropdown");
      if (parent) {
        const wasOpen = parent.classList.contains("open");
        // Close any other open dropdowns first
        $$(".nav__item--dropdown.open").forEach(other => {
          if (other !== parent) {
            other.classList.remove("open");
            const btn = other.querySelector(".nav__dropdown-trigger");
            if (btn) btn.setAttribute("aria-expanded", "false");
          }
        });
        parent.classList.toggle("open", !wasOpen);
        trigger.setAttribute("aria-expanded", !wasOpen ? "true" : "false");
      }
    });
  });

  // Course selection click handler
  document.addEventListener("click", (e) => {
    const courseTrigger = e.target.closest("[data-select-course]");
    if (courseTrigger) {
      e.preventDefault();
      const courseName = courseTrigger.dataset.selectCourse;
      closeMobileNav();
      $$(".nav__item--dropdown.open").forEach(drop => {
        drop.classList.remove("open");
        const btn = drop.querySelector(".nav__dropdown-trigger");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      const regSection = $("#enquiry");
      if (regSection) {
        regSection.scrollIntoView({ behavior: "smooth" });
      }

      const regCourse = $("#regCourse");
      if (regCourse && courseName) {
        for (let i = 0; i < regCourse.options.length; i++) {
          if (regCourse.options[i].value === courseName || regCourse.options[i].text.includes(courseName)) {
            regCourse.selectedIndex = i;
            regCourse.dispatchEvent(new Event("change", { bubbles: true }));
            const field = regCourse.closest(".reg-field");
            if (field) field.classList.add("is-filled");
            break;
          }
        }
      }
    }
  });

  // Close when clicking ANY link inside nav (except dropdown triggers & dropdown items)
  $$(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (link.closest(".dropdown")) return; // dropdown links handled separately
      if (window.innerWidth <= 960) {
        closeMobileNav();
      }
    });
  });

  // Global click to close desktop dropdowns
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav__item--dropdown")) {
      $$(".nav__item--dropdown.open").forEach(drop => {
        drop.classList.remove("open");
        const btn = drop.querySelector(".nav__dropdown-trigger");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    }
  });

  // Escape key closes mobile nav, dropdowns, and modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDestModal();
      closeMobileNav();
      $$(".nav__item--dropdown.open").forEach(drop => {
        drop.classList.remove("open");
        const btn = drop.querySelector(".nav__dropdown-trigger");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    }
  });

  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Reliable autoplay for Services Background Video
  const servicesVideo = $(".services__video");
  if (servicesVideo) {
    const playServices = () => {
      if (servicesVideo.paused) {
        servicesVideo.play().catch(() => {});
      }
    };
    playServices();
    window.addEventListener("scroll", playServices, { once: true, passive: true });
    document.addEventListener("touchstart", playServices, { once: true, passive: true });
  }

  // Reliable autoplay for Student Registration Background Video
  const regVideo = $(".student-reg__video");
  if (regVideo) {
    const playReg = () => {
      if (regVideo.paused) {
        regVideo.play().catch(() => {});
      }
    };
    playReg();
    window.addEventListener("scroll", playReg, { once: true, passive: true });
    document.addEventListener("touchstart", playReg, { once: true, passive: true });
  }

  /* ---------------------------------------------------------
     HERO SEAMLESS 60FPS CINEMATIC SCENE CONTROLLER
     - Single continuous 60fps video with crossfaded scenes
     - Zero stutter, zero re-buffering, zero decoder reloading
  --------------------------------------------------------- */
  const heroVideo = $("#heroVideo");
  const heroDots = $$(".hero__dot");
  const heroPrevBtn = $("#heroPrevBtn");
  const heroNextBtn = $("#heroNextBtn");

  if (heroVideo) {
    // Exact scene timestamps (Admissions: 0.0s, Travel: 5.2s, Arrival: 10.4s)
    const sceneTimes = [0, 5.2, 10.4];
    let currentScene = 0;

    function setScene(idx) {
      currentScene = ((idx % sceneTimes.length) + sceneTimes.length) % sceneTimes.length;
      try {
        heroVideo.currentTime = sceneTimes[currentScene];
        if (heroVideo.paused && !document.hidden) {
          heroVideo.play().catch(() => {});
        }
      } catch (_) {}
      updateDots();
    }

    function updateDots() {
      heroDots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === currentScene);
      });
    }

    if (heroNextBtn) {
      heroNextBtn.addEventListener("click", () => setScene(currentScene + 1));
    }
    if (heroPrevBtn) {
      heroPrevBtn.addEventListener("click", () => setScene(currentScene - 1));
    }

    heroDots.forEach((dot, idx) => {
      dot.addEventListener("click", () => setScene(idx));
    });

    // Automatically sync pill highlight with video playback timestamp
    heroVideo.addEventListener("timeupdate", () => {
      const t = heroVideo.currentTime;
      let activeIdx = 0;
      if (t >= 10.4) activeIdx = 2;
      else if (t >= 5.2) activeIdx = 1;
      else activeIdx = 0;

      if (activeIdx !== currentScene) {
        currentScene = activeIdx;
        updateDots();
      }
    });

    // Make sure it starts playing immediately
    if (!document.hidden) {
      heroVideo.play().catch(() => {});
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (!heroVideo.paused) heroVideo.pause();
      } else {
        heroVideo.play().catch(() => {});
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
