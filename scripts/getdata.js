
function get_year(){
    // getting the year variables
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return currentYear; // This will print the current year to the console
}

document.getElementById("lastModified").innerHTML = `Last modified ${document.lastModified}`;

