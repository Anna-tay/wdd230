// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits.
if (numVisits === 0) {
  visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else {
  // Retrieve the previous visit timestamp from localStorage
  const previousVisitTimestamp = Number(window.localStorage.getItem("lastVisitTimestamp-ls")) || 0;

  if (previousVisitTimestamp) {
    const currentDate = new Date();
    const previousVisitDate = new Date(previousVisitTimestamp);
    const timeDiff = currentDate - previousVisitDate; // Time difference in milliseconds

    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

    if (timeDiff < oneDay) {
      visitsDisplay.textContent = "Back so soon! Awesome!";
    } else {
      const daysSinceLastVisit = Math.floor(timeDiff / oneDay);
      const plural = daysSinceLastVisit === 1 ? "day" : "days";
      visitsDisplay.textContent = `You last visited ${daysSinceLastVisit} ${plural} ago.`;
    }
  }
}

// 4️⃣ Update the previous visit timestamp with the current time
const currentDate = new Date();
localStorage.setItem("lastVisitTimestamp-ls", currentDate.getTime());

// 5️⃣ Increment the number of visits by one.
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
