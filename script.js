function darkMode() {

    const checkbox = document.querySelector("#checking");
    const label = document.querySelector(".form-switch");
    const buttonText = document.querySelector("#buttonText");
    const workContainer = document.querySelector(".school-work");
    const cardText = document.querySelector(".text-container");
    const body = document.querySelector("body");
    const headFoot = document.querySelector("header", "footer");

    if (checkbox.checked === true) {
        body.style.backgroundColor = "#343d46";
        workContainer.style.color = "#aaa9ad";

        cardText.style.color = "#14181b"

        headFoot.style.backgroundColor = "#aaa9ad";
        headFoot.style.color = "#343d46";

        workContainer.style.transition = "0.5s";
        headFoot.style.transition = "0.5s";

        buttonText.innerHTML = "Dark Mode ON";

    } else {
        body.style.backgroundColor = "";
        workContainer.style.color = "#343d46";

        cardText.style.color = ""

        headFoot.style.backgroundColor = "#343d46";
        headFoot.style.color = "#aaa9ad";

        workContainer.style.transition = "0.5s";
        headFoot.style.transition = "0.5s";

        buttonText.innerHTML = "Light Mode ON";

    }

}