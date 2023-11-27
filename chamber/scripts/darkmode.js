const checkbox = document.querySelector("#myCheckbox");
const main = document.querySelector(".background");
const sections = document.querySelector(".change");
const stay = document.querySelector("#stay");
const ld = document.querySelector('.light-drak');
let background = "#d7c9aa";
let black = "#000";
let white = "#f0f3f5";
let dark = "#08181b"

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        ld.innerHTML = 'Dark';
        ld.style.background = black;
        main.style.background = black;
		    main.style.color = white;
        stay.style.background = background;
        sections.style.color = black;
        // Perform your action when the checkbox is checked
      } else {
        ld.innerHTML = 'Light';
        ld.style.background = '#0b7a75';
        main.style.background = background;
        main.style.color = black;

        // Perform your action when the checkbox is unchecked
      }

});