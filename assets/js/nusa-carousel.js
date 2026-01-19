export function initCarousel() {
    const carousels = document.querySelectorAll('.nusa-carousel-container');
    
    carousels.forEach(container => {
        const carousel = container.querySelector('.nusa-carousel');
        const items = container.querySelectorAll('.nusa-carousel-item');
        const indicators = container.querySelectorAll('.nusa-carousel-indicator');
        const prevBtn = container.querySelector('[data-nusa-target="prev"]');
        const nextBtn = container.querySelector('[data-nusa-target="next"]');
        
        // Cek apakah carousel menggunakan efek (fade/zoom) atau scroll biasa
        const isEffect = carousel.classList.contains('nusa-carousel-fade') || carousel.classList.contains('nusa-carousel-zoom');

        // Fungsi untuk pindah slide
        const goToSlide = (index) => {
            if (index < 0) index = items.length - 1;
            if (index >= items.length) index = 0;

            if (isEffect) {
                // Logic untuk Fade/Zoom (Class based)
                items.forEach((item, i) => item.classList.toggle('active', i === index));
            } else {
                // Logic untuk Scroll Snap (Scroll based)
                items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }

            // Update indicators
            indicators.forEach((dot, i) => dot.classList.toggle('active', i === index));
        };

        // Event Listeners untuk Tombol Next/Prev
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const activeIndex = Array.from(items).findIndex(item => 
                    isEffect ? item.classList.contains('active') : 
                    Math.abs(item.getBoundingClientRect().left - carousel.getBoundingClientRect().left) < 10
                );
                goToSlide(activeIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const activeIndex = Array.from(items).findIndex(item => 
                    isEffect ? item.classList.contains('active') : 
                    Math.abs(item.getBoundingClientRect().left - carousel.getBoundingClientRect().left) < 10
                );
                goToSlide(activeIndex + 1);
            });
        }

        // Event Listeners untuk Indicators
        indicators.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });

        // Observer khusus untuk Scroll Snap (agar indikator update saat di-swipe)
        if (!isEffect) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Array.from(items).indexOf(entry.target);
                        indicators.forEach((dot, i) => dot.classList.toggle('active', i === index));
                    }
                });
            }, { root: carousel, threshold: 0.5 });
            items.forEach(item => observer.observe(item));
        }

        // Auto Slide Logic
        if (container.getAttribute('data-bs-ride') === 'carousel') {
            setInterval(() => {
                const activeIndex = Array.from(items).findIndex(item => 
                    isEffect ? item.classList.contains('active') : 
                    Math.abs(item.getBoundingClientRect().left - carousel.getBoundingClientRect().left) < 10
                );
                goToSlide(activeIndex + 1);
            }, 3000);
        }
    });
}