const timestampElement = document.getElementById("timestamp");
const currentTimestamp = new Date();
timestampElement.textContent = currentTimestamp.toLocaleString();

const mailing = document.getElementById('mailingCheck');
const billingDiv = document.getElementById('billing');
const mailCheck = document.querySelector("#mailingCheck");
const img5 = document.querySelector('#imgbuy5');

mailing.addEventListener('click', function (){
    if (mailCheck.checked) {
        billingDiv.setAttribute('style', "display: none;");
        img5.setAttribute('style', "display: none;");
        // Perform your action when the checkbox is checked
      } else {
        billingDiv.setAttribute('style', "display: block;");
        img5.setAttribute('style', "display: block;");

        // Perform your action when the checkbox is unchecked
      }

});