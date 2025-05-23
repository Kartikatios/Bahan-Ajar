const questions = [
    {
      question: "1. Apa yang dimaksud dengan sarana menurut Kamus Besar Bahasa Indonesia (KBBI)?",
      options: [
        "A. Tempat utama berlangsungnya aktivitas administrasi",
        "B. Penunjang utama dalam suatu kegiatan",
        "C. Sesuatu yang dipakai sebagai alat untuk mencapai tujuan",
        "D. Benda yang tidak bergerak seperti gedung atau ruang rapat"
      ],
      answer: "C. Sesuatu yang dipakai sebagai alat untuk mencapai tujuan"
    },
    {
      question: "2.	Sebuah kantor baru dibuka dengan kelengkapan komputer, meja kerja, dan AC yang modern, namun para pegawai merasa tidak nyaman karena ruangannya sempit dan tidak ada ruang diskusi, Apa penyebab utama ketidaknyamanan tersebut?", 
      options: [
        "A.	Sarana terlalu banyak sehingga mengganggu",
        "B.	Prasarana tidak dirancang sesuai kebutuhan aktivitas",
        "C.	Pegawai belum terbiasa dengan teknologi baru",
        "D. Sarana lebih penting daripada prasarana dalam organisasi"
      ],
      answer: "B.	Prasarana tidak dirancang sesuai kebutuhan aktivitas"
    },
    {
      question: "3.	Apa perbedaan utama antara sarana dan prasarana menurut KBBI?",
      options: [
        "A. Sarana bersifat tidak bergerak, sedangkan prasarana bersifat bergerak",
        "B. Sarana digunakan untuk alat mencapai tujuan, sedangkan prasarana sebagai penunjang utama proses",
        "C. Sarana digunakan oleh manajer, sedangkan prasarana digunakan oleh staf",
        "D. Sarana lebih penting daripada prasarana dalam organisasi"
      ],
      answer: "B. Sarana digunakan untuk alat mencapai tujuan, sedangkan prasarana sebagai penunjang utama proses"
    },
    {
      question: "4.	Jika sebuah kantor sering kehilangan banyak barang meskipun telah melakukan penyimpanan, Langkah terbaik yang perlu ditambahkan dalam system pengelolaan sarana dan prasarana adalah?",
      options: [
        "A.	Menutup akses Gudang bagi semua pegawai",
        "B.	Meningkatkan system inventarisasi dan pengawasan",
        "C.	Memperbanyak stok barang",
        "D.	Membuat laporan tiga bulanan"
      ],
      answer: "B.	Meningkatkan system inventarisasi dan pengawasan"
    },
    {
        question: "5.	Berikut ini tujuan dari pemeliharaan sarana dan prasarana kantor adalah, kecuali…",
        options: [
          "A.	Mecegah kerusakan karena suhu",
          "B.	Mencegah barang yang rusak karena hama",
          "C.	Menjaga kebersihan sarana",
          "D.	Menambah jumlah barang"
        ],
        answer: "D.	Menambah jumlah barang"
      },
      {
        question: "6.	Apa arti dari istilah layout dalam konteks perkantoran?",
        options: [
          "A. Penyusunan jadwal kerja pegawai",
          "B. Pengaturan perabot dan perlengkapan kantor secara sistematis",
          "C. Pembagian gaji dan tunjangan pegawai",
          "D. Penyimpanan data dalam computer"
        ],
        answer: "B. Pengaturan perabot dan perlengkapan kantor secara sistematis"
      },
      {
        question: "7.	Suatu perusahaan mengeluh bahwa banyak waktu terbuang karena pegawai harus berjalan jauh untuk mengakses alat kerja utama seperti printer dan mesin fotokopi. Prinsip tata ruang kantor manakah yang paling tepat diterapkan untuk mengatasi masalah ini?",
        options: [
          "A. Asas Rangkaian Kerja",
          "B. Asas Pemanfaatan Seluruh Ruang",
          "C. Asas Jarak Pendek",
          "D. Penempatan unit kerja yang saling berjauhan"
        ],
        answer: "C. Asas Jarak Pendek"
      },
      {
        question: "8.	Sebuah kantor menempatkan ruang rapat tepat di samping area kerja utama. Akibatnya, suara diskusi dari rapat sering mengganggu konsentrasi pegawai. Dari prinsip-prinsip tata ruang kantor berikut, manakah yang tidak diterapkan dalam kasus ini?",
        options: [
          "A. Pisahkan area dengan tingkat kebisingan tinggi",
          "B. Desain jalur kerja seefisien mungkin",
          "C. Penempatan alat kerja dekat pengguna",
          "D. Kesesuaian ukuran dan bentuk perabot"
        ],
        answer: "A. Pisahkan area dengan tingkat kebisingan tinggi"
      },
       {
        question: "9.	Mengapa ruang kantor tertutup lebih cocok untuk pekerjaan yang memerlukan privasi?",
        options: [
          "A. Karena ruangannya terbuka dan tidak memiliki sekat",
          "B. Karena memberikan tingkat privasi lebih tinggi",
          "C. Karena ruangan bisa diatur ulang kapan saja",
          "D. Karena karyawan dapat berkomunikasi lebih bebas"
        ],
        answer: "B. Karena memberikan tingkat privasi lebih tinggi"
      },
      {
      question: "10.	Apa yang menjadi keunggulan utama dari ruang kantor tertutup dibandingkan dengan ruang kantor terbuka?",
      options: [
        "A. Lebih hemat biaya operasional",
        "B. Memberikan privasi lebih bagi karyawan",
        "C. Memudahkan komunikasi antar karyawan",
        "D. Lebih fleksibel dalam penataan ruang"
      ],
      answer: "B. Memberikan privasi lebih bagi karyawan"
    },
  ];


  const questions2= [
    {
      question: "1.	PT Maju Jaya memiliki ruangan terbuka dengan tujuan meningkatkan kolaborasi antar tim. Maka, furniture apa yang dapat digunakan untuk memberikan batas antar tim dan mudah untuk dipindah-pindah?",
      options: [
        "A.	Rak dokumen",
        "B.	Cabinet peraga",
        "C.	Panel yang dapat dipindah",
        "D.	Lemari brankas"
      ],
      answer: "C.	Panel yang dapat dipindah"
    },
    {
      question: "2.	Apa penyebab lemari warkat tidak baik digunakan untuk menyimpan dokumen dalam jangka Panjang?",
      options: [
        "A.	Karena ukurannya yang kecil",
        "B.	Karena khusus digunakan untuk dokumen yang belum diolah.",
        "C.	Karena rawan hilang dan mudah dipindah",
        "D.	Karena tidak ada kuncinya"
      ],
      answer: "B.	Karena khusus digunakan untuk dokumen yang belum diolah."
    },
    {
      question: "3.	Anda adalah seorang sekretaris di sebuah perusahaan ternama. Anda membutuhkan akses cepat untuk dokumen tanpa harus berpindah tempat, maka furniture mana yang anda butuhkan?",
      options: [
        "A.	Lemari dokumen",
        "B.	Lemari rak",
        "C.	Lemari pendek",
        "D.	Lemari arsip beroda"
      ],
      answer: "D.	Lemari arsip beroda"
    },
    {
      question: "4.	Pada perusahaan anda terdapat filling cabinet sebagai fasilitas yang disediakan perusahaan untuk semua karyawannya. Jika anda sebagai karyawan, maka anda memanfaatkan filling cabinet tersebut untuk apa?",
      options: [
        "A.	Untuk menyimpan dokumen",
        "B.	Untuk menyimpan uang",
        "C.	Untuk menyimpan alat tulis",
        "D.	Untuk menyimpan barang pribadi"
      ],
      answer: "A.	Untuk menyimpan dokumen"
    },
    {
        question: "5.	Pada kantor pastinya terdapat meja-meja yang diperlukan, manakah meja yang biasanya tidak ada di kantor?",
        options: [
          "A.	Meja rapat",
          "B.	Meja samping",
          "C.	Meja makan",
          "D.	Meja resepsionis"
        ],
        answer: "C.	Meja makan"
      },
      {
        question: "6.	Apa yang akan terjadi jika desain interior kantor tertata dan rapi?",
        options: [
          "A.	Meningkatkan produktivitas karyawan",
          "B.	Karyawan menjadi terbiasa dan mudah",
          "C.	Kantor terlihat lebih santai",
          "D.	Kantor menjadi lebih unuk dan merasa beda"
        ],
        answer: "A.	Meningkatkan produktivitas karyawan"
      },
      {
        question: "7.	Apabila anda mendapatkan klien untuk melakukan tata ulang kantor agar terlihat lebih asri tetapi dengan syarat tidak boleh merubah bangunan karena anda seorang desainer interior. Hal apakah yang akan anda ambil untuk klien tersebut?",
        options: [
          "A.	Menambahkan kaca yang lebar pada dinding kantor",
          "B.	Mengganti lampu dengan lampu warna hijau",
          "C.	Memberikan tanaman pada setiap ruangan yang strategis",
          "D.	Menempelkan wallpaper dinging dengan tema tanaman"
        ],
        answer: "C.	Memberikan tanaman pada setiap ruangan yang strategis"
      },
      {
        question: "8.	Peran interior kantor yang manakah bisa sesuai dengan tujuan mendukung branding perusahaan?",
        options: [
          "A.	Memajang logo perusahaan yang besar di setiap ruangan",
          "B.	Memilih warna dinding yang sesuai dengan perusahaan",
          "C.	Memberikan hidangan special pada ruang istirahat",
          "D.	Mengatur ulang jam kerja berdasarkan budaya perusahaan"
        ],
        answer: "B.	Memilih warna dinding yang sesuai dengan perusahaan"
      },
       {
        question: "9.	Demi kenyamanan karyawan kantor, manajer memilih pencahayaan alami dan warna pastel untuk cat pada dinding. Apabila anda seorang manajer tersebut, maka manakah yang akan anda pilih sesuai dengan fungsi interior kantor?",
        options: [
          "A.	Warna dan pencahayaan mengikuti tren terkini",
          "B.	Warna dan pencahayaan yang tepat untuk kenyamanan ",
          "C.	Warna pastel lebih estetik dan murah",
          "D.	Pencahayaan alami untuk menghemat Listrik"
        ],
        answer: "B.	Warna dan pencahayaan yang tepat untuk kenyamanan "
      },
      {
      question: "10.	Apa alasan dari pencahayaan alami lebih efektif daripada pencahayaan lainnya?",
      options: [
        "A.	Karena pencahayaan alami menimbulkan kenaikan tagihan listrik",
        "B.	Karena pencahayaan alami dapat meminimalisir kesan modern",
        "C.	Karena pencahayaan alami bisa meningkatkan kreativitas karyawan",
        "D.	Karena pencahayaan alami lebih cocok dengan desain interior klasik"
      ],
      answer: "C.	Karena pencahayaan alami bisa meningkatkan kreativitas karyawan"
    },
  ];

      // Soal 1 Variables and Functions
      let currentQuestion1 = 0;
      let correctAnswers1 = 0;
      let playerNama1 = "";
      let answerSelected1 = false;
      
      let currentQuestion2 = 0;
      let correctAnswers2 = 0;
      let playerName2 = "";
      let answerSelected2 = false;


       function checkEnter1(event) {
    if (event.key === "Enter") {
      const input = document.getElementById("player-name");
      if (input.value.trim() === "") {
        document.getElementById("error-message").style.display = "block";
      } else {
        startQuiz1();
      }
    }
  }

  function checkEnter2(event) {
    if (event.key === "Enter") {
      const input = document.getElementById("player-name");
      if (input.value.trim() === "") {
        document.getElementById("error-message").style.display = "block";
      } else {
        startQuiz2();
      }
    }
  }
      
      
      function startQuiz1() {
        const input = document.getElementById("player-nama");
        const errMsg = document.getElementById("error-message1");
        if (input.value.trim() === "") {
          errMsg.style.display = "block";
          return;
        }
        const buttonSound = document.getElementById("button-sound");
buttonSound.currentTime = 0;
buttonSound.play();

        errMsg.style.display = "none";
        playerName1 = input.value.trim();
        document.getElementById("start-bok").style.display = "none";
        document.getElementById("quiz-bok").style.display = "block";
        currentQuestion1 = 0;
        correctAnswers1 = 0;
        loadQuestion1();
        playBackgroundSound();
      }

      function startQuiz2() {
        const input = document.getElementById("player-name");
        const errMsg = document.getElementById("error-message2");
        if (input.value.trim() === "") {
          errMsg.style.display = "block";
          return;
        }
        const buttonSound = document.getElementById("button-sound");
buttonSound.currentTime = 0;
buttonSound.play();
        errMsg.style.display = "none";
        playerName2 = input.value.trim();
        document.getElementById("start-box").style.display = "none";
        document.getElementById("quiz-box").style.display = "block";
        currentQuestion2 = 0;
        correctAnswers2 = 0;
        loadQuestion2();
        playBackgroundSound();
      }
      
      function loadQuestion1() {
        const questionData = questions[currentQuestion1];
        document.getElementById("questione").textContent = questionData.question;
        const optionsDiv = document.getElementById("optionse");
        optionsDiv.innerHTML = "";
        answerSelected1 = false;
        document.getElementById("next-buton").style.display = "none";

        questionData.options.forEach(option => {
          const btn = document.createElement("button");
          btn.textContent = option;
          btn.onclick = () => selectAnswer1(btn, option);
          optionsDiv.appendChild(btn);
        });
      }

       function loadQuestion2() {
        const questionData = questions2[currentQuestion2];
        document.getElementById("question").textContent = questionData.question;
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
        answerSelected2 = false;
        document.getElementById("next-btn").style.display = "none";

        questionData.options.forEach(option => {
          const btn = document.createElement("button");
          btn.textContent = option;
          btn.onclick = () => selectAnswer2(btn, option);
          optionsDiv.appendChild(btn);
        });
      }

      function selectAnswer1(button, selected) {
        if (answerSelected1) return;
        answerSelected1 = true;
        if (selected === questions[currentQuestion1].answer) {
          correctAnswers1++;
          playCorrectSound();
       } else {
      playWrongSound();
        }
        button.classList.add("selected");
        document.getElementById("next-buton").style.display = "inline-block";
      }


      function selectAnswer2(button, selected) {
        if (answerSelected2) return;
        answerSelected2 = true;
        if (selected === questions2[currentQuestion2].answer) {
          correctAnswers2++;
            playCorrectSound();
    } else {
      playWrongSound();
        }
        button.classList.add("selected");
        document.getElementById("next-btn").style.display = "inline-block";
      }

      function nextQuestion1() {
        const Sound = document.getElementById("sound");
Sound.currentTime = 0;
Sound.play();

        currentQuestion1++;
        if (currentQuestion1 < questions.length) {
          loadQuestion1();
        } else {
          showResult1();
        }
      }

      function nextQuestion2() {

        const Sound = document.getElementById("sound");
Sound.currentTime = 0;
Sound.play();
        currentQuestion2++;
        if (currentQuestion2 < questions2.length) {
          loadQuestion2();
        } else {
          showResult2();
        }
      }

      function showResult1() {
        document.getElementById("quiz-bok").style.display = "none";
        document.getElementById("result-bok").style.display = "block";
        document.getElementById("display-nama").textContent = playerName1;
        const score = Math.round((correctAnswers1 / questions.length) * 100);
        document.getElementById("scoree").textContent = score + " / 100";
        playBackgroundSound();
      }

      
      function showResult2() {
        document.getElementById("quiz-box").style.display = "none";
        document.getElementById("result-box").style.display = "block";
        document.getElementById("display-name").textContent = playerName2;
        const score = Math.round((correctAnswers2 / questions2.length) * 100);
        document.getElementById("score").textContent = score + " / 100";
      playBackgroundSound();
      }

      function restartQuiz1() {
        const clickSound = document.getElementById("click-sound");
clickSound.currentTime = 0;
clickSound.play();
        currentQuestion1 = 0;
        correctAnswers1 = 0;
        playerName1 = "";
        document.getElementById("player-nama").value = "";
        document.getElementById("result-bok").style.display = "none";
        document.getElementById("start-bok").style.display = "block";
        document.getElementById("error-message1").style.display = "none";
loadQuestion();
playBackgroundSound();
      }

      function restartQuiz2() {
        const clickSound = document.getElementById("click-sound");
clickSound.currentTime = 0;
clickSound.play();
        currentQuestion2 = 0;
        correctAnswers2 = 0;
        playerName2 = "";
        document.getElementById("player-name").value = "";
        document.getElementById("result-box").style.display = "none";
        document.getElementById("start-box").style.display = "block";
        document.getElementById("error-message").style.display = "none";
loadQuestion();
playBackgroundSound();
      }

       function playCorrectSound() {
    document.getElementById("correct-sound").play();
  }

  function playWrongSound() {
    document.getElementById("wrong-sound").play();
  }