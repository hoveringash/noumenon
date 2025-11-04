document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullscreenImage");
    const closeBtn = modal.querySelector(".close");
    const images = document.querySelectorAll("table img"); // все картинки в таблицах

    // Открытие модального окна по клику на изображение
    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
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
