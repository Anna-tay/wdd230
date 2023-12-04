const checkbox = document.querySelector("#myCheckbox");
const main = document.querySelector(".background");
const ld = document.querySelector('.light-drak');
const stay = document.querySelector('.stay');

let background = "#fcf4dd";
let black = "#162e33";
let white = "#f0f3f5";
let dark = "#162e33"

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        stay.style.background = background;
        stay.style.color = black;
        ld.innerHTML = 'Dark Mode';
        ld.style.background = black;
        main.style.background = black;
		    main.style.color = white;
        // Perform your action when the checkbox is checked
      } else {
        ld.innerHTML = 'Light Mode';
        ld.style.background = '#fcf4dd';
        main.style.background = background;
        main.style.color = black;

        // Perform your action when the checkbox is unchecked
      }

});