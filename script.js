/*  TOMBOL SCROLL TO TOP                     */

const scrollTopBtn = document.getElementById("scrollTopBtn");
const heroSection = document.getElementById("hero");

if (scrollTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", function () {
    const targetPosition = heroSection ? heroSection.offsetTop : 0;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
}

// VALIDASI INPUT FORM KONTAK

// VALIDASI NAMA
function validateNama() {
    const namaError = document.getElementById("namaError");
    const nama = namaInput.value.trim();

    if (nama === "") {
        namaError.textContent = "Nama tidak boleh kosong";
        return false;
    }

    if (nama.length < 3) {
        namaError.textContent = "Nama minimal 3 karakter";
        return false;
    }

    namaError.textContent = "";
    return true;
}

// VALIDASI EMAIL
function validateEmail() {
    const emailError = document.getElementById("emailError");
    const email = emailInput.value.trim();

    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (email === "") {
        emailError.textContent = "Email tidak boleh kosong";
        return false;
    }

    if (!regex.test(email)) {
        emailError.textContent = "Email harus berformat ...@gmail.com";
        return false;
    }

    emailError.textContent = "";
    return true;
}

// VALIDASI LAYANAN
function validateLayanan() {
    const layananError = document.getElementById("layananError");
    const layanan = layananInput.value;

    if (layanan === "") {
        layananError.textContent = "Silakan pilih layanan yang diminati";
        return false;
    }

    layananError.textContent = "";
    return true;
}

// VALIDASI PESAN
function validatePesan() {
    const pesanError = document.getElementById("pesanError");
    const pesan = pesanInput.value.trim();

    if (pesan === "") {
        pesanError.textContent = "Pesan tidak boleh kosong";
        return false;
    }

    if (pesan.length < 20) {
        pesanError.textContent = "Pesan minimal 20 karakter";
        return false;
    }

    pesanError.textContent = "";
    return true;
}
// NOTIFIKASI PESAN TERKIRIM

function showNotif(message, type = "success") {

    const notif = document.getElementById("notif");
    const text = notif.querySelector("p");
    const box = notif.querySelector("div");

    text.textContent = message;

    // Hapus warna sebelumnya
    box.classList.remove("bg-success", "bg-danger");

    // Tambahkan warna baru
    if(type === "success"){
        box.classList.add("bg-success");
    }else{
        box.classList.add("bg-danger");
    }

    notif.classList.add("show");

    setTimeout(() => {
        notif.classList.remove("show");
    }, 3000);
}

const form = document.getElementById("kontakForm");

form.addEventListener("submit", function(e) {

    // Mencegah form refresh halaman
    e.preventDefault();

    // Ambil nilai input
    const isNamaValid = validateNama();
    const isEmailValid = validateEmail();
    const isLayananValid = validateLayanan();
    const isPesanValid = validatePesan();

    if (
        isNamaValid &&
        isEmailValid &&
        isLayananValid &&
        isPesanValid
    ) {
        showNotif(
            "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.",
            "success"
        );

        form.reset();
    } else {
        showNotif(
            "Mohon periksa kembali data yang Anda masukkan.",
            "danger"
        );
    }

});