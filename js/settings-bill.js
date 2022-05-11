
// get a reference to the sms or call radio buttons
//get a reference to the add button
// get refences to all the settings fields
//get a reference to the 'Update settings' button
// create a variables that will keep track of all the settings
// create a variables that will keep track of all three totals.
//var  selectedBtn=document.getElementById("Entry");
//selectedBtn.addEventListener('click', update)

var settingsInstance = BillWithSettings();
document
  .querySelector(".updateSettings")
  .addEventListener("click", function () {
    settingsInstance.setCallCost(
      Number(document.querySelector(".callCostSetting").value)
    );
    settingsInstance.setSmsCost(
      Number(document.querySelector(".smsCostSetting").value)
    );
    //alert(sms);
    settingsInstance.setWarningLevel(
      Number(document.querySelector(".warningLevelSetting").value)
    );
    settingsInstance.setCriticalLevel(
      Number(document.querySelector(".criticalLevelSetting").value)
    );
    changeColor();
  });

document.querySelector(".addition").addEventListener("click", function () {
  //alert(settingsInstance.getCallCost());
  var checkedRadioBtn = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  );
  if (checkedRadioBtn) {
    var billItemTypeWithSettings = checkedRadioBtn.value;
  }
  if (billItemTypeWithSettings === "sms") {
    settingsInstance.sendSms();
  } else if (billItemTypeWithSettings === "call") {
    settingsInstance.makeCall();
  }
  document.querySelector(".callTotalSettings").innerHTML = settingsInstance
    .getTotalCallCost()
    .toFixed(2);
  document.querySelector(".smsTotalSettings").innerHTML = settingsInstance
    .getTotalSmsCost()
    .toFixed(2);

  document.querySelector(".totalSettings").innerHTML = settingsInstance
    .getTotalCost()
    .toFixed(2);
  changeColor();
});
function changeColor() {
  document.querySelector(".totalSettings").classList.remove("danger");
  document.querySelector(".totalSettings").classList.remove("warning");
  document
    .querySelector(".totalSettings")
    .classList.add(settingsInstance.totalClassName());
}