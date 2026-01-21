export function initDarkMode() {
    const themeToggle = document.getElementById('nusa-theme-toggle');

    // Helper aman untuk membaca localStorage (mencegah error pada file:// atau incognito)
    const getSavedTheme = () => {
        try {
            return localStorage.getItem('nusa-theme');
        } catch (e) {
            console.warn('Nusa UI: Gagal membaca localStorage', e);
            return null;
        }
    };

    const savedTheme = getSavedTheme();
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Terapkan tema awal
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            const newTheme = themeToggle.checked ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }

    function setTheme(theme) {
        // Set tema pada dokumen utama
        document.documentElement.setAttribute('data-nusa-theme', theme);

        // Update checkbox state to match the theme
        if (themeToggle) {
            themeToggle.checked = theme === 'dark';
        }

        // Coba simpan ke localStorage
        try {
            localStorage.setItem('nusa-theme', theme);
        } catch (e) {
            console.warn('Nusa UI: Gagal menyimpan tema ke localStorage (mungkin diblokir browser):', e);
        }
        
        // Set tema pada iframe jika ada
        try {
            const iframe = document.getElementById('docs-frame');
            // Cek contentDocument untuk menghindari error akses cross-origin pada file://
            if (iframe && iframe.contentDocument) {
                iframe.contentDocument.documentElement.setAttribute('data-nusa-theme', theme);
            }
        } catch (e) {
            // Abaikan error jika iframe tidak bisa diakses (misal beda origin/lokal)
            // agar ikon tetap berubah
            console.warn('Tidak dapat mengubah tema iframe:', e);
        }
    }

    // Listener untuk sinkronisasi tema saat iframe navigasi/reload
    const iframe = document.getElementById('docs-frame');
    if (iframe) {
        iframe.addEventListener('load', () => {
            const currentTheme = document.documentElement.getAttribute('data-nusa-theme');
            try {
                if (iframe.contentDocument) {
                    iframe.contentDocument.documentElement.setAttribute('data-nusa-theme', currentTheme);
                }
            } catch (e) {
                // Abaikan error akses cross-origin
            }
        });
    }
}