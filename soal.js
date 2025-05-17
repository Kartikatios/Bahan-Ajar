const questions = [
    {
      question: "Apa yang dimaksud dengan sarana menurut Kamus Besar Bahasa Indonesia (KBBI)?",
      options: [
        "Tempat utama berlangsungnya aktivitas administrasi",
        "Penunjang utama dalam suatu kegiatan",
        "Sesuatu yang dipakai sebagai alat untuk mencapai tujuan",
        "Benda yang tidak bergerak seperti gedung atau ruang rapat"
      ],
      answer: "Sesuatu yang dipakai sebagai alat untuk mencapai tujuan"
    },
    {
      question: "Jika sebuah kantor sering kehilangan banyak barang meskipun telah melakukan penyimpanan, Langkah terbaik yang perlu ditambahkan dalam system pengelolaan sarana dan prasarana adalah?",
      options: [
        "Menutup akses Gudang bagi semua pegawai",
        "Meningkatkan system inventarisasi dan pengawasan",
        "Memperbanyak stok barang",
        "Membuat laporan tiga bulanan"
      ],
      answer: "Meningkatkan system inventarisasi dan pengawasan"
    },
    {
      question: "Furniture kantor memiliki pengertian yang berbeda-beda menurut para ahli. Pendapat dari Santoso (1998) mengenai furniture kantor yaitu…",
      options: [
        "Sebagai sarana pembantu pekerjaan dengan lancar",
        "Suatu peralatan yang terseedia di kantor",
        "Peralatan yang estetik",
        "Alat komunikasi antar karyawan "
      ],
      answer: "Sebagai sarana pembantu pekerjaan dengan lancar"
    },
    {
      question: "Karyawan perusahaan melaporkan kepada manajer mengenai rasa pegal dan tidak focus pada saat bekerja. Tindakan apa yang harus dilakukan manajer apabila mendapat laporan tersebut?",
      options: [
        "Memotong jam kerja agar tidak terlalu lama",
        "Mengganti furniture yang memiliki nilai ergonomis",
        "Melakukan sosialisasi mengenai tata cara duduk yang benar",
        "Menambah tempat tidur karyawan agar bisa istirahat"
      ],
      answer: "Mengganti furniture yang memiliki nilai ergonomis"
    },
    {
      question: "Anda seorang pemilik kantor dengan desain interior industrial dimana dinding kantor dibangun tanpa finishing. Apakah tujuan anda mengambil desain tersebut?",
      options: [
        "Ingin terlihat memiliki kesan klasik",
        "Lebih menghemat biaya pembangunan",
        "Menutupi kekurangan struktur bangunan",
        "Terlihat kantor yang kreatif dan dinamis"
      ],
      answer: "Terlihat kantor yang kreatif dan dinamis"
    },
    {
        question: "Apa alasan dari pencahayaan alami lebih efektif daripada pencahayaan lainnya?",
        options: [
          "Karena pencahayaan alami menimbulkan kenaikan tagihan listrik",
          "Karena pencahayaan alami dapat meminimalisir kesan modern",
          "Karena pencahayaan alami bisa meningkatkan kreativitas karyawan",
          "Karena pencahayaan alami lebih cocok dengan desain interior klasik "
        ],
        answer: "Karena pencahayaan alami bisa meningkatkan kreativitas karyawan"
      },
      {
        question: "Suatu perusahaan mengeluh bahwa banyak waktu terbuang karena pegawai harus berjalan jauh untuk mengakses alat kerja utama seperti printer dan mesin fotokopi. Prinsip tata ruang kantor manakah yang paling tepat diterapkan untuk mengatasi masalah ini?",
        options: [
          "Asas Rangkaian Kerja",
          "Asas Pemanfaatan Seluruh Ruang",
          "Asas Jarak Pendek",
          "Penempatan unit kerja yang saling berjauhan"
        ],
        answer: "Asas Jarak Pendek"
      },
      {
        question: "Peran interior kantor yang manakah bisa sesuai dengan tujuan mendukung branding perusahaan?",
        options: [
          "Memajang logo perusahaan yang besar di setiap ruangan",
          "Memilih warna dinding yang sesuai dengan perusahaan",
          "Memberikan hidangan special pada ruang istirahat",
          "Mengatur ulang jam kerja berdasarkan budaya perusahaan"
        ],
        answer: "Memilih warna dinding yang sesuai dengan perusahaan"
      },
      {
        question: "Apa arti dari istilah layout dalam konteks perkantoran?",
        options: [
          "Penyusunan jadwal kerja pegawai",
          "Pengaturan perabot dan perlengkapan kantor secara sistematis",
          "Pembagian gaji dan tunjangan pegawai",
          "Penyimpanan data dalam computer"
        ],
        answer: "Pengaturan perabot dan perlengkapan kantor secara sistematis"
      },
       {
        question: "Siapa yang menyatakan bahwa tata ruang kantor merupakan pengaturan alat-alat kerja secara tepat untuk menciptakan sistem kerja yang nyaman bagi karyawan?",
        options: [
          "George R. Terry",
          "Littlefield dan Peterson",
          "The Liang Gie",
          "Marsofiyati"
        ],
        answer: "The Liang Gie"
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