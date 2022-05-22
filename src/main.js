
const carousel = () => {
    document.querySelectorAll(".carousel").forEach(carousel => {

        const items = carousel.querySelectorAll(".carousel-content");
        const buttons = carousel.querySelectorAll(".carousel-button");

        buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                items.forEach(item => item.style.display = "none");
                buttons.forEach(btn => btn.classList.remove("carousel-button-selected"));

                items[index].style.display = "block";
                button.classList.add("carousel-button-selected");
            });
        });
        items[0].style.display = "block";
        buttons[0].classList.add("carousel-button-selected");

    });
};
carousel();
