const questions = [
    {
      question: "Apa pengertian administrasi sarana dan prasarana?",
      options: [
        "Pengelolaan data pengaturan terhadap semua fasilitas pendukung kegiatan admintrasi",
        "Proses mendata keuangan kantor",
        "System pengarsipan dokumen penting",
        "Pengawasan terhadap pegawai"
      ],
      answer: "Pengelolaan data pengaturan terhadap semua fasilitas pendukung kegiatan admintrasi"
    },
    {
      question: "Berikut ini yang termasuk tujuan administrasi sarana dan prasarana",
      options: [
        "Mempermudah karyawan",
        "Menurunkan produktivitas",
        "Meningkatkan kinerja seseorang",
        "Menyederhanakan struktur organisasi"
      ],
      answer: "Meningkatkan kinerja seseorang"
    },
    {
      question: "Factor yang perlu diperhatikan dalam penelitian kebutuhan perlengkapan kerja, kecuali…",
      options: [
        "Kompetensi",
        "Ongkos",
        "Fungsional",
        "Prestise"
      ],
      answer: "Kompetensi"
    },
    {
      question: "Berikut ini tujuan dari pemeliharaan sarana dan prasarana kantor adalah, kecuali…",
      options: [
        "Mecegah kerusakan karena suhu",
        "Mencegah barang yang rusak karena hama",
        "Menjaga kebersihan sarana",
        "Menambah jumlah barang"
      ],
      answer: "Menambah jumlah barang"
    },
    {
      question: "Tujuan menyimpan barang dengan rapi dan berkode adalah",
      options: [
        "Agar barang terlihat mahal",
        "Untuk meningkatkan biaya penyimpangan",
        "Agar mudah di temukan saat dibutuhkan",
        "Untuk meningkatkan biaya penyimpangan"
      ],
      answer: "Agar mudah di temukan saat dibutuhkan"
    },
    {
        question: "Jika sebuah kantor sering kehilangan banyak barang meskipun telah melakukan penyimpanan, Langkah terbaik yang perlu ditambahkan dalam system pengelolaan sarana dan prasarana adalah?",
        options: [
          "Menutup akses Gudang bagi semua pegawai",
          "Meningkatkan system inventarisasi dan pengawasan",
          "Memperbanyak stok barang ",
          "Membuat laporan tiga bulanan"
        ],
        answer: "Meningkatkan system inventarisasi dan pengawasan"
      },
      {
        question: "Sebuah kantor ingin Menyusun laporan sarana dan prasarana tahunan, tetapi kehilangan beberapa bukti transaksi. Akibat yang mungkin terjadi adalah?",
        options: [
          "Laporan tidak akurat dan sulit di pertanggungjawabkan",
          "Laporan tetap sah asal ditandatangani pemimpin",
          "Laporan tetap valid karena menggunakan data sebelumnya",
          "Laporan tidak bisa dibuat sama sekali"
        ],
        answer: "Laporan tidak akurat dan sulit di pertanggungjawabkan"
      },
      {
        question: "Pemeliharaan yang dilakukan dalam waktu tertentu, seperti seminggu atau sebulan sekali disebut?",
        options: [
          "Pemeliharaan darurat ",
          "Pemeliharaan berkala",
          "Pemeliharaan harian",
          "Pemeliharaan mendadak"
        ],
        answer: "Pemeliharaan mendadak"
      },
      {
        question: "10.	Jika pemeliharaan dilakukan secara asal asalan dan tidak berkala, maka resiko yang paling mungkin terjadi adalah",
        options: [
          "Kinerja karyawan meningkat karena tidak repot merawat barang",
          "Barang cepat rusak dan biaya perbaikan menbengkak",
          "Barang selalu dalam kondisi baru",
          "Anggaran kantor menjadi berlebihan"
        ],
        answer: "Barang cepat rusak dan biaya perbaikan menbengkak"
      },
  ];

  let currentQuestion = 0;
  let correctAnswers = 0;
  let playerName = "";
  let answerSelected = false;

  function checkEnter(event) {
    if (event.key === "Enter") {
      const input = document.getElementById("player-name");
      if (input.value.trim() === "") {
        document.getElementById("error-message").style.display = "block";
      } else {
        startQuiz();
      }
    }
  }

  function startQuiz() {
const input = document.getElementById("player-name");
if (input.value.trim() === "") {
  document.getElementById("error-message").style.display = "block";
  return;
}

// Putar suara tombol saat diklik
const buttonSound = document.getElementById("button-sound");
buttonSound.currentTime = 0;
buttonSound.play();

playerName = input.value.trim();
document.getElementById("start-box").classList.add("hidden");
document.getElementById("quiz-box").classList.remove("hidden");
document.getElementById("error-message").style.display = "none";
loadQuestion();
playBackgroundSound();
}


  function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    answerSelected = false;
    document.getElementById("next-btn").style.display = "none";

    questionData.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => selectAnswer(btn, option);
      optionsDiv.appendChild(btn);
    });
  }

  function selectAnswer(button, selected) {
    if (answerSelected) return;
    answerSelected = true;
    if (selected === questions[currentQuestion].answer) {
      correctAnswers++;
      playCorrectSound();
    } else {
      playWrongSound();
    }
    button.classList.add("selected");
    document.getElementById("next-btn").style.display = "block";
  }

  function nextQuestion() {
const Sound = document.getElementById("sound");
Sound.currentTime = 0;
Sound.play();

currentQuestion++;
if (currentQuestion < questions.length) {
  loadQuestion();
} else {
  showResult();
}
}


  function showResult() {
    const score = Math.round((correctAnswers / questions.length) * 100);
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("display-name").textContent = playerName;
    document.getElementById("score").textContent = `${score} / 100`;
    playBackgroundSound(); // Restart background music after quiz ends
  }

function restartQuiz() {
const clickSound = document.getElementById("click-sound");
clickSound.currentTime = 0;
clickSound.play();

currentQuestion = 0;
correctAnswers = 0;
playerName = "";
document.getElementById("player-name").value = "";
document.getElementById("start-box").classList.remove("hidden");
document.getElementById("result-box").classList.add("hidden");
document.getElementById("error-message").style.display = "none";
loadQuestion();
playBackgroundSound(); // Play background sound when restarting
}


  function playCorrectSound() {
    document.getElementById("correct-sound").play();
  }

  function playWrongSound() {
    document.getElementById("wrong-sound").play();
  }