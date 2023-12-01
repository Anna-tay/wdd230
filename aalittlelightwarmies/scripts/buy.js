const timestampElement = document.getElementById("timestamp");
const currentTimestamp = new Date();
timestampElement.textContent = currentTimestamp.toLocaleString();