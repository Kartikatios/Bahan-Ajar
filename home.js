const music = document.getElementById("backsound");
const musicToggle = document.getElementById("musicToggle");
const exitBtn = document.getElementById("exitBtn");
const clickSound = document.getElementById("clickSound");
const backButtonSound = document.getElementById("backButtonSound");
const pendahuluanModal = document.getElementById("pendahuluanModal");
const closePendahuluanBtn = document.getElementById("closePendahuluanBtn");

                                                              // suara backround
let isPlaying = true;
  window.addEventListener('DOMContentLoaded', () => {
    music.muted = true; // Pastikan dimulai dengan muted
    music.play().then(() => {
      music.muted = false; // Setelah play, tidak dimute
      musicToggle.src = "volume.png"; // Ganti ikon volume
    }).catch(() => {
      document.addEventListener('click', () => {
        music.muted = false;
        music.play();
        musicToggle.src = "volume.png";
      }, { once: true });
    });
  });


                                                              // icon suara
musicToggle.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      musicToggle.src = "mute.png";
    } else {
      music.play();
      musicToggle.src = "volume.png";
    }
    isPlaying = !isPlaying;
  });

                                                                // open modal
function openPendahuluan() {
  clickSound.currentTime = 0;
  clickSound.play();
  pendahuluanModal.style.display = "flex";
}

function openPenggunaanModul() {
  clickSound.currentTime = 0;
  clickSound.play();
  penggunaanModul.style.display = "flex";
}

function openDeskripsiModul() {
  clickSound.currentTime = 0;
  clickSound.play();
  deskripsiModal.style.display = "flex";
}

function openMateri() {
  clickSound.currentTime = 0;
  clickSound.play();
  materiModal.style.display = "flex";
}

function openRangkuman() {
  clickSound.currentTime = 0;
  clickSound.play();
  rangkumanModal.style.display = "flex";
}

function openLatihan() {
  clickSound.currentTime = 0;
  clickSound.play();
  latihanModal.style.display = "flex";
}

function openProfil() {
  clickSound.currentTime = 0;
  clickSound.play();
  profilModal.style.display = "flex";
}

function openRujukan() {
  clickSound.currentTime = 0;
  clickSound.play();
  rujukanModal.style.display = "flex";
}


                                                                  // back cklik modal
function closeModal(modal) {
  modal.style.display = "none"
}
document.getElementById("closePendahuluanBtn").addEventListener("click", function() {
  closeModal(pendahuluanModal);
});

document.getElementById("closePenggunaanBtn").addEventListener("click", function() {
  closeModal(penggunaanModul);
});

document.getElementById("closeDeskripsiBtn").addEventListener("click", function() {
  closeModal(deskripsiModal);
});

document.getElementById("closeMateriBtn").addEventListener("click", function() {
  closeModal(materiModal);
});

document.getElementById("closeRangkumanBtn").addEventListener("click", function() {
  closeModal(rangkumanModal);
});

document.getElementById("closeLatihanBtn").addEventListener("click", function() {
  closeModal(latihanModal);
});

document.getElementById("closeProfilBtn").addEventListener("click", function() {
  closeModal(profilModal);
});

document.getElementById("closeRujukanBtn").addEventListener("click", function() {
  closeModal(rujukanModal);
});

                                                                  // backsound kembali modal
// Fungsi untuk memutar suara saat tombol back di modal ditekan
function playBackButtonSound() {
  backButtonSound.currentTime = 0; // Mulai dari awal
  backButtonSound.play(); // Mainkan suara
}

// Fungsi untuk menutup modal
function closeModal(modal) {
  modal.style.display = "none"; // Sembunyikan modal
  playBackButtonSound(); // Mainkan suara kembali
}

// Menambahkan event listener untuk setiap tombol close modal
document.getElementById("closePendahuluanBtn").addEventListener("click", function() {
  closeModal(pendahuluanModal);
});

document.getElementById("closePenggunaanBtn").addEventListener("click", function() {
  closeModal(penggunaanModul);
});

document.getElementById("closeDeskripsiBtn").addEventListener("click", function() {
  closeModal(deskripsiModal);
});

document.getElementById("closeMateriBtn").addEventListener("click", function() {
  closeModal(materiModal);
});

document.getElementById("closeRangkumanBtn").addEventListener("click", function() {
  closeModal(rangkumanModal);
});

document.getElementById("closeLatihanBtn").addEventListener("click", function() {
  closeModal(latihanModal);
});

document.getElementById("closeProfilBtn").addEventListener("click", function() {
  closeModal(profilModal);
});

document.getElementById("closeRujukanBtn").addEventListener("click", function() {
  closeModal(rujukanModal);
});


  // Menangani tombol Exit
const exitSound = document.getElementById("exitSound");
exitBtn.addEventListener("click", () => {
// Memutar suara
exitSound.play();
setTimeout(() => {
window.location.href = "index.html"; 
}, 1000); 
});

window.onload = function() {
const nama = localStorage.getItem('namaPengguna');
if (nama) {
document.getElementById('tampilNama').textContent = nama;
} else {
document.getElementById('tampilNama').textContent = "Pengguna";
}
}