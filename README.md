# Website Departemen Kajian & Aksi Strategis (Kastrat) - PEMA USU

Website resmi **Departemen Kajian & Aksi Strategis (Kastrat) - Pemerintahan Mahasiswa Universitas Sumatera Utara (PEMA USU)** periode 2026. Website ini dirancang dengan gaya visual modern, elegan, dan berbobot akademis untuk menampilkan program kerja advokasi, riset kebijakan publik, susunan pengurus, dan kanal aspirasi mahasiswa di Kampus Padang Bulan, Medan.

---

## 🚀 Cara Menjalankan

Website ini dibangun menggunakan **HTML5 semantik, CSS3 modern, dan Vanilla JavaScript murni**, tanpa dependensi framework berat, dengan aset gambar dan logo yang sudah tersimpan secara lokal.

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
├── index.html                  # Halaman utama (Hero USU, 14 Program Kerja, Tim Pengurus, Footer)
├── extracted_data.json         # Data JSON program kerja & pengurus Kastrat USU
├── README.md                   # Dokumentasi proyek
│
└── assets/
    ├── css/
    │   └── style.css           # Styling lengkap: warna USU, tipografi, efek 3D flip card & responsivitas
    ├── js/
    │   └── main.js             # Skrip interaktif (carousel pengurus, kartu 3D flip, mobile drawer, scroll navbar)
    └── images/
        ├── logo.svg            # Logo vektor resmi Kastrat PEMA USU
        ├── logo.png            # Logo format PNG resolusi tinggi
        ├── hero-usu.jpg        # Background hero section Kampus Universitas Sumatera Utara
        ├── asla.jpg            # Foto M. Farhan Lubis (Kepala Departemen)
        ├── raudlah.jpg         # Foto Annisa Putri Siregar (Wakil Kepala Departemen)
        ├── kamila.jpg          # Foto Dina Mariana Simanjuntak (Biro Riset & Kajian Kebijakan)
        ├── abraham.jpg         # Foto Rizky Pratama Harahap (Biro Aksi & Propaganda Massa)
        ├── ilayka.jpg          # Foto Grace Christine Sitompul (Divisi Advokasi Mahasiswa)
        ├── syafiq.jpg          # Foto Bagus Satria Tanjung (Divisi Media & Publikasi)
        ├── wirda.jpg           # Foto Fatimah Zahra Nasution (Divisi Hubungan Antar Lembaga)
        ├── sheva.jpg           # Foto Rahmat Hidayat Daulay (Staf Ahli Data & Isu Publik)
        └── program-1.jpg s/d program-14.jpg  # Background kartu masing-masing dari 14 Program Kerja
```

---

## 🎨 Fitur & Detail Desain

1. **Header & Navigasi**:
   - Logo baru Kastrat PEMA USU berformat vektor tajam.
   - Header sticky dengan efek blur backdrop (`backdrop-filter`) saat di-scroll.
   - Menu dropdown untuk _Info Mahasiswa_ (Portal Satu USU, Beasiswa, Advokasi UKT) dan _Kajian & Publikasi_ (Kajian Strategis, Sumut Digest, Kastrat Times).
   - Tombol CTA _"Kanal Aspirasi"_.
   - Tombol hamburger & drawer navigasi responsif untuk mobile/tablet.

2. **Hero Banner**:
   - Background lanskap kampus universitas yang asri dengan radial gradient overlay.
   - Badge kebanggaan _"PEMA UNIVERSITAS SUMATERA UTARA 2026"_.
   - Tipografi elegan `Ibarra Real Nova` & `Poppins`.
   - Tagline pergerakan intelektual mahasiswa USU.

3. **14 Kartu Program Kerja Interaktif (3D Flip Box)**:
   - Efek 3D flip yang mulus saat kursor diarahkan (hover) pada desktop maupun sentuhan (tap) pada mobile.
   - Sisi depan menampilkan judul program dan gambar latar tematik.
   - Sisi belakang memuat deskripsi lengkap dalam Bahasa Indonesia (tanpa placeholder latin) dan tombol aksi.

4. **Susunan Pengurus / Tim Kastrat (Slider/Carousel)**:
   - Menampilkan profil 8 pimpinan dan staf departemen dengan nama mahasiswa USU dan bidang tugas.
   - Dilengkapi navigasi slide (Next & Prev) serta dukungan drag/swipe sentuhan.

5. **Footer Lengkap**:
   - Informasi organisasi PEMA USU & tautan sosial media.
   - Sekretariat Gelanggang Mahasiswa USU, Padang Bulan, Medan.
   - Hotline narahubung resmi untuk Advokasi Mahasiswa dan Kemitraan/Pers.
   - Tombol floating _"Back to Top"_.

---

## 🛠️ Palet Warna

| Variabel            | Kode Warna | Nuansa / Penggunaan                       |
| ------------------- | ---------- | ----------------------------------------- |
| `--color-dark-bg`   | `#161512`  | Latar belakang utama gelap                |
| `--color-dark-card` | `#1B1F10`  | Latar belakang kartu bernuansa deep olive |
| `--color-primary`   | `#F5F1CA`  | Judul utama & aksen krem elegan           |
| `--color-yellow`    | `#F2EB87`  | Aksen kuning emas khas USU                |
| `--color-accent`    | `#91A76A`  | Hijau sage pergerakan mahasiswa           |
| `--color-text`      | `#D8D6C6`  | Teks isi & deskripsi                      |
