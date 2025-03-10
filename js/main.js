// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation functionality
    initNavigation();
    
    // Initialize portfolio carousel
    initPortfolioCarousel();
    
    // Initialize category sliders
    initCategorySliders();
    
    // Initialize contact form
    initContactForm();
    
    // Set copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Make category cards clickable
    makeCardsClickable();
});

// Mobile Navigation Toggle
function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('header');
    
    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('open');
            menuToggle.classList.remove('active');
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Handle header scroll styling
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        const sections = document.querySelectorAll('.section');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Make category cards clickable
function makeCardsClickable() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        const linkElement = card.querySelector('.view-category');
        if (linkElement) {
            const href = linkElement.getAttribute('href');
            
            // Add cursor: pointer in JS as well (in case CSS is not loaded)
            card.style.cursor = 'pointer';
            
            // Add click event to the entire card
            card.addEventListener('click', function(e) {
                // Don't trigger if the original link was clicked (let it handle normally)
                if (e.target !== linkElement && !linkElement.contains(e.target)) {
                    window.location.href = href;
                }
            });
        }
    });
}

// Portfolio Carousel Functionality
function initPortfolioCarousel() {
    const portfolioCarousel = document.querySelector('.portfolio-carousel');
    
    if (!portfolioCarousel) return;
    
    const carouselContainer = portfolioCarousel.querySelector('.carousel-container');
    const prevBtn = portfolioCarousel.querySelector('.carousel-prev');
    const nextBtn = portfolioCarousel.querySelector('.carousel-next');
    
    // Collect all portfolio images from different categories
    const portfolioImages = [
        // Advanced Art - Life Drawing and Anatomy
        { path: 'images/Advanced Art/Life Drawing and Anatomy/Figure1.jpg', alt: 'Figure Study 1', category: 'Life Drawing' },
        { path: 'images/Advanced Art/Life Drawing and Anatomy/Figure2.jpg', alt: 'Figure Study 2', category: 'Life Drawing' },
        { path: 'images/Advanced Art/Life Drawing and Anatomy/Figure3.jpg', alt: 'Figure Study 3', category: 'Life Drawing' },
        { path: 'images/Advanced Art/Life Drawing and Anatomy/Figure4.jpg', alt: 'Figure Study 4', category: 'Life Drawing' },
        { path: 'images/Advanced Art/Life Drawing and Anatomy/Figure5.jpg', alt: 'Figure Study 5', category: 'Life Drawing' },
        { path: 'images/Advanced Art/Life Drawing and Anatomy/Figure6.jpg', alt: 'Figure Study 6', category: 'Life Drawing' },
        
        // Advanced Art - Painting 1
        { path: 'images/Advanced Art/Painting 1/Apple Painting.jpg', alt: 'Apple Painting', category: 'Painting' },
        { path: 'images/Advanced Art/Painting 1/Color Still Life.jpg', alt: 'Color Still Life', category: 'Painting' },
        { path: 'images/Advanced Art/Painting 1/Mono Still Life.jpg', alt: 'Monochrome Still Life', category: 'Painting' },
        { path: 'images/Advanced Art/Painting 1/Portrait.jpg', alt: 'Portrait Painting', category: 'Painting' },
        
        // Art Foundations - 2D Design
        { path: 'images/Art Foundations/2D Design/mono-port.jpg', alt: 'Monochrome Portrait', category: '2D Design' },
        
        // Art Foundations - Digital Tools
        { path: 'images/Art Foundations/Digital Tools/Album-Cover.png', alt: 'Album Cover Design', category: 'Digital Tools' },
        { path: 'images/Art Foundations/Digital Tools/Landscape-Portrait.png', alt: 'Landscape Portrait', category: 'Digital Tools' },
        { path: 'images/Art Foundations/Digital Tools/Magazine-Mockup.png', alt: 'Magazine Mockup', category: 'Digital Tools' },
        { path: 'images/Art Foundations/Digital Tools/Pamphlet.png', alt: 'Pamphlet Design', category: 'Digital Tools' },
        { path: 'images/Art Foundations/Digital Tools/Rivera_announcement-poster.jpg', alt: 'Announcement Poster', category: 'Digital Tools' },
        
        // Art Foundations - Drawing 1
        { path: 'images/Art Foundations/Drawing 1/Block-Castle.jpg', alt: 'Block Castle', category: 'Drawing 1' },
        { path: 'images/Art Foundations/Drawing 1/Contour-Lines.jpg', alt: 'Contour Lines', category: 'Drawing 1' },
        { path: 'images/Art Foundations/Drawing 1/Flowers.jpg', alt: 'Flowers Drawing', category: 'Drawing 1' },
        
        // Art Foundations - Drawing 2
        { path: 'images/Art Foundations/Drawing 2/Cupcakes.jpg', alt: 'Cupcakes Drawing', category: 'Drawing 2' },
        { path: 'images/Art Foundations/Drawing 2/Figure Pastel.jpg', alt: 'Figure in Pastel', category: 'Drawing 2' },
        { path: 'images/Art Foundations/Drawing 2/Master Copy.jpg', alt: 'Master Copy', category: 'Drawing 2' },
        
        // Art Foundations - Photography
        { path: 'images/Art Foundations/Photography/Beth.jpg', alt: 'Portrait - Beth', category: 'Photography' },
        { path: 'images/Art Foundations/Photography/ForestFilm.jpg', alt: 'Forest Film', category: 'Photography' },
        { path: 'images/Art Foundations/Photography/Rivera_Before_Sunrise.JPG', alt: 'Before Sunrise', category: 'Photography' },
        { path: 'images/Art Foundations/Photography/Rivera_Fast_Shutter_01.JPG', alt: 'Fast Shutter Speed', category: 'Photography' },
        { path: 'images/Art Foundations/Photography/Rivera_Line_2.JPG', alt: 'Line Study', category: 'Photography' }
    ];
    
    // Shuffle array to display a random selection of images
    shuffleArray(portfolioImages);
    
    // Create carousel items
    portfolioImages.forEach((image) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="${image.path}" alt="${image.alt}">
            <div class="carousel-overlay">
                <h3>${image.alt}</h3>
                <p>${image.category}</p>
            </div>
        `;
        carouselContainer.appendChild(item);
        
        // Add click event for lightbox viewing
        item.addEventListener('click', function() {
            openLightbox(image.path, image.alt);
        });
    });
    
    // Navigation functionality
    let position = 0;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20; // Including margin
    const visibleItems = Math.floor(window.innerWidth / itemWidth);
    const maxPosition = (portfolioImages.length - visibleItems) * itemWidth;
    
    function slideCarousel(newPosition) {
        position = newPosition;
        
        // Ensure we don't go beyond boundaries
        if (position < 0) position = 0;
        if (position > maxPosition) position = maxPosition;
        
        carouselContainer.style.transform = `translateX(-${position}px)`;
    }
    
    // Auto-scroll functionality
    let autoScrollInterval;
    
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (position < maxPosition) {
                slideCarousel(position + itemWidth);
            } else {
                slideCarousel(0);
            }
        }, 4000);
    }
    
    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        startAutoScroll();
    }
    
    // Initialize auto-scroll
    startAutoScroll();
    
    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            slideCarousel(position - itemWidth);
            resetAutoScroll();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            slideCarousel(position + itemWidth);
            resetAutoScroll();
        });
    }
    
    // Function to shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // Open lightbox for clicked image
    function openLightbox(imageSrc, imageAlt) {
        // Get or create lightbox
        let lightbox = document.querySelector('.lightbox');
        
        if (!lightbox) {
            lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img class="lightbox-image" src="" alt="Gallery image">
                    <div class="lightbox-caption"></div>
                </div>
            `;
            document.body.appendChild(lightbox);
            
            // Add event listeners for closing
            const lightboxClose = lightbox.querySelector('.lightbox-close');
            
            lightboxClose.addEventListener('click', function() {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
            
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                    lightbox.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
        
        // Set lightbox content
        const lightboxImage = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        
        lightboxImage.src = imageSrc;
        lightboxCaption.textContent = imageAlt;
        lightbox.classList.add('active');
        
        // Prevent body scrolling when lightbox is open
        document.body.style.overflow = 'hidden';
    }
    
    // Update carousel on window resize
    window.addEventListener('resize', function() {
        // Recalculate values
        const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20;
        const visibleItems = Math.floor(window.innerWidth / itemWidth);
        const maxPosition = (portfolioImages.length - visibleItems) * itemWidth;
        
        // Adjust position if needed
        if (position > maxPosition) {
            slideCarousel(maxPosition);
        }
    });
}

// Category Sliders Functionality
function initCategorySliders() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    if (categoryCards.length === 0) return;
    
    // Define images for each category
    const categoryImages = {
        'advanced-art': [
            'images/Advanced Art/Life Drawing and Anatomy/Figure1.jpg',
            'images/Advanced Art/Life Drawing and Anatomy/Figure2.jpg',
            'images/Advanced Art/Painting 1/Portrait.jpg',
            'images/Advanced Art/Painting 1/Apple Painting.jpg'
        ],
        'art-education': [
            'images/Art Foundations/Digital Tools/Magazine-Mockup.png',
            'images/Art Foundations/Drawing 1/Contour-Lines.jpg',
            'images/Art Foundations/Photography/Rivera_Line_2.JPG'
        ],
        'art-foundations': [
            'images/Art Foundations/2D Design/mono-port.jpg',
            'images/Art Foundations/Digital Tools/Album-Cover.png',
            'images/Art Foundations/Drawing 1/Trash-Finished.jpg',
            'images/Art Foundations/Drawing 2/Cupcakes.jpg',
            'images/Art Foundations/Photography/Rivera_Fast_Shutter_01.JPG'
        ]
    };
    
    categoryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const sliderContainer = card.querySelector('.category-slider');
        let currentSlide = 0;
        let slideInterval;
        
        // Create slides for this category
        const images = categoryImages[category] || [];
        
        images.forEach((imagePath, index) => {
            const slide = document.createElement('div');
            slide.className = `slide ${index === 0 ? 'active' : ''}`;
            slide.style.backgroundImage = `url('${imagePath}')`;
            sliderContainer.appendChild(slide);
        });
        
        // Auto-advance slides
        startSlideInterval();
        
        function startSlideInterval() {
            slideInterval = setInterval(() => {
                const slides = sliderContainer.querySelectorAll('.slide');
                if (slides.length <= 1) return;
                
                slides.forEach(slide => slide.classList.remove('active'));
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 4000);
        }
    });
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Simple validation
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill in all fields');
            return;
        }
        
        // In a real application, you would send the form data to a server here
        alert('Thank you for your message! This is a demo site, so no message was actually sent.');
        
        // Reset form
        contactForm.reset();
    });
}

// Scroll Animations
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add slide-up animation to children elements
                const animateElements = entry.target.querySelectorAll('.section-header, .category-card, .preview-box, .about-content > div');
                animateElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('slide-up');
                    }, 100 * index);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Create lightbox for gallery images on category pages
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length === 0) return;
    
    // Create lightbox container if it doesn't exist
    let lightbox = document.querySelector('.lightbox');
    
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <div class="lightbox-nav lightbox-prev">&lsaquo;</div>
                <img class="lightbox-image" src="" alt="Gallery image">
                <div class="lightbox-nav lightbox-next">&rsaquo;</div>
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    
    let currentImageIndex = 0;
    const galleryImages = Array.from(galleryItems);
    
    // Function to update lightbox content
    function updateLightboxContent(index) {
        currentImageIndex = index;
        const item = galleryImages[index];
        const imageSrc = item.querySelector('img').src;
        const imageAlt = item.querySelector('img').alt;
        
        lightboxImage.src = imageSrc;
        lightboxCaption.textContent = imageAlt;
    }
    
    // Open lightbox when gallery item is clicked
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            updateLightboxContent(currentImageIndex);
            lightbox.classList.add('active');
            
            // Prevent body scrolling when lightbox is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxContent(currentImageIndex);
    }
    
    // Previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxContent(currentImageIndex);
    }
    
    // Click navigation
    lightboxNext.addEventListener('click', nextImage);
    lightboxPrev.addEventListener('click', prevImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'Escape') {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close lightbox when close button is clicked
    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Check if we're on a category page and initialize gallery
if (window.location.pathname.includes('advanced-art.html') || 
    window.location.pathname.includes('art-education.html') || 
    window.location.pathname.includes('art-foundations.html') ||
    document.querySelector('.gallery-grid')) {
    initGallery();
}