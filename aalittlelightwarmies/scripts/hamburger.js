// looking and finding the elements
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.topnav');
const hamdiv = document.querySelector('.background_hamburger');


// adding an event listener to the elements
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	hamdiv.classList.toggle('open_background');

});