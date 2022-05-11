
// get a reference to the sms or call radio buttons
//get a reference to the add button
// get refences to all the settings fields
//get a reference to the 'Update settings' button
// create a variables that will keep track of all the settings
// create a variables that will keep track of all three totals.
//var  selectedBtn=document.getElementById("Entry");
//selectedBtn.addEventListener('click', update)

const billAddButton = document.querySelector('.billAddButton');
const callTotalSettings = document.querySelector('.callTotalSettings');
const smsTotalSettings = document.querySelector('.smsTotalSettings');
const totalSettings = document.querySelector('.totalSettings');
const updateSettings = document.querySelector('.updateSettings');

const globalVariables = {
    callCost: 0,
    smsCost: 0,
    warningLevel: 0,
    criticalLevel: 0,
    theFinalTotalCall: 0,
    theFinalTotalSms: 0
};

const convertToNumber = (string) => {
    return Number(string).toFixed(2);
}

function updateCost(){
    const theCallCostValue = document.querySelector('.callCostSetting').value;
    const theSmsCostValue = document.querySelector('.smsCostSetting').value;
    const theWarningValue = document.querySelector('.warningLevelSetting').value;
    const theCriticalValue = document.querySelector('.criticalLevelSetting').value;

    if(theCallCostValue)
        globalVariables.callCost = convertToNumber(theCallCostValue);
    if(theSmsCostValue)
        globalVariables.smsCost = convertToNumber(theSmsCostValue);
    if(theWarningValue)
        globalVariables.warningLevel = convertToNumber(theWarningValue);
    if(theCriticalValue)
        globalVariables.criticalLevel = convertToNumber(theCriticalValue);  
    
    totalSettings.classList.remove('warning');
    totalSettings.classList.remove('danger');
}

const calculateTotalBill = () => Number(globalVariables.theFinalTotalCall) + Number(globalVariables.theFinalTotalSms);

const setTotalSettings = () => {
    callTotalSettings.innerHTML = convertToNumber(globalVariables.theFinalTotalCall);
    smsTotalSettings.innerHTML = convertToNumber(globalVariables.theFinalTotalSms);
    
    const calculatedTotalBill = calculateTotalBill();
    
    totalSettings.classList.remove('warning');
    totalSettings.classList.remove('danger');

    if(calculatedTotalBill >= globalVariables.warningLevel && calculatedTotalBill < globalVariables.criticalLevel)
        totalSettings.classList.add('warning');
    if(calculatedTotalBill >= globalVariables.criticalLevel)
        totalSettings.classList.add('danger');
    totalSettings.innerHTML = 'R'+ convertToNumber(calculatedTotalBill);
}

function addBill() {
    const radioBtnValue = document.querySelector("input[name='billItemTypeWithSettings']:checked").value;
    const totalNumber = calculateTotalBill();

    if(totalNumber < globalVariables.criticalLevel){
        if (radioBtnValue === "call") 
            globalVariables.theFinalTotalCall += Number(globalVariables.callCost);
        if (radioBtnValue === "sms") 
            globalVariables.theFinalTotalSms += Number(globalVariables.smsCost); 
    }
    setTotalSettings();
}
billAddButton.addEventListener('click', addBill);
updateSettings.addEventListener('click', updateCost);