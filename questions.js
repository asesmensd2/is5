const questions = [
    {
        soal: "Yang termasuk bacaan Surah Al-Ma'un ayat ke-5 adalah...",
        gambar: "images/ayat1.jpg",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih B"
    },
    {
        soal: "Lafal yang dicetak tebal pada ayat di bawah artinya...",
        gambar: "images/ayat2.jpg",
        pilihan: ["A", "B", "C", "D"],
        jawabanBenar: "C"
    },
    {
        soal: "Perhatikan pernyataan berikut! 1) Sungguh celaka orang yang salatnya tidak berjamah. 2) Salat khusyuk hanya karena Allah. 3) Simpati terhadap pada fakir miskin. (4) Kepedulian terhadap anak yatim. (5) Selalu bersyukur atas nikmat Allah.<br>Pernyataan yang sesuai dengan pesan pokok Surah Al-Ma'un, <b><i>kecuali</i></b>...",
        pilihan: ["1 dan 5", "2 dan 3", "3 dan 4", "4 dan 5"],
        jawabanBenar: "1 dan 5"
    },
    {
        soal: "Ketika Andi diberikan uang jajan oleh ibunya, dia selalu menyisihkan sebagian uangnya untuk ditabung. Setiap tahun Andi membuka tabungannya. Sebagian uangnya kemudian disumbangkan ke yayasan sosial yang digunakan untuk membantu fakir miskin. Terkadang, uangnya dibelikan bahan makanan pokok kemudian disumbangkan. Sikap Andi telah mengamalkan kandungan <b>Surah al-Ma'un</b> ayat ke...",
        pilihan: ["2", "3", "4", "5"],
        jawabanBenar: "3"
    },
    {
        soal: "Allah Swt. Yang mengurus dan memperbaiki alam semesta tanpa bantuan makhluknya karena Allah Swt. Memiliki asmaulhusna ....",
        pilihan: ["Al-Qayyum", "Al-Aziz", "Al-Fattah", "Ar-Rauf"],
        jawabanBenar: "Al-Qayyum"
    },
    {
        soal: "Seorang hamba Allah ini terlihat sehat walafiat, karena dia menjaga pola makan, minum, olahraga teratur, dan istirahat yang cukup. Namun tiba-tiba selesai berolahraga badannya merasa panas lalu meninggal dunia. <br>Pernyataan di atas menunjukkan bahwa Allah memiliki sifat ....",
        pilihan: ["Al-Qayyum", "Al-Aziz", "Al-Fattah", "Al-Mumit"],
        jawabanBenar: "Al-Mumit"
    },
    {
        soal: "Perhatikan Q.S. Al-Baqarah ayat 255 berikut! Ayat tersebut menunjukkan asmaul husna ....",
        gambar: "images/ayat3.jpg",
        pilihan: ["Al-Qayyum", "Al-Aziz", "Al-Fattah", "Al-Mumit"],
        jawabanBenar: "Al-Mumit"
    },
    {
        soal: "Meneladani asmaulhusna dapat melahirkan perilaku ....",
        pilihan: ["Somong", "Takabur", "Terpuji", "Tercela"],
        jawabanBenar: "Terpuji"
    },
    {
        soal: "Sikap menerima, mengakui dan menghormati orang lain yang memiliki perbedaan dengan diri kita disebut ....",
        pilihan: ["Menghargai", "Peduli", "Kerja sama", "Sedekah"],
        jawabanBenar: "Menghargai"
    },
    {
        soal: "Surah al-Ma'un artinya ....",
        pilihan: ["Makanan", "Hari Pembalasan", "Orang-orang yang Celaka", "Barang2 yang berguna"],
        jawabanBenar: "Barang2 yang berguna"
    },
    {
        soal: "Apabila ada permasalahan sebaiknya diselesaikan dengan cara ....",
        pilihan: ["diputuskan", "bermusyawarah", "minta bantuan", "dibiarkan"],
        jawabanBenar: "bermusyawarah"
    },
    {
        soal: "Kata yang bergaris bawah, dinamakan hukum bacaan ....",
        gambar: "images/ayat4.jpg",
        pilihan: ["Idghom Arid Lissukun", "Mad Jaiz Munfasil", "Idghom Mimi", "Mad Wajib Muttasil"],
        jawabanBenar: "Idghom Mimi"
    },
    {
        soal: "Menghardik anak yatim termasuk perbuatan yang mendustakan ....",
        pilihan: ["Agama", "Al-Qur'an", "Iman", "Nabi"],
        jawabanBenar: "Agama"
    },
    {
        soal: "Perbuatan yang ingin dipuji oleh orang lain dinamakan ....",
        pilihan: ["Sombong", "Ujub", "Riya'", "Takabur"],
        jawabanBenar: "Riya'"
    },
    {
        soal: "Meyakini bahwa Allah memiliki nama-nama indah yang disebut dengan ....",
        pilihan: ["Sifat Jaiz", "Sifat Mustahil", "Asmaul Husna", "Sifat Wajib"],
        jawabanBenar: "Asmaul Husna"
    },
    {
        soal: "Al-Qayyum artinya ....",
        pilihan: ["Maha Hidup", "Maha Berdiri Sendiri", "Maha Melihat", "Maha Berkuasa"],
        jawabanBenar: "Maha Berdiri Sendiri"
    },
    {
        soal: "Semua amal perbuatan akan diadili dan tidak ada yang luput dari ....",
        pilihan: ["Pencatatan", "Penilaian", "Peradilan", "Pengawasan"],
        jawabanBenar: "Peradilan"
    },
    {
        soal: "Dani mengakui bahwa dirinya hanyalah makhluk yang lemah karena Allah memiliki sifat ....",
        pilihan: ["Al-Ba'its", "Al-Muhyi", "Al-Hayyu", "Al-Qawiyyu"],
        jawabanBenar: "Al-Qawiyyu"
    },
    {
        soal: "Pemimpin untuk mengurus bumi, untuk melaksanakan perintah-perintah-Nya dan memakmurkan bumi serta memanfaatkan segala isinya. Merupakan pengertian dari ....",
        pilihan: ["Kekhalifahan", "Kepemimpinan", "Ketaatan", "Kewajiban"],
        jawabanBenar: "Kekhalifahan"
    },
    {
        soal: "Dalam bersikap menghormati perbedaan keyakinan hendaknya tidak melanggar ketentuan ....",
        pilihan: ["Hukum adat", "Syariat Islam", "Hukum negara", "Norma sosial"],
        jawabanBenar: "Syariat Islam"
    },
    {
        soal: "Allah maha kuat, kekuatan-Nya tidak terbatas dan kekuatan-Nya mampu mengurus alam sendiri, tanpa bantuan siapapun. Asmaul husna yang tepat adalah ....",
        pilihan: ["Al-'Adl", "Al-Ba'its", "Al-Qayyum", "Al-Qawiyyu"],
        jawabanBenar: "Al-Qawiyyu"
    },
    {
        soal: "Surah al-Ma'un berada pada urutan surah ke .... dalam Al-Qur'an.",
        pilihan: ["110", "105", "107", "100"],
        jawabanBenar: "107"
    },
    {
        soal: "Hukum bacaan izhar safawi harus dibaca dengan ....",
        pilihan: ["Samar", "Jelas", "Dengung", "Memantul"],
        jawabanBenar: "Jelas"
    },
    {
        soal: "Surah al-Ma'un terdiri atas .... ayat.",
        pilihan: ["5", "8", "6", "7"],
        jawabanBenar: "7"
    },
    {
        soal: "Allah swt. memiliki asmaul husna yang berjumlah ....",
        pilihan: ["99", "89", "79", "109"],
        jawabanBenar: "99"
    },
    {
        soal: "Al-Muhyi artinya ....",
        pilihan: ["Maha Menciptakan", "Maha Mematikan", "Maha Membangkitkan", "Maha Menghidupkan"],
        jawabanBenar: "Maha Menghidupkan"
    },
    {
        soal: "Sebab turunnya ayat atau surah dalam al-Qur'an disebut ....",
        pilihan: ["Wahyu", "Asbabun Nuzul", "Madaniyah", "Makkiyah"],
        jawabanBenar: "Asbabun Nuzul"
    },
    {
        soal: "Allah maha membangkitkan. Allah akan membangkitkan semua manusia dari alam kubur, akan menghidupkan kembali makhluk-Nya yang telah mati. Pengertian dari asmaul husna ....",
        pilihan: ["Al-Ba'its", "Al-Mumiit", "Al-Muhyi", "Al-'Adl"],
        jawabanBenar: "Al-Ba'its"
    },
    {
        soal: "Manusia tidak dapat hidup sendiri tanpa bantuan orang lain karena manusia makhluk ....",
        pilihan: ["Individual", "Sosial", "Berakal", "Mandiri"],
        jawabanBenar: "Sosial"
    },
    {
        soal: "Manusia diciptakan Allah Swt. dari ....",
        pilihan: ["Tanah", "Api", "Air", "Cahaya"],
        jawabanBenar: "Tanah"
    },
    {
        soal: "Surah Al-Ma'un ayat ke-3 berbunyi: \"وَلَا يَحُضُّ عَلٰى طَعَامِ الْمِسْكِيْنِ\". Apa arti dari ayat tersebut?",
        pilihan: ["Dan enggan (memberikan) bantuan.", "Maka itulah orang yang menghardik anak yatim.", "Maka celakalah orang-orang yang salat.", "Dan tidak menganjurkan (memberi) makan orang miskin."],
        jawabanBenar: "Dan tidak menganjurkan (memberi) makan orang miskin."
    },
    {
        soal: "Salah satu pesan pokok dalam Surah Al-Ma'un yang berkaitan dengan larangan berbuat riya' dalam beramal adalah...",
        pilihan: ["Larangan menghardik yatim", "Perintah menyayangi fakir miskin", "Larangan riya' dalam ibadah/amal", "Ciri pendusta hari pembalasan"],
        jawabanBenar: "Larangan riya' dalam ibadah/amal" 
    },
    {
        soal: "Di antara kelompok berikut, manakah yang termasuk pendusta agama menurut Surah Al-Ma'un?",
        pilihan: ["Orang yang tidak berpuasa.", "Orang yang meninggalkan salat lima waktu.", "Orang yang lalai dalam salatnya dan berbuat riya'.", "Orang yang menolak membayar zakat."],
        jawabanBenar: "Orang yang lalai dalam salatnya dan berbuat riya'."
    },
    {
        soal: "Sikap yang paling sesuai dengan ajaran Islam terhadap anak yatim adalah...",
        pilihan: ["Beri uang sedikit dan mandiri", "Sayangi, lindungi, dan penuhi haknya", "Hardik agar jadi kuat", "Cukup urus harta warisan"],
        jawabanBenar: "Sayangi, lindungi, dan penuhi haknya"
    },
    {
        soal: "Asmaul Husna yang memiliki arti Maha Berdiri Sendiri (tidak butuh bantuan siapa pun) dan Maha Mengurus segala urusan makhluk-Nya adalah...",
        pilihan: ["Al-Qawiyyu", "Al-Muhyi", "Al-Ba'its", "Al-Qayyum"],
        jawabanBenar: "Al-Qayyum"
    },
    {
        soal: "Bukti pengamalan Asmaul Husna Al-Qayyum dalam perilaku terpuji sehari-hari adalah...",
        pilihan: ["Menjadi pribadi yang berani dan kuat fisik.", "Selalu optimis dan membangkitkan semangat orang lain.", "Mengerjakan segala sesuatu secara mandiri dan tidak mudah menyerah.", "Rajin menjaga kesehatan tubuh dan kebersihan lingkungan."],
        jawabanBenar: "Mengerjakan segala sesuatu secara mandiri dan tidak mudah menyerah." //
    },
    {
        soal: "Kalimat yang kita ucapkan ketika mendengar atau melihat saudara kita terkena musibah disebut bacaan Istirja, yaitu...",
        pilihan: ["Subhanallah", "Allahu Akbar", "Astaghfirullah", "Inna lillahi wa inna ilaihi raji'un"],
        jawabanBenar: "Inna lillahi wa inna ilaihi raji'un" //
    },
    {
        soal: "Cara terbaik dalam menerima perbedaan, terutama perbedaan keyakinan, adalah...",
        pilihan: ["Membiarkan saja", "Saling menghormati", "Menentang perbedaan yang tidak sesuai dengan kita.", "Hanya berinteraksi dengan orang yang sama keyakinannya."],
        jawabanBenar: "Saling menghormati" //
    },
    {
        soal: "Tugas utama manusia sebagai khalifah di bumi yang berhubungan dengan alam adalah...",
        pilihan: ["Mencari harta sebanyak-banyaknya.", "Menciptakan teknologi canggih.", "Memakmurkan dan melestarikan bumi serta memanfaatkan isinya.", "Menjadi penguasa politik dunia."],
        jawabanBenar: "Memakmurkan dan melestarikan bumi serta memanfaatkan isinya." //
    },
    {
        soal: "Manfaat utama dari sikap saling menghargai (toleransi) dalam kehidupan bermasyarakat adalah...",
        pilihan: ["Memperoleh banyak teman dan keuntungan pribadi.", "Menjadi terkenal sebagai orang yang bijaksana.", "Terciptanya kerukunan, kedamaian, dan menghindari perpecahan.", "Memudahkan dalam mendapatkan pekerjaan."],
        jawabanBenar: "Terciptanya kerukunan, kedamaian, dan menghindari perpecahan." //
    }
];

const totalQuestions = questions.length; 