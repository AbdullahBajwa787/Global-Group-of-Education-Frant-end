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
     DATA: UNIVERSITIES & TESTIMONIALS & FAQS
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

  const FAQS = [
    { q: "Is it difficult to obtain visas for overseas studies?", a: "If you have all the verifications done, all the documents sorted, filled in accurately every information asked and also have filled in other forms correctly like scholarship forms etc., then it is not hard to get the visa but all of this takes time in processing and this should be done months before the application date." },
    { q: "What is financial aid?", a: "Students might need financial support while studying in another state. By applying for the financial aid, one can lessen the financial overload through it." },
    { q: "What are the entry requirements to be accepted into a course?", a: "Every university has their own eligibility criteria through which they judge the application of the students. The basics include your test results, visa, qualification and grades etc." },
    { q: "When is the right time to apply to universities?", a: "Every university has about two intakes usually which are the spring ones and the fall ones but some universities might intake students more than twice. Students should just research beforehand about the universities and their intake routine so that they don't miss the chance." },
    { q: "How to study abroad?", a: "Studying abroad isn't an easy decision as it consumes a lot of time, energy, money, as well as it requires support from family and your own psychological support. It takes courage to go to a whole new place with different people and environment. Not all courses and programs are same in various institutes and for that, we have our excellent counsellors to guide you." },
    { q: "Which services do we provide?", a: "We are a team which manages and guides you towards your journey with the help of our brilliant counsellors. We stick by the students from the first step till they graduate. We assist in every way possible — financial issues, scholarships, tests, residential issues etc. We provide support through counsellors just a click away, and we counsel parents as well. Through our far-spread web, we also help students get internships or jobs according to their program and profile." },
    { q: "What are sandwich programmes?", a: "During the programme, students are allowed to work in part-time or full-time in a placement compulsory to attempt for the course. Those specific programmes are called sandwich programmes. This placement also extends the time period of the programme by a few months to one year, depending upon the course and placement months." },
    { q: "What if I don't have the minimum entry qualification?", a: "If someone doesn't have the required qualification then they can apply for the foundation course which is for one year. If someone has the work experience but not the qualification, that student can apply for the post-graduate certificate program, claim the post-graduate degree then go for further programs." },
    { q: "What is an application package?", a: "The documents or forms asked by the university is the application package. It usually consists of letter of recommendation, transcripts, certificates, and other essential information." },
    { q: "What are foundation programmes?", a: "These are one year programmes especially for the students who want to connect between their qualifications. This is also done prior to applying for an international degree programme." },
    { q: "Can a student with below average grades get admission?", a: "There is probability that you get admission in a university. Get in touch with our counsellors to guide you further in such circumstances." },
    { q: "What are the requirements to study overseas?", a: "It's just like getting admission in any university but requires processing time and certain tests, training etc. — it differs in all institutes. Basics are the tests, your major, your scores etc. You should have your previous degree before applying for a further degree. If you already have the qualification required for the particular programme, come to us and we'll guide you accordingly." },
    { q: "How much money do I need to show at the time of applying for Visa?", a: "There aren't any specific numerals to inform the students about. The students can show up with the least sum of money, maybe equivalent to the tuition fee. In case of ambiguity, you may also consult with our counsellors." },
    { q: "What questions will they ask in student visa interview?", a: "It is okay to be anxious or confused when someone talks about interview. The interview panel is, most of the time, co-operative but to be properly prepared for this and for the online video interview with the UK panel, our counsellors will be here. They will guide you thoroughly." },
    { q: "Can I work full-time or part-time while studying in UK?", a: "That mostly depends upon the course you're studying, whether it's short-term course or a long-term course. The work hours are adjusted according to your schedule. During the week-days, the student can work for less hours and then at weekends it can work for the whole day. A lot of jobs are offered on per hour and not on monthly basis." },
    { q: "How are scholarships awarded?", a: "Majorly the scholarships and other awards are based on merit and academic evaluation. However, there are some universities who award scholarship based on an essay they ask the willing students to write on." },
    { q: "What are the post study job prospects available abroad?", a: "It depends upon the circumstances and policy of the institute and country. Most of them allow the students to stay and look for the job according to their course major. Majority of the students get the job at the same place they did their internship or placement year during the degree." },
    { q: "What if my visa is rejected? Do I have other options?", a: "You can always apply for the visa again after acknowledging the cause behind the rejection and correcting it this time. As every institute has their own terms and conditions, some universities refund you with your money and some might not. Also the visa fees is not refundable. But no need to worry, as our counsellors will inform you about every circumstance." }
  ];

  const TESTIMONIALS = [
    { name: "Um-e-Laila", uni: "University of Strathclyde — MSc Advanced Chemical Engineering", text: "Hi, I am a lady, I can't trust anyone, but I recommend Global Group of Education. I received my CAS from Strathclyde University in MSc Advance Chemical Engineering and all admission-related services on my demand. Now I am going to uni for my study." },
    { name: "Babar Zaman", uni: "University of Winchester — MSc Digital Marketing", text: "I received my CAS from the University of Winchester in MSc Digital Marketing & Analytical for the Nov 2023 intake. I had a great experience with Team Global — their services were up to my requirement related to fees and other expenses. The team supported me at every step. Highly recommended by me." },
    { name: "Saqib Ali", uni: "University of Huddersfield — MSc Pharmaceutical & Analytical Science", text: "Finally, I got admitted to my desired university, the University of Huddersfield, in MSc Pharmaceutical & Analytical Science for the Sep 2022 intake. I had a wonderful experience and would highly recommend this. Well-trained and cooperative staff. Thanks Team Global." },
    { name: "Muzamil Hussain", uni: "UK Skilled Worker Visa", text: "I am Muzamil. I needed services related to a skill work visa for the UK and found Global Group of Education the best. All the work was done by the team and updated information was shared with me timely. I highly appreciate their effort and services. Thanks Team Global." },
    { name: "Muhammad Saad", uni: "University of Surrey — MSc International Tourism Management", text: "Money is nothing when you have good services, a trusted person and a reliable company. I found the solution to every problem on one platform — Global Group of Education. I got admission to the University of Surrey in International Tourism Management MSc FT 2022. Thanks Ma'am Sajida and Team Global." }
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
     RENDER: FAQ ACCORDION
  --------------------------------------------------------- */
  const faqList = $("#faqList");
  if (faqList) {
    faqList.innerHTML = FAQS.map((f, i) => `
      <div class="faq-item reveal">
        <button class="faq-item__q" aria-expanded="false">
          <span>${f.q}</span>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="faq-item__a"><p>${f.a}</p></div>
      </div>`).join("");

    faqList.addEventListener("click", e => {
      const q = e.target.closest(".faq-item__q");
      if (!q) return;
      const item = q.parentElement;
      const isOpen = item.classList.contains("open");
      faqList.querySelectorAll(".faq-item").forEach(fi => {
        fi.classList.remove("open");
        fi.querySelector(".faq-item__q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        q.setAttribute("aria-expanded", "true");
      }
    });
  }

  /* ---------------------------------------------------------
     RENDER: TESTIMONIALS
  --------------------------------------------------------- */
  const track = $("#testiTrack");
  if (track) {
    track.innerHTML = TESTIMONIALS.map(t => `
      <div class="testi-card">
        <div class="testi-card__inner">
          <div class="testi-card__quote">&ldquo;</div>
          <p class="testi-card__text">${t.text}</p>
          <div class="testi-card__foot">
            <div class="testi-card__avatar">${t.name[0]}</div>
            <div class="testi-card__meta">
              <strong>${t.name}</strong>
              <span><i class="fa-solid fa-graduation-cap"></i> ${t.uni}</span>
            </div>
            <div class="testi-card__stars">★★★★★</div>
          </div>
        </div>
      </div>`).join("");
  }

  /* ---------------------------------------------------------
     HEADER + MOBILE NAV
  --------------------------------------------------------- */
  const header = $("#header");
  const hamburger = $("#hamburger");
  const nav = $("#nav");
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

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      nav.classList.toggle("open");
      document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "";
    });
  }

  function closeAllDropdowns(except) {
    $$(".nav__item--dropdown").forEach(d => { if (d !== except) d.classList.remove("open"); });
  }

  $$(".nav__item--dropdown > .nav__link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const item = link.parentElement;
      const wasOpen = item.classList.contains("open");
      closeAllDropdowns(item);
      item.classList.toggle("open", !wasOpen);
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".nav__item--dropdown")) closeAllDropdowns(null);
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeAllDropdowns(null);
  });

  $$(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 960 && !link.parentElement.classList.contains("nav__item--dropdown")) {
        if (nav) nav.classList.remove("open");
        if (hamburger) hamburger.classList.remove("is-active");
        document.body.style.overflow = "";
      }
    });
  });

  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------------------------------------------------
     HERO VIDEO PERFORMANCE (Pause when off-screen)
  --------------------------------------------------------- */
  const heroVideo = $(".hero__video");
  if (heroVideo) {
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      const startVideo = () => {
        const p = heroVideo.play();
        if (p && p.catch) p.catch(() => {});
      };
      startVideo();

      if ("IntersectionObserver" in window) {
        new IntersectionObserver((entries) => {
          entries.forEach(e => { e.isIntersecting ? startVideo() : heroVideo.pause(); });
        }, { threshold: 0.01 }).observe(heroVideo);
      }

      document.addEventListener("visibilitychange", () => {
        document.hidden ? heroVideo.pause() : startVideo();
      });
    }
  }

  /* ---------------------------------------------------------
     TESTIMONIAL SLIDER
  --------------------------------------------------------- */
  let tIdx = 0;
  const dotsBox = $("#testiDots");

  function perView() {
    return window.innerWidth >= 1200 ? 3 : window.innerWidth >= 900 ? 2 : 1;
  }
  function pages() {
    return Math.max(1, Math.ceil(TESTIMONIALS.length / perView()));
  }
  function buildDots() {
    if (!dotsBox) return;
    dotsBox.innerHTML = "";
    for (let i = 0; i < pages(); i++) {
      const b = document.createElement("button");
      if (i === tIdx) b.classList.add("is-active");
      b.addEventListener("click", () => { tIdx = i; updateTesti(); });
      dotsBox.appendChild(b);
    }
  }
  function updateTesti() {
    const max = pages() - 1;
    if (tIdx > max) tIdx = max;
    const pv = perView();
    const shift = Math.min(tIdx * pv, Math.max(0, TESTIMONIALS.length - pv));
    if (track) track.style.transform = `translateX(-${(shift * 100) / pv}%)`;
    if (dotsBox) [...dotsBox.children].forEach((d, i) => d.classList.toggle("is-active", i === tIdx));
  }
  const tPrev = $("#testiPrev");
  if (tPrev) tPrev.addEventListener("click", () => { tIdx = (tIdx - 1 + pages()) % pages(); updateTesti(); });
  const tNext = $("#testiNext");
  if (tNext) tNext.addEventListener("click", () => { tIdx = (tIdx + 1) % pages(); updateTesti(); });
  if (dotsBox) buildDots();

  let tAuto = setInterval(() => { tIdx = (tIdx + 1) % pages(); updateTesti(); }, 5500);
  const tSlider = $("#testiSlider");
  if (tSlider) {
    tSlider.addEventListener("mouseenter", () => clearInterval(tAuto));
    tSlider.addEventListener("mouseleave", () => {
      tAuto = setInterval(() => { tIdx = (tIdx + 1) % pages(); updateTesti(); }, 5500);
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
     ENQUIRY + SUBSCRIBE FORMS
  --------------------------------------------------------- */
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
