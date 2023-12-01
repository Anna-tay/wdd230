
const inventory_url = 'data/highlight.json';
const new_url = 'data/whatsNew.json';
const whats_new = document.querySelector('#whatsnew');
const highlight = document.querySelector('#highlight');

const displayData = (news, invs) => {
    news.forEach((new_news) => {
      // Create elements to add to the div.cards element
      let sec = document.createElement('section');
      let title = document.createElement('h2');
      let when = document.createElement('p');
      let other_info = document.createElement('p');

      // Build the h2 content out to show the prophet's full name
      title.textContent = `${new_news.title}`;
      when.textContent = `When ${new_news.when}`;
      other_info.textContent = `Info: ${new_news.other_info}`;

      title.setAttribute('style', `background-color: #e7bd6d; padding: 1rem; `);

      // Append the section(card) with the created elements
      sec.appendChild(title);
      sec.appendChild(when);
      sec.appendChild(other_info);

      whats_new.appendChild(sec);
    }); // end of arrow function and forEach loop

    // Create a container div to hold all the cards
    let container = document.createElement('div');
    container.style.display = 'flex';

    // Iterate through each item in the 'items' array
    invs.forEach((item) => {
        // Create elements for the card
        let card = document.createElement('div');
        card.style.marginRight = '.5rem'; // Add margin for spacing between cards

        let name = document.createElement('h2');
        let price = document.createElement('p');
        let other_info = document.createElement('p');
        let divs = document.createElement('div');

        // Iterate through each image in the 'images' array
        item.images.forEach((image) => {
            let img = document.createElement('img');
            img.setAttribute('src', image);
            img.setAttribute('alt', `Image of ${item.name}`);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', '180');
            img.setAttribute('height', 'auto');
            img.setAttribute('style', 'margin-right: .5rem');

            divs.appendChild(img);
        });

        // Set the content of the elements
        name.textContent = item.name;
        price.textContent = `Price: ${item.price}`;
        other_info.textContent = `Info: ${item.other_info}`;

        // Append the elements to the card
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(divs);
        card.appendChild(other_info);

        // Append the card to the container
        container.appendChild(card);
    });

// Append the container to the 'highlight' element
highlight.appendChild(container);

}

async function getData(wnew, inventory) {
    const new_response = await fetch(wnew);
    const inv_response = await fetch(inventory);

    const new_data = await new_response.json();
    const inv_data = await inv_response.json();
    console.log(inv_data);
    // console.table(data.prophets); // temporary testing of data retreival
    displayData(new_data.new, inv_data.items);
}

getData(new_url, inventory_url);


