const inventory_url = 'data/inventory.json';
const inventory_div = document.querySelector('#inventory');

const displayData = (invs) => {
    // Create a container div to hold all the cards
    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap'; // Allow cards to wrap to the next line

    // Iterate through each item in the 'items' array
    invs.forEach((item) => {
        // Create elements for the card
        let card = document.createElement('div');
        card.style.marginRight = '2px'; // Add margin for spacing between cards
        card.style.width = '20rem';

        let name = document.createElement('h2');
        let price = document.createElement('p');
        let other_info = document.createElement('p');
        let link = document.createElement('button');
        let divs = document.createElement('div');

        // Add an event listener for the click event
        link.addEventListener('click', function() {
            // Redirect to a new HTML file
            window.location.href = 'buy.html';
        });

        // Iterate through each image in the 'images' array
        item.images.forEach((image) => {
            let img = document.createElement('img');
            img.setAttribute('src', image);
            img.setAttribute('alt', `Image of ${item.name}`);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', '200');
            img.setAttribute('height', 'auto');
            img.setAttribute('style', 'margin-right: .5rem');

            divs.appendChild(img);
        });

        // Set the content of the elements
        name.textContent = item.name;
        link.textContent = `Click here to purchase`;
        price.textContent = `Price: ${item.price}`;
        other_info.textContent = `Info: ${item.other_info}`;

        // Append the elements to the card
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(divs);
        card.appendChild(link);
        card.appendChild(other_info);

        // Append the card to the container
        container.appendChild(card);
    });

    // Append the container to the 'inventory_div' element
    inventory_div.appendChild(container);
}

async function getData(inventory) {
    const inv_response = await fetch(inventory);
    const inv_data = await inv_response.json();
    displayData(inv_data.items);
}

getData(inventory_url);
