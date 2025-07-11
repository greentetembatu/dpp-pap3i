document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar Menu (Loaded from data.json) ---
    const navbarMenu = document.getElementById('navbar-menu');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            function createMenuItem(item) {
                const li = document.createElement('li');
                let linkHtml = `<i class="${item.icon}"></i> ${item.name}`;

                if (item.submenu) {
                    li.classList.add('dropdown');
                    linkHtml += ` <i class="fas fa-angle-down"></i>`;
                    li.innerHTML = `<a href="${item.link}" aria-haspopup="true" aria-expanded="false">${linkHtml}</a>`;
                    const subMenu = document.createElement('div');
                    subMenu.classList.add('sub-menu');
                    const ulSub = document.createElement('ul');
                    item.submenu.forEach(subItem => {
                        const subLi = document.createElement('li');
                        if (subItem.submenu) {
                            subLi.classList.add('nested-dropdown');
                            subLi.innerHTML = `<a href="${subItem.link}" aria-haspopup="true" aria-expanded="false">${subItem.name} <i class="fas fa-angle-right"></i></a>`;
                            const subMenu2 = document.createElement('div');
                            subMenu2.classList.add('sub-menu-2');
                            const ulSub2 = document.createElement('ul');
                            subItem.submenu.forEach(subSubItem => {
                                const subSubLi = document.createElement('li');
                                subSubLi.innerHTML = `<a href="${subSubItem.link}">${subSubItem.name}</a>`;
                                ulSub2.appendChild(subSubLi);
                            });
                            subMenu2.appendChild(ulSub2);
                            subLi.appendChild(subMenu2);
                        } else {
                            subLi.innerHTML = `<a href="${subItem.link}">${subItem.name}</a>`;
                        }
                        ulSub.appendChild(subLi);
                    });
                    subMenu.appendChild(ulSub);
                    li.appendChild(subMenu);
                } else {
                    li.innerHTML = `<a href="${item.link}">${linkHtml}</a>`;
                }
                return li;
            }

            data.navbarMenu.forEach(item => {
                navbarMenu.appendChild(createMenuItem(item));
            });

            // Set active class based on current URL hash (for single-page navigation)
            const currentHash = window.location.hash;
            if (currentHash) {
                const activeLink = navbarMenu.querySelector(`a[href="${currentHash}"]`);
                if (activeLink) {
                    // Remove active from default 'Home' if another section is active
                    const defaultHome = navbarMenu.querySelector('a[href="#hero-section"]');
                    if (defaultHome) defaultHome.classList.remove('active');
                    activeLink.classList.add('active');
                }
            } else {
                // Default active to Home if no hash is present
                const defaultHome = navbarMenu.querySelector('a[href="#hero-section"]');
                if (defaultHome) defaultHome.classList.add('active');
            }
        })
        .catch(error => console.error('Error fetching navbar data:', error));

    // --- Hamburger Menu Toggle ---
    const toggleButton = document.querySelector('.toggle-button');
    const menuBar = document.querySelector('.menu-bar');
    const navbarLinks = document.querySelectorAll('.menu-bar a');

    toggleButton.addEventListener('click', () => {
        menuBar.classList.toggle('active');
        toggleButton.classList.toggle('active');
        const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
        toggleButton.setAttribute('aria-expanded', !expanded);
    });

    // Close menu when a link is clicked (for mobile)
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) { // Adjust breakpoint as per CSS media query
                menuBar.classList.remove('active');
                toggleButton.classList.remove('active');
                toggleButton.setAttribute('aria-expanded', 'false');
            }

            // Remove 'active' from all links and add to the clicked one
            navbarLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
;

        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.navbar')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.querySelector('.sub-menu').style.display = 'none';
                dropdown.querySelector('a').setAttribute('aria-expanded', 'false');
            });
            document.querySelectorAll('.nested-dropdown').forEach(nestedDropdown => {
                nestedDropdown.querySelector('.sub-menu-2').style.display = 'none';
                nestedDropdown.querySelector('a').setAttribute('aria-expanded', 'false');
            });
        }
    });

    // --- Carousel Functionality ---
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevArrow = document.querySelector('.carousel-arrow.prev');
    const nextArrow = document.querySelector('.carousel-arrow.next');
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        // Hide all slides and remove active class from dots
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });

        // Show the current slide and add active class to its dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        // Adjust the transform for smooth sliding
        document.querySelector('.carousel-slides').style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Event listeners for arrows
    nextArrow.addEventListener('click', () => {
        nextSlide();
        resetSlideInterval();
    });

    prevArrow.addEventListener('click', () => {
        prevSlide();
        resetSlideInterval();
    });

    // Event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            showSlide(index);
            currentIndex = index;
            resetSlideInterval();
        });
    });

    // Auto-slide functionality
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    // Initialize carousel
    showSlide(currentIndex);
    startSlideShow();

    // --- About Section "Read More" Functionality ---
    const readMoreButton = document.querySelector('.about-section .read-more-button');
    const aboutTextContent = document.getElementById('about-more-info');

    if (readMoreButton && aboutTextContent) {
        readMoreButton.addEventListener('click', () => {
            aboutTextContent.classList.toggle('expanded');
            if (aboutTextContent.classList.contains('expanded')) {
                readMoreButton.textContent = 'Read Less';
            } else {
                readMoreButton.textContent = 'Read More';
            }
        });
    }
});

