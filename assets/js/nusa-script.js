import { initCarousel } from './nusa-carousel.js';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Carousel
    initCarousel();

    // --- Collapse Logic (Navbar) ---
    const collapseToggles = document.querySelectorAll('[data-nusa-toggle="collapse"]');
    
    collapseToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-nusa-target');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.classList.toggle('show');
            }
        });
    });

    // --- Offcanvas Logic ---
    const offcanvasToggles = document.querySelectorAll('[data-nusa-toggle="offcanvas"]');
    
    offcanvasToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-nusa-target');
            const offcanvas = document.querySelector(targetId);
            
            if (offcanvas) {
                offcanvas.classList.add('show');
                createBackdrop(offcanvas);
            }
        });
    });

    // Dismiss buttons (Close)
    document.addEventListener('click', function(e) {
        if (e.target.matches('[data-nusa-dismiss="offcanvas"]')) {
            const offcanvas = e.target.closest('.nusa-offcanvas');
            closeOffcanvas(offcanvas);
        }
    });

    function createBackdrop(offcanvas) {
        const backdrop = document.createElement('div');
        backdrop.className = 'nusa-offcanvas-backdrop';
        document.body.appendChild(backdrop);
        
        // Trigger reflow
        backdrop.offsetHeight; 
        backdrop.classList.add('show');

        backdrop.addEventListener('click', function() {
            closeOffcanvas(offcanvas);
        });
    }

    function closeOffcanvas(offcanvas) {
        if (!offcanvas) return;
        offcanvas.classList.remove('show');
        const backdrop = document.querySelector('.nusa-offcanvas-backdrop');
        if (backdrop) {
            backdrop.classList.remove('show');
            setTimeout(() => backdrop.remove(), 150); // Wait for transition
        }
    }
});