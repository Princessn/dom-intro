
const billTypeText = document.querySelector('.billTypeText')
const addToBillButton = document.querySelector('.addToBillBtn')
const callsTotalElem = document.querySelector('.callTotalOne')
const smsTotalElem = document.querySelector('.smsTotalOne')
const textBillTotal = document.querySelector(".totalOne");
const colorChange = document.querySelector('.red');
var callsTotal= 0;
var smsTotal= 0;

function billTotal(){
    var billTypeEntered = billTypeText.value.trim().toLowerCase();
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    textBillTotal.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        colorChange.classList.add("danger");
    }
    else if (totalCost >= 30){
        colorChange.classList.add("warning");
    }
}
addToBillButton.addEventListener('click', billTotal);