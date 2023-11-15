const join_button = document.querySelector("#joinNow");

join_button.addEventListener("click", () => {
    window.location.href = 'join.html';

});

document.addEventListener('DOMContentLoaded', function () {
    // Check if today is Monday, Tuesday, or Wednesday
    const today = new Date().getDay();

    if (today >= 1 && today <= 3) {
        // Display the banner
        const bannerContainer = document.getElementById('banner-container');
        bannerContainer.style.display = 'block';
    }
});

function closeBanner() {
    // Close the banner when the close button is clicked
    const bannerContainer = document.getElementById('banner-container');
    bannerContainer.style.display = 'none';
}
