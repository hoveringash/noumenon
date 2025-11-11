document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullscreenImage");
    const closeBtn = modal.querySelector(".close");
    const scanButton = document.getElementById("scanButton");

    // Обработчик для кнопки "Считывание"
    scanButton.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = "./images/scan.jpg"; // путь к вашей скрытой картинке
    });

    // Закрытие по крестику
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрытие по клику вне изображения
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});