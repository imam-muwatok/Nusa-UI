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

    // --- Tooltip Logic ---
    const tooltipTriggers = document.querySelectorAll('[data-nusa-toggle="tooltip"]');
    
    tooltipTriggers.forEach(trigger => {
        ['mouseenter', 'focus'].forEach(evt => 
            trigger.addEventListener(evt, showTooltip)
        );
        ['mouseleave', 'blur'].forEach(evt => 
            trigger.addEventListener(evt, hideTooltip)
        );
    });

    function showTooltip(e) {
        const trigger = e.target;
        // Handle title attribute
        const title = trigger.getAttribute('title') || trigger.getAttribute('data-nusa-title');
        
        if (!title) return;
        
        // Pindahkan title ke data-attribute agar tidak muncul tooltip bawaan browser
        if (trigger.getAttribute('title')) {
            trigger.setAttribute('data-nusa-title', title);
            trigger.removeAttribute('title');
        }

        const placement = trigger.getAttribute('data-nusa-placement') || 'top';
        
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = `nusa-tooltip nusa-tooltip-${placement}`;
        tooltip.innerHTML = `
            <div class="nusa-tooltip-arrow"></div>
            <div class="nusa-tooltip-inner rounded">${title}</div>
        `;
        document.body.appendChild(tooltip);
        
        // Calculate Position
        const rect = trigger.getBoundingClientRect();
        // Gunakan offsetWidth/Height untuk dimensi tooltip yang lebih akurat setelah append
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;
        
        let top, left;
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollX = window.scrollX || window.pageXOffset;
        const offset = 6; // Jarak tambahan agar tidak menempel

        switch(placement) {
            case 'top':
                top = rect.top + scrollY - tooltipHeight - offset;
                left = rect.left + scrollX + (rect.width / 2) - (tooltipWidth / 2);
                break;
            case 'bottom':
                top = rect.bottom + scrollY + offset;
                left = rect.left + scrollX + (rect.width / 2) - (tooltipWidth / 2);
                break;
            case 'start': // Left
                top = rect.top + scrollY + (rect.height / 2) - (tooltipHeight / 2);
                left = rect.left + scrollX - tooltipWidth - offset;
                break;
            case 'end': // Right
                top = rect.top + scrollY + (rect.height / 2) - (tooltipHeight / 2);
                left = rect.right + scrollX + offset;
                break;
        }

        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
        
        // Show with transition
        requestAnimationFrame(() => {
            tooltip.classList.add('show');
        });
        
        trigger._nusaTooltip = tooltip;
    }

    function hideTooltip(e) {
        const trigger = e.target;
        if (trigger._nusaTooltip) {
            const tooltip = trigger._nusaTooltip;
            tooltip.classList.remove('show');
            setTimeout(() => tooltip.remove(), 150);
            trigger._nusaTooltip = null;
        }
    }
});