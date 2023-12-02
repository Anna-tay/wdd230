const timestampElement = document.getElementById("timestamp");
const currentTimestamp = new Date();
timestampElement.textContent = currentTimestamp.toLocaleString();

const mailing = document.getElementById('mailingCheck');
const billingDiv = document.getElementById('billing');
const mailCheck = document.querySelector("#mailingCheck");

mailing.addEventListener('click', function (){
    if (mailCheck.checked) {
        billingDiv.setAttribute('style', "display: none;");
        // Perform your action when the checkbox is checked
      } else {
        billingDiv.setAttribute('style', "display: block;");

        // Perform your action when the checkbox is unchecked
      }

});