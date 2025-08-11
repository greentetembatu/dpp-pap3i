// Custom JavaScript for DPP. P-AP3I Website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the navbar toggler on small screens after clicking a link
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarToggler && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Add a class to the navbar on scroll for a sticky effect (optional)
    const mainNavbar = document.getElementById('main-navbar');
    if (mainNavbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { // Adjust value as needed
                mainNavbar.classList.add('navbar-scrolled');
            } else {
                mainNavbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Example of a simple alert on form submission (if you add a contact form later)
    // const contactForm = document.getElementById('contactForm');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //         alert('Pesan Anda telah terkirim!');
    //         this.reset();
    //     });
    // }

    // Dynamic year for footer copyright
    const currentYearElement = document.querySelector('.footer .mb-0');
    if (currentYearElement) {
        currentYearElement.innerHTML = `&copy; ${new Date().getFullYear()} DPP. P-AP3I. All Rights Reserved.`;
    }
});









document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    
    // Fungsi untuk mengupdate slide
    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
    }
    
    // Navigasi dengan dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            updateSlide(parseInt(dot.getAttribute('data-index')));
        });
    });
    
    // Tombol prev/next
    prevBtn.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % slides.length;
        updateSlide(newIndex);
    });
    
    // Auto slide (opsional)
    let slideInterval = setInterval(() => {
        const newIndex = (currentIndex + 1) % slides.length;
        updateSlide(newIndex);
    }, 900);
    
    // Hentikan auto slide saat hover
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            const newIndex = (currentIndex + 1) % slides.length;
            updateSlide(newIndex);
        }, 900);
    });
});














document.addEventListener('DOMContentLoaded', () => {
  const carouselSlides = document.querySelector('.pelatihan-carousel-slides');
  const carouselItems = document.querySelectorAll('.pelatihan-carousel-item');
  const prevButton = document.querySelector('.pelatihan-carousel-button.prev');
  const nextButton = document.querySelector('.pelatihan-carousel-button.next');
  
  let currentIndex = 0;
  const totalItems = carouselItems.length;

  const updateCarousel = () => {
    carouselSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  };

  const showPrevSlide = () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  };

  nextButton.addEventListener('click', showNextSlide);
  prevButton.addEventListener('click', showPrevSlide);
  
  // Tampilkan slide pertama saat halaman dimuat
  updateCarousel();
});










document.addEventListener('DOMContentLoaded', () => {
  const mitraSection = document.getElementById('mitra-kami');
  if (!mitraSection) return;

  const carouselSlides = mitraSection.querySelector('.mitra-carousel-slides');
  const carouselItems = mitraSection.querySelectorAll('.mitra-carousel-item');
  const prevButton = mitraSection.querySelector('.mitra-carousel-button.prev');
  const nextButton = mitraSection.querySelector('.mitra-carousel-button.next');
  
  let currentIndex = 0;
  const totalItems = carouselItems.length;
  let autoplayInterval; // Variabel untuk menyimpan ID interval

  const updateCarousel = () => {
    carouselSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  };

  const showPrevSlide = () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  };

  // Fungsi untuk memulai autoplay
  const startAutoplay = () => {
    autoplayInterval = setInterval(showNextSlide, 3000); // Ganti slide setiap 3 detik
  };

  // Fungsi untuk menghentikan autoplay (saat hover)
  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
  };

  nextButton.addEventListener('click', showNextSlide);
  prevButton.addEventListener('click', showPrevSlide);
  
  // Menghentikan dan memulai ulang autoplay saat mouse masuk/keluar dari carousel
  carouselSlides.addEventListener('mouseenter', stopAutoplay);
  carouselSlides.addEventListener('mouseleave', startAutoplay);
  
  // Memulai autoplay saat halaman dimuat
  startAutoplay();
  
  updateCarousel();
});

















