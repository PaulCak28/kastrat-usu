# Project Kastrat - Kloning Website Departemen Kajian & Aksi Strategis BEM FEB UI

Proyek ini adalah kloning website **Departemen Kajian & Aksi Strategis (Kastrat) - BEM FEB UI** (referensi: [bemfebui.com/departemen-kajian-aksi-strategis/](https://bemfebui.com/departemen-kajian-aksi-strategis/)) yang dibuat semirip mungkin dengan aslinya untuk digunakan sebagai dasar/fondasi pengembangan website organisasi Anda.

---

## 🚀 Cara Menjalankan

Website ini dibangun menggunakan **HTML5, CSS3, dan Vanilla JavaScript murni**, tanpa dependensi berat (framework), dan semua aset gambar telah diunduh secara lokal.

### Opsi 1: Langsung Buka di Browser

Cukup klik dua kali atau buka file [`index.html`](index.html) langsung di browser favorit Anda (Chrome, Edge, Firefox, Safari).

### Opsi 2: Menggunakan Local Server (Direkomendasikan)

Buka terminal / PowerShell di folder ini, lalu jalankan:

```bash
python -m http.server 8000
```

Lalu buka di browser: `http://localhost:8000`

---

## 📂 Struktur Direktori

```
Project Kastrat/
│
├── index.html                  # Halaman utama (Hero, 14 Program Kerja, Tim Pengurus, Footer)
├── extracted_data.json         # Data JSON hasil ekstraksi dari website asli (program kerja & pengurus)
├── page.html                   # Sumber HTML asli sebagai bahan referensi perbandingan
├── README.md                   # Dokumentasi proyek
│
└── assets/
    ├── css/
    │   └── style.css           # Styling lengkap, warna resmi, tipografi, efek 3D flip card & responsivitas
    ├── js/
    │   └── main.js             # Skrip interaktif (slider pengurus, kartu flip, mobile menu, scroll navbar)
    └── images/
        ├── logo.png            # Logo resmi BEM FEB UI
        ├── hero-feb-ui.jpg     # Background hero section Gedung FEB UI
        ├── asla.jpg            # Foto Kepala Departemen (M. Nur Asla Junior)
        ├── raudlah.jpg         # Foto Wakil Kepala Departemen (Raudlah Salsabila)
        ├── kamila.jpg          # Foto Staff Departemen (Hikmah Kamila A.)
        ├── abraham.jpg         # Foto Staff Departemen (Abraham Samuel W.)
        ├── ilayka.jpg          # Foto Staff Departemen (Ilayka Asykuu A.)
        ├── syafiq.jpg          # Foto Staff Departemen (M. Syafiq Zhairul H.)
        ├── wirda.jpg           # Foto Staff Departemen (Wirda Hafidz)
        ├── sheva.jpg           # Foto Staff Departemen (Sheva Fi Sabilillah)
        └── program-1.jpg s/d program-14.jpg  # Background kartu masing-masing dari 14 Program Kerja
```

---

## 🎨 Fitur & Detail Desain

1. **Header & Navigasi**:
   - Header sticky dengan efek blur backdrop (`backdrop-filter`) saat di-scroll.
   - Menu dropdown untuk _Student Info_ dan _Articles_.
   - Tombol CTA _"Visit Store"_ bernuansa kuning emas khas BEM FEB UI.
   - Tombol hamburger & drawer navigasi responsif untuk perangkat mobile / tablet.

2. **Hero Banner**:
   - Background gambar gedung FEB UI dengan dark radial gradient overlay.
   - Tipografi elegan menggunakan serif font `Ibarra Real Nova` & sans-serif `Poppins`.
   - Tagline dan deskripsi peran departemen Kajian & Aksi Strategis.

3. **14 Kartu Program Kerja Interaktif (3D Flip Box)**:
   - Efek 3D flip yang mulus saat kursor diarahkan (hover) pada desktop maupun saat diketuk (tap) pada mobile.
   - Sisi depan menampilkan gambar latar khusus program kerja terkait dengan judul elegan.
   - Sisi belakang menampilkan deskripsi lengkap program kerja dan tombol aksi (tonton, baca kajian, selengkapnya).

4. **Susunan Pengurus / Kastrat Team (Slider/Carousel)**:
   - Menampilkan profil 8 pimpinan dan staf departemen.
   - Dilengkapi navigasi slide (Next & Prev) serta dukungan drag / swipe sentuhan.

5. **Footer Lengkap**:
   - Informasi organisasi BEM FEB UI & tautan sosial media (X/Twitter, YouTube, LinkedIn, Instagram, TikTok).
   - Kontak narahubung resmi untuk Partnership, Organisasi/NGO, dan Humas.
   - Tombol mengambang _"Back to Top"_ untuk kembali ke bagian paling atas halaman.

---

## 🛠️ Palet Warna Resmi

| Variabel            | Kode Warna | Penggunaan                      |
| ------------------- | ---------- | ------------------------------- |
| `--color-dark-bg`   | `#161512`  | Background utama gelap          |
| `--color-dark-card` | `#1B1F10`  | Latar belakang kartu / panel    |
| `--color-primary`   | `#F5F1CA`  | Judul utama & aksen krem elegan |
| `--color-yellow`    | `#F2EB87`  | Tombol CTA, aksen kuning cerah  |
| `--color-accent`    | `#91A76A`  | Hijau sage / aksen sekunder     |
| `--color-text`      | `#D8D6C6`  | Teks isi & deskripsi            |
