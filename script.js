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
    }, 5000);
    
    // Hentikan auto slide saat hover
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            const newIndex = (currentIndex + 1) % slides.length;
            updateSlide(newIndex);
        }, 5000);
    });
});



























document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const gallerySlides = document.querySelectorAll('.gallery-slide');
    const serviceItems = document.querySelectorAll('.service-item');
    const dots = document.querySelectorAll('.gallery-dot');
    const prevBtn = document.querySelector('.gallery-arrow.prev');
    const nextBtn = document.querySelector('.gallery-arrow.next');
    let currentIndex = 0;
    let autoSlideInterval;
    
    // Initialize
    function init() {
        updateSlide(currentIndex);
        startAutoSlide();
    }
    
    // Update slide
    function updateSlide(index) {
        // Update gallery
        gallerySlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        // Update content
        serviceItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
    }
    
    // Auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % gallerySlides.length;
            updateSlide(nextIndex);
        }, 5000);
    }
    
    function pauseAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + gallerySlides.length) % gallerySlides.length;
        updateSlide(prevIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % gallerySlides.length;
        updateSlide(nextIndex);
    });
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            updateSlide(index);
        });
    });
    
    // Hover pause
    const gallery = document.querySelector('.services-gallery');
    gallery.addEventListener('mouseenter', pauseAutoSlide);
    gallery.addEventListener('mouseleave', startAutoSlide);
    
    // Initialize
    init();
});













































const mitraCards = document.querySelectorAll('#mitra-section .card');

    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.2 // Trigger saat 20% dari elemen terlihat
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Berhenti mengamati setelah animasi pertama
            }
        });
    }, observerOptions);

    mitraCards.forEach(card => {
        card.style.opacity = 0; // Sembunyikan elemen awalnya
        card.style.transform = 'translateY(20px)'; // Geser sedikit ke bawah awalnya
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'; // Tambah transisi
        cardObserver.observe(card); // Mulai mengamati kartu
    });















    



























    
