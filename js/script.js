// =============================================
// SCRIPT.JS — DPP P-AP3I
// Semua handler DOMContentLoaded di level atas (tidak bersarang)
// Setiap blok punya guard null
// =============================================

/* ============================================================
 * 1. SMOOTH SCROLL, NAVBAR SCROLL, FOOTER YEAR
 * ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  // --- Smooth scroll untuk anchor internal ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#" || href.length < 2) return;
      if (this.classList.contains("dropdown-toggle")) return;
      if (this.closest(".dropdown-menu")) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (
        navbarToggler &&
        navbarCollapse &&
        navbarCollapse.classList.contains("show")
      ) {
        navbarToggler.click();
      }
    });
  });

  // --- Navbar scrolled class ---
  const mainNavbar = document.getElementById("main-navbar");
  if (mainNavbar) {
    window.addEventListener("scroll", function () {
      mainNavbar.classList.toggle("navbar-scrolled", window.scrollY > 50);
    });
  }

  // --- Dynamic footer year ---
  const currentYearElement = document.querySelector(".footer-copyright p");
  if (currentYearElement) {
    currentYearElement.innerHTML = `&copy; ${new Date().getFullYear()} DPP. P-AP3I. All Rights Reserved.`;
  }
});

/* ============================================================
 * 2. HERO CAROUSEL
 * ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-section .carousel-slide");
  if (slides.length === 0) return;

  const dots = document.querySelectorAll(".hero-section .carousel-dot");
  const prevBtn = document.querySelector(".hero-section .carousel-arrow.prev");
  const nextBtn = document.querySelector(".hero-section .carousel-arrow.next");
  if (!prevBtn || !nextBtn || dots.length === 0) return;

  let currentIndex = 0;
  const total = slides.length;

  const updateSlide = (index) => {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    currentIndex = index;
  };

  dots.forEach((dot, i) => {
    if (!dot) return;
    dot.addEventListener("click", () => updateSlide(i));
  });
  prevBtn.addEventListener("click", () =>
    updateSlide((currentIndex - 1 + total) % total),
  );
  nextBtn.addEventListener("click", () =>
    updateSlide((currentIndex + 1) % total),
  );

  let timer = setInterval(() => updateSlide((currentIndex + 1) % total), 5000);
  const carousel = document.querySelector(".hero-section .carousel-container");
  if (carousel) {
    carousel.addEventListener("mouseenter", () => clearInterval(timer));
    carousel.addEventListener("mouseleave", () => {
      clearInterval(timer);
      timer = setInterval(() => updateSlide((currentIndex + 1) % total), 5000);
    });
  }
});

/* ============================================================
 * 3. PELATIHAN CAROUSEL (satu versi saja)
 * ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".pelatihan-carousel-slides");
  if (!wrapper) return;

  const items = wrapper.querySelectorAll(".pelatihan-carousel-item");
  if (items.length === 0) return;

  const prev = document.querySelector(
    ".pelatihan-section .pelatihan-carousel-button.prev",
  );
  const next = document.querySelector(
    ".pelatihan-section .pelatihan-carousel-button.next",
  );
  if (!prev || !next) return;

  let i = 0;
  const total = items.length;
  const update = () => {
    wrapper.style.transform = `translateX(-${i * 100}%)`;
  };

  next.addEventListener("click", () => {
    i = (i + 1) % total;
    update();
  });
  prev.addEventListener("click", () => {
    i = (i - 1 + total) % total;
    update();
  });
  update();
});

/* ============================================================
 * 4. MITRA CAROUSEL (satu versi saja)
 * ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("mitra-kami");
  if (!section) return;

  const wrapper = section.querySelector(".mitra-carousel-slides");
  if (!wrapper) return;

  const items = wrapper.querySelectorAll(".mitra-carousel-item");
  if (items.length === 0) return;

  const prev = section.querySelector(".mitra-carousel-button.prev");
  const next = section.querySelector(".mitra-carousel-button.next");
  if (!prev || !next) return;

  let i = 0;
  const total = items.length;
  const update = () => {
    wrapper.style.transform = `translateX(-${i * 100}%)`;
  };

  next.addEventListener("click", () => {
    i = (i + 1) % total;
    update();
  });
  prev.addEventListener("click", () => {
    i = (i - 1 + total) % total;
    update();
  });

  let timer = setInterval(() => {
    i = (i + 1) % total;
    update();
  }, 3000);

  wrapper.addEventListener("mouseenter", () => clearInterval(timer));
  wrapper.addEventListener("mouseleave", () => {
    clearInterval(timer);
    timer = setInterval(() => {
      i = (i + 1) % total;
      update();
    }, 3000);
  });

  update();
});

/* ============================================================
 * 5. DATA POPULATE — semua konten dari SITE_DATA (data.js)
 * ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof SITE_DATA === "undefined") {
    console.warn("[P-AP3I] data.js belum dimuat — konten dinamis dilewati.");
    return;
  }

  const data = SITE_DATA;

  /* ---------- Helper: guard ---------- */
  const qs = (sel, parent = document) => parent.querySelector(sel);
  const qsa = (sel, parent = document) => parent.querySelectorAll(sel);

  /* ---------- HERO ---------- */
  const populateHeroSection = (hero) => {
    if (!hero || !hero.welcomeMessage) return;
    const msg = hero.welcomeMessage;

    const titleEl = qs(".welcome-message h1");
    if (titleEl && msg.title) titleEl.textContent = msg.title;
    const subEl = qs(".welcome-message h2");
    if (subEl && msg.subtitle) subEl.textContent = msg.subtitle;
    const tagEl = qs(".welcome-message p");
    if (tagEl && msg.tagline) tagEl.textContent = msg.tagline;
    const ctaEl = qs(".welcome-message .cta-button");
    if (ctaEl && msg.ctaButton) {
      ctaEl.textContent = msg.ctaButton.text;
      ctaEl.href = msg.ctaButton.href;
    }

    const slidesEl = qs(".hero-section .carousel-slides");
    if (slidesEl && Array.isArray(hero.carouselSlides)) {
      slidesEl.innerHTML = "";
      hero.carouselSlides.forEach((slide, index) => {
        const div = document.createElement("div");
        div.classList.add("carousel-slide");
        if (index === 0) div.classList.add("active");
        div.innerHTML = `<img src="${slide.image}" alt="${slide.alt}" /><div class="slide-caption">${slide.caption}</div>`;
        slidesEl.appendChild(div);
      });
    }
  };

  /* ---------- ABOUT ---------- */
  const populateAboutSection = (about) => {
    if (!about) return;
    const titleEl = qs("#tentang-kami .section-title");
    if (titleEl && about.title) titleEl.textContent = about.title;

    const imgEl = qs(".about-container .image-wrapper img");
    if (imgEl && about.image) imgEl.src = about.image;

    const nameEl = qs(".about-container .image-caption h3");
    if (nameEl && about.imageCaption?.name)
      nameEl.textContent = about.imageCaption.name;

    const posEl = qs(".about-container .image-caption p");
    if (posEl && about.imageCaption?.position)
      posEl.textContent = about.imageCaption.position;

    const textEl = qs(".about-container .text-content");
    if (textEl && about.content) {
      textEl.innerHTML = `<h4>${about.content.heading || ""}</h4>`;
      (about.content.paragraphs || []).forEach((p) => {
        const newP = document.createElement("p");
        newP.innerHTML = p;
        textEl.appendChild(newP);
      });
    }
  };

  /* ---------- VISI MISI ---------- */
  const populateVisiMisiSection = (vm) => {
    if (!vm) return;
    const headEl = qs(".visi-misi-head-title");
    if (headEl)
      headEl.innerHTML = `VISI MISI <span class="highlight-text">P-AP3I</span>`;

    const visiTitle = qs(".visi-card .visi-title");
    if (visiTitle && vm.visi?.title) visiTitle.textContent = vm.visi.title;
    const visiDesc = qs(".visi-card .visi-description");
    if (visiDesc && vm.visi?.description)
      visiDesc.textContent = vm.visi.description;

    const misiTitle = qs(".misi-card .misi-title");
    if (misiTitle && vm.misi?.title) misiTitle.textContent = vm.misi.title;

    const misiList = qs(".misi-card .misi-list");
    if (misiList && Array.isArray(vm.misi?.list)) {
      misiList.innerHTML = "";
      vm.misi.list.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        misiList.appendChild(li);
      });
    }
  };

  /* ---------- HISTORY ---------- */
  const populateHistorySection = (history) => {
    if (!history) return;
    const titleEl = qs(".history-title");
    if (titleEl && history.title) {
      titleEl.innerHTML = history.title.replace(
        "P-AP3I",
        '<span class="highlight-text">P-AP3I</span>',
      );
    }

    const body = qs(".history-card-body");
    if (body && history.content) {
      body.innerHTML = "";
      (history.content.paragraphs || []).forEach((p) => {
        const newP = document.createElement("p");
        newP.innerHTML = p;
        body.appendChild(newP);
      });
      if (history.image) {
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("history-image-wrapper");
        imgDiv.innerHTML = `<img src="${history.image}" class="history-image" alt="Foto Sejarah P-AP3I"><p class="image-caption-text">${history.imageCaption || ""}</p>`;
        body.appendChild(imgDiv);
      }
    }
  };

  /* ---------- TEAM ---------- */
  const populateOurTeamSection = (team) => {
    if (!team) return;
    const titleEl = qs(".tim-kami-title");
    if (titleEl && team.title) {
      titleEl.innerHTML = team.title.replace(
        "KAMI",
        '<span class="highlight-text">KAMI</span>',
      );
    }
    const grid = qs(".tim-kami-grid");
    if (grid && Array.isArray(team.members)) {
      grid.innerHTML = "";
      team.members.forEach((m) => {
        const item = document.createElement("div");
        item.classList.add("tim-kami-item");
        item.innerHTML = `
          <img src="${m.image}" class="tim-kami-image" alt="${m.alt}">
          <div class="tim-kami-caption">
            <h3>${m.name}</h3>
            <p>${m.position}</p>
          </div>`;
        grid.appendChild(item);
      });
    }
  };

  /* ---------- SCOPE ---------- */
  const populateScopeSection = (scope) => {
    if (!scope) return;
    const titleEl = qs(".ruang-lingkup-title");
    if (titleEl && scope.title) {
      titleEl.innerHTML = scope.title.replace(
        "P-AP3I",
        '<span class="highlight-text">P-AP3I</span>',
      );
    }
    const list = qs(".ruang-lingkup-list");
    if (list && Array.isArray(scope.list)) {
      list.innerHTML = "";
      scope.list.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
    }
  };

  /* ---------- LEGAL ---------- */
  const populateLegalSection = (legal) => {
    if (!legal) return;
    const titleEl = qs(".legal-title");
    if (titleEl && legal.title) {
      titleEl.innerHTML = legal.title.replace(
        "P-AP3I",
        '<span class="highlight-text">P-AP3I</span>',
      );
    }
    const list = qs(".legal-list");
    if (list && Array.isArray(legal.list)) {
      list.innerHTML = "";
      legal.list.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
    }
  };

  /* ---------- KTA / REKOMENDASI ---------- */
  const populateKtaSection = (kta) => {
    if (!kta) return;
    const mainTitle = qs(".rekomendasi-kta-main-title");
    if (mainTitle && kta.title) {
      mainTitle.innerHTML = kta.title.replace(
        "& KTA",
        '<span class="highlight-text">& KTA</span>',
      );
    }

    if (kta.rekomendasi) {
      const card = qs(".rekomendasi-card");
      if (card) {
        const t = qs(".rekomendasi-title", card);
        const d = qs(".rekomendasi-description", card);
        if (t) t.textContent = kta.rekomendasi.title || "";
        if (d)
          d.innerHTML = `${kta.rekomendasi.description || ""} <a href="${kta.rekomendasi.linkHref || "#"}" class="cta-link">${kta.rekomendasi.linkText || ""}</a>`;
      }
    }
    if (kta.kta) {
      const card = qs(".kta-card");
      if (card) {
        const t = qs(".kta-title", card);
        const d = qs(".kta-description", card);
        if (t) t.textContent = kta.kta.title || "";
        if (d)
          d.innerHTML = `${kta.kta.description || ""} <a href="${kta.kta.linkHref || "#"}" class="cta-link">${kta.kta.linkText || ""}</a>`;
      }
    }
  };

  /* ---------- TRAINING (isi slide) ---------- */
  const populateTrainingSection = (training) => {
    if (!training) return;
    const titleEl = qs(".pelatihan-title");
    if (titleEl && training.title) titleEl.textContent = training.title;

    const slidesEl = qs(".pelatihan-carousel-slides");
    if (slidesEl && Array.isArray(training.carouselSlides)) {
      slidesEl.innerHTML = "";
      training.carouselSlides.forEach((slide) => {
        const item = document.createElement("div");
        item.classList.add("pelatihan-carousel-item");
        item.innerHTML = `<img src="${slide.image}" alt="${slide.alt}" class="pelatihan-carousel-image"><p class="pelatihan-carousel-caption">${slide.caption}</p>`;
        slidesEl.appendChild(item);
      });
    }
  };

  /* ---------- BANTUAN HUKUM ---------- */
  const populateBantuanHukumSection = (bh) => {
    if (!bh) return;
    const titleEl = qs(".bantuan-hukum-title");
    if (titleEl) titleEl.textContent = bh.title || "";

    const imgEl = qs(".bantuan-hukum-image-wrapper img");
    if (imgEl && bh.image) {
      imgEl.src = bh.image;
      imgEl.alt = `Foto ${bh.imageCaption?.title || ""}`;
    }
    const h3 = qs(".bantuan-hukum-image-caption h3");
    if (h3) h3.textContent = bh.imageCaption?.title || "";
    const p = qs(".bantuan-hukum-image-caption p");
    if (p) p.textContent = bh.imageCaption?.date || "";

    const h4 = qs(".bantuan-hukum-content h4");
    if (h4) h4.textContent = bh.content?.heading || "";

    const content = qs(".bantuan-hukum-content");
    if (content && Array.isArray(bh.content?.paragraphs)) {
      content.querySelectorAll("p").forEach((p) => p.remove());
      bh.content.paragraphs.forEach((text) => {
        const np = document.createElement("p");
        np.textContent = text;
        content.appendChild(np);
      });
    }
  };

  /* ---------- PARTNERS ---------- */
  const populatePartnersSection = (partners) => {
    if (!partners) return;
    const mainTitle = qs(".mitra-kami-main-title");
    if (mainTitle && partners.title) {
      mainTitle.innerHTML = partners.title.replace(
        "P-AP3I",
        '<span class="highlight-text">P-AP3I</span>',
      );
    }

    const wrapper = qs(".mitra-description-wrapper");
    if (wrapper && Array.isArray(partners.descriptions)) {
      wrapper.innerHTML = "";
      partners.descriptions.forEach((desc) => {
        const card = document.createElement("div");
        card.classList.add("mitra-card");
        card.innerHTML = `<h3 class="mitra-card-title">${desc.title}</h3><p class="mitra-card-description">${desc.description}</p>`;
        wrapper.appendChild(card);
      });
    }

    const carouselTitle = qs(".mitra-carousel-title");
    if (carouselTitle) carouselTitle.textContent = partners.carouselTitle || "";

    const slidesEl = qs(".mitra-carousel-slides");
    if (slidesEl && Array.isArray(partners.carouselSlides)) {
      slidesEl.innerHTML = "";
      partners.carouselSlides.forEach((slide) => {
        const item = document.createElement("div");
        item.classList.add("mitra-carousel-item");
        item.innerHTML = `<img src="${slide.image}" alt="${slide.alt}" class="mitra-carousel-image"><p class="mitra-carousel-caption">${slide.caption}</p>`;
        slidesEl.appendChild(item);
      });
    }
  };

  /* ---------- KEGIATAN GENERIC ---------- */
  const populateActivitySection = (activity, prefix) => {
    if (!activity) return;
    const titleEl = qs(`.${prefix}-title`);
    if (titleEl) titleEl.textContent = activity.title || "";

    const imgEl = qs(`.${prefix}-image-wrapper img`);
    if (imgEl && activity.image) {
      imgEl.src = activity.image;
      imgEl.alt = `Foto ${activity.imageCaption?.title || ""}`;
    }
    const h3 = qs(`.${prefix}-image-caption h3`);
    if (h3) h3.textContent = activity.imageCaption?.title || "";
    const p = qs(`.${prefix}-image-caption p`);
    if (p) p.textContent = activity.imageCaption?.date || "";

    const h4 = qs(`.${prefix}-content h4`);
    if (h4) h4.textContent = activity.content?.heading || "";

    const content = qs(`.${prefix}-content`);
    if (content && Array.isArray(activity.content?.paragraphs)) {
      content.querySelectorAll("p").forEach((p) => p.remove());
      activity.content.paragraphs.forEach((text) => {
        const np = document.createElement("p");
        np.textContent = text;
        content.appendChild(np);
      });
    }
  };

  /* ---------- BLOG & BERITA GENERIC ---------- */
  const populateArticles = (section, cardClass, prefix) => {
    if (!section) return;
    const titleEl = qs(`.${prefix}-section .${prefix}-title`);
    if (titleEl && section.title) {
      titleEl.innerHTML = section.title.replace(
        "P-AP3I",
        '<span class="highlight-text">P-AP3I</span>',
      );
    }
    const wrapper = qs(`.${prefix}-list-wrapper`);
    if (wrapper && Array.isArray(section.articles)) {
      wrapper.innerHTML = "";
      section.articles.forEach((a) => {
        const card = document.createElement("div");
        card.classList.add(cardClass);
        card.innerHTML = `
          <div class="${cardClass}-head">
            <h4>${a.title}</h4>
            <h5>${a.subtitle}</h5>
            <h5>Penulis: ${a.author}</h5>
            <p>Tanggal: ${a.date}</p>
          </div>
          <div class="${cardClass}-body">
            <div class="${prefix}-image-wrapper">
              <img src="${a.image}" class="${prefix}-image" alt="${a.imageAlt}">
              <p class="${prefix}-image-caption-text">${a.caption}</p>
            </div>
            <p>${a.content}</p>
          </div>`;
        wrapper.appendChild(card);
      });
    }
  };

  /* ---------- SOUVENIR ---------- */
  const populateSouvenirSection = (souvenir) => {
    if (!souvenir) return;
    const container = document.getElementById("souvenir-section");
    if (!container) return;

    const titleEl = qs(".souvenir-title", container);
    if (titleEl) titleEl.textContent = souvenir.title || "";

    const descEl = qs(".souvenir-description", container);
    if (descEl) descEl.textContent = souvenir.description || "";

    const gallery = qs(".souvenir-gallery", container);
    if (gallery && Array.isArray(souvenir.items)) {
      gallery.innerHTML = "";
      souvenir.items.forEach((item) => {
        const a = document.createElement("a");
        a.classList.add("souvenir-item");
        a.href = item.href || "#";
        if (item.href && item.href !== "#") {
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.alt;
        img.loading = "lazy";
        a.appendChild(img);
        gallery.appendChild(a);
      });
    }
  };
  /* ============================================================
   * BANNER IKLAN (4 Slot Terpisah dengan Tombol)
   * ============================================================ */
  const populateBannersSection = (banners) => {
    if (!banners) return;

    for (let i = 1; i <= 4; i++) {
      const bannerData = banners[`banner${i}`];
      const section = document.getElementById(`banner-section-${i}`);
      if (!section) continue;

      const imgEl = section.querySelector('.banner-img');
      const actionEl = section.querySelector('.banner-action');
      const btnEl = section.querySelector('.banner-btn');

      // 1. Atur Gambar
      if (!bannerData || !bannerData.image) {
        section.style.display = 'none';
        continue;
      }
      
      imgEl.src = bannerData.image;
      imgEl.alt = bannerData.alt || `Banner Iklan ${i}`;
      imgEl.loading = 'lazy';

      // 2. Atur Tombol (Jika ada link)
      if (bannerData.link && actionEl && btnEl) {
        actionEl.style.display = 'block'; // Tampilkan wadah tombol
        btnEl.href = bannerData.link;
        btnEl.textContent = bannerData.buttonText || 'Selengkapnya';
      } else if (actionEl) {
        actionEl.style.display = 'none';  // Sembunyikan jika link kosong
      }
    }
  };
  
  /* ---------- PANGGIL SEMUA ---------- */
  populateHeroSection(data.heroSection);
  populateAboutSection(data.aboutSection);
  populateVisiMisiSection(data.visiMisiSection);
  populateHistorySection(data.historySection);
  populateOurTeamSection(data.ourTeamSection);
  populateScopeSection(data.scopeSection);
  populateLegalSection(data.legalSection);
  populateKtaSection(data.ktaSection);
  populateTrainingSection(data.trainingSection);
  populateBantuanHukumSection(data.bantuanHukumSection);
  populatePartnersSection(data.partnersSection);
  populateActivitySection(data.dppActivitySection, "kegiatan-dpp");
  populateActivitySection(data.dpdActivitySection, "kegiatan-dpd");
  populateActivitySection(data.dpcActivitySection, "kegiatan-dpc");
  populateArticles(data.blogSection, "blog-card", "blog");
  populateArticles(data.beritaSection, "berita-card", "berita");
  populateSouvenirSection(data.souvenirSection);
  populateBannersSection(data.bannersSection);
});












  /* ============================================================
   * 6. POPUP PROMO
   *
   * Muncul setiap `intervalMs` (default 3 menit).
   * Konten diambil dari SITE_DATA.popupSection.
   * ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof SITE_DATA === "undefined" || !SITE_DATA.popupSection) return;

  const cfg = SITE_DATA.popupSection;
  if (!cfg.active) return;
  if (!cfg.image) return;

  const popup = document.getElementById("popup-promo");
  if (!popup) return;

  const closeBtn = popup.querySelector(".popup-close");
  const imgEl = popup.querySelector(".popup-image");
  const titleEl = popup.querySelector(".popup-title");
  const descEl = popup.querySelector(".popup-description");
  const ctaEl = popup.querySelector(".popup-cta");

  // --- Isi konten dari data ---
  imgEl.src = cfg.image;
  imgEl.alt = cfg.imageAlt || "Promo";
  titleEl.textContent = cfg.title || "";
  descEl.textContent = cfg.description || "";

  if (!cfg.title) titleEl.style.display = "none";
  if (!cfg.description) descEl.style.display = "none";

  // Tombol CTA
  ctaEl.textContent = cfg.buttonText || "Selengkapnya";
  ctaEl.href = cfg.buttonHref || "#";
  if (cfg.openInNewTab) {
    ctaEl.target = "_blank";
    ctaEl.rel = "noopener noreferrer";
  } else {
    ctaEl.removeAttribute("target");
    ctaEl.removeAttribute("rel");
  }

  // --- Fungsi buka / tutup ---
  let isOpen = false;

  const openPopup = () => {
    if (isOpen) return;
    isOpen = true;
    popup.classList.add("is-visible");
    popup.setAttribute("aria-hidden", "false");
    document.body.classList.add("popup-open");
  };

  const closePopup = () => {
    if (!isOpen) return;
    isOpen = false;
    popup.classList.remove("is-visible");
    popup.setAttribute("aria-hidden", "true");
    document.body.classList.remove("popup-open");
  };

  // --- Event: tombol close ---
  if (closeBtn) closeBtn.addEventListener("click", closePopup);

  // --- Event: klik di luar card (overlay) ---
  popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
  });

  // --- Event: tombol Escape ---
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) closePopup();
  });

  // --- Event: tombol CTA ditutup setelah diklik (opsional) ---
  ctaEl.addEventListener("click", () => {
    setTimeout(closePopup, 100);
  });

  // ============================================================
  // LOGIKA WAKTU POPUP
  // ============================================================
  const interval = Number(cfg.intervalMs) || 180000; // default 3 menit

  // 1. Munculkan saat pertama kali web dibuka (beri jeda 2 detik agar elegan)
  setTimeout(openPopup, 2000);

  // 2. Munculkan berulang setiap 3 menit
  setInterval(() => {
    // Jika popup sedang terbuka, jangan tampilkan ulang
    if (isOpen) return;
    openPopup();
  }, interval);
});