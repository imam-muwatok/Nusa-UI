# 🏝️ Nusa UI

**Nusa UI** adalah kerangka kerja UI front-end yang ringan, modern, dan fleksibel, dibangun dengan kekuatan Sass. Terinspirasi oleh Bootstrap 5, Nusa UI dirancang untuk memberikan pengalaman pengembangan yang cepat dan mudah disesuaikan, dengan sentuhan estetika yang bersih.

[![Live Preview](https://img.shields.io/badge/🚀_Live_Preview-View_Demo-blue?style=for-the-badge)](https://imam-muwatok.github.io/Nusa-UI/)

![Nusa UI Banner](assets/img/logo.png) <!-- Pastikan path logo sesuai atau ganti dengan banner yang menarik -->

## ✨ Fitur Utama

*   **🎨 Dibangun dengan Sass**: Modular dan mudah dikustomisasi. Ubah variabel warna, spasi, dan tipografi dengan mudah.
*   **⚡ Ringan & Cepat**: Hanya menyertakan komponen esensial untuk menjaga performa tetap optimal.
*   **📱 Responsif**: Sistem grid yang kuat dan utilitas responsif untuk tampilan sempurna di semua perangkat.
*   **🧩 Komponen Lengkap**: Menyediakan berbagai komponen UI siap pakai seperti Navbar, Card, Modal, Toast, dan banyak lagi.
*   **🛠️ Utilitas Modern**: Kelas utilitas yang fleksibel untuk margin, padding, warna, dan tata letak.
*   **🚫 No jQuery**: Menggunakan JavaScript murni (Vanilla JS) untuk interaksi komponen, tanpa ketergantungan pada jQuery.

## 🚀 Memulai

### Instalasi

Anda dapat menggunakan Nusa UI dengan mengunduh file CSS dan JS yang telah dikompilasi, atau dengan mengompilasi sendiri dari sumber Sass.

**1. Clone Repositori**

```bash
git clone https://github.com/imam-muwatok/nusa-ui.git
cd nusa-ui
```

**2. Struktur Proyek**

```
nusa-ui/
├── assets/
│   ├── css/
│   │   └── nusa.css       # File CSS utama (hasil kompilasi)
│   ├── js/
│   │   ├── nusa-script.js # Script utama (module)
│   │   ├── nusa-carousel.js
│   │   └── nusa-tabs.js
│   └── img/
├── sass/                  # Sumber Sass
│   ├── _variables.scss    # Variabel global
│   ├── _buttons.scss      # Gaya tombol
│   ├── nusa.scss          # File utama Sass
│   └── ...
└── index.html             # Halaman demo/dokumentasi
```

### Penggunaan Dasar

Tambahkan file CSS dan JS ke dalam file HTML Anda:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyek Nusa UI Saya</title>
    <!-- Nusa UI CSS -->
    <link rel="stylesheet" href="assets/css/nusa.css">
</head>
<body>

    <!-- Contoh Komponen: Navbar -->
    <nav class="nusa-navbar bg-white">
        <div class="nusa-container">
            <a href="#" class="nusa-navbar-brand">Nusa UI</a>
        </div>
    </nav>

    <!-- Contoh Komponen: Tombol -->
    <div class="nusa-container mt-4">
        <button class="nusa-btn nusa-btn-primary">Halo Dunia!</button>
    </div>

    <!-- Nusa UI JS (Gunakan type="module") -->
    <script type="module" src="assets/js/nusa-script.js"></script>
</body>
</html>
```

## 🎨 Kustomisasi dengan Sass

Kekuatan utama Nusa UI terletak pada kustomisasinya. Anda dapat mengubah variabel default di `sass/_variables.scss` untuk menyesuaikan tema dengan merek Anda.

Contoh mengubah warna utama:

```scss
// sass/_variables.scss

$primary: #ff5722; // Ubah warna primary menjadi oranye
$border-radius: 0.5rem; // Ubah radius sudut
```

Setelah mengubah variabel, kompilasi ulang Sass Anda menggunakan compiler Sass pilihan Anda (misalnya Dart Sass).

```bash
sass sass/nusa.scss assets/css/nusa.css
```

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat *issue* untuk melaporkan bug atau *pull request* untuk menyumbangkan fitur baru.

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License.