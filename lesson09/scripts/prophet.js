
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let sec = document.createElement('section');
      let fullName = document.createElement('h2');
      let birth = document.createElement('p');
      let placeBirth = document.createElement('p');
      let hr = document.createElement('hr');
      let portrait = document.createElement('img');

      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      birth.textContent = `Date of Birth: ${prophet.birthdate}`;
      placeBirth.textContent = `Place of birth: ${prophet.birthplace}`;
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      // Append the section(card) with the created elements
      sec.appendChild(fullName);
      sec.appendChild(birth);
      sec.appendChild(placeBirth);
      sec.appendChild(portrait);
      sec.appendChild(hr);

      cards.appendChild(sec);
    }); // end of arrow function and forEach loop
  }

async function getProphetsData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets);
}

getProphetsData(url);



