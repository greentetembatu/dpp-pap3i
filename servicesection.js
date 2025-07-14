

    // JavaScript untuk efek fade-in pada kartu mitra dan kegiatan saat di-scroll
    const sectionsToAnimate = [
        '#mitra-section .card',
        '#kegiatan-section .card' // Tambahkan selector untuk kartu kegiatan
    ];

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

    sectionsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(card => {
            card.style.opacity = 0; // Sembunyikan elemen awalnya
            card.style.transform = 'translateY(20px)'; // Geser sedikit ke bawah awalnya
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'; // Tambah transisi
            cardObserver.observe(card); // Mulai mengamati kartu
        });
    });























