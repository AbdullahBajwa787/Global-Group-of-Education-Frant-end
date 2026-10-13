/* ============================================================
   GLOBAL GROUP OF EDUCATION — Interactive Layer
   ============================================================ */
(function () {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------------------------------------------------------
     SCROLL REVEAL + COUNTERS
     (created FIRST — content renderers depend on these)
  --------------------------------------------------------- */
  const supportsIO = "IntersectionObserver" in window;

  const revealObserver = supportsIO
    ? new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add("visible");
            revealObserver.unobserve(en.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" })
    : null;

  const counterObserver = supportsIO
    ? new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            animateCount(en.target);
            counterObserver.unobserve(en.target);
          }
        });
      }, { threshold: 0.5 })
    : null;

  function observeReveals() {
    const els = $$(".reveal:not(.visible)");
    if (!revealObserver) {
      els.forEach(el => el.classList.add("visible"));
      return;
    }
    els.forEach(el => revealObserver.observe(el));
  }

  /* ---------------------------------------------------------
     DATA
  --------------------------------------------------------- */
  const LEGACY_UNIVERSITIES = [
    { name: "University of Chichester", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/1.png" },
    { name: "University of Sunderland", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(33).jpg" },
    { name: "University of Bolton", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/2.png" },
    { name: "Falmouth University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(6).jpg" },
    { name: "Queen's University Belfast", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(1)2.jpg" },
    { name: "University of Surrey", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/5.png" },
    { name: "South Bank University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/linc.png" },
    { name: "University of Portsmouth", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/part.png" },
    { name: "University of Roehampton", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Roehampton-Logo.png" },
    { name: "The University of Winchester", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(30).jpg" },
    { name: "East London University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/1292-ECC1-4028-A7A1-4BB4.png" },
    { name: "Greenwich University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/green.png" },
    { name: "De Montfort University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(32).jpg" },
    { name: "Lucton School", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(13).jpg" },
    { name: "Toronto School of Management", loc: "Canada", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(20).jpg" },
    { name: "Brockenhurst College", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(9).jpg" },
    { name: "UKCBC Dubai", loc: "UAE", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(21).jpg" },
    { name: "Northwood University", loc: "USA", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(37).jpg" },
    { name: "Cambridge Seminar College", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(28).jpg" },
    { name: "York St John University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design2.jpg" },
    { name: "St. George University", loc: "USA", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(2)1.jpg" },
    { name: "EIE Institute of Education", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(27).jpg" },
    { name: "Antalya Academy of Tourism", loc: "Turkey", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(29).jpg" },
    { name: "CATS College", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(25).jpg" },
    { name: "BIMM Institute", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(7).jpg" },
    { name: "Heriot Watt University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(3)1.jpg" },
    { name: "LOC Business School", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(14).jpg" },
    { name: "Middlesex University Dubai", loc: "UAE", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(15).jpg" },
    { name: "Kingswood School", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(12).jpg" },
    { name: "NATMATSCI College", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(17).jpg" },
    { name: "Focus College", loc: "Canada", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(10).jpg" },
    { name: "Khalifa University", loc: "UAE", logo: "https://www.globalgroupofeducation.com/uploads/U.jpg" },
    { name: "New College Group", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(16).jpg" },
    { name: "Brighton College", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(8)2.jpg" },
    { name: "Greene's Tutorial College", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(4).jpg" },
    { name: "Mill Hill School", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(34).jpg" },
    { name: "University of Nicosia", loc: "Cyprus", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(36).jpg" },
    { name: "Budapest Metropolitan University", loc: "Hungary", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(5).jpg" },
    { name: "Faith Leeds University", loc: "USA", logo: "https://www.globalgroupofeducation.com/uploads/Untitled_design_(38).jpg" },
    { name: "University of Cambridge", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Cambridge.png" },
    { name: "London Business School", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/London-Business-School.png" },
    { name: "University of Oxford", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Oxford.png" },
    { name: "University of St Andrews", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-St-Andrews.png" },
    { name: "Oxford Saïd Business School", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Oxford-Saad-Business-School.png" },
    { name: "Warwick Business School", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Warwick-Business-School.png" },
    { name: "London School of Economics", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/London-School-of-Economics.png" },
    { name: "Imperial College London", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Imperial-College-London.png" },
    { name: "Cambridge Judge Business School", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Cambridge-Judge-Business-School.png" },
    { name: "Durham University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Durham-University.png" },
    { name: "University of Glasgow", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Glasgow.png" },
    { name: "University of Edinburgh", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Edinburgh.png" },
    { name: "University of Leeds", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Leeds.png" },
    { name: "University of Southampton", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Southampton.png" },
    { name: "University of Manchester", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Manchester.png" },
    { name: "University of Birmingham", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Birmingham.png" },
    { name: "University of York", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-York.png" },
    { name: "University of Sheffield", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Sheffield.png" },
    { name: "University of Nottingham", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Nottingham.png" },
    { name: "University of Liverpool", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Liverpool.png" },
    { name: "Kings College London", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/k-college.png" },
    { name: "Newcastle University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Newcastle-University.png" },
    { name: "Cardiff University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Cardiff-University.png" },
    { name: "Coventry University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Coventry-University.png" },
    { name: "University of Kent", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Kent.png" },
    { name: "SOAS University of London", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/SOAS-University-of-London.png" },
    { name: "Nottingham Trent University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Nottingham-Trent-University.png" },
    { name: "Oxford Brookes University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Oxford-Brookes-University.png" },
    { name: "Northumbria University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/Northumbria-University.png" },
    { name: "University of Plymouth", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Plymouth.png" },
    { name: "University of Hertfordshire", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Hertfordshire.png" },
    { name: "University of Westminster", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Westminster.png" },
    { name: "University of Law", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Law.png" },
    { name: "BPP University", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/BPP-University.png" },
    { name: "Regents University London", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/regents.png" },
    { name: "University of Reading", loc: "UK", logo: "https://www.globalgroupofeducation.com/uploads/University-of-Reading.png" }
  ];

  // Normalise a university name so logos from the original partner list can be reused
  const UNI_KEY = s => s.toLowerCase().replace(/^the\s+/, "").replace(/[^a-z0-9]+/g, " ").trim();
  const LOGO_BY_KEY = {};
  LEGACY_UNIVERSITIES.forEach(u => { if (u.logo) LOGO_BY_KEY[UNI_KEY(u.name)] = u.logo; });

  // Official crest/logo images resolved from Wikipedia (free + fair-use infobox images).
  // Held separately so the curated legacy partner logos keep priority.
  const WIKI_IMG_BY_KEY = {
    "abu dhabi university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Abu_Dhabi_University.png/500px-Abu_Dhabi_University.png",
    "acadia university": "https://upload.wikimedia.org/wikipedia/en/0/06/Acadia_University_Coat_of_Arms_2017.jpg",
    "ajman university": "",
    "al ain university": "",
    "american university in dubai aud": "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a1/AUD_campus.jpg/500px-AUD_campus.jpg",
    "american university of sharjah aus": "https://upload.wikimedia.org/wikipedia/en/c/c8/American_University_of_Sharjah_%28emblem%29.png",
    "american university washington d c": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/12-07-13-washington-by-RalfR-08.jpg/500px-12-07-13-washington-by-RalfR-08.jpg",
    "amity university dubai": "https://upload.wikimedia.org/wikipedia/en/f/ff/Amity_University_logo.png",
    "andr ssy university budapest": "https://thumb.wikimedia.org/wikipedia/en/thumb/4/48/Andrassy_University_Budapest_Logo.JPG/500px-Andrassy_University_Budapest_Logo.JPG",
    "anglia ruskin university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Shield_of_Anglia_Ruskin_University.svg/500px-Shield_of_Anglia_Ruskin_University.svg.png",
    "arizona state university": "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a1/Arizona_State_University_seal.svg/500px-Arizona_State_University_seal.svg.png",
    "aston university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Shield_of_Aston_University.svg/500px-Shield_of_Aston_University.svg.png",
    "auburn university": "https://thumb.wikimedia.org/wikipedia/en/thumb/7/7f/Auburn_University_seal.svg/500px-Auburn_University_seal.svg.png",
    "australian catholic university acu": "https://upload.wikimedia.org/wikipedia/en/5/5e/Australian_Catholic_University_Coat_of_Arms.png",
    "australian national university anu": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/5f/Australian_National_University_coat_of_arms.svg/500px-Australian_National_University_coat_of_arms.svg.png",
    "baylor university": "https://thumb.wikimedia.org/wikipedia/en/thumb/f/f0/Baylor_University_seal.svg/500px-Baylor_University_seal.svg.png",
    "birkbeck university of london": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Birkbeck_College_London_Achievement.png/500px-Birkbeck_College_London_Achievement.png",
    "birmingham city university": "https://upload.wikimedia.org/wikipedia/en/a/a8/Coat_of_Arms_Birmingham_City_University.png",
    "birmingham university dubai": "",
    "bishop s university": "https://thumb.wikimedia.org/wikipedia/en/thumb/b/b4/BishopsUniversityCoatOfArms.svg/500px-BishopsUniversityCoatOfArms.svg.png",
    "bits pilani dubai campus": "https://thumb.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/500px-BITS_Pilani-Logo.svg.png",
    "bond university": "https://upload.wikimedia.org/wikipedia/en/3/3a/Bond_University_Coat_of_Arms.png",
    "boston university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Boston_University_seal.svg/500px-Boston_University_seal.svg.png",
    "brandon university": "https://upload.wikimedia.org/wikipedia/en/7/76/Brandon_univ_coa.png",
    "british university in dubai buid": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/BUiD.svg/500px-BUiD.svg.png",
    "brock university": "https://upload.wikimedia.org/wikipedia/en/7/7f/BrockU_CoA.jpg",
    "brown university": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/50/Shield_of_Brown_University.svg/500px-Shield_of_Brown_University.svg.png",
    "brunel university london": "https://thumb.wikimedia.org/wikipedia/en/thumb/d/d5/Brunel_Univ_CoA.svg/500px-Brunel_Univ_CoA.svg.png",
    "buckinghamshire new university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Coat_of_arms_of_Buckinghamshire_New_University.svg/500px-Coat_of_arms_of_Buckinghamshire_New_University.svg.png",
    "buda university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/M%C3%81V_V43_loco_in_the_Uni_garden_and_traffic_control_along_tram_tracks%2C_2018_%C3%93buda-B%C3%A9k%C3%A1smegyer.jpg/500px-M%C3%81V_V43_loco_in_the_Uni_garden_and_traffic_control_along_tram_tracks%2C_2018_%C3%93buda-B%C3%A9k%C3%A1smegyer.jpg",
    "budapest business university bge": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Iskola%C3%A9p%C3%BClet_%28527._sz%C3%A1m%C3%BA_m%C5%B1eml%C3%A9k%29.jpg/500px-Iskola%C3%A9p%C3%BClet_%28527._sz%C3%A1m%C3%BA_m%C5%B1eml%C3%A9k%29.jpg",
    "budapest metropolitan university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Budapest_Metropolitan_University.png/500px-Budapest_Metropolitan_University.png",
    "budapest university of technology and economics bme": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/BME_K_building.png/500px-BME_K_building.png",
    "california institute of technology caltech": "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/500px-Seal_of_the_California_Institute_of_Technology.svg.png",
    "canadian university dubai": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Canadian_University_Dubai_Graduation.jpeg/500px-Canadian_University_Dubai_Graduation.jpeg",
    "canterbury christ church university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Shield_of_Christ_Church_University_Canterbury.svg/500px-Shield_of_Christ_Church_University_Canterbury.svg.png",
    "cape breton university": "https://thumb.wikimedia.org/wikipedia/en/thumb/8/89/UCCB_CoatOfArms.svg/500px-UCCB_CoatOfArms.svg.png",
    "cardiff university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Shield_of_the_University_of_Cardiff.svg/500px-Shield_of_the_University_of_Cardiff.svg.png",
    "carleton university": "https://upload.wikimedia.org/wikipedia/en/3/30/Carelton_University_Coat_of_Arms.png",
    "carnegie mellon university": "https://thumb.wikimedia.org/wikipedia/en/thumb/b/bb/Carnegie_Mellon_University_seal.svg/500px-Carnegie_Mellon_University_seal.svg.png",
    "central queensland university cquniversity": "https://thumb.wikimedia.org/wikipedia/en/thumb/4/49/Central_Queensland_University_Coat_of_Arms.svg/500px-Central_Queensland_University_Coat_of_Arms.svg.png",
    "charles darwin university": "https://upload.wikimedia.org/wikipedia/en/4/40/Charles_Darwin_University_Crest.jpg",
    "charles sturt university": "https://upload.wikimedia.org/wikipedia/en/f/f8/CSU_crest.png",
    "city university of london": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Arms_of_City%2C_University_of_London.svg/500px-Arms_of_City%2C_University_of_London.svg.png",
    "clemson university": "https://thumb.wikimedia.org/wikipedia/en/thumb/9/9c/Clemson_University_Seal.svg/500px-Clemson_University_Seal.svg.png",
    "columbia university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Coat_of_Arms_of_Columbia_University.svg/500px-Coat_of_Arms_of_Columbia_University.svg.png",
    "concordia university": "https://upload.wikimedia.org/wikipedia/en/b/b6/Concordia_coa.png",
    "cornell university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/500px-Cornell_University_seal.svg.png",
    "corvinus university of budapest": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Corvinus_eng_logo.jpg/500px-Corvinus_eng_logo.jpg",
    "coventry university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Shield_of_Coventry_University.svg/500px-Shield_of_Coventry_University.svg.png",
    "curtin university": "https://upload.wikimedia.org/wikipedia/en/4/41/Curtin_University_Crest.jpg",
    "curtin university dubai": "https://upload.wikimedia.org/wikipedia/en/4/41/Curtin_University_Crest.jpg",
    "dalhousie university": "https://thumb.wikimedia.org/wikipedia/en/thumb/c/c3/Dalhousie_University_Seal.svg/500px-Dalhousie_University_Seal.svg.png",
    "dartmouth college": "https://thumb.wikimedia.org/wikipedia/en/thumb/e/e4/Dartmouth_College_shield.svg/500px-Dartmouth_College_shield.svg.png",
    "de montfort university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/De_Montfort_University_arms.svg/500px-De_Montfort_University_arms.svg.png",
    "deakin university": "https://thumb.wikimedia.org/wikipedia/en/thumb/7/74/Deakin_University_Logo_2017.svg/500px-Deakin_University_Logo_2017.svg.png",
    "dennis gabor university": "https://thumb.wikimedia.org/wikipedia/en/thumb/1/14/Dennis_Gabor_University_%28Hungary%29_logo.jpg/500px-Dennis_Gabor_University_%28Hungary%29_logo.jpg",
    "drexel university": "https://thumb.wikimedia.org/wikipedia/en/thumb/8/8c/Drexel_University_seal.svg/500px-Drexel_University_seal.svg.png",
    "duke university": "https://thumb.wikimedia.org/wikipedia/en/thumb/c/ce/Duke_University_seal.svg/500px-Duke_University_seal.svg.png",
    "durham university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/University_of_Durham_arms.svg/500px-University_of_Durham_arms.svg.png",
    "e tv s lor nd university elte": "https://upload.wikimedia.org/wikipedia/en/a/af/ELTE_logo.png",
    "edinburgh napier university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Edinburgh_Napier_University_arms.svg/500px-Edinburgh_Napier_University_arms.svg.png",
    "edith cowan university": "https://thumb.wikimedia.org/wikipedia/en/thumb/3/37/Edith_Cowan_University_Coat_of_Arms.svg/500px-Edith_Cowan_University_Coat_of_Arms.svg.png",
    "edutus university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Forr%C3%B3_Kriszti%C3%A1n_2024-ben.jpg/500px-Forr%C3%B3_Kriszti%C3%A1n_2024-ben.jpg",
    "emory university": "https://thumb.wikimedia.org/wikipedia/en/thumb/6/63/Emory_University_Seal.svg/500px-Emory_University_Seal.svg.png",
    "federation university australia": "https://thumb.wikimedia.org/wikipedia/en/thumb/e/e4/Shield_and_crest_of_Federation_University_Australia.svg/500px-Shield_and_crest_of_Federation_University_Australia.svg.png",
    "flinders university": "https://thumb.wikimedia.org/wikipedia/en/thumb/3/3d/Flinders_University_Emblem_Variant_2022.svg/500px-Flinders_University_Emblem_Variant_2022.svg.png",
    "florida state university": "https://thumb.wikimedia.org/wikipedia/en/thumb/6/6b/Florida_State_University_seal.svg/500px-Florida_State_University_seal.svg.png",
    "fordham university": "https://thumb.wikimedia.org/wikipedia/en/thumb/3/3e/Fordham_University_seal.svg/500px-Fordham_University_seal.svg.png",
    "george washington university": "https://thumb.wikimedia.org/wikipedia/en/thumb/d/d8/George_Washington_University_seal.svg/500px-George_Washington_University_seal.svg.png",
    "georgetown university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Georgetown_University_seal.svg/500px-Georgetown_University_seal.svg.png",
    "georgia institute of technology georgia tech": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Tech_Tower_and_Shop_1899.jpg/500px-Tech_Tower_and_Shop_1899.jpg",
    "griffith university": "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a9/Griffith_University_Logo_Variant_2022.svg/500px-Griffith_University_Logo_Variant_2022.svg.png",
    "gulf medical university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Gulf_Medical_University.jpg/500px-Gulf_Medical_University.jpg",
    "harvard university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/500px-Harvard_University_coat_of_arms.svg.png",
    "heriot watt university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Heriot-Watt_University_arms.svg/500px-Heriot-Watt_University_arms.svg.png",
    "heriot watt university dubai": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Heriot-Watt_University_logo.svg/500px-Heriot-Watt_University_logo.svg.png",
    "higher colleges of technology hct": "https://upload.wikimedia.org/wikipedia/en/f/f9/Higher_Colleges_of_Technology_HCT_logo.png",
    "hungarian university of fine arts": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Magyar_K%C3%A9pz%C5%91m%C5%B1v%C3%A9szeti_Egyetem.JPG/500px-Magyar_K%C3%A9pz%C5%91m%C5%B1v%C3%A9szeti_Egyetem.JPG",
    "illinois institute of technology": "https://thumb.wikimedia.org/wikipedia/en/thumb/9/96/Illinois_Institute_of_Technology_%28seal%29.svg/500px-Illinois_Institute_of_Technology_%28seal%29.svg.png",
    "imperial college london": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Shield_of_Imperial_College_London.svg/500px-Shield_of_Imperial_College_London.svg.png",
    "indiana university bloomington": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/5d/Indiana_University_seal.svg/500px-Indiana_University_seal.svg.png",
    "iowa state university": "https://thumb.wikimedia.org/wikipedia/en/thumb/8/80/Iowa_State_University_seal.svg/500px-Iowa_State_University_seal.svg.png",
    "james cook university": "https://upload.wikimedia.org/wikipedia/en/9/96/James_Cook_University_Armorial_Ensigns.png",
    "johns hopkins university": "https://thumb.wikimedia.org/wikipedia/en/thumb/0/09/Johns_Hopkins_University%27s_Academic_Seal.svg/500px-Johns_Hopkins_University%27s_Academic_Seal.svg.png",
    "k roli g sp r university of the reformed church": "https://upload.wikimedia.org/wikipedia/commons/6/69/KRE_c%C3%ADmer.png",
    "khalifa university": "https://thumb.wikimedia.org/wikipedia/en/thumb/6/6a/KUSTAR_Logo.jpg/500px-KUSTAR_Logo.jpg",
    "king s college london": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/King%27s_College%2C_London_full_achievement.svg/500px-King%27s_College%2C_London_full_achievement.svg.png",
    "kingston university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Shield_of_Kingston_University.svg/500px-Shield_of_Kingston_University.svg.png",
    "la trobe university": "https://upload.wikimedia.org/wikipedia/en/e/ed/LTU_Armorial_CMYK_small.PNG",
    "lakehead university": "https://upload.wikimedia.org/wikipedia/en/3/33/LakeheadU_Coat_of_Arms.jpg",
    "leeds beckett university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/COA_Leeds_Beckett.png/500px-COA_Leeds_Beckett.png",
    "liszt ferenc academy of music": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Liszt_Ferenc_Zenem%C5%B1v%C3%A9szeti_Egyetem_2013-ban_fel%C3%BAj%C3%ADtott_homlokzata.JPG/500px-Liszt_Ferenc_Zenem%C5%B1v%C3%A9szeti_Egyetem_2013-ban_fel%C3%BAj%C3%ADtott_homlokzata.JPG",
    "liverpool john moores university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Arms_of_Liverpool_John_Moores_University.svg/500px-Arms_of_Liverpool_John_Moores_University.svg.png",
    "london school of economics and political science lse": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/London_School_of_Economics_Coat_of_Arms.svg/500px-London_School_of_Economics_Coat_of_Arms.svg.png",
    "london south bank university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Shield_of_London_South_Bank_University.svg/500px-Shield_of_London_South_Bank_University.svg.png",
    "loughborough university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Shield_of_Loughborough_University.svg/500px-Shield_of_Loughborough_University.svg.png",
    "louisiana state university lsu": "https://thumb.wikimedia.org/wikipedia/en/thumb/d/d4/Seal-of-Louisiana-State-University.svg/500px-Seal-of-Louisiana-State-University.svg.png",
    "macewan university": "https://upload.wikimedia.org/wikipedia/en/1/1b/MacEwan_University_%28coat_of_arms%29.jpg",
    "macquarie university": "",
    "manchester metropolitan university": "https://upload.wikimedia.org/wikipedia/en/0/0f/Manchester_Metropolitan_University_coat_of_arms.png",
    "manipal academy of higher education dubai": "https://upload.wikimedia.org/wikipedia/en/f/ff/Manipal_University_logo.png",
    "massachusetts institute of technology mit": "https://thumb.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/500px-MIT_Seal.svg.png",
    "mcgill university": "https://thumb.wikimedia.org/wikipedia/en/thumb/2/29/McGill_University_CoA.svg/500px-McGill_University_CoA.svg.png",
    "mcmaster university": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/53/McMaster_University_logo.svg/500px-McMaster_University_logo.svg.png",
    "memorial university of newfoundland": "https://thumb.wikimedia.org/wikipedia/en/thumb/0/06/Memorial_University_of_Newfoundland_CoA.svg/500px-Memorial_University_of_Newfoundland_CoA.svg.png",
    "michigan state university": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/53/Michigan_State_University_seal.svg/500px-Michigan_State_University_seal.svg.png",
    "middlesex university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Arms_of_Middlesex_County_Council.svg/500px-Arms_of_Middlesex_County_Council.svg.png",
    "middlesex university dubai": "https://thumb.wikimedia.org/wikipedia/en/thumb/d/dd/Middlesex_University_Dubai%2C_2022.jpg/500px-Middlesex_University_Dubai%2C_2022.jpg",
    "milton friedman university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/M%C5%B1egyetem_K_%C3%A9p%C3%BClete_%C3%A9s_a_Gell%C3%A9rt_sz%C3%A1ll%C3%B3.jpg/500px-M%C5%B1egyetem_K_%C3%A9p%C3%BClete_%C3%A9s_a_Gell%C3%A9rt_sz%C3%A1ll%C3%B3.jpg",
    "moholy nagy university of art and design": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Moholy-Nagy1.jpg/500px-Moholy-Nagy1.jpg",
    "monash university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Arms_of_Monash_University.svg/500px-Arms_of_Monash_University.svg.png",
    "mount allison university": "https://thumb.wikimedia.org/wikipedia/en/thumb/7/79/Mount_Allison_University_Seal.svg/500px-Mount_Allison_University_Seal.svg.png",
    "mount royal university": "https://upload.wikimedia.org/wikipedia/en/c/c7/Mount_Royal_University_Coat_of_Arms.png",
    "murdoch university dubai": "https://upload.wikimedia.org/wikipedia/en/c/ce/Murdoch_University_Crest.png",
    "new york university nyu": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/New_York_University_Seal.svg/500px-New_York_University_Seal.svg.png",
    "newcastle university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/University_of_Newcastle_Coat_of_Arms.svg/500px-University_of_Newcastle_Coat_of_Arms.svg.png",
    "north carolina state university": "https://thumb.wikimedia.org/wikipedia/en/thumb/2/24/North_Carolina_State_University_seal.svg/500px-North_Carolina_State_University_seal.svg.png",
    "northeastern university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/NU_RGB_seal_R.png/500px-NU_RGB_seal_R.png",
    "northumbria university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Arms_of_Northumbria_University_%28Escutcheon_Only%29.svg/500px-Arms_of_Northumbria_University_%28Escutcheon_Only%29.svg.png",
    "northwestern university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Northwestern_University_seal.svg/500px-Northwestern_University_seal.svg.png",
    "nottingham trent university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Shield_of_Nottingham_Trent_University.svg/500px-Shield_of_Nottingham_Trent_University.svg.png",
    "ohio state university": "https://thumb.wikimedia.org/wikipedia/en/thumb/e/e1/Ohio_State_University_seal.svg/500px-Ohio_State_University_seal.svg.png",
    "ontario tech university": "https://upload.wikimedia.org/wikipedia/en/1/1f/University_of_Ontario_Institute_of_Technology_Coat_of_Arms.png",
    "oregon state university": "https://thumb.wikimedia.org/wikipedia/en/thumb/1/13/Oregon_State_University_seal.svg/500px-Oregon_State_University_seal.svg.png",
    "oxford brookes university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Oxford_Brookes_University_logo.svg/500px-Oxford_Brookes_University_logo.svg.png",
    "p zm ny p ter catholic university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Logo_univpazmany.svg/500px-Logo_univpazmany.svg.png",
    "penn state university": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/5c/Pennsylvania_State_University_seal.svg/500px-Pennsylvania_State_University_seal.svg.png",
    "princeton university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/500px-Princeton_seal.svg.png",
    "purdue university": "https://thumb.wikimedia.org/wikipedia/en/thumb/6/61/Purdue_University_seal.svg/500px-Purdue_University_seal.svg.png",
    "queen mary university of london": "https://upload.wikimedia.org/wikipedia/en/1/17/Arms_of_Queen_Mary_University_of_London.png",
    "queen s university": "",
    "queen s university belfast": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Queen%27s_University_Belfast_arms.svg/500px-Queen%27s_University_Belfast_arms.svg.png",
    "queensland university of technology qut": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Queensland_University_of_Technology%2C_Gardens_Point_campus.jpg/500px-Queensland_University_of_Technology%2C_Gardens_Point_campus.jpg",
    "rak medical and health sciences university": "",
    "rice university": "https://thumb.wikimedia.org/wikipedia/en/thumb/c/c7/Rice_University_seal.svg/500px-Rice_University_seal.svg.png",
    "rmit university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Arms_of_the_Royal_Melbourne_Institute_of_Technology.svg/500px-Arms_of_the_Royal_Melbourne_Institute_of_Technology.svg.png",
    "rochester institute of technology dubai rit dubai": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Rochester_Institute_of_Technology_Seal_%282018%29.svg/500px-Rochester_Institute_of_Technology_Seal_%282018%29.svg.png",
    "rochester institute of technology rit": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Rochester_Institute_of_Technology_Seal_%282018%29.svg/500px-Rochester_Institute_of_Technology_Seal_%282018%29.svg.png",
    "rutgers university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Rutgers_University_seal.svg/500px-Rutgers_University_seal.svg.png",
    "saint mary s university": "",
    "san diego state university": "https://thumb.wikimedia.org/wikipedia/en/thumb/6/60/San_Diego_State_University_seal.svg/500px-San_Diego_State_University_seal.svg.png",
    "san jose state university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/SJSU_Seal.svg/500px-SJSU_Seal.svg.png",
    "semmelweis university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Logo_univsemmelweis.svg/500px-Logo_univsemmelweis.svg.png",
    "sheffield hallam university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Shield_of_Sheffield_Hallam_University.svg/500px-Shield_of_Sheffield_Hallam_University.svg.png",
    "simon fraser university sfu": "https://upload.wikimedia.org/wikipedia/en/0/0b/Simon_Fraser_University_coat_of_arms.png",
    "solent university": "https://upload.wikimedia.org/wikipedia/en/9/9f/Solent_University_coat_of_arms.png",
    "sorbonne university abu dhabi": "https://thumb.wikimedia.org/wikipedia/en/thumb/f/ff/Sorbonne_University_Abu_Dhabi.svg/500px-Sorbonne_University_Abu_Dhabi.svg.png",
    "southern cross university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Southern_Cross_vertical.png/500px-Southern_Cross_vertical.png",
    "southern methodist university smu": "https://thumb.wikimedia.org/wikipedia/en/thumb/f/f8/Southern_Methodist_University_seal.svg/500px-Southern_Methodist_University_seal.svg.png",
    "st francis xavier university": "https://thumb.wikimedia.org/wikipedia/en/thumb/f/f7/StFXCoatofArms.svg/500px-StFXCoatofArms.svg.png",
    "staffordshire university": "https://upload.wikimedia.org/wikipedia/en/f/f5/Staffordshire_University_coat_of_arms.png",
    "stanford university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/500px-Seal_of_Leland_Stanford_Junior_University.svg.png",
    "stevens institute of technology": "https://thumb.wikimedia.org/wikipedia/en/thumb/8/8e/Seal_of_Stevens_Institute_of_Technology.svg/500px-Seal_of_Stevens_Institute_of_Technology.svg.png",
    "swansea university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Swansea_University_coat_of_arms.png/500px-Swansea_University_coat_of_arms.png",
    "swinburne university of technology": "https://upload.wikimedia.org/wikipedia/en/4/43/Swinburne_University_of_Technology_Coat_of_Arms.png",
    "syracuse university": "https://thumb.wikimedia.org/wikipedia/en/thumb/b/bf/Syracuse_University_seal.svg/500px-Syracuse_University_seal.svg.png",
    "sz chenyi istv n university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Universidad_Sz%C3%A9chenyi_Istv%C3%A1n_3.jpg/500px-Universidad_Sz%C3%A9chenyi_Istv%C3%A1n_3.jpg",
    "szent istv n university mate": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/University_of_G%C3%B6d%C3%B6ll%C5%91_02.JPG/500px-University_of_G%C3%B6d%C3%B6ll%C5%91_02.JPG",
    "teesside university": "https://upload.wikimedia.org/wikipedia/en/9/9b/Teeside_University_coat_of_arms.png",
    "temple university": "https://thumb.wikimedia.org/wikipedia/en/thumb/4/45/Temple_University_seal.svg/500px-Temple_University_seal.svg.png",
    "texas a m university": "https://thumb.wikimedia.org/wikipedia/en/thumb/f/f7/Texas_A%26M_University_seal.svg/500px-Texas_A%26M_University_seal.svg.png",
    "thompson rivers university": "https://upload.wikimedia.org/wikipedia/en/0/0f/Coat_of_Arms_of_Thompson_Rivers_University.png",
    "tomori p l college": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/M%C5%B1egyetem_K_%C3%A9p%C3%BClete_%C3%A9s_a_Gell%C3%A9rt_sz%C3%A1ll%C3%B3.jpg/500px-M%C5%B1egyetem_K_%C3%A9p%C3%BClete_%C3%A9s_a_Gell%C3%A9rt_sz%C3%A1ll%C3%B3.jpg",
    "toronto metropolitan university formerly ryerson": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Arms_of_Toronto_Metropolitan_University.svg/500px-Arms_of_Toronto_Metropolitan_University.svg.png",
    "torrens university australia": "https://upload.wikimedia.org/wikipedia/en/6/6b/Torrens_University_Australia_Trademark.jpg",
    "trent university": "",
    "tufts university": "https://thumb.wikimedia.org/wikipedia/en/thumb/b/b1/Tufts_official_seal.svg/500px-Tufts_official_seal.svg.png",
    "ucl university college london": "",
    "ulster university": "https://upload.wikimedia.org/wikipedia/en/2/24/Ulster_University_coat_of_arms.png",
    "united arab emirates university uaeu": "https://upload.wikimedia.org/wikipedia/en/4/41/United_Arab_Emirates_University_logo.png",
    "universit de montr al": "https://thumb.wikimedia.org/wikipedia/en/thumb/3/35/UdeM_CoA.svg/500px-UdeM_CoA.svg.png",
    "universit de sherbrooke": "https://thumb.wikimedia.org/wikipedia/en/thumb/b/b2/USherbrookeCoA.svg/500px-USherbrookeCoA.svg.png",
    "universit laval": "https://thumb.wikimedia.org/wikipedia/en/thumb/9/90/Ulaval_Shield.svg/500px-Ulaval_Shield.svg.png",
    "university of aberdeen": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Shield_of_the_University_of_Aberdeen.svg/500px-Shield_of_the_University_of_Aberdeen.svg.png",
    "university of adelaide": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/51/University-of-Adelaide-Crest.svg/500px-University-of-Adelaide-Crest.svg.png",
    "university of alabama": "https://upload.wikimedia.org/wikipedia/en/9/9a/University_of_Alabama_Seal.png",
    "university of alberta": "https://upload.wikimedia.org/wikipedia/en/9/92/University_of_Alberta_Coat_of_Arms.png",
    "university of arizona": "https://thumb.wikimedia.org/wikipedia/en/thumb/e/e4/University_of_Arizona_seal.svg/500px-University_of_Arizona_seal.svg.png",
    "university of bath": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Coat_of_Arms_of_the_University_of_Bath.svg/500px-Coat_of_Arms_of_the_University_of_Bath.svg.png",
    "university of bedfordshire": "https://upload.wikimedia.org/wikipedia/en/e/e0/University_Bedfordshire_logo.png",
    "university of birmingham": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Shield_of_the_University_of_Birmingham.svg/500px-Shield_of_the_University_of_Birmingham.svg.png",
    "university of brighton": "",
    "university of bristol": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Shield_of_the_University_of_Bristol.svg/500px-Shield_of_the_University_of_Bristol.svg.png",
    "university of british columbia ubc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/British_columbia_univ_coat_arms.svg/500px-British_columbia_univ_coat_arms.svg.png",
    "university of calgary": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Calgary_univ_full_coat_arms.svg/500px-Calgary_univ_full_coat_arms.svg.png",
    "university of california berkeley uc berkeley": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/500px-Seal_of_University_of_California%2C_Berkeley.svg.png",
    "university of california davis uc davis": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/The_University_of_California_Davis.svg/500px-The_University_of_California_Davis.svg.png",
    "university of california irvine uci": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/The_University_of_California_Irvine.svg/500px-The_University_of_California_Irvine.svg.png",
    "university of california los angeles ucla": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/500px-The_University_of_California_UCLA.svg.png",
    "university of california riverside ucr": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/51/UC_Riverside_seal.svg/500px-UC_Riverside_seal.svg.png",
    "university of california san diego ucsd": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Seal_of_the_University_of_California%2C_San_Diego.svg/500px-Seal_of_the_University_of_California%2C_San_Diego.svg.png",
    "university of california santa barbara ucsb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/UC_Santa_Barbara_Seal.png/500px-UC_Santa_Barbara_Seal.png",
    "university of cambridge": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/500px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png",
    "university of canberra": "https://upload.wikimedia.org/wikipedia/en/6/62/Logo_of_University_of_Canberra.png",
    "university of central lancashire uclan": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Shield_of_the_University_of_Central_Lancashire.svg/500px-Shield_of_the_University_of_Central_Lancashire.svg.png",
    "university of chicago": "https://thumb.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/500px-University_of_Chicago_shield.svg.png",
    "university of colorado boulder": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Seal_of_the_University_of_Colorado.svg/500px-Seal_of_the_University_of_Colorado.svg.png",
    "university of connecticut": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/56/University_of_Connecticut_seal.svg/500px-University_of_Connecticut_seal.svg.png",
    "university of debrecen": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/DebrecenDSCN3583.JPG/500px-DebrecenDSCN3583.JPG",
    "university of delaware": "https://thumb.wikimedia.org/wikipedia/en/thumb/2/29/University_of_Delaware_Seal.svg/500px-University_of_Delaware_Seal.svg.png",
    "university of derby": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Arms_of_the_University_of_Derby_%28Escutcheon_Only%29.svg/500px-Arms_of_the_University_of_Derby_%28Escutcheon_Only%29.svg.png",
    "university of dubai": "",
    "university of dundee": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Arms_of_the_University_of_Dundee.svg/500px-Arms_of_the_University_of_Dundee.svg.png",
    "university of east anglia uea": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/University_of_East_Anglia_arms.svg/500px-University_of_East_Anglia_arms.svg.png",
    "university of east london": "https://upload.wikimedia.org/wikipedia/en/f/f1/Coat_of_arms_of_the_University_of_East_London.jpg",
    "university of edinburgh": "https://thumb.wikimedia.org/wikipedia/en/thumb/7/7a/University_of_Edinburgh_ceremonial_roundel.svg/500px-University_of_Edinburgh_ceremonial_roundel.svg.png",
    "university of essex": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/University_of_Essex_arms.svg/500px-University_of_Essex_arms.svg.png",
    "university of exeter": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Arms_of_the_University_of_Exeter.svg/500px-Arms_of_the_University_of_Exeter.svg.png",
    "university of florida": "https://thumb.wikimedia.org/wikipedia/en/thumb/6/6d/University_of_Florida_seal.svg/500px-University_of_Florida_seal.svg.png",
    "university of glasgow": "https://upload.wikimedia.org/wikipedia/en/8/81/UofG_Coat_of_Arms.png",
    "university of greenwich": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Escutcheon_of_the_University_of_Greenwich.svg/500px-Escutcheon_of_the_University_of_Greenwich.svg.png",
    "university of guelph": "https://upload.wikimedia.org/wikipedia/en/f/f6/UofGshield.png",
    "university of hertfordshire": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Arms_of_the_University_of_Hertfordshire.svg/500px-Arms_of_the_University_of_Hertfordshire.svg.png",
    "university of houston": "https://thumb.wikimedia.org/wikipedia/en/thumb/7/77/University_of_Houston_seal.svg/500px-University_of_Houston_seal.svg.png",
    "university of huddersfield": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Shield_of_the_University_of_Huddersfield.svg/500px-Shield_of_the_University_of_Huddersfield.svg.png",
    "university of illinois urbana champaign": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/University_of_Illinois_seal.svg/500px-University_of_Illinois_seal.svg.png",
    "university of iowa": "https://thumb.wikimedia.org/wikipedia/en/thumb/4/49/University_of_Iowa_seal.svg/500px-University_of_Iowa_seal.svg.png",
    "university of kansas": "https://thumb.wikimedia.org/wikipedia/en/thumb/0/0b/University_of_Kansas_seal.svg/500px-University_of_Kansas_seal.svg.png",
    "university of kentucky": "https://thumb.wikimedia.org/wikipedia/en/thumb/2/2d/University_of_Kentucky_seal.svg/500px-University_of_Kentucky_seal.svg.png",
    "university of leeds": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Coat_of_Arms_of_the_University_of_Leeds.svg/500px-Coat_of_Arms_of_the_University_of_Leeds.svg.png",
    "university of leicester": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Coat_of_arms_of_the_University_of_Leicester.svg/500px-Coat_of_arms_of_the_University_of_Leicester.svg.png",
    "university of lethbridge": "https://upload.wikimedia.org/wikipedia/en/7/76/ULethbridge_CoA.jpg",
    "university of lincoln": "https://upload.wikimedia.org/wikipedia/en/c/ce/University_of_Lincoln_coat_of_arms.jpg",
    "university of liverpool": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Arms_of_the_University_of_Liverpool.svg/500px-Arms_of_the_University_of_Liverpool.svg.png",
    "university of manchester": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Shield_of_the_University_of_Manchester.svg/500px-Shield_of_the_University_of_Manchester.svg.png",
    "university of manitoba": "https://upload.wikimedia.org/wikipedia/en/6/6b/University_of_Manitoba_coat_of_arms.png",
    "university of maryland college park": "https://thumb.wikimedia.org/wikipedia/en/thumb/3/3e/University_of_Maryland_seal.svg/500px-University_of_Maryland_seal.svg.png",
    "university of massachusetts amherst": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/UMass_Seal_Medium_PMS_202.png/500px-UMass_Seal_Medium_PMS_202.png",
    "university of melbourne": "https://thumb.wikimedia.org/wikipedia/en/thumb/b/b4/The_University_of_Melbourne_Coat_of_Arms.svg/500px-The_University_of_Melbourne_Coat_of_Arms.svg.png",
    "university of miami": "https://thumb.wikimedia.org/wikipedia/en/thumb/2/27/University_of_Miami_seal.svg/500px-University_of_Miami_seal.svg.png",
    "university of michigan ann arbor": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/500px-Seal_of_the_University_of_Michigan.svg.png",
    "university of minnesota twin cities": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Seal_of_the_University_of_Minnesota.svg/500px-Seal_of_the_University_of_Minnesota.svg.png",
    "university of miskolc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/UnivMiskolc_Main.jpg/500px-UnivMiskolc_Main.jpg",
    "university of missouri": "https://thumb.wikimedia.org/wikipedia/en/thumb/b/b8/University_of_Missouri_seal.svg/500px-University_of_Missouri_seal.svg.png",
    "university of nebraska lincoln": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Seal_of_the_University_of_Nebraska.svg/500px-Seal_of_the_University_of_Nebraska.svg.png",
    "university of new brunswick": "https://upload.wikimedia.org/wikipedia/en/1/15/UNB_seal.png",
    "university of new south wales unsw sydney": "https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_New_South_Wales_Crest_Variant_2022.png",
    "university of newcastle": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/University_of_Newcastle_Coat_of_Arms.svg/500px-University_of_Newcastle_Coat_of_Arms.svg.png",
    "university of north carolina at chapel hill": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/University_of_North_Carolina_at_Chapel_Hill_seal.svg/500px-University_of_North_Carolina_at_Chapel_Hill_seal.svg.png",
    "university of northern british columbia unbc": "https://upload.wikimedia.org/wikipedia/en/d/df/UNBC_Coat_of_Arms.png",
    "university of notre dame": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/University_of_Notre_Dame_seal_%282%29.svg/500px-University_of_Notre_Dame_seal_%282%29.svg.png",
    "university of notre dame australia": "https://thumb.wikimedia.org/wikipedia/en/thumb/a/ab/The_University_of_Notre_Dame_Australia_Crest.svg/500px-The_University_of_Notre_Dame_Australia_Crest.svg.png",
    "university of nottingham": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Shield_of_the_University_of_Nottingham.svg/500px-Shield_of_the_University_of_Nottingham.svg.png",
    "university of oklahoma": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/56/University_of_Oklahoma_seal.svg/500px-University_of_Oklahoma_seal.svg.png",
    "university of oregon": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Seal_of_the_University_of_Oregon.svg/500px-Seal_of_the_University_of_Oregon.svg.png",
    "university of ottawa": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/5f/Uottawacoa.svg/500px-Uottawacoa.svg.png",
    "university of oxford": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Arms_of_University_of_Oxford.svg/500px-Arms_of_University_of_Oxford.svg.png",
    "university of p cs": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/University_of_P%C3%A9cs%2C_logo_from_2025.svg/500px-University_of_P%C3%A9cs%2C_logo_from_2025.svg.png",
    "university of pannonia": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Az_egyetem_f%C5%91%C3%A9p%C3%BClete.jpg/500px-Az_egyetem_f%C5%91%C3%A9p%C3%BClete.jpg",
    "university of pennsylvania upenn": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/500px-UPenn_shield_with_banner.svg.png",
    "university of pittsburgh": "https://thumb.wikimedia.org/wikipedia/en/thumb/f/fb/University_of_Pittsburgh_seal.svg/500px-University_of_Pittsburgh_seal.svg.png",
    "university of plymouth": "https://upload.wikimedia.org/wikipedia/en/a/aa/University_of_Plymouth_COA.png",
    "university of portsmouth": "https://upload.wikimedia.org/wikipedia/en/6/66/University_of_Portsmouth_coat_of_arms.png",
    "university of prince edward island upei": "https://upload.wikimedia.org/wikipedia/en/9/96/UPEI.jpg",
    "university of public service": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Ludovika_frontispiece.jpg/500px-Ludovika_frontispiece.jpg",
    "university of queensland": "https://thumb.wikimedia.org/wikipedia/en/thumb/7/76/University_of_Queensland_%28crest%29.svg/500px-University_of_Queensland_%28crest%29.svg.png",
    "university of reading": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Reading_shield.png/500px-Reading_shield.png",
    "university of regina": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/URegina_Coat_of_Arms.svg/500px-URegina_Coat_of_Arms.svg.png",
    "university of salford": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Coat_of_arms_of_the_University_of_Salford.svg/500px-Coat_of_arms_of_the_University_of_Salford.svg.png",
    "university of saskatchewan": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/USask_Coat_of_Arms.svg/500px-USask_Coat_of_Arms.svg.png",
    "university of sharjah": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/University_of_Sharjah.png/500px-University_of_Sharjah.png",
    "university of sheffield": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Shield_of_the_University_of_Sheffield.svg/500px-Shield_of_the_University_of_Sheffield.svg.png",
    "university of sopron": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/DJI_0755%2B.jpg/500px-DJI_0755%2B.jpg",
    "university of south australia": "https://thumb.wikimedia.org/wikipedia/en/thumb/e/e0/Logo_of_the_University_of_South_Australia.svg/500px-Logo_of_the_University_of_South_Australia.svg.png",
    "university of south florida": "https://thumb.wikimedia.org/wikipedia/en/thumb/d/d1/University_of_South_Florida_seal.svg/500px-University_of_South_Florida_seal.svg.png",
    "university of south wales": "https://upload.wikimedia.org/wikipedia/en/a/af/University_of_Glamorgan_arms.png",
    "university of southampton": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Shield_of_the_University_of_Southampton.svg/500px-Shield_of_the_University_of_Southampton.svg.png",
    "university of southern california usc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/University_of_Southern_California_%28USC%29_seal.svg/500px-University_of_Southern_California_%28USC%29_seal.svg.png",
    "university of southern queensland": "https://thumb.wikimedia.org/wikipedia/en/thumb/4/41/University_of_Southern_Queensland_Coat_of_Arms.svg/500px-University_of_Southern_Queensland_Coat_of_Arms.svg.png",
    "university of stirling": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/University_of_Stirling_arms.svg/500px-University_of_Stirling_arms.svg.png",
    "university of strathclyde": "https://thumb.wikimedia.org/wikipedia/en/thumb/2/21/University_of_Strathclyde_Coat_of_Arms.svg/500px-University_of_Strathclyde_Coat_of_Arms.svg.png",
    "university of sunderland": "https://upload.wikimedia.org/wikipedia/en/4/44/University_of_Sunderland_coat_of_arms.png",
    "university of surrey": "https://thumb.wikimedia.org/wikipedia/en/thumb/e/ee/University_of_Surrey_coat_of_arms.svg/500px-University_of_Surrey_coat_of_arms.svg.png",
    "university of sussex": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Coat_of_Arms_of_the_University_of_Sussex.svg/500px-Coat_of_Arms_of_the_University_of_Sussex.svg.png",
    "university of sydney": "https://upload.wikimedia.org/wikipedia/en/9/9a/University_of_Sydney_coat_of_arms.png",
    "university of szeged": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/University_of_Szeged_Seal_b%26w_round.svg/500px-University_of_Szeged_Seal_b%26w_round.svg.png",
    "university of tasmania": "https://upload.wikimedia.org/wikipedia/en/6/60/UTasLogo.png",
    "university of technology sydney uts": "https://thumb.wikimedia.org/wikipedia/en/thumb/6/64/University_of_Technology_Sydney_emblem.svg/500px-University_of_Technology_Sydney_emblem.svg.png",
    "university of tennessee knoxville": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/55/Seal_of_the_University_of_Tennessee.svg/500px-Seal_of_the_University_of_Tennessee.svg.png",
    "university of texas at austin": "https://thumb.wikimedia.org/wikipedia/en/thumb/e/e1/University_of_Texas_at_Austin_seal.svg/500px-University_of_Texas_at_Austin_seal.svg.png",
    "university of texas at dallas": "https://thumb.wikimedia.org/wikipedia/en/thumb/1/17/University_of_Texas_at_Dallas_seal.svg/500px-University_of_Texas_at_Dallas_seal.svg.png",
    "university of the fraser valley": "https://upload.wikimedia.org/wikipedia/en/5/57/UFV_Coat_of_Arms.png",
    "university of the sunshine coast": "https://upload.wikimedia.org/wikipedia/en/f/fb/Logo_of_University_of_the_Sunshine_Coast.png",
    "university of the west of england uwe bristol": "https://upload.wikimedia.org/wikipedia/en/d/d2/Univ_of_the_West_of_England_arms.png",
    "university of toronto": "https://thumb.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/500px-Utoronto_coa.svg.png",
    "university of utah": "https://thumb.wikimedia.org/wikipedia/en/thumb/4/4a/University_of_Utah_seal.svg/500px-University_of_Utah_seal.svg.png",
    "university of victoria uvic": "https://thumb.wikimedia.org/wikipedia/en/thumb/3/37/UVic_CoA.svg/500px-UVic_CoA.svg.png",
    "university of virginia": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/University_of_Virginia_seal.svg/500px-University_of_Virginia_seal.svg.png",
    "university of warwick": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Warwick_University_Shield.svg/500px-Warwick_University_Shield.svg.png",
    "university of washington": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/58/University_of_Washington_seal.svg/500px-University_of_Washington_seal.svg.png",
    "university of waterloo": "https://thumb.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/500px-University_of_Waterloo_seal.svg.png",
    "university of western australia uwa": "https://thumb.wikimedia.org/wikipedia/en/thumb/c/c7/UWA_crest.svg/500px-UWA_crest.svg.png",
    "university of westminster": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Coat_of_Arms_of_the_University_of_Westminster.svg/500px-Coat_of_Arms_of_the_University_of_Westminster.svg.png",
    "university of windsor": "https://upload.wikimedia.org/wikipedia/en/8/8a/Coat_of_Arms_of_the_University_of_Windsor.png",
    "university of wisconsin madison": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Seal_of_the_University_of_Wisconsin.svg/500px-Seal_of_the_University_of_Wisconsin.svg.png",
    "university of wollongong": "https://thumb.wikimedia.org/wikipedia/en/thumb/f/fa/Shield_of_the_University_of_Wollongong.svg/500px-Shield_of_the_University_of_Wollongong.svg.png",
    "university of wollongong in dubai uowd": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/UOWD_Campus.jpg/500px-UOWD_Campus.jpg",
    "university of wolverhampton": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Escutcheon_of_the_University_of_Wolverhampton.svg/500px-Escutcheon_of_the_University_of_Wolverhampton.svg.png",
    "university of york": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/University_of_York_coat_of_arms.svg/500px-University_of_York_coat_of_arms.svg.png",
    "vancouver island university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Coat_of_Arms_of_Vancouver_Island_University.png/500px-Coat_of_Arms_of_Vancouver_Island_University.png",
    "vanderbilt university": "https://thumb.wikimedia.org/wikipedia/en/thumb/2/29/Vanderbilt_University_seal.svg/500px-Vanderbilt_University_seal.svg.png",
    "victoria university": "https://thumb.wikimedia.org/wikipedia/en/thumb/3/37/UVic_CoA.svg/500px-UVic_CoA.svg.png",
    "virginia tech": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/54/Virginia_Tech_seal.svg/500px-Virginia_Tech_seal.svg.png",
    "washington state university": "https://thumb.wikimedia.org/wikipedia/en/thumb/0/0e/Washington_State_University_seal.svg/500px-Washington_State_University_seal.svg.png",
    "washington university in st louis": "https://upload.wikimedia.org/wikipedia/en/a/ab/Washington_University_in_St._Louis_seal.jpg",
    "wekerle business school": "",
    "western sydney university": "https://upload.wikimedia.org/wikipedia/en/f/f0/Western_Sydney_University_Crest.png",
    "western university": "",
    "wilfrid laurier university": "https://upload.wikimedia.org/wikipedia/en/a/ab/Laurier_univ_ca_seal.png",
    "yale university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/500px-Yale_University_Shield_1.svg.png",
    "york university": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/York_University_Arms.png/500px-York_University_Arms.png",
    "zayed university": "https://thumb.wikimedia.org/wikipedia/en/thumb/e/ec/Zayed_University_logo.svg/500px-Zayed_University_logo.svg.png"
  };


  // Full partner university directory, grouped by study destination
  const UNI_BY_COUNTRY = {
    "UK": [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "UCL (University College London)",
      "University of Edinburgh",
      "The University of Manchester",
      "King's College London",
      "London School of Economics and Political Science (LSE)",
      "University of Bristol",
      "University of Warwick",
      "University of Glasgow",
      "University of Birmingham",
      "University of Southampton",
      "University of Leeds",
      "The University of Sheffield",
      "Durham University",
      "University of Nottingham",
      "Queen Mary University of London",
      "Newcastle University",
      "University of York",
      "University of Exeter",
      "Cardiff University",
      "University of Bath",
      "University of Liverpool",
      "University of Aberdeen",
      "Queen's University Belfast",
      "University of Reading",
      "University of Sussex",
      "Loughborough University",
      "University of Leicester",
      "University of Surrey",
      "University of Strathclyde",
      "University of East Anglia (UEA)",
      "Heriot-Watt University",
      "University of Dundee",
      "Brunel University London",
      "City, University of London",
      "Oxford Brookes University",
      "Swansea University",
      "University of Essex",
      "Birkbeck, University of London",
      "Aston University",
      "University of Stirling",
      "Coventry University",
      "Northumbria University",
      "Nottingham Trent University",
      "Manchester Metropolitan University",
      "University of the West of England (UWE Bristol)",
      "Kingston University",
      "University of Portsmouth",
      "University of Hertfordshire",
      "University of Plymouth",
      "Sheffield Hallam University",
      "Liverpool John Moores University",
      "University of Greenwich",
      "University of Salford",
      "De Montfort University",
      "University of Lincoln",
      "Ulster University",
      "Edinburgh Napier University",
      "University of Huddersfield",
      "Middlesex University",
      "University of Brighton",
      "University of Central Lancashire (UCLan)",
      "University of Westminster",
      "London South Bank University",
      "Teesside University",
      "University of Sunderland",
      "University of Wolverhampton",
      "University of East London",
      "Anglia Ruskin University",
      "University of Bedfordshire",
      "University of Derby",
      "University of South Wales",
      "Birmingham City University",
      "Leeds Beckett University",
      "Staffordshire University",
      "Canterbury Christ Church University",
      "Solent University",
      "Buckinghamshire New University"
    ],
    "USA": [
      "Harvard University",
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "University of California, Berkeley (UC Berkeley)",
      "Columbia University",
      "Princeton University",
      "California Institute of Technology (Caltech)",
      "Yale University",
      "University of Chicago",
      "University of Pennsylvania (UPenn)",
      "Johns Hopkins University",
      "Cornell University",
      "University of California, Los Angeles (UCLA)",
      "University of Michigan, Ann Arbor",
      "New York University (NYU)",
      "Duke University",
      "Northwestern University",
      "Carnegie Mellon University",
      "University of Washington",
      "University of California, San Diego (UCSD)",
      "Georgia Institute of Technology (Georgia Tech)",
      "University of Texas at Austin",
      "University of Illinois Urbana-Champaign",
      "University of Wisconsin-Madison",
      "Brown University",
      "Washington University in St. Louis",
      "University of North Carolina at Chapel Hill",
      "Rice University",
      "University of Southern California (USC)",
      "University of California, Davis (UC Davis)",
      "University of California, Santa Barbara (UCSB)",
      "Boston University",
      "Ohio State University",
      "Purdue University",
      "Penn State University",
      "University of Florida",
      "University of Minnesota, Twin Cities",
      "University of Maryland, College Park",
      "Emory University",
      "Texas A&M University",
      "University of Pittsburgh",
      "Michigan State University",
      "University of Virginia",
      "Dartmouth College",
      "Vanderbilt University",
      "University of Colorado Boulder",
      "Arizona State University",
      "University of Arizona",
      "Indiana University Bloomington",
      "University of Notre Dame",
      "Georgetown University",
      "Rutgers University",
      "University of California, Irvine (UCI)",
      "University of California, Riverside (UCR)",
      "Tufts University",
      "University of Massachusetts Amherst",
      "North Carolina State University",
      "Virginia Tech",
      "University of Miami",
      "George Washington University",
      "Northeastern University",
      "Syracuse University",
      "University of Utah",
      "University of Iowa",
      "Florida State University",
      "University of Kansas",
      "University of Connecticut",
      "University of South Florida",
      "University of Delaware",
      "University of Oregon",
      "Oregon State University",
      "Iowa State University",
      "University of Nebraska-Lincoln",
      "University of Houston",
      "University of Kentucky",
      "University of Oklahoma",
      "University of Tennessee, Knoxville",
      "University of Missouri",
      "Washington State University",
      "San Diego State University",
      "San Jose State University",
      "Drexel University",
      "Temple University",
      "Illinois Institute of Technology",
      "Stevens Institute of Technology",
      "Rochester Institute of Technology (RIT)",
      "Fordham University",
      "American University (Washington, D.C.)",
      "University of Alabama",
      "Auburn University",
      "Louisiana State University (LSU)",
      "Clemson University",
      "Baylor University",
      "Southern Methodist University (SMU)",
      "University of Texas at Dallas"
    ],
    "Canada": [
      "University of Toronto",
      "McGill University",
      "University of British Columbia (UBC)",
      "University of Alberta",
      "University of Waterloo",
      "Western University",
      "Université de Montréal",
      "McMaster University",
      "University of Calgary",
      "University of Ottawa",
      "Queen's University",
      "Dalhousie University",
      "Simon Fraser University (SFU)",
      "University of Victoria (UVic)",
      "York University",
      "University of Saskatchewan",
      "Université Laval",
      "Concordia University",
      "University of Manitoba",
      "University of Guelph",
      "Memorial University of Newfoundland",
      "Carleton University",
      "Université de Sherbrooke",
      "University of Windsor",
      "Toronto Metropolitan University (formerly Ryerson)",
      "University of New Brunswick",
      "Brock University",
      "Lakehead University",
      "Trent University",
      "University of Regina",
      "Wilfrid Laurier University",
      "University of Lethbridge",
      "Ontario Tech University",
      "University of Northern British Columbia (UNBC)",
      "University of Prince Edward Island (UPEI)",
      "Brandon University",
      "Mount Allison University",
      "Acadia University",
      "Saint Mary's University",
      "St. Francis Xavier University",
      "Bishop's University",
      "Cape Breton University",
      "Vancouver Island University",
      "University of the Fraser Valley",
      "Thompson Rivers University",
      "MacEwan University",
      "Mount Royal University"
    ],
    "Australia": [
      "The University of Melbourne",
      "The University of Sydney",
      "Australian National University (ANU)",
      "The University of Queensland",
      "Monash University",
      "University of New South Wales (UNSW Sydney)",
      "The University of Western Australia (UWA)",
      "The University of Adelaide",
      "University of Technology Sydney (UTS)",
      "Macquarie University",
      "RMIT University",
      "Queensland University of Technology (QUT)",
      "Curtin University",
      "Deakin University",
      "University of Wollongong",
      "The University of Newcastle",
      "Griffith University",
      "La Trobe University",
      "Flinders University",
      "University of South Australia",
      "Swinburne University of Technology",
      "Western Sydney University",
      "University of Tasmania",
      "James Cook University",
      "Victoria University",
      "Edith Cowan University",
      "University of Canberra",
      "Charles Darwin University",
      "Southern Cross University",
      "Central Queensland University (CQUniversity)",
      "University of Southern Queensland",
      "Federation University Australia",
      "Charles Sturt University",
      "Australian Catholic University (ACU)",
      "University of the Sunshine Coast",
      "Bond University",
      "University of Notre Dame Australia",
      "Torrens University Australia"
    ],
    "Hungary": [
      "Eötvös Loránd University (ELTE)",
      "University of Szeged",
      "University of Debrecen",
      "Budapest University of Technology and Economics (BME)",
      "Semmelweis University",
      "Corvinus University of Budapest",
      "University of Pécs",
      "Óbuda University",
      "Széchenyi István University",
      "University of Miskolc",
      "University of Pannonia",
      "Szent István University (MATE)",
      "Károli Gáspár University of the Reformed Church",
      "Pázmány Péter Catholic University",
      "University of Sopron",
      "Andrássy University Budapest",
      "Hungarian University of Fine Arts",
      "Liszt Ferenc Academy of Music",
      "Moholy-Nagy University of Art and Design",
      "University of Public Service",
      "Budapest Metropolitan University",
      "Budapest Business University (BGE)",
      "Edutus University",
      "Wekerle Business School",
      "Tomori Pál College",
      "Dennis Gabor University",
      "Milton Friedman University"
    ],
    "UAE": [
      "United Arab Emirates University (UAEU)",
      "Khalifa University",
      "American University of Sharjah (AUS)",
      "University of Sharjah",
      "Zayed University",
      "American University in Dubai (AUD)",
      "Abu Dhabi University",
      "University of Wollongong in Dubai (UOWD)",
      "Heriot-Watt University Dubai",
      "Middlesex University Dubai",
      "Birmingham University Dubai",
      "Murdoch University Dubai",
      "Canadian University Dubai",
      "Ajman University",
      "Al Ain University",
      "Rochester Institute of Technology Dubai (RIT Dubai)",
      "Curtin University Dubai",
      "Manipal Academy of Higher Education Dubai",
      "BITS Pilani Dubai Campus",
      "Amity University Dubai",
      "Sorbonne University Abu Dhabi",
      "Higher Colleges of Technology (HCT)",
      "Gulf Medical University",
      "RAK Medical and Health Sciences University",
      "University of Dubai",
      "British University in Dubai (BUiD)"
    ]
  };

  const UNIVERSITIES = Object.entries(UNI_BY_COUNTRY).flatMap(([loc, names]) =>
    names.map(name => ({ name, loc, logo: LOGO_BY_KEY[UNI_KEY(name)] || WIKI_IMG_BY_KEY[UNI_KEY(name)] || "" }))
  );

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

  const COURSES = [
    { name: "Adult Nursing BSc", level: "Postgraduate" },
    { name: "Ancient History BA", level: "Undergraduate" },
    { name: "Ancient History MA", level: "Postgraduate" },
    { name: "Architecture BA Hons", level: "Undergraduate" },
    { name: "Architecture BSc Hons", level: "Pre-Master" },
    { name: "Art and Design BA Hons", level: "Foundation" },
    { name: "Biological Science BSc Hons", level: "Undergraduate" },
    { name: "BSc Computer Science", level: "Postgraduate" },
    { name: "Business Management BSc", level: "Undergraduate" },
    { name: "Business Management MA", level: "Postgraduate" },
    { name: "Chemical Engineering", level: "Pre-Master" },
    { name: "Chemical Engineering BEng Hons", level: "Foundation" },
    { name: "Computer Science BSc Hons", level: "Undergraduate" },
    { name: "Construction Management BSc Hons", level: "Undergraduate" },
    { name: "Cyber Security", level: "Doctorate" },
    { name: "Cyber Security BSc Hons", level: "Undergraduate" },
    { name: "Cyber Security MSci", level: "Postgraduate" },
    { name: "Data Science", level: "Undergraduate" },
    { name: "Data Science MComp Hons", level: "Postgraduate" },
    { name: "Data Science MSci", level: "Foundation" },
    { name: "Engineering Management MEng", level: "Postgraduate" },
    { name: "Healthcare Science Audiology", level: "Pre-Master" },
    { name: "Hospitality and Tourism BA Hons", level: "Undergraduate" },
    { name: "MBA Marketing", level: "Postgraduate" },
    { name: "MSc Public Health", level: "Postgraduate" },
    { name: "Nursing", level: "Undergraduate" },
    { name: "Nursing MSc", level: "Foundation" },
    { name: "Psychology Courses", level: "Undergraduate" },
    { name: "Public Health", level: "Doctorate" },
    { name: "Public Health BSc Hons", level: "Undergraduate" },
    { name: "Sports and Exercise Science BSc Hons", level: "Undergraduate" },
    { name: "Structured PhD in Nursing & Midwifery", level: "Doctorate" },
    { name: "English Language Programme", level: "English Language" },
    { name: "General English", level: "English Language" },
    { name: "IELTS Preparation Course", level: "English Language" },
    { name: "English for Academic Purposes", level: "English Language" },
    { name: "Pre-sessional English", level: "English Language" },
    { name: "Business English", level: "English Language" },
    { name: "Foundation Year in Business", level: "Foundation" },
    { name: "Foundation in Engineering", level: "Foundation" },
    { name: "Foundation in Computing", level: "Foundation" },
    { name: "International Foundation Diploma", level: "Foundation" },
    { name: "Pre-Master in Business", level: "Pre-Master" },
    { name: "Pre-Master in Computing", level: "Pre-Master" },
    { name: "Pre-Master in Engineering", level: "Pre-Master" },
    { name: "Graduate Diploma in Management", level: "Pre-Master" },
    { name: "PhD Business & Management", level: "Doctorate" },
    { name: "PhD Computer Science", level: "Doctorate" },
    { name: "Doctor of Education (EdD)", level: "Doctorate" },
    { name: "PhD Health Sciences", level: "Doctorate" },
    { name: "MSc International Business", level: "Postgraduate" },
    { name: "MSc Data Science", level: "Postgraduate" },
    { name: "MA Education", level: "Postgraduate" },
    { name: "LLM International Law", level: "Postgraduate" },
    { name: "BA Hons Business Studies", level: "Undergraduate" },
    { name: "BEng Hons Mechanical Engineering", level: "Undergraduate" },
    { name: "BSc Hons Cyber Security", level: "Undergraduate" },
    { name: "BSc Hons Accounting & Finance", level: "Undergraduate" }
  ];

  const GALLERY = [
    { t: "Study Abroad in UK", s: "Campus Life", img: "https://www.globalgroupofeducation.com/assets/images/gallery/gallery-image1583700664.jpg" },
    { t: "Study in UK", s: "Student Hub", img: "https://www.globalgroupofeducation.com/assets/images/gallery/gallery-tour2.jpg" },
    { t: "Best Education in UK", s: "Lecture Hall", img: "https://www.globalgroupofeducation.com/assets/images/gallery/gallery-tour3.jpg" },
    { t: "UK Education", s: "Library", img: "https://www.globalgroupofeducation.com/assets/images/gallery/gallery-tour4.jpg" },
    { t: "Modern Universities", s: "Innovation Lab", img: "https://www.globalgroupofeducation.com/assets/images/gallery/gallery-tour5.jpg" },
    { t: "UK University", s: "Graduation", img: "https://www.globalgroupofeducation.com/assets/images/gallery/gallery-tour8.jpg" },
    { t: "Study Abroad", s: "City Campus", img: "https://www.globalgroupofeducation.com/assets/images/gallery/gallery-tour6.jpg" },
    { t: "Sports Education", s: "Athletics", img: "https://www.globalgroupofeducation.com/assets/images/gallery/gallery-tour7.jpg" },
    { t: "Student Housing", s: "Accommodation", img: "https://www.globalgroupofeducation.com/assets/images/gallery/gallery-tour9.jpg" },
    { t: "Top Rated Universities", s: "Main Building", img: "https://www.globalgroupofeducation.com/assets/images/gallery/gallery-image1586166999.jpg" }
  ];

  const TESTIMONIALS = [
    { text: "Consultants of this recruitment company have valuable knowledge to process the application for admission to get the visa. They trained me to clear the test and interview for the admission and visa too. I am very satisfied with their services and support so I recommend GGE for all students who planning to study in UK and any other country.", country: "Ireland" },
    { text: "Consultants of Global Group of Education are very experts and they have updated knowledge to process the application to study in UK. They helped me a lot to choose the right course according to my previous qualifications.", country: "UK" },
    { text: "GGE counsellors were very helpful to process the admission application for study abroad. They guided me on all the procedures of my admission and visa application to be successful.", country: "Pakistan" },
    { text: "Extremely satisfied with the service provided by the Global Group of Education. A perfect international student agency, they are really trustworthy and have an excellent response time. They had done a great job in getting my Tier 4 General Visa for study in the UK.", country: "Pakistan" },
    { text: "The team of Global Group of Education in the United Kingdom is highly qualified which provides the best online counseling services. They are an honest, reliable consultancy company to meet the needs of every person. I am very thankful to them for helping me in getting a Tier 4 General Visa.", country: "Pakistan" },
    { text: "The supportive team of Global Group of Education helped me to feel more confident about approaching new challenges. They helped me get my Tier 4 General Visa without IELTS. The staff are highly skilled and trained. I always found them cooperative, honest, and supportive. Thank you!", country: "Pakistan" },
    { text: "I am very grateful to the Global Group of Education and its team for its dedication and commitment towards facilitating me and my wife for getting a visa for the UK. The whole process was done smoothly. I am fully satisfied with the quality of services.", country: "Pakistan" },
    { text: "I am Mian Waqar and got my Tier 4 Study Visa through Global Group of Education Limited. They are very professional at their work and they informed everything beforehand and made sure everything was done at the right time. Their advice has been very helpful.", country: "Pakistan" },
    { text: "My name is Muhammad Sarmad Anwar from Gujrat, Pakistan. I got my offer letter from Coventry University UK. After that they helped me with my CAS, visa application and appointment, and prepared me for the visa interview. Their services are swift, cooperative and friendly.", country: "Pakistan" },
    { text: "The whole team made my dream of studying in the UK a reality. From documentation to pre-departure, every step was handled professionally. Highly recommended to every student!", country: "UK" }
  ];

  /* ---------------------------------------------------------
     RENDER: UNIVERSITIES (with Load More)
  --------------------------------------------------------- */
  const uniGrid = $("#uniGrid");
  const loadMoreUni = $("#loadMoreUni");
  let uniShown = 24;

  function uniInitials(name) {
    return name.split(/\s+/)
      .filter(w => w.length > 2 && w.toLowerCase() !== "the" && !w.startsWith("("))
      .map(w => w[0]).slice(0, 3).join("").toUpperCase() || name.slice(0, 2).toUpperCase();
  }

  function uniCardHTML(u, i) {
    const initials = uniInitials(u.name);
    const badge = u.logo
      ? `<img src="${u.logo}" alt="${u.name}" loading="lazy" onerror="this.remove();this.parentNode.insertAdjacentHTML('beforeend','<span class=\\'fallback\\'>${initials}</span>')">`
      : `<span class="fallback">${initials}</span>`;
    return `
      <a class="uni-card reveal" href="#" style="transition-delay:${(i % 4) * 60}ms">
        <div class="uni-card__logo">${badge}</div>
        <div class="uni-card__name">${u.name}</div>
        <span class="uni-card__loc"><i class="fa-solid fa-location-dot"></i> ${u.loc}</span>
      </a>`;
  }

  function renderUnis() {
    if (!uniGrid) return;
    uniGrid.innerHTML = UNIVERSITIES.slice(0, uniShown).map(uniCardHTML).join("");
    if (loadMoreUni) {
      loadMoreUni.style.display = uniShown >= UNIVERSITIES.length ? "none" : "";
    }
    observeReveals();
  }
  renderUnis();

  if (loadMoreUni) {
    loadMoreUni.addEventListener("click", () => {
      uniShown += 24;
      renderUnis();
    });
  }

  /* ---------------------------------------------------------
     RENDER: COURSES
  --------------------------------------------------------- */
  const courseGrid = $("#courseGrid");
  const norm = s => (s || "").trim().toLowerCase();
  const badgeClass = lvl => "badge--" + norm(lvl).replace(/\s+/g, "-");

  function renderCourses(filter = "all") {
    if (!courseGrid) return;
    const list = filter === "all" ? COURSES : COURSES.filter(c => norm(c.level) === norm(filter));
    courseGrid.innerHTML = list.map((c, i) => `
      <article class="course-card reveal" tabindex="0" role="button"
               data-name="${c.name.replace(/"/g, "&quot;")}" data-level="${c.level}"
               style="transition-delay:${(i % 3) * 80}ms">
        <span class="course-card__badge ${badgeClass(c.level)}">${c.level}</span>
        <h3>${c.name}</h3>
        <div class="course-card__foot">
          <span><i class="fa-regular fa-clock"></i> 1 - 3 Years</span>
          <span class="course-card__link">View Detail <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </article>`).join("");
    observeReveals();
  }
  renderCourses();

  $$("#courseTabs .tab").forEach(btn => {
    btn.addEventListener("click", () => {
      $$("#courseTabs .tab").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderCourses(btn.dataset.filter);
    });
  });

  const loadMoreCourses = $("#loadMoreCourses");
  if (loadMoreCourses) {
    loadMoreCourses.addEventListener("click", () => {
      const allTab = $("#courseTabs .tab[data-filter='all']");
      if (allTab) allTab.click();
      courseGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
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

  /* ---------- Course detail modal ---------- */
  const modal = $("#courseModal");

  function openCourseModal(name, level) {
    $("#mTitle").textContent = name;
    $("#mLevel").textContent = level;
    $("#mDesc").textContent =
      `${name} is a ${level.toLowerCase()} level programme delivered by our partner universities. ` +
      `GGE provides end-to-end support — course shortlisting, application filing, scholarship guidance, ` +
      `CAS/visa documentation and pre-departure briefing. Apply now for the upcoming intake.`;
    const badge = $("#mBadge");
    badge.textContent = level;
    badge.className = "course-card__badge " + badgeClass(level);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeCourseModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (courseGrid) {
    const handler = e => {
      const card = e.target.closest(".course-card");
      if (!card) return;
      e.preventDefault();
      openCourseModal(card.dataset.name, card.dataset.level);
    };
    courseGrid.addEventListener("click", handler);
    courseGrid.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") handler(e);
    });
  }
  modal.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeCourseModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeCourseModal(); });

  /* ---------------------------------------------------------
     RENDER: GALLERY
  --------------------------------------------------------- */
  const galleryGrid = $("#galleryGrid");
  if (galleryGrid) {
    galleryGrid.innerHTML = GALLERY.map((g, i) => `
      <figure class="gal-item reveal" data-src="${g.img}" style="transition-delay:${(i % 4) * 70}ms">
        <img src="${g.img}" alt="${g.t}" loading="lazy">
        <span class="gal-item__zoom"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
        <figcaption class="gal-item__overlay">
          <span>${g.s}</span>
          <strong>${g.t}</strong>
        </figcaption>
      </figure>`).join("");
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
            <div class="testi-card__avatar">${t.country[0]}</div>
            <div class="testi-card__meta">
              <strong>Verified Student</strong>
              <span><i class="fa-solid fa-location-dot"></i> ${t.country}</span>
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
  let sectionTops = sections.map(s => ({ el: s, id: s.id, top: 0 }));

  function measureSections() {
    sectionTops.forEach(s => { s.top = s.el.offsetTop; });
  }
  measureSections();

  // Single rAF-throttled scroll handler (header + toTop + active nav)
  let scrollRaf = 0;
  function onScroll() {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(() => {
      scrollRaf = 0;
      const y = window.scrollY;
      header.classList.toggle("is-scrolled", y > 40);
      toTopBtn.classList.toggle("show", y > 500);
      let current = "home";
      for (let i = 0; i < sectionTops.length; i++) {
        if (y >= sectionTops[i].top - 140) current = sectionTops[i].id;
      }
      navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  // Stop heavy work when tab is hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearInterval(slideTimer);
      clearInterval(tAuto);
    } else {
      restartSlider();
      tAuto = setInterval(() => { tIdx = (tIdx + 1) % pages(); updateTesti(); }, 5500);
      onScroll();
    }
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("open");
    document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "";
  });

  // Dropdown menus — open on click (all screen sizes), hover still works on desktop
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
        nav.classList.remove("open");
        hamburger.classList.remove("is-active");
        document.body.style.overflow = "";
      }
    });
  });

  $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------------------------------------------------------
     HERO SLIDER
  --------------------------------------------------------- */
  const slides = $$(".hero__slide");
  const dotsWrap = $("#heroDots");
  let slideIdx = 0, slideTimer;

  slides.forEach((_, i) => {
    const b = document.createElement("button");
    if (i === 0) b.classList.add("is-active");
    b.addEventListener("click", () => goSlide(i));
    dotsWrap.appendChild(b);
  });

  function goSlide(i) {
    slides[slideIdx].classList.remove("is-active");
    dotsWrap.children[slideIdx].classList.remove("is-active");
    slideIdx = (i + slides.length) % slides.length;
    slides[slideIdx].classList.add("is-active");
    dotsWrap.children[slideIdx].classList.add("is-active");
    restartSlider();
  }
  function restartSlider() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => goSlide(slideIdx + 1), 6500);
  }
  restartSlider();

  /* ---------------------------------------------------------
     SEARCH WIDGET (dependent dropdowns)
  --------------------------------------------------------- */
  const fCountry = $("#fCountry"), fUni = $("#fUniversity"),
        fLevel = $("#fLevel"), fCourse = $("#fCourse");

  const countryUniversityMap = {
    "United Kingdom": UNIVERSITIES.filter(u => u.loc === "UK"),
    "United States of America": UNIVERSITIES.filter(u => u.loc === "USA"),
    "Canada": UNIVERSITIES.filter(u => u.loc === "Canada"),
    "Australia": UNIVERSITIES.filter(u => u.loc === "Australia"),
    "Hungary": UNIVERSITIES.filter(u => u.loc === "Hungary"),
    "United Arab Emirates": UNIVERSITIES.filter(u => u.loc === "UAE")
  };

  if (fCountry) {
    fCountry.addEventListener("change", () => {
      const list = countryUniversityMap[fCountry.value] || [];
      fUni.innerHTML = '<option value="">Select University</option>' +
        list.map(u => `<option>${u.name}</option>`).join("") +
        (list.length === 0 && fCountry.value ? '<option>Any University</option>' : '');
      fUni.disabled = !fCountry.value;
      populateCourses();
    });

    // Populate the course list from the chosen University (and/or Level)
    function populateCourses() {
      if (!fCourse) return;
      const lvl = fLevel ? fLevel.value : "";
      const list = lvl ? COURSES.filter(c => norm(c.level) === norm(lvl)) : COURSES;
      fCourse.innerHTML = '<option value="">Select Course</option>' +
        list.map(c => `<option>${c.name}</option>`).join("");
      fCourse.disabled = false;
    }

    fUni.addEventListener("change", populateCourses);
    if (fLevel) fLevel.addEventListener("change", populateCourses);

    $("#courseSearch").addEventListener("submit", e => {
      e.preventDefault();
      const res = $("#searchResult");
      const bits = [fCountry.value, fUni.value, fLevel.value, fCourse.value].filter(Boolean);
      if (!fCountry.value) {
        res.textContent = "⚠ Please select a country to start your search.";
      } else {
        res.textContent = `✓ Found matches for: ${bits.join(" → ")}. A counsellor will share the full shortlist with you.`;
      }
      res.classList.add("show");
    });
  }

  /* ---------------------------------------------------------
     ENQUIRY + SUBSCRIBE FORMS
  --------------------------------------------------------- */
  $("#enquiryForm").addEventListener("submit", e => {
    e.preventDefault();
    const note = $("#enquiryNote");
    note.textContent = "✓ Thank you! Your enquiry has been received. Our team will contact you shortly.";
    note.classList.add("show");
    e.target.reset();
    setTimeout(() => note.classList.remove("show"), 6000);
  });

  $("#subscribeForm").addEventListener("submit", e => {
    e.preventDefault();
    const note = $("#subscribeNote");
    note.textContent = "✓ Subscribed successfully!";
    note.classList.add("show");
    e.target.reset();
    setTimeout(() => note.classList.remove("show"), 5000);
  });

  const contactForm = $("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const note = $("#contactNote");
      note.textContent = "✓ Message sent! Our team will get back to you shortly.";
      note.classList.add("show");
      e.target.reset();
      setTimeout(() => note.classList.remove("show"), 6000);
    });
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
    track.style.transform = `translateX(-${(shift * 100) / pv}%)`;
    [...dotsBox.children].forEach((d, i) => d.classList.toggle("is-active", i === tIdx));
  }
  $("#testiPrev").addEventListener("click", () => { tIdx = (tIdx - 1 + pages()) % pages(); updateTesti(); });
  $("#testiNext").addEventListener("click", () => { tIdx = (tIdx + 1) % pages(); updateTesti(); });
  buildDots();

  let tAuto = setInterval(() => { tIdx = (tIdx + 1) % pages(); updateTesti(); }, 5500);
  $("#testiSlider").addEventListener("mouseenter", () => clearInterval(tAuto));
  $("#testiSlider").addEventListener("mouseleave", () => {
    tAuto = setInterval(() => { tIdx = (tIdx + 1) % pages(); updateTesti(); }, 5500);
  });

  let testiResizeT;
  window.addEventListener("resize", () => {
    clearTimeout(testiResizeT);
    testiResizeT = setTimeout(() => { buildDots(); updateTesti(); }, 200);
  });

  /* ---------------------------------------------------------
     COUNTER ANIMATION
  --------------------------------------------------------- */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const dur = 2000;
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

  /* ---------------------------------------------------------
     ACTIVATE REVEALS + COUNTERS
  --------------------------------------------------------- */
  observeReveals();
  if (counterObserver) {
    $$(".stat__num").forEach(el => counterObserver.observe(el));
  } else {
    $$(".stat__num").forEach(animateCount);
  }

  // Safety net — force-show anything already inside the viewport
  // (covers delayed observers, restored tabs, odd environments)
  function healReveals() {
    $$(".reveal:not(.visible)").forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 80 && r.bottom > -80) el.classList.add("visible");
    });
  }
  healReveals();
  window.addEventListener("load", () => setTimeout(healReveals, 400));
  setTimeout(healReveals, 1200);
  setTimeout(healReveals, 3000);
  let resizeT;
  window.addEventListener("resize", () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => { measureSections(); onScroll(); }, 150);
  });

  /* ---------------------------------------------------------
     LIGHTBOX
  --------------------------------------------------------- */
  const lightbox = $("#lightbox"), lbImg = $("#lightboxImg");

  document.addEventListener("click", e => {
    const item = e.target.closest(".gal-item");
    if (item) {
      lbImg.src = item.dataset.src;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  });
  function closeLb() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }
  $("#lightboxClose").addEventListener("click", closeLb);
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLb(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });

})();
