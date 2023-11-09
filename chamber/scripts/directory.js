const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

json_data = "data/members.json";

const display_data = (datas) =>{
    datas.forEach((data) => {
      let sec = document.createElement('section');
      let name = document.createElement('h1');
      let contact = document.createElement('h6');
      let line = document.createElement('hr');
      let website = document.createElement('a');
      let image = document.createElement('img');
      let membership_level = document.createElement('p');
      let other_info = document.createElement('p');

      // Build the h2 content out to show the prophet's full name
      name.textContent = `${data.name}`;
      contact.textContent = `Address: ${data.address} - Phone: ${data.phone}`;
      website.textContent = `Link: ${data.website}`;
      membership_level.textContent = `Member Level: ${data.membership_level}`;
      other_info.textContent = `${data.other_info}`;
      // Build the image portrait by setting all the relevant attributes
      image.setAttribute('src', data.image);
      image.setAttribute('alt', `Portrait of ${data.name}`); // fill in the blank
      image.setAttribute('loading', 'lazy');
      image.setAttribute('width', '100%');
      image.setAttribute('height', '100%');
      sec.classList.add("card");

      // Append the section(card) with the created elements
      sec.appendChild(name);
      sec.appendChild(line);
      sec.appendChild(contact);
      sec.appendChild(image);
      sec.appendChild(website);
      sec.appendChild(membership_level);
      sec.appendChild(other_info);

      display.appendChild(sec);

    });
}

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.companies);
    display_data(data.companies);
}

getData(json_data);
