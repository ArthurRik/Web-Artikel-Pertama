// Menampilkan pesan sambutan saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    alert("Selamat datang di Portofolio Saya!");
});

// Menangani klik pada tautan proyek
document.querySelectorAll(".project-link").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        alert(`Anda mengklik tautan: ${event.target.textContent}`);
        window.open(event.target.href, "_blank");
    });
});
