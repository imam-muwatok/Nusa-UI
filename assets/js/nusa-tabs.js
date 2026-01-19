export function initTabs() {
    const tabToggles = document.querySelectorAll('[data-nusa-toggle="tab"]');
    
    tabToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 1. Deactivate all tabs in this nav
            const nav = this.closest('.nusa-nav');
            if (nav) {
                nav.querySelectorAll('[data-nusa-toggle="tab"]').forEach(t => t.classList.remove('active'));
            }
            
            // 2. Activate clicked tab
            this.classList.add('active');
            
            // 3. Handle Tab Content
            const targetSelector = this.getAttribute('data-nusa-target') || this.getAttribute('href');
            
            if (targetSelector && targetSelector !== '#') {
                try {
                    const targetPane = document.querySelector(targetSelector);
                    if (targetPane) {
                        const tabContent = targetPane.closest('.nusa-tab-content');
                        
                        if (tabContent) {
                            tabContent.querySelectorAll('.nusa-tab-pane').forEach(pane => pane.classList.remove('active'));
                            targetPane.classList.add('active');
                        }
                    }
                } catch (error) {
                    console.warn('Nusa UI: Invalid tab selector', targetSelector);
                }
            }
        });
    });
}