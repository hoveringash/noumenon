// js/mapModal.js

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("mapModal");
    const mapImg = document.getElementById("mapImage");
    const modalImg = document.getElementById("mapFullscreen");
    const openBtn = document.getElementById("openMapBtn");
    const closeBtn = document.querySelector(".close");

    // Открытие модального окна
    openBtn.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = mapImg.src;
    });

    // Закрытие по крестику
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрытие по клику вне картинки
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
