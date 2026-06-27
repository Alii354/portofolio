document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // Custom Cursor
    // ==========================================
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    // Only enable custom cursor if on non-touch device (desktop)
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Adding a slight delay to the outline for a smoother effect
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add hover effect to interactive elements
        const interactives = document.querySelectorAll('a, button, .project-card, .skill-card, .social-icon');
        
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('cursor-hover');
            });
        });
    }

    // ==========================================
    // Typing Effect
    // ==========================================
    const textToType = "A Frontend Developer.";
    const typingElement = document.querySelector('.typing-text');
    let charIndex = 0;
    
    function typeText() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        }
    }
    
    // Start typing after initial fade-in animations
    setTimeout(typeText, 1000);

    // ==========================================
    // Mobile Navigation Menu
    // ==========================================
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(l => l.style.animation = '');
            }
        });
    });

    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==========================================
    // Scroll Reveal Animation (Intersection Observer)
    // ==========================================
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // Trigger point

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    // Trigger once on load in case elements are already in view
    reveal();
    
    // Trigger on scroll
    window.addEventListener("scroll", reveal);

    // ==========================================
    // Form Submission Prevention (Demo only)
    // ==========================================
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span>Sent Successfully!</span> <i class="fas fa-check"></i>';
            btn.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                form.reset();
            }, 3000);
        });
    }
});
