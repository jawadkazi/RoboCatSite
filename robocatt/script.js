// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 118, 206, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 15px rgba(0, 118, 206, 0.1)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply intersection observer to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });

    // CTA Button click animation
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    // Contact button interaction
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            // Simple feedback animation
            this.style.transform = 'scale(0.95)';
            this.textContent = 'Thank you for your interest!';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.textContent = 'Reach Out';
            }, 2000);
        });
    }

    // Add floating animation to hero elements on hover
    const heroElements = document.querySelectorAll('.feature, .stat');
    heroElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'float 3s ease-in-out infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });

    // Dynamic robot cat interaction
    const robotCat = document.querySelector('.robot-cat');
    if (robotCat) {
        const messages = [
            '🐱',
            '🤖',
            '🐱‍👓',
            '🎈',
            '⭐',
            '🌈'
        ];
        
        let messageIndex = 0;
        
        robotCat.addEventListener('click', function() {
            messageIndex = (messageIndex + 1) % messages.length;
            this.textContent = messages[messageIndex];
            
            // Add a bounce animation
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'bounce 3s ease-in-out infinite';
            }, 10);
        });
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroContent && heroVisual) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let charIndex = 0;
        
        function typeWriter() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);