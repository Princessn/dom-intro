const billAddButton = document.querySelector('.billAddButton');
const updateSettings = document.querySelector('.updateSettings');

let aBill = settingBillFunc();

updateSettings.addEventListener('click', function(){
    const theCallCostValue = document.querySelector('.callCostSetting').value;
    const theSmsCostValue = document.querySelector('.smsCostSetting').value;
    const theWarningValue = document.querySelector('.warningLevelSetting').value;
    const theCriticalValue = document.querySelector('.criticalLevelSetting').value; 
    const totalSettings = document.querySelector('.totalSettings');

    aBill.setCostOfCall(Number(theCallCostValue));
    
    aBill.setCostOfSms(Number(theSmsCostValue));

    aBill.setWarningLevel(Number(theWarningValue));

    aBill.setCriticalLevel(Number(theCriticalValue));

    totalSettings.classList.remove('warning');
    totalSettings.classList.remove('danger');
});

billAddButton.addEventListener('click', function(){
    const radioBtnValue = document.querySelector("input[name='billItemTypeWithSettings']:checked").value ;

    const callTotalSettings = document.querySelector('.callTotalSettings');
    const smsTotalSettings = document.querySelector('.smsTotalSettings');
    const totalSettings = document.querySelector('.totalSettings');

    if(radioBtnValue === 'call'){
        aBill.makeCall();
        callTotalSettings.innerHTML = aBill.getTotalCallCost().toFixed(2);
    }

    if(radioBtnValue === 'sms'){
        aBill.sendSms();
        smsTotalSettings.innerHTML = aBill.getTotalSmsCost().toFixed(2);
    }
    totalSettings.innerHTML = 'R'+aBill.getTotalCost().toFixed(2);

    totalSettings.classList.remove('warning');
    totalSettings.classList.remove('danger');
    totalSettings.classList.add(aBill.totalClassName());
});




// get a reference to the sms or call radio buttons
//get a reference to the add button
// get refences to all the settings fields
//get a reference to the 'Update settings' button
// create a variables that will keep track of all the settings
// create a variables that will keep track of all three totals.
//var  selectedBtn=document.getElementById("Entry");
//selectedBtn.addEventListener('click', update)
/*
const updateSettingsBttn = document.querySelector('.updateSettings');
const addButton = document.querySelector('.addButton');

var call1 = 1;
var sms1 = 0;
var criticalLevel1 = 0;
var warningLevel1 = 0;

var callBillTotal = 0;
var smsBillTotal = 0;
var totalBillCost = 0;

//let call = document.querySelector(".callCostSetting");
  //  let sms = document.querySelector(".smsCostSetting");
 //   let criticalLevel = document.querySelector(".criticalLevelSetting");
  //  let warningLevel = document.querySelector(".warningLevelSetting");

 //   let callValue = Number(call.value);
   // let smsValue = Number(sms.value);
   // let warning = Number(warningLevel.value);
   // let critical = Number(criticalLevel.value);
*/
/*
function updateCosts() {

    let call = document.querySelector(".callCostSetting");
    let sms = document.querySelector(".smsCostSetting");
    let criticalLevel = document.querySelector(".criticalLevelSetting");
    let warningLevel = document.querySelector(".warningLevelSetting");

    let callValue = Number(call.value);
    let smsValue = Number(sms.value);
    let warning = Number(warningLevel.value);
    let critical = Number(criticalLevel.value);

 call1 = callValue;
 sms1 = smsValue;
 warningLevel1 = warning;
 criticalLevel1 = critical;
 

    document.querySelector(".totalSettings").classList.remove("warning");
    document.querySelector(".totalSettings").classList.remove("danger");
    }
    totalBillCost = smsBillTotal + callBillTotal;

    if (totalBillCost >= warningLevel1) {
        document.querySelector(".totalSettings").classList.add("warning");
    }
    else if (totalBillCost >= critical) {
        document.querySelector(".totalSettings").classList.add("danger");

}


function billSettings() {
    const radioButtonItemCheck = document.querySelector('input[name="billItemTypeWithSettings"]:checked');
   // let radioBtnCheck = radioButtonItemCheck.value;
   let criticalLevel = document.querySelector(".criticalLevelSetting");
   let warningLevel = document.querySelector(".warningLevelSetting");

if(totalBillCost< criticalLevel.value){
    if (radioButtonItemCheck.value  === "call") {

        callBillTotal += call1
        
        
        }  if (radioButtonItemCheck.value  === "sms") {
        smsBillTotal += sms1;
    }
    
        totalBillCost = smsBillTotal + callBillTotal;
}
    

    document.querySelector(".callTotalSettings").innerHTML = callBillTotal.toFixed(2);
    document.querySelector(".smsTotalSettings").innerHTML = smsBillTotal.toFixed(2);
    document.querySelector(".totalSettings").innerHTML = totalBillCost.toFixed(2);

    document.querySelector(".totalSettings").classList.remove("warning");
    document.querySelector(".totalSettings").classList.remove("danger");

    
    
    if (totalBillCost >=  criticalLevel.value) {
        document.querySelector(".totalSettings").classList.add("danger");

    }
     if (totalBillCost >= warningLevel.value && totalBillCost < criticalLevel.value) {
        document.querySelector(".totalSettings").classList.add("warning");

    } 
  

}
addButton.addEventListener('click', billSettings);
updateSettingsBttn.addEventListener('click', updateCosts);
*/