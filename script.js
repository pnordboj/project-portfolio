function darkMode() {

    const checkbox = document.querySelector("#checking");
    const label = document.querySelector(".form-switch");
    const buttonText = document.querySelector("#buttonText");
    const workContainer = document.querySelector(".school-work");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    if (checkbox.checked === true) {
        workContainer.style.backgroundColor = "#343d46";
        workContainer.style.color = "#aaa9ad";

        header.style.backgroundColor = "#aaa9ad";
        header.style.color = "#343d46";

        footer.style.backgroundColor = "#aaa9ad";
        footer.style.color = "#343d46";

        workContainer.style.transition = "0.5s";
        header.style.transition = "0.5s";
        footer.style.transition = "0.5s";

        buttonText.innerHTML = "Light mode ON";

    } else {
        workContainer.style.backgroundColor = "#343d46";
        workContainer.style.color = "#aaa9ad";

        header.style.backgroundColor = "#aaa9ad";
        header.style.color = "#343d46";

        footer.style.backgroundColor = "#aaa9ad";
        footer.style.color = "#343d46";

        workContainer.style.transition = "0.5s";
        header.style.transition = "0.5s";
        footer.style.transition = "0.5s";

        buttonText.innerHTML = "Dark Mode ON";

    }

}

//<a href="https://www.flaticon.com/free-icons/dark-mode" title="dark-mode icons">Dark-mode icons created by Freepik - Flaticon</a>