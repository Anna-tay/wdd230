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


document.addEventListener('DOMContentLoaded', function () {
    // Fetch the JSON data
    fetch("data/members.json")
      .then(response => response.json())
      .then(data => {
        // Filter members with Gold or Silver membership level
        const silverGoldMembers = data.companies.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');

        // Randomly select two or three members
        const selectedMembers = selectRandomMembers(silverGoldMembers, 2);

        // Display information in the spotlight
        displaySpotlightInformation(selectedMembers);
      })
      .catch(error => console.error('Error fetching data:', error));

    function selectRandomMembers(members, count) {
      const shuffledMembers = members.sort(() => Math.random() - 0.5);
      return shuffledMembers.slice(0, count);
    }

    function displaySpotlightInformation(members) {
      const spotlightElement = document.getElementById('spotlight');
      members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');
        memberDiv.innerHTML = `
          <h2>${member.name}</h2>
          <p>Membership Level: ${member.membership_level}</p>
          <p>Address: ${member.address}</p>
          <p>Phone: ${member.phone}</p>
          <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>${member.other_info}</p>
        `;
        spotlightElement.appendChild(memberDiv);
      });
    }
  });
