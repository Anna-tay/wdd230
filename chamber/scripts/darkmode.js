const checkbox = document.querySelector("#myCheckbox");
const main = document.querySelector(".background");
const sections = document.querySelector(".change");
let background = "#d7c9aa";
let black = "#000";
let white = "#f0f3f5";
let dark = "#08181b"

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        main.style.background = black;
		main.style.color = white;
        sections.style.color = black;
        // Perform your action when the checkbox is checked
      } else {
        main.style.background = background;
		main.style.color = black;
        // Perform your action when the checkbox is unchecked
      }

});