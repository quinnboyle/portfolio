// Portfolio Interactive Features - No Glitchy Animations
(function() {
    'use strict';

    // ==========================================
    // Mobile Navigation Toggle
    // ==========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    const spans = navToggle.querySelectorAll('span');
                    spans.forEach(span => span.style.transform = 'none');
                    spans[1].style.opacity = '1';
                }
            });
        });
    }

    // ==========================================
    // Smooth Scrolling
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = 80;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // Back to Top Button
    // ==========================================
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    const nav = document.getElementById('nav');
    
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // ==========================================
    // Active Navigation Link
    // ==========================================
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navHeight = 80;
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();

    // ==========================================
    // Simple Fade In on Load (No scroll triggers)
    // ==========================================
    window.addEventListener('load', function() {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    });

    // ==========================================
    // Console Easter Egg
    // ==========================================
    console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
    console.log('%cThis portfolio was designed and coded by Quinn Boyle.', 'font-size: 14px; color: #525252;');
    console.log('%cBuilt with HTML, CSS, and vanilla JavaScript.', 'font-size: 14px; color: #525252;');

})();

// ==========================================
// Section Jump Navigation Active State
// ==========================================
function updateProcessNav() {
    const sections = ['empathize', 'define', 'ideate', 'prototype', 'test', 'reflection'];
    const bubbles = document.querySelectorAll('.process-bubble');
    
    if (bubbles.length === 0) return;
    
    let activeSection = '';
    const scrollPos = window.pageYOffset + 200;
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                activeSection = sectionId;
            }
        }
    });
    
    bubbles.forEach(bubble => {
        bubble.classList.remove('active');
        const href = bubble.getAttribute('href');
        if (href === `#${activeSection}`) {
            bubble.classList.add('active');
        }
    });
}

if (document.querySelector('.process-nav')) {
    window.addEventListener('scroll', updateProcessNav);
    updateProcessNav();
}
