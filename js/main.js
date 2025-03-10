// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation functionality
    initNavigation();
    
    // Initialize hero slider
    initHeroSlider();
    
    // Initialize category sliders
    initCategorySliders();
    
    // Initialize contact form
    initContactForm();
    
    // Set copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize scroll animations
    initScrollAnimations();
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

// Hero Slider Functionality
function initHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    
    if (!heroSlider) return;
    
    const slidesContainer = heroSlider.querySelector('.slides');
    const dotsContainer = heroSlider.querySelector('.slide-dots');
    const prevBtn = heroSlider.querySelector('.prev-slide');
    const nextBtn = heroSlider.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;
    
    // Define featured images for hero slider
    const featuredImages = [
        { path: 'images/Art Foundations/Digital Tools/Rivera_announcement-poster.jpg', alt: 'Digital poster design' },
        { path: 'images/Art Foundations/Drawing 2/Master Copy.jpg', alt: 'Master copy drawing' },
        { path: 'images/Advanced Art/Life Drawing and Anatomy/Figure1.jpg', alt: 'Life drawing figure study' },
        { path: 'images/Art Foundations/Photography/Rivera_Before_Sunrise.JPG', alt: 'Sunrise photography' }
    ];
    
    // Create slides and dots
    featuredImages.forEach((image, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url('${image.path}')`;
        slidesContainer.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = `slide-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-slide', index);
        dotsContainer.appendChild(dot);
        
        // Add click event to dot
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
    });
    
    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToPrevSlide();
            resetInterval();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToNextSlide();
            resetInterval();
        });
    }
    
    // Auto-advance slides
    startSlideInterval();
    
    // Slider Functions
    function goToSlide(slideIndex) {
        const slides = slidesContainer.querySelectorAll('.slide');
        const dots = dotsContainer.querySelectorAll('.slide-dot');
        
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
        
        currentSlide = slideIndex;
    }
    
    function goToNextSlide() {
        const slides = slidesContainer.querySelectorAll('.slide');
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }
    
    function goToPrevSlide() {
        const slides = slidesContainer.querySelectorAll('.slide');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }
    
    function startSlideInterval() {
        slideInterval = setInterval(goToNextSlide, 5000);
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }
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
                <img class="lightbox-image" src="" alt="Gallery image">
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    
    // Open lightbox when gallery item is clicked
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.querySelector('img').src;
            const imageAlt = this.querySelector('img').alt;
            
            lightboxImage.src = imageSrc;
            lightboxCaption.textContent = imageAlt;
            lightbox.classList.add('active');
            
            // Prevent body scrolling when lightbox is open
            document.body.style.overflow = 'hidden';
        });
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
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
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