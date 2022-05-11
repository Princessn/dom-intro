// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelectorAll('.billItemTypeRadio')
//get a reference to the add button
const radioBillButton = document.querySelector('.radioBillAddBtn')

const theCallTotalTwo = document.querySelector('.callTotalTwo'); 
const theSmsTotalTwo = document.querySelector('.smsTotalTwo');
const totalRadioColor = document.querySelector('.totalTwo');
const totalRadio = document.querySelector('.orange');


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
//create a variable that will keep track of the total bill
let totalCallAmount = 0;
let totalSmsAmount = 0;

function radioBill(){ 
    var radioButtonItemCheck = document.querySelector('input[name="billItemType"]:checked');
    let radioBtnCheck = radioButtonItemCheck.value;

    if (radioBtnCheck === "call") {
        totalCallAmount += 2.75;
    }
     else if(radioBtnCheck === "sms"){
        totalSmsAmount += 0.75;
    }
    theCallTotalTwo.innerHTML = totalCallAmount.toFixed(2);
    theSmsTotalTwo.innerHTML = totalSmsAmount.toFixed(2);
    let totalRadioBill = totalCallAmount + totalSmsAmount;
    totalRadioColor.innerHTML = totalRadioBill.toFixed(2);

    totalRadio.classList.remove("warning");
    totalRadio.classList.remove("danger");

    if (totalRadioBill >= 30 && totalRadioBill < 50 ) {
        totalRadio.classList.add("warning");
      } else if (totalRadioBill >= 50) {
        totalRadio.classList.add("danger");
}
}
   //add an event listener for when the add button is pressed 
   radioBillButton.addEventListener('click', radioBill);