document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk mengambil data dari file JSON
    const fetchData = async () => {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            // Panggil setiap fungsi populate secara terpisah
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
            populateDppActivitySection(data.dppActivitySection);
            populateDpdActivitySection(data.dpdActivitySection);
            populateDpcActivitySection(data.dpcActivitySection);
            
            // Panggil seksi blog dan berita
            populateBlogSection(data.blogSection);
            populateBeritaSection(data.beritaSection);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    // --- FUNGSI UNTUK SETIAP SEKSSI SECARA INDEPENDEN ---
    
    const populateHeroSection = (hero) => {
        if (!hero) return;
        const heroTitle = document.querySelector('.welcome-message h1');
        if (heroTitle) heroTitle.textContent = hero.welcomeMessage.title;
        const heroSubtitle = document.querySelector('.welcome-message h2');
        if (heroSubtitle) heroSubtitle.textContent = hero.welcomeMessage.subtitle;
        const heroTagline = document.querySelector('.welcome-message p');
        if (heroTagline) heroTagline.textContent = hero.welcomeMessage.tagline;
        const ctaButton = document.querySelector('.welcome-message .cta-button');
        if (ctaButton) {
            ctaButton.textContent = hero.welcomeMessage.ctaButton.text;
            ctaButton.href = hero.welcomeMessage.ctaButton.href;
        }

        const heroCarouselSlidesContainer = document.querySelector('.hero-section .carousel-slides');
        if (heroCarouselSlidesContainer) {
            heroCarouselSlidesContainer.innerHTML = '';
            hero.carouselSlides.forEach((slide, index) => {
                const slideDiv = document.createElement('div');
                slideDiv.classList.add('carousel-slide');
                if (index === 0) slideDiv.classList.add('active');
                slideDiv.innerHTML = `<img src="${slide.image}" alt="${slide.alt}" /><div class="slide-caption">${slide.caption}</div>`;
                heroCarouselSlidesContainer.appendChild(slideDiv);
            });
        }
    };

    const populateAboutSection = (about) => {
        if (!about) return;
        const aboutTitle = document.querySelector('#tentang-kami .section-title');
        if (aboutTitle) aboutTitle.textContent = about.title;
        const aboutImage = document.querySelector('.about-container .image-wrapper img');
        if (aboutImage) aboutImage.src = about.image;
        const aboutImageCaptionName = document.querySelector('.about-container .image-caption h3');
        if (aboutImageCaptionName) aboutImageCaptionName.textContent = about.imageCaption.name;
        const aboutImageCaptionPosition = document.querySelector('.about-container .image-caption p');
        if (aboutImageCaptionPosition) aboutImageCaptionPosition.textContent = about.imageCaption.position;
        const aboutParagraphsContainer = document.querySelector('.about-container .text-content');
        if (aboutParagraphsContainer) {
            aboutParagraphsContainer.innerHTML = `<h4>${about.content.heading}</h4>`;
            about.content.paragraphs.forEach(p => {
                const newP = document.createElement('p');
                newP.innerHTML = p;
                aboutParagraphsContainer.appendChild(newP);
            });
        }
    };
    
    const populateVisiMisiSection = (visiMisi) => {
        if (!visiMisi) return;
        const visiMisiTitle = document.querySelector('.visi-misi-head-title');
        if (visiMisiTitle) visiMisiTitle.innerHTML = `VISI MISI <span class="highlight-text">P-AP3I</span>`;
        const visiTitle = document.querySelector('.visi-card .visi-title');
        if (visiTitle) visiTitle.textContent = visiMisi.visi.title;
        const visiDescription = document.querySelector('.visi-card .visi-description');
        if (visiDescription) visiDescription.textContent = visiMisi.visi.description;
        const misiTitle = document.querySelector('.misi-card .misi-title');
        if (misiTitle) misiTitle.textContent = visiMisi.misi.title;
        const misiListContainer = document.querySelector('.misi-card .misi-list');
        if (misiListContainer) {
            misiListContainer.innerHTML = '';
            visiMisi.misi.list.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                misiListContainer.appendChild(li);
            });
        }
    };

    const populateHistorySection = (history) => {
        if (!history) return;
        const historyTitle = document.querySelector('.history-title');
        if (historyTitle) historyTitle.innerHTML = history.title.replace('P-AP3I', '<span class="highlight-text">P-AP3I</span>');
        const historyCardBody = document.querySelector('.history-card-body');
        if (historyCardBody) {
            historyCardBody.innerHTML = '';
            history.content.paragraphs.forEach(p => {
                const newP = document.createElement('p');
                newP.innerHTML = p;
                historyCardBody.appendChild(newP);
            });
            const historyImageDiv = document.createElement('div');
            historyImageDiv.classList.add('history-image-wrapper');
            historyImageDiv.innerHTML = `<img src="${history.image}" class="history-image" alt="Foto Sejarah P-AP3I"><p class="image-caption-text">${history.imageCaption}</p>`;
            historyCardBody.appendChild(historyImageDiv);
        }
    };
    
    const populateOurTeamSection = (team) => {
        if (!team) return;
        const teamTitle = document.querySelector('.tim-kami-title');
        if (teamTitle) teamTitle.innerHTML = team.title.replace('KAMI', '<span class="highlight-text">KAMI</span>');
        const teamGrid = document.querySelector('.tim-kami-grid');
        if (teamGrid) {
            teamGrid.innerHTML = '';
            team.members.forEach(member => {
                const item = document.createElement('div');
                item.classList.add('tim-kami-item');
                item.innerHTML = `
                    <img src="${member.image}" class="tim-kami-image" alt="${member.alt}">
                    <div class="tim-kami-caption">
                        <h3>${member.name}</h3>
                        <p>${member.position}</p>
                    </div>
                `;
                teamGrid.appendChild(item);
            });
        }
    };
    
    const populateScopeSection = (scope) => {
        if (!scope) return;
        const scopeTitle = document.querySelector('.ruang-lingkup-title');
        if (scopeTitle) scopeTitle.innerHTML = scope.title.replace('P-AP3I', '<span class="highlight-text">P-AP3I</span>');
        const scopeList = document.querySelector('.ruang-lingkup-list');
        if (scopeList) {
            scopeList.innerHTML = '';
            scope.list.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                scopeList.appendChild(li);
            });
        }
    };
    const populateLegalSection = (legal) => {
        if (!legal) return;
        const legalTitle = document.querySelector('.legal-title');
        if (legalTitle) legalTitle.innerHTML = legal.title.replace('P-AP3I', '<span class="highlight-text">P-AP3I</span>');
        const legalList = document.querySelector('.legal-list');
        if (legalList) {
            legalList.innerHTML = '';
            legal.list.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                legalList.appendChild(li);
            });
        }
    };

    const populateKtaSection = (kta) => {
        if (!kta) return;
        const ktaTitle = document.querySelector('.rekomendasi-kta-main-title');
        if (ktaTitle) ktaTitle.innerHTML = kta.title.replace('& KTA', '<span class="highlight-text">& KTA</span>');
        const rekomendasiCard = document.querySelector('.rekomendasi-card');
        if (rekomendasiCard) {
            rekomendasiCard.querySelector('.rekomendasi-title').textContent = kta.rekomendasi.title;
            rekomendasiCard.querySelector('.rekomendasi-description').innerHTML = `${kta.rekomendasi.description} <a href="${kta.rekomendasi.linkHref}" class="cta-link">${kta.rekomendasi.linkText}</a>`;
        }
        const ktaCard = document.querySelector('.kta-card');
        if (ktaCard) {
            ktaCard.querySelector('.kta-title').textContent = kta.kta.title;
            ktaCard.querySelector('.kta-description').innerHTML = `${kta.kta.description} <a href="${kta.kta.linkHref}" class="cta-link">${kta.kta.linkText}</a>`;
        }
    };

    const populateTrainingSection = (training) => {
        if (!training) return;
        const trainingTitle = document.querySelector('.pelatihan-title');
        if (trainingTitle) trainingTitle.textContent = training.title;
        const trainingCarouselSlides = document.querySelector('.pelatihan-carousel-slides');
        if (trainingCarouselSlides) {
            trainingCarouselSlides.innerHTML = '';
            training.carouselSlides.forEach(slide => {
                const item = document.createElement('div');
                item.classList.add('pelatihan-carousel-item');
                item.innerHTML = `<img src="${slide.image}" alt="${slide.alt}" class="pelatihan-carousel-image"><p class="pelatihan-carousel-caption">${slide.caption}</p>`;
                trainingCarouselSlides.appendChild(item);
            });
        }
    };
const populateBantuanHukumSection = (bantuanhukum) => {
    if (!bantuanhukum) return;

    const bantuanHukumTitle = document.querySelector('.bantuan-hukum-title');
    if (bantuanHukumTitle) bantuanHukumTitle.textContent = bantuanhukum.title;

    const bantuanHukumImage = document.querySelector('.bantuan-hukum-image-wrapper img');
    if (bantuanHukumImage) {
        bantuanHukumImage.src = bantuanhukum.image;
        bantuanHukumImage.alt = `Foto ${bantuanhukum.imageCaption.title}`;
    }

    const bantuanHukumImageCaptionH3 = document.querySelector('.bantuan-hukum-image-caption h3');
    if (bantuanHukumImageCaptionH3) bantuanHukumImageCaptionH3.textContent = bantuanhukum.imageCaption.title;

    const bantuanHukumImageCaptionP = document.querySelector('.bantuan-hukum-image-caption p');
    if (bantuanHukumImageCaptionP) bantuanHukumImageCaptionP.textContent = bantuanhukum.imageCaption.date;

    const bantuanHukumContentH4 = document.querySelector('.bantuan-hukum-content h4');
    if (bantuanHukumContentH4) bantuanHukumContentH4.textContent = bantuanhukum.content.heading;

    // Bagian penting: mengelola paragraf dari array
    const contentContainer = document.querySelector('.bantuan-hukum-content');
    if (contentContainer && bantuanhukum.content.paragraphs) {
        // Hapus semua paragraf yang sudah ada
        const existingParagraphs = contentContainer.querySelectorAll('p');
        existingParagraphs.forEach(p => p.remove());

        // Buat dan tambahkan paragraf baru untuk setiap item di array
        bantuanhukum.content.paragraphs.forEach(pText => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = pText;
            contentContainer.appendChild(newParagraph);
        });
    }
};


    const populatePartnersSection = (partners) => {
        if (!partners) return;
        const partnersTitle = document.querySelector('.mitra-kami-main-title');
        if (partnersTitle) partnersTitle.innerHTML = partners.title.replace('P-AP3I', '<span class="highlight-text">P-AP3I</span>');
        const mitraDescriptionWrapper = document.querySelector('.mitra-description-wrapper');
        if (mitraDescriptionWrapper) {
            mitraDescriptionWrapper.innerHTML = '';
            partners.descriptions.forEach(desc => {
                const card = document.createElement('div');
                card.classList.add('mitra-card');
                card.innerHTML = `<h3 class="mitra-card-title">${desc.title}</h3><p class="mitra-card-description">${desc.description}</p>`;
                mitraDescriptionWrapper.appendChild(card);
            });
        }
        const mitraCarouselTitle = document.querySelector('.mitra-carousel-title');
        if (mitraCarouselTitle) mitraCarouselTitle.textContent = partners.carouselTitle;
        const mitraCarouselSlides = document.querySelector('.mitra-carousel-slides');
        if (mitraCarouselSlides) {
            mitraCarouselSlides.innerHTML = '';
            partners.carouselSlides.forEach(slide => {
                const item = document.createElement('div');
                item.classList.add('mitra-carousel-item');
                item.innerHTML = `<img src="${slide.image}" alt="${slide.alt}" class="mitra-carousel-image"><p class="mitra-carousel-caption">${slide.caption}</p>`;
                mitraCarouselSlides.appendChild(item);
            });
        }
    };
    
const populateDppActivitySection = (kegiatanDPP) => {
    if (!kegiatanDPP) return;

    const kegiatanDPPTitle = document.querySelector('.kegiatan-dpp-title');
    if (kegiatanDPPTitle) kegiatanDPPTitle.textContent = kegiatanDPP.title;

    const kegiatanDPPImage = document.querySelector('.kegiatan-dpp-image-wrapper img');
    if (kegiatanDPPImage) {
        kegiatanDPPImage.src = kegiatanDPP.image;
        kegiatanDPPImage.alt = `Foto ${kegiatanDPP.imageCaption.title}`;
    }

    const kegiatanDPPImageCaptionH3 = document.querySelector('.kegiatan-dpp-image-caption h3');
    if (kegiatanDPPImageCaptionH3) kegiatanDPPImageCaptionH3.textContent = kegiatanDPP.imageCaption.title;

    const kegiatanDPPImageCaptionP = document.querySelector('.kegiatan-dpp-image-caption p');
    if (kegiatanDPPImageCaptionP) kegiatanDPPImageCaptionP.textContent = kegiatanDPP.imageCaption.date;

    const kegiatanDPPContentH4 = document.querySelector('.kegiatan-dpp-content h4');
    if (kegiatanDPPContentH4) kegiatanDPPContentH4.textContent = kegiatanDPP.content.heading;

    // Bagian penting: mengelola paragraf dari array
    const contentContainer = document.querySelector('.kegiatan-dpp-content');
    if (contentContainer && kegiatanDPP.content.paragraphs) {
        // Hapus semua paragraf yang sudah ada
        const existingParagraphs = contentContainer.querySelectorAll('p');
        existingParagraphs.forEach(p => p.remove());

        // Buat dan tambahkan paragraf baru untuk setiap item di array
        kegiatanDPP.content.paragraphs.forEach(pText => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = pText;
            contentContainer.appendChild(newParagraph);
        });
    }
};

// Pastikan fungsi ini dipanggil setelah data JSON berhasil dimuat
// Contoh:
// fetch('path/to/your/data.json')
//   .then(response => response.json())
//   .then(data => populateDppActivitySection(data.dppActivitySection))
//   .catch(error => console.error('Error fetching data:', error));
    
   const populateDpdActivitySection = (kegiatanDPD) => {
    if (!kegiatanDPD) return;

    const kegiatanDPDTitle = document.querySelector('.kegiatan-dpd-title');
    if (kegiatanDPDTitle) kegiatanDPDTitle.textContent = kegiatanDPD.title;

    const kegiatanDPDImage = document.querySelector('.kegiatan-dpd-image-wrapper img');
    if (kegiatanDPDImage) {
        kegiatanDPDImage.src = kegiatanDPD.image;
        kegiatanDPDImage.alt = `Foto ${kegiatanDPD.imageCaption.title}`;
    }

    const kegiatanDPDImageCaptionH3 = document.querySelector('.kegiatan-dpd-image-caption h3');
    if (kegiatanDPDImageCaptionH3) kegiatanDPDImageCaptionH3.textContent = kegiatanDPD.imageCaption.title;

    const kegiatanDPDImageCaptionP = document.querySelector('.kegiatan-dpd-image-caption p');
    if (kegiatanDPDImageCaptionP) kegiatanDPDImageCaptionP.textContent = kegiatanDPD.imageCaption.date;

    const kegiatanDPDContentH4 = document.querySelector('.kegiatan-dpd-content h4');
    if (kegiatanDPDContentH4) kegiatanDPDContentH4.textContent = kegiatanDPD.content.heading;

    // Bagian penting: mengelola paragraf dari array
    const contentContainer = document.querySelector('.kegiatan-dpd-content');
    if (contentContainer && kegiatanDPD.content.paragraphs) {
        // Hapus semua paragraf yang sudah ada
        const existingParagraphs = contentContainer.querySelectorAll('p');
        existingParagraphs.forEach(p => p.remove());

        // Buat dan tambahkan paragraf baru untuk setiap item di array
        kegiatanDPD.content.paragraphs.forEach(pText => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = pText;
            contentContainer.appendChild(newParagraph);
        });
    }
};
    
  



const populateDpcActivitySection = (kegiatanDPC) => {
    if (!kegiatanDPC) return;

    const kegiatanDPCTitle = document.querySelector('.kegiatan-dpc-title');
    if (kegiatanDPCTitle) kegiatanDPCTitle.textContent = kegiatanDPC.title;

    const kegiatanDPCImage = document.querySelector('.kegiatan-dpc-image-wrapper img');
    if (kegiatanDPCImage) {
        kegiatanDPCImage.src = kegiatanDPC.image;
        kegiatanDPCImage.alt = `Foto ${kegiatanDPC.imageCaption.title}`;
    }

    const kegiatanDPCImageCaptionH3 = document.querySelector('.kegiatan-dpc-image-caption h3');
    if (kegiatanDPCImageCaptionH3) kegiatanDPCImageCaptionH3.textContent = kegiatanDPC.imageCaption.title;

    const kegiatanDPCImageCaptionP = document.querySelector('.kegiatan-dpc-image-caption p');
    if (kegiatanDPCImageCaptionP) kegiatanDPCImageCaptionP.textContent = kegiatanDPC.imageCaption.date;

    const kegiatanDPCContentH4 = document.querySelector('.kegiatan-dpc-content h4');
    if (kegiatanDPCContentH4) kegiatanDPCContentH4.textContent = kegiatanDPC.content.heading;

    // Bagian penting: mengelola paragraf dari array
    const contentContainer = document.querySelector('.kegiatan-dpc-content');
    if (contentContainer && kegiatanDPC.content.paragraphs) {
        // Hapus semua paragraf yang sudah ada
        const existingParagraphs = contentContainer.querySelectorAll('p');
        existingParagraphs.forEach(p => p.remove());

        // Buat dan tambahkan paragraf baru untuk setiap item di array
        kegiatanDPC.content.paragraphs.forEach(pText => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = pText;
            contentContainer.appendChild(newParagraph);
        });
    }
};
 





// Fungsi untuk Blog Section
    const populateBlogSection = (blog) => {
        if (!blog) return; // Pastikan data blog ada
        const blogTitleElement = document.querySelector('.blog-section .blog-title');
        if (blogTitleElement) {
            blogTitleElement.innerHTML = blog.title.replace('P-AP3I', '<span class="highlight-text">P-AP3I</span>');
        }
        const blogListWrapper = document.querySelector('.blog-list-wrapper');
        if (blogListWrapper) {
            blogListWrapper.innerHTML = '';
            blog.articles.forEach(article => {
                const blogCard = document.createElement('div');
                blogCard.classList.add('blog-card');
                blogCard.innerHTML = `
                    <div class="blog-card-head">
                        <h4>${article.title}</h4>
                        <h5>${article.subtitle}</h5>
                        <h5>Penulis: ${article.author}</h5>
                        <p>Tanggal: ${article.date}</p>
                    </div>
                    <div class="blog-card-body">
                        <div class="blog-image-wrapper">
                            <img src="${article.image}" class="blog-image" alt="${article.imageAlt}">
                            <p class="blog-image-caption-text">${article.caption}</p>
                        </div>
                        <p>${article.content}</p>
                    </div>
                `;
                blogListWrapper.appendChild(blogCard);
            });
        }
    };
    
    // Fungsi untuk Berita Section
    const populateBeritaSection = (berita) => {
        if (!berita) return; // Pastikan data berita ada
        const beritaTitleElement = document.querySelector('.berita-section .berita-title');
        if (beritaTitleElement) {
            beritaTitleElement.innerHTML = berita.title.replace('P-AP3I', '<span class="highlight-text">P-AP3I</span>');
        }
        const beritaListWrapper = document.querySelector('.berita-list-wrapper');
        if (beritaListWrapper) {
            beritaListWrapper.innerHTML = '';
            berita.articles.forEach(article => {
                const beritaCard = document.createElement('div');
                beritaCard.classList.add('berita-card');
                beritaCard.innerHTML = `
                    <div class="berita-card-head">
                        <h4>${article.title}</h4>
                        <h5>${article.subtitle}</h5>
                        <h5>Penulis: ${article.author}</h5>
                        <p>Tanggal: ${article.date}</p>
                    </div>
                    <div class="berita-card-body">
                        <div class="berita-image-wrapper">
                            <img src="${article.image}" class="berita-image" alt="${article.imageAlt}">
                            <p class="berita-image-caption-text">${article.caption}</p>
                        </div>
                        <p>${article.content}</p>
                    </div>
                `;
                beritaListWrapper.appendChild(beritaCard);
            });
        }
    };

    fetchData();
});


















