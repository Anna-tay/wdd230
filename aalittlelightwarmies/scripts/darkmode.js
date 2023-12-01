const checkbox = document.querySelector("#myCheckbox");
const main = document.querySelector(".background");
const ld = document.querySelector('.light-drak');
let background = "#f0dbae";
let black = "#162e33";
let white = "#f0f3f5";
let dark = "#162e33"

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        ld.innerHTML = 'Dark Mode';
        ld.style.background = black;
        main.style.background = black;
		    main.style.color = white;
        // Perform your action when the checkbox is checked
      } else {
        ld.innerHTML = 'Light Mode';
        ld.style.background = '#f0dbae';
        main.style.background = background;
        main.style.color = black;

        // Perform your action when the checkbox is unchecked
      }

});