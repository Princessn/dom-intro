//get a reference to the calculate button
var calculateButton = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var theBillTotal = document.querySelector('.billTotal');
var total = document.querySelector('.total');
//get a reference to the billString
var billString = document.querySelector('.billString');


//link the function to a click event on the calculate button

  //create the function that will be called when the calculate button is pressed
  function clickedButton(){
    var billArray =  billString.value.split(",");
    var callBill = 0;
    for(var i = 0; i < billArray.length; i++){
      var bill = billArray[i].trim();
      if(bill === 'call'){
        callBill += 2.75;
      }else if(bill === 'sms'){
          callBill += 0.65;
    }      
  }
      var totalBill = callBill.toFixed(2) 
      theBillTotal.innerHTML = totalBill

      total.classList.remove('warning');
      total.classList.remove('danger');
        
       if (totalBill > 20 && totalBill < 30) {
        total.classList.add('warning')
       } else if (totalBill > 30) {
        total.classList.add('danger')
        }
    //  * once done looping over all the entries - display the total onto the screen in the billTotal element
     
      }
//link the function to a click event on the calculate button
calculateButton.addEventListener('click', clickedButton);
