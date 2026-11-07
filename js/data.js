/**
 * ============================================================
 * DATA.JS - Sumber Konten Website DPP P-AP3I
 * ============================================================
 * 
 * CARA EDIT:
 * 1. Buka file ini di VS Code / Notepad / editor teks apa pun
 * 2. Ubah teks di antara tanda kutip "..."
 * 3. Simpan file (Ctrl+S)
 * 4. Refresh browser — perubahan langsung tampil
 * 
 * CATATAN:
 * - Jangan hapus tanda kurung kurawal { } atau kurung siku [ ]
 * - Jangan lupa koma (,) di akhir setiap item
 * - Untuk menambah item (mis. anggota tim baru), copy-paste blok { ... } 
 *   lalu ubah isinya, dan pastikan ada koma di blok sebelumnya
 * - Untuk menghapus item, hapus blok { ... } beserta komanya
 * ============================================================
 */

const SITE_DATA = {

  /* ============================================================
   * ABOUT SECTION - Tentang P-AP3I
   * ============================================================ */
  aboutSection: {
    title: "TENTANG P-AP3I",
    image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Ketua_PAP3I.png",
    imageCaption: {
      name: "Febborn S",
      position: "Ketua Umum P-AP3I"
    },
    content: {
      heading: "Perkumpulan Para Pemijat Penyehatan Indonesia (P-AP3I): Mewujudkan Kesehatan dan Profesionalisme Bangsa",
      paragraphs: [
        "Perkumpulan Para Pemijat Penyehatan Indonesia (P-AP3I), sebuah wadah bagi para praktisi pijat pengobatan di Indonesia. P-AP3I bersifat keilmuan, terbuka, independen, dan non-politik.",
        "Dibentuk sebagai bentuk kontribusi dalam meningkatkan derajat kesehatan masyarakat sesuai amanat Undang-Undang Dasar 1945.",
        "P-AP3I bertujuan mengembangkan keterampilan dan pengetahuan anggotanya agar menjadi praktisi profesional. Dalam menghadapi era globalisasi.",
        "P-AP3I berupaya mengejar kesetaraan dalam bidang keilmuan dan keterampilan dengan standar kompetensi, sehingga anggota dapat mengoptimalkan kemampuannya dan meningkatkan kesejahteraan."
      ]
    }
  },

  /* ============================================================
   * VISI & MISI
   * ============================================================ */
  visiMisiSection: {
    title: "VISI MISI P-AP3I",
    visi: {
      title: "Visi",
      description: "Menjadi wadah dalam menampung inspirasi dan aspirasi guna meningkatkan profesionalisme praktisi pijat penyehatan di Indonesia yang berpengetahuan, berketrampilan dan menjunjung tinggi norma dan etika"
    },
    misi: {
      title: "Misi",
      list: [
        "Melestarikan budaya pijat penyehatan indonesia yang berlandaskan kemanusiaan dan akhlak mulia",
        "Mewujudkan kesetaraan keilmuan pijat tradisional melalui standar kompetensi",
        "Melakukan pendidikan, penelitian dan pengabdian kepada masyarakat",
        "Menjadi mitra profesional bagi pihak terkait baik pemerintah maupun swasta"
      ]
    }
  },

  /* ============================================================
   * SEJARAH SINGKAT
   * ============================================================ */
  historySection: {
    title: "Sejarah Singkat P-AP3I",
    content: {
      paragraphs: [
        "P-AP3I atau Perkumpulan Para Pemijat Penyehatan Indonesia dibentuk oleh para praktisi pijat penyehatan yang peduli terhadap perkembangan pijat penyehatan di Indonesia. Sebelumnya bernama AP3I (Asosiasi Para Pemijat Pengobatan Indonesia), sebagian besar pendirinya aktif melakukan kegiatan pelatihan untuk masyarakat sekitar, secara swadaya maupun sebagai narasumber di kegiatan Kementerian Kesehatan RI bidang kesehatan tradisional.",
        "Kemudian mereka dilibatkan dalam menyusun buku pedoman pelatihan <i>selfcare</i> akupresur untuk kader (masyarakat). Atas saran dari Kemenkes pula lah maka dibentuklah AP3I pada tahun 2003.",
        "Pembentukan AP3I sekaligus pembuatan akta notaris pertama kali dilakukan pada tahun 2003, yang dihadiri oleh dr. Agnes Maureen mewakili Kementerian Kesehatan RI bidang Kesehatan Tradisional, dan para pendiri yaitu: Putu Oka Sukanta, Baron Suwarta, Budi Santoso, Rismanto, Siti Maryanah, Juliana Mangunsong, Ratna Fawgi dan praktisi pijat penyehatan lainnya yang berdomisili di wilayah Jabodetabek.",
        "Dan pada tahun 2017 sesuai dengan arahan Pembina yaitu Kementerian Kesehatan bahwa kata Asosiasi dan pengobatan tidak dibolehkan sesuai aturan pemerintah, maka AP3I berubah menjadi <strong>P-AP3I (Perkumpulan Para Pemijat Penyehatan Indonesia)</strong>.",
        "Mulai tahun 2012 P-AP3I kemudian bermitra dengan Dirjen PAUDNI, Kemendikbud RI dalam menyusun Standar Kompetensi untuk bidang Pijat Refleksi. Kemudian membentuk <strong>LSK PRI</strong> atau Lembaga Sertifikasi Kompetensi Pijat Refleksi Indonesia pada akhir 2014 sebagai lembaga penyelenggara uji kompetensi pijat refleksi.",
        "Pada pertengahan tahun 2017 terbentuk juga di bawah P-AP3I <strong>LSK PITRA INDONESIA</strong> (Pijat Tradisional Indonesia) sebagai Penyelenggara Uji Kompetensi Pijat Tradisional Indonesia.",
        "Anggota P-AP3I terdiri dari para praktisi pijat penyehatan, para pemilik lembaga kursus pijat penyehatan, para pengusaha di bidang pijat penyehatan, maupun orang-orang yang memiliki kepedulian dan minat terhadap pijat penyehatan di Indonesia."
      ]
    },
    image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I1.png",
    imageCaption: "Salah satu momen penting dalam sejarah P-AP3I."
  },

  /* ============================================================
   * TIM KAMI - Untuk menambah anggota baru, copy blok { ... }
   * ============================================================ */
  ourTeamSection: {
    title: "TIM KAMI",
    members: [
      {
        image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Ketua_PAP3I.png",
        alt: "Ketua Umum",
        name: "Febborn S",
        position: "Ketua Umum"
      },
      {
        image: "https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png",
        alt: "Sekretaris",
        name: "Adias",
        position: "Sekretaris"
      },
      {
        image: "https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png",
        alt: "Bendahara",
        name: "Bendahara",
        position: "Bendahara"
      },
      {
        image: "https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png",
        alt: "Divisi Organisasi",
        name: "Bid. Organisasi",
        position: "Bid. Organisasi"
      },
      {
        image: "https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png",
        alt: "Divisi Humas",
        name: "Humas",
        position: "Bid. Humas"
      },
      {
        image: "https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png",
        alt: "Divisi Hukum",
        name: "ADV. Faizal",
        position: "Bid. Hukum"
      },
      {
        image: "https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png",
        alt: "Divisi Litbang",
        name: "Bid. Pelatihan",
        position: "Bid. Pelatihan"
      }
    ]
  },

  /* ============================================================
   * RUANG LINGKUP
   * ============================================================ */
  scopeSection: {
    title: "RUANG LINGKUP P-AP3I",
    list: [
      "Pijat Urut Tradisional: keseleo, terkilir, nyeri pergerakan, turun berok, kecetit, pegal-pegal, cape-cape, kebugaran, relaksasi",
      "Pijat Tradisional Telapak Kaki, Telapak Tangan, Kepala",
      "Pijat Tradisional perawatan wanita, anak-anak dan bayi",
      "Pijat Tradisional perawatan kecantikan",
      "Pijat Tradisional perawatan gangguan di tulang",
      "Pijat Tradisional aneka totok: punggung, badan, wajah, perut, dll.",
      "Pijat Tradisional pasutri, kesuburan, kejantanan",
      "Pijat Tradisional khas budaya suatu daerah: Pijat Bali, Pijat Sunda, Pijat Jawa, Pijat Cimande, dll.",
      "Pijat Tradisional khas budaya suatu bangsa yang ada di Indonesia: Pijat Cina, Pijat Arab, Pijat Jepang, dll."
    ]
  },

  /* ============================================================
   * LEGAL STANDING
   * ============================================================ */
  legalSection: {
    title: "LEGAL STANDING P-AP3I",
    list: [
      "Anggaran Dasar",
      "Anggaran Rumah Tangga",
      "Akta Notaris",
      "SK Kemenkumham",
      "Hak Cipta Logo (HAKI)",
      "NPWP"
      // ↑ Tambahkan item baru di sini, jangan lupa koma sebelum item baru
    ]
  },

  /* ============================================================
   * REKOMENDASI & KTA
   * ============================================================ */
  ktaSection: {
    title: "REKOMENDASI & KTA",
    rekomendasi: {
      title: "Rekomendasi",
      description: "Rekomendasi adalah merupakan salah satu syarat yang digunakan untuk mendapatkan STPT (Surat Tanda Penyehat Tradisional). Untuk mendapatkan Surat Rekomendasi tersebut silahkan daftar di sini",
      linkText: "Daftar",
      linkHref: "https://bit.ly/FormPAP3I24"
    },
    kta: {
      title: "KTA P-AP3I",
      description: "KTA adalah Kartu Tanda Anggota yang menjadi tanda bahwa anda terdaftar dalam P-AP3I.",
      linkText: "Daftar disini",
      linkHref: "https://bit.ly/FormPAP3I24"
    }
  },

  /* ============================================================
   * PELATIHAN
   * ============================================================ */
  trainingSection: {
    title: "PELATIHAN P-AP3I",
    carouselSlides: [
      {
        image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I1.png",
        alt: "Pelatihan Akupresur",
        caption: "Pelatihan Akupresur Dasar untuk Masyarakat"
      },
      {
        image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I2.png",
        alt: "Pelatihan Pijat Refleksi",
        caption: "Sesi Praktik Pijat Refleksi Kaki"
      },
      {
        image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I3.png",
        alt: "Sertifikasi Instruktur",
        caption: "Penyerahan Sertifikat untuk Instruktur"
      },
      {
        image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I1.png",
        alt: "Workshop Sehat Mandiri",
        caption: "Workshop Sehat Mandiri Akupresur bersama Kader Kesehatan"
      }
    ]
  },

  /* ============================================================
   * BANTUAN HUKUM
   * ============================================================ */
  bantuanHukumSection: {
    title: "BANTUAN HUKUM",
    image: "assets/foto/foto-a1.jpg",
    imageCaption: {
      title: "ADV. FAIZAL",
      date: "Praktisi, Akademisi Hukum"
    },
    content: {
      heading: "Pentingnya Memahami Hukum",
      paragraphs: [
        "Memahami hukum merupakan hal yang sangat penting karena hukum mengatur segala aspek kehidupan manusia, mulai dari urusan pribadi hingga bisnis.",
        "Tanpa pemahaman yang baik terhadap hukum, seseorang dapat dengan mudah melanggar aturan tanpa disadari, yang berpotensi menimbulkan konsekuensi serius seperti sanksi pidana atau perdata.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellat soluta at natus a rem nam sit dolor repellendus autem?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit vel ea, autem sed magnam consequatur tenetur tempore officia. Nemo, mollitia eos!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis vitae tempore porro temporibus quibusdam!"
      ]
    }
  },

  /* ============================================================
   * MITRA - LSK & LSP
   * 
   * CATATAN: description di sini STRING (bukan array)
   * karena script.js menganggapnya sebagai satu blok teks HTML.
   * Gunakan <br> untuk baris baru.
   * ============================================================ */
  partnersSection: {
    title: "MITRA P-AP3I",
    descriptions: [
      {
        title: "LSK",
        description: "LSK adalah Lembaga Sertifikasi Kompetensi.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis vitae tempore porro temporibus quibusdam!"
      },
      {
        title: "LSP",
        description: "LSP adalah Lembaga Sertifikasi Profesi.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis vitae tempore porro temporibus quibusdam!"
      }
    ],
    carouselTitle: "Berikut ini adalah mitra kami",
    carouselSlides: [
      { image: "assets/logo.jpeg", alt: "Mitra 1", caption: "Nama Mitra 1" },
      { image: "assets/logo.jpeg", alt: "Mitra 2", caption: "Nama Mitra 2" },
      { image: "assets/logo.jpeg", alt: "Mitra 3", caption: "Nama Mitra 3" },
      { image: "assets/logo.jpeg", alt: "Mitra 4", caption: "Nama Mitra 4" }
    ]
  },

  /* ============================================================
   * KEGIATAN DPP
   * ============================================================ */
  dppActivitySection: {
    title: "KEGIATAN DPP",
    image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I1.png",
    imageCaption: {
      title: "Rapat Pengurus Harian",
      date: "31 Desember 2024"
    },
    content: {
      heading: "Laporan Rapat Harian DPP",
      paragraphs: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates temporibus itaque."
      ]
    }
  },

  /* ============================================================
   * KEGIATAN DPD
   * ============================================================ */
  dpdActivitySection: {
    title: "KEGIATAN DPD",
    image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I2.png",
    imageCaption: {
      title: "Rapat Pengurus Harian",
      date: "31 Desember 2024"
    },
    content: {
      heading: "Laporan Rapat Harian DPD",
      paragraphs: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates temporibus itaque."
      ]
    }
  },

  /* ============================================================
   * KEGIATAN DPC
   * ============================================================ */
  dpcActivitySection: {
    title: "KEGIATAN DPC",
    image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I3.png",
    imageCaption: {
      title: "Rapat Pengurus Harian",
      date: "31 Desember 2024"
    },
    content: {
      heading: "Laporan Rapat Harian DPC",
      paragraphs: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates temporibus itaque."
      ]
    }
  },

  /* ============================================================
   * BLOG
   * ============================================================ */
  blogSection: {
    title: "BLOG P-AP3I",
    articles: [
      {
        title: "Judul Blog Pertama",
        subtitle: "Sub Judul Blog Pertama",
        author: "Penulis 1",
        date: "Tanggal 7 Agustus 2025",
        image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I1.png",
        imageAlt: "Foto artikel blog pertama",
        caption: "Deskripsi singkat tentang foto blog pertama.",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates temporibus itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? <br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates temporibus itaque."
      },
      {
        title: "Judul Blog Kedua",
        subtitle: "Sub Judul Blog Kedua",
        author: "Penulis 2",
        date: "Tanggal 10 Agustus 2025",
        image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I2.png",
        imageAlt: "Foto artikel blog kedua",
        caption: "Deskripsi singkat tentang foto blog kedua.",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates temporibus itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? <br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates temporibus itaque."
      }
    ]
  },

  /* ============================================================
   * BERITA
   * ============================================================ */
  beritaSection: {
    title: "BERITA P-AP3I",
    articles: [
      {
        title: "Judul Berita Pertama",
        subtitle: "Sub Judul Berita Pertama",
        author: "Penulis 1",
        date: "Tanggal 7 Agustus 2025",
        image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I3.png",
        imageAlt: "Foto artikel berita pertama",
        caption: "Deskripsi singkat tentang foto berita pertama.",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates temporibus itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? <br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates temporibus itaque."
      },
      {
        title: "Judul Berita Kedua",
        subtitle: "Sub Judul Berita Kedua",
        author: "Penulis 1",
        date: "Tanggal 7 Agustus 2025",
        image: "https://ik.imagekit.io/ud82stdm3/p-ap3i/Foto_Asset_PAP3I1.png",
        imageAlt: "Foto artikel berita kedua",
        caption: "Deskripsi singkat tentang foto berita kedua.",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates temporibus itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, expedita? <br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates temporibus itaque."
      }
    ]
  },
  /* ============================================================
   * ============================================================ */
  souvenirSection: {
    title: "SOVENIR KAMI",
    description: "Berikut ini beberapa sovenir kami yang dapat Anda peroleh di marketplace favorit Anda, seperti Shopee, Tokopedia, dan TikTok Shop. Klik Atau Ketuk Bagian yang anda pilih. Dengan otomatis akan beralih ke market place",
    items: [
      {
        image: "assets/logo.jpeg",
        alt: "Sovenir 1",
        href: "#"
      },
      {
        image: "assets/logo.jpeg",
        alt: "Sovenir 2",
        href: "#"
      },
      {
        image: "assets/logo.jpeg",
        alt: "Sovenir 3",
        href: "#"
      },
      {
        image: "assets/logo.jpeg",
        alt: "Sovenir 4",
        href: "#"
      },
      {
        image: "assets/logo.jpeg",
        alt: "Sovenir 5",
        href: "#"
      }
    ]
  },
    /* ============================================================
   * POPUP PROMO
   * 
   * - Muncul setiap 3 menit (180.000 ms)
   * - Berisi gambar + tombol "Selengkapnya" ke URL tujuan
   * - Bisa ditutup manual; akan muncul lagi 3 menit kemudian
   * - Set active: false untuk menonaktifkan tanpa hapus data
   * ============================================================ */
  popupSection: {
    active: true,
    intervalMs: 180000,                 // 3 menit = 180.000 ms
    image: "assets/logo.jpeg",
    imageAlt: "Promo P-AP3I",
    title: "Info Terbaru P-AP3I",       // opsional (bisa dikosongkan "")
    description: "Klik untuk melihat informasi selengkapnya.",  // opsional
    buttonText: "Selengkapnya",
    buttonHref: "https://dpp-pap3i-jakarta.vercel.app/",
    openInNewTab: true                  // buka di tab baru
  }, 
    /* ============================================================
   * BANNER IKLAN (4 Slot Terpisah)
   * 
   * CARA EDIT:
   * - Ubah path gambar di "image"
   * - Ubah alt text di "alt"
   * - Jika ingin mengosongkan salah satu slot, ubah "image" jadi ""
   * ============================================================ */
  /* ============================================================
   * BANNER IKLAN (4 Slot Terpisah)
   * ============================================================ */
  bannersSection: {
    banner1: {
      image: "https://asbin-ecosystem.vercel.app/og-image.jpg",
      alt: "Banner Iklan 1",
      link: "https://asbin-ecosystem.vercel.app/",       // Ganti dengan URL tujuan
      buttonText: "Selengkapnya"                 // Teks tombol (opsional)
    },
    banner2: {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcKvpQ8DmNmubBkMsaWrO7_H_f71tOR3prpgeU0SShR4PyXfonpD9E0oU&s=10",
      alt: "Banner Iklan 2",
      link: "https://pildun26-631ac.web.app/",        // Ganti dengan URL tujuan
      buttonText: "Selengkapnya"
    },
    banner3: {
      image: "https://kontrakan-a5314.web.app/adi-mardani-dev.png",
      alt: "Banner Iklan 3",
      link: "https://kontrakan-a5314.web.app/",                                  // URL kosong = tombol tidak muncul
      buttonText: "Kunjungi"
    },
    banner4: {
      image: "https://kasirasbinecosystem.vercel.app/icons/icon-512x512.png",
      alt: "Banner Iklan 4",
      link: "https://kasirasbinecosystem.vercel.app/",
      buttonText: "Kunjungi"
    }
  }
};