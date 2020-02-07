/* Global Variables */
const bookNow2 = document.getElementById('book-now-2');
const bookCont1 = document.getElementById('continue-btn-1');
const bookCont2 = document.getElementById('continue-btn-2');
const bookCont3 = document.getElementById('continue-btn-3');
const bookPrev2 = document.getElementById('previous-btn-2');
const bookPrev3 = document.getElementById('previous-btn-3');
const bookPrev4 = document.getElementById('previous-btn-4');
const stepOneLeft = document.getElementById('step-one-left');
const stepTwoLeft = document.getElementById('step-two-left');
const stepThreeLeft = document.getElementById('step-three-left');
const stepFourLeft = document.getElementById('step-four-left');

/* Functions for Book Now page */
const calcNightlyCost = (cabinSelected, nights, guests, numOfPets) => {
    let nightlyCost;
    if(cabinSelected === "Main Cabin"){ //Calculates if main cabin is selected
      nightlyCost = 129;
      if(nights >= 7){  //Gives discount for stays longer than a week
        nightlyCost = 775/7;
      }
    }else if(cabinSelected === "Guest Cabin"){ //Calculates if guest cabin is selected
      nightlyCost = 99;
      if(nights >= 7){ //Gives discount for stays longer than a week
        nightlyCost = 600/7;
      }
    }else if(cabinSelected === "Both Cabins"){ //Calculates if both cabins are selected
      nightlyCost = 200;
      if(nights >= 7){ //Gives discount for stays longer than a week
        nightlyCost = 1200/7;
      }
    }else{  //Error message if something goes wrong
      return "Error calculating cost. You may still proceed and then contact the owner regarding price. We apologize for the inconvenience."
    }
    return nightlyCost;
  }
  
  const formatPhoneNumber = (guestPhone) => { //This checks if the phone number is in the right format
    const cleaned = ('' + guestPhone).replace(/\D/g, '');
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/); //Splits up the numbers by first 3 numbers, next 3 numbers, and last 4 numbers
      if (match) {
        guestPhone = '(' + match[1] + ') ' + match[2] + '-' + match[3]; //Organizes format like: (123)456-7890
      }else{
        guestPhone = "Can't recognize phone number"; //Error mesage
      }
      return guestPhone;
  }
  
  function stepOneDone(){ 
    const startDate = document.getElementById('date-select').value.slice(0,10); //Declares variable for start date
    const endDate = document.getElementById('date-select').value.slice(13,23); //Declares variable for end date
    const startDateFormatted = new Date(Date.parse(startDate)); //Formats the starting date
    const endDateFormatted = new Date(Date.parse(endDate)); //Formats the end date
    const startDateParse = startDateFormatted.toString().slice(0,15); //Parses for the starting date
    const endDateParse = endDateFormatted.toString().slice(0,15); //Parses for the end date
    const nights = Math.round((endDateFormatted-startDateFormatted)/(1000*60*60*24)); //Formula to calculate how many nights
    const stayDates = startDateParse.slice(0,3) + ", " + startDateParse.slice(8,11) + startDateParse.slice(4,8) + startDateParse.slice(11,15) + " - " + endDateParse.slice(0,3) + ", " + endDateParse.slice(8,11) + endDateParse.slice(4,8) + endDateParse.slice(11,15); //Variable to format the dates like Jan 01, 2019
    document.getElementById("step-one-done-date-range").innerHTML = stayDates; //Puts the stay dates in the step one done section
    document.getElementById("step-one-done-nights").innerHTML = nights + " nights"; //Puts nuber of nights in step one done section
    const cabinSelect = document.getElementById('cabin-selection'); //Determines which cabin was selected
    const cabinSelected = cabinSelect.options[cabinSelect.selectedIndex].text;
    document.getElementById("step-one-done-cabin").innerHTML = cabinSelected; //Puts which cabin in the step one done section
  }
  
  function stepTwoDone(){
    if(document.getElementById('first-name').value === ""){ //Makes sure there's at least a first name given
      alert("Please enter your name"); //creates an alert indicating missing information
      return false;
    }else{
      const guestName = document.getElementById('first-name').value  + " " + document.getElementById('last-name').value; //puts first name and last name together
      document.getElementById("step-two-done-name").innerHTML = guestName; //puts name in step two done section
    }

    if(document.getElementById('guest-email').value === ""){ //Makes sure an email is given
      alert("Please enter a valid e-mail address so we can confirm your booking");//creates an alert indicating missing information
      return false;
    }else{
      const guestEmail = document.getElementById("guest-email").value;
      document.getElementById("step-two-done-email").innerHTML = guestEmail; //Puts email in the step two done section
    }
    let guestPhone = document.getElementById("guest-phone").value; 
    let phoneNumber = formatPhoneNumber(guestPhone); //Sends phone number to function to get formatted
    document.getElementById("step-two-done-phone").innerHTML = phoneNumber; //Places phone number in step two done section
    if(phoneNumber === "Can't recognize phone number"){ //Error if phone number is inccorect
      alert("Please enter a valid phone number");//creates an alert indicating missing information
      return false;
    }

    if(document.getElementById("safety-checkbox").checked == false){ //Makes sure they agree to terms and conditions
      alert("Please agree to the terms and conditions and safety waiver");//creates an alert indicating missing information
      return false;
    }
    return true;
  }
  
  function confirmBooking(){ //Function for displaying all the information neatly (The variables ending in "0" are not displayed but are the variables sent to the email in the <form> section of bookNow.html)
    //First and last names
    document.getElementById("confirm-name").innerHTML = document.getElementById('first-name').value  + " " + document.getElementById('last-name').value;
    document.getElementById("confirm-name0").value = document.getElementById('first-name').value  + " " + document.getElementById('last-name').value;
    //Email
    document.getElementById("confirm-email").innerHTML = document.getElementById('guest-email').value;
    document.getElementById("confirm-email0").value = document.getElementById('guest-email').value;
    //Phone number
    let guestPhone = document.getElementById('guest-phone').value;
    document.getElementById("confirm-phone").innerHTML = formatPhoneNumber(guestPhone);
    document.getElementById("confirm-phone0").value = formatPhoneNumber(guestPhone);
    //Number of guests
    const totalGuests = Number(document.getElementById('adults').value) + Number(document.getElementById('children').value);
    document.getElementById("confirm-totalNumber").innerHTML = totalGuests;
    document.getElementById("confirm-totalNumber0").value = totalGuests;
    //Number of adultes
    document.getElementById("confirm-adults").innerHTML = document.getElementById('adults').value;
    document.getElementById("confirm-adults0").value = document.getElementById('adults').value;
    //Number of children
    document.getElementById("confirm-children").innerHTML = document.getElementById('children').value;
    document.getElementById("confirm-children0").value = document.getElementById('children').value;
    //Number of pets
    const numOfPets = Number(document.getElementById('pets').value);
    document.getElementById("confirm-pets").innerHTML = numOfPets;
    document.getElementById("confirm-pets0").value = numOfPets;
    //Cabin selection
    const cabinSelect = document.getElementById('cabin-selection');
    const cabinSelected = cabinSelect.options[cabinSelect.selectedIndex].text;
    document.getElementById("confirm-cabin").innerHTML = cabinSelected;
    document.getElementById("confirm-cabin0").value = cabinSelected;
    //Gets the dates, parses the date, makes it look in the format of "Jan 01, 2019" (like above)
    const startDate = document.getElementById('date-select').value.slice(0,10); 
    const endDate = document.getElementById('date-select').value.slice(13,23); 
    const startDateFormatted = new Date(Date.parse(startDate));
    const endDateFormatted = new Date(Date.parse(endDate));
    const startDateParse = startDateFormatted.toString().slice(0,15);
    const endDateParse = endDateFormatted.toString().slice(0,15);
    const nights = Math.round((endDateFormatted-startDateFormatted)/(1000*60*60*24));
    const confirmStartDate = startDateParse.slice(0,3) + ", " + startDateParse.slice(8,11) + startDateParse.slice(4,8) + startDateParse.slice(11,15); 
    const confirmEndDate = endDateParse.slice(0,3) + ", " + endDateParse.slice(8,11) + endDateParse.slice(4,8) + endDateParse.slice(11,15);
    document.getElementById("confirm-startDate").innerHTML = confirmStartDate;
    document.getElementById("confirm-startDate0").value = confirmStartDate;
    document.getElementById("confirm-endDate").innerHTML = confirmEndDate;
    document.getElementById("confirm-endDate0").value = confirmEndDate;
    document.getElementById("confirm-daterange0").value = document.getElementById("date-select").value;
    //Number of nights
    document.getElementById("confirm-nights").innerHTML = nights;
    document.getElementById("confirm-nights0").value = nights;
    //Adds their person coments
    document.getElementById("confirm-message").innerHTML = document.getElementById('add-comment').value;
    document.getElementById("confirm-message0").value = document.getElementById('add-comment').value;
      //Calculates the nightly cost here (rather than sending it to the function because here I can display each section so they can see the breakdown)
      let nightlyCost = calcNightlyCost(cabinSelected, nights, totalGuests, numOfPets);
      const cabinCost = nightlyCost.toFixed(2).toString();
      let guestCharge = "0";
      let petCharge = "0";
      if(totalGuests > 10){
        guestCharge = 5*(totalGuests-10);
        nightlyCost = nightlyCost + guestCharge;
      }
      if(numOfPets >= 1){
        petCharge = 20*numOfPets;
        nightlyCost = nightlyCost + petCharge;
      }
      nightlyCost = nightlyCost.toFixed(2);
      const totalCost = (nightlyCost * nights).toFixed(2).toString();
    document.getElementById("confirm-cost").innerHTML = totalCost;
    document.getElementById("confirm-cost0").value = totalCost;
  
    //This displays the cost breakdown
    document.getElementById("cost-calculator").innerHTML = "-Cost Breakdown-<br>" + cabinSelected + ": $" + cabinCost +"<br>Extra Guests: $" + guestCharge + "<br>Pet Charge: $" + petCharge + "<br>" + nights + " night(s) @ $" + nightlyCost.toString() + "/night";
    document.getElementById("cost-calculator0").value = "-Cost Breakdown-<br>" + cabinSelected + ": $" + cabinCost +"<br>Extra Guests: $" + guestCharge + "<br>Pet Charge: $" + petCharge + "<br>" + nights + " night(s) @ $" + nightlyCost.toString() + "/night";
  
    document.getElementById("safety-agree0").value = document.getElementById("safety-checkbox").checked;
  }
  

  function toStepOne(){ 
    if(window.innerWidth > 670){ 
      document.getElementById("step-one-filling").style.display = 'block';
      document.getElementById("step-one-done").style.display = 'none';
      stepOneLeft.style.marginLeft = '15%';
      stepOneLeft.style.backgroundColor = '#fff';
      stepOneLeft.style.borderLeft = 'solid 1px #ccc';
      stepOneLeft.style.borderTop = 'solid 1px #ccc';
      stepOneLeft.style.borderBottom = 'solid 1px #ccc';
      stepOneLeft.style.borderRight = 'none';
      document.getElementById("step-one-p").style.color = '#35b5e3';
      document.getElementById("step-one-check").style.color = '#35b5e3';
  
      document.getElementById("step-two-filling").style.display = 'none';
      document.getElementById("step-two-done").style.display = 'none';
      stepTwoLeft.style.marginLeft = '17%';
      stepTwoLeft.style.marginTop = '0px';
      stepTwoLeft.style.backgroundColor = '#f3f3f3';
      stepTwoLeft.style.borderLeft = 'solid 1px #efefef';
      stepTwoLeft.style.borderTop = 'solid 1px #efefef';
      stepTwoLeft.style.borderBottom = 'solid 1px #efefef';
      stepTwoLeft.style.borderRight = 'solid 1px #efefef';
      document.getElementById("step-two-p").style.color = '#555';
      document.getElementById("step-two-circle").style.display = 'block';
      document.getElementById("step-two-circle").style.display = '#555';
      document.getElementById("step-two-check").style.display = 'none';
      document.getElementById("step-two-check").style.color = '#555';
    }else if(window.innerWidth <= 670){
      document.getElementById("step-one-filling").style.display = 'block';
      document.getElementById("step-one-done").style.display = 'none';
      stepOneLeft.style.height = '80px';
      stepOneLeft.style.marginTop = '0px';
      stepOneLeft.style.backgroundColor = '#fff';
      stepOneLeft.style.border = 'solid 1px #ccc';
      document.getElementById("step-one-p").style.color = '#35b5e3';
      document.getElementById("step-one-check").style.display = 'block';
      document.getElementById("step-one-check").style.color = '#35b5e3';
  
      document.getElementById("step-two-filling").style.display = 'none';
      document.getElementById("step-two-done").style.display = 'none';
      stepTwoLeft.style.height = '75px';
      stepTwoLeft.style.marginTop = '5px';
      stepTwoLeft.style.backgroundColor = '#f3f3f3';
      stepTwoLeft.style.border = 'solid 1px #efefef';
      document.getElementById("step-two-p").style.color = '#555';
      document.getElementById("step-two-circle").style.display = 'block';
      document.getElementById("step-two-circle").style.display = '#555';
      document.getElementById("step-two-check").style.display = 'none';
      document.getElementById("step-two-check").style.color = '#555';
    }
  }
  
  function toStepTwo(){
    stepOneDone();
    if(document.getElementById('adults').value == 0){
      alert("Please list that at least 1 adult will be coming!\n\nIf there still seems to be an error please send us an email directly with your booking information at SheldonRLarsonRanch@gmail.com");
      return;
    }else if(document.getElementById('adults').value < 0 || document.getElementById('children').value < 0){
      alert("Ensure there are no negative numbers for Adults or Children!\n\nIf there still seems to be an error please send us an email directly with your booking information at SheldonRLarsonRanch@gmail.com");
      return;
    }
  
    if(window.innerWidth > 670){
      document.getElementById("step-one-filling").style.display = 'none';
      document.getElementById("step-one-done").style.display = 'block';
      stepOneLeft.style.marginLeft = '17%';
      stepOneLeft.style.backgroundColor = '#f3f3f3';
      stepOneLeft.style.borderLeft = 'solid 1px #ccc';
      stepOneLeft.style.borderTop = 'solid 1px #ccc';
      stepOneLeft.style.borderBottom = 'solid 1px #ccc';
      stepOneLeft.style.borderRight = 'solid 1px #efefef';
      document.getElementById("step-one-p").style.color = '#555';
      document.getElementById("step-one-p").style.marginTop = '0';
      document.getElementById("step-one-p").style.paddingTop = '10px';
      document.getElementById("step-one-check").style.color = '#555';
  
      document.getElementById("step-two-filling").style.display = 'block';
      document.getElementById("step-two-filling").style.marginTop = '2px';
      document.getElementById("step-two-filling").style.borderTop = 'solid 1px #ccc';
      document.getElementById("step-two-done").style.display = 'none';
      stepTwoLeft.style.marginLeft = '15%';
      stepTwoLeft.style.marginTop = '2px';
      stepTwoLeft.style.backgroundColor = '#fff';
      stepTwoLeft.style.borderLeft = 'solid 1px #ccc';
      stepTwoLeft.style.borderTop = 'solid 1px #ccc';
      stepTwoLeft.style.borderBottom = 'solid 1px #ccc';
      stepTwoLeft.style.borderRight = 'none';
      document.getElementById("step-two-p").style.color = '#35b5e3';
      document.getElementById("step-two-circle").style.display = 'none';
      document.getElementById("step-two-check").style.display = 'block';
      document.getElementById("step-two-check").style.color = '#35b5e3';
  
      document.getElementById("step-three-filling").style.display = 'none';
      document.getElementById("step-three-done").style.display = 'none';
      stepThreeLeft.style.marginLeft = '17%';
      stepThreeLeft.style.marginTop = '0px';
      stepThreeLeft.style.backgroundColor = '#f3f3f3';
      stepThreeLeft.style.borderLeft = 'solid 1px #efefef';
      stepThreeLeft.style.borderTop = 'solid 1px #efefef';
      stepThreeLeft.style.borderBottom = 'solid 1px #efefef';
      stepThreeLeft.style.borderRight = 'solid 1px #efefef';
      document.getElementById("step-three-p").style.color = '#555';
      document.getElementById("step-three-circle").style.display = 'block';
      document.getElementById("step-three-circle").style.display = '#555';
      document.getElementById("step-three-check").style.display = 'none';
      document.getElementById("step-three-check").style.color = '#555';
    }else if(window.innerWidth <= 670){
      document.getElementById("step-one-filling").style.display = 'none';
      document.getElementById("step-one-done").style.display = 'none';
      stepOneLeft.style.height = '75px';
      stepOneLeft.style.marginTop = '5px';
      stepOneLeft.style.backgroundColor = '#f3f3f3';
      stepOneLeft.style.border = 'solid 1px #efefef';
      document.getElementById("step-one-p").style.color = '#555';
      document.getElementById("step-one-check").style.color = '#555';
  
      document.getElementById("step-two-filling").style.display = 'block';
      document.getElementById("step-two-done").style.display = 'none';
      stepTwoLeft.style.height = '80px';
      stepTwoLeft.style.marginTop = '0px';
      stepTwoLeft.style.backgroundColor = '#fff';
      stepTwoLeft.style.border = 'solid 1px #ccc';
      document.getElementById("step-two-p").style.color = '#35b5e3';
      document.getElementById("step-two-circle").style.display = 'none';
      document.getElementById("step-two-check").style.display = 'block';
      document.getElementById("step-two-check").style.color = '#35b5e3';
  
      document.getElementById("step-three-filling").style.display = 'none';
      document.getElementById("step-three-done").style.display = 'none';
      stepThreeLeft.style.height = '75px';
      stepThreeLeft.style.marginTop = '5px';
      stepThreeLeft.style.backgroundColor = '#f3f3f3';
      stepThreeLeft.style.border = 'solid 1px #efefef';
      document.getElementById("step-three-p").style.color = '#555';
      document.getElementById("step-three-circle").style.display = 'block';
      document.getElementById("step-three-circle").style.display = '#555';
      document.getElementById("step-three-check").style.display = 'none';
      document.getElementById("step-three-check").style.color = '#555';      
    }
  }
  
  function toStepThree(){
    if(!stepTwoDone()){
      return;
    }
    if(window.innerWidth > 670){
      document.getElementById("step-two-filling").style.display = 'none';
      document.getElementById("step-two-done").style.display = 'block';
      stepTwoLeft.style.marginLeft = '17%';
      stepTwoLeft.style.backgroundColor = '#f3f3f3';
      stepTwoLeft.style.borderLeft = 'solid 1px #ccc';
      stepTwoLeft.style.borderTop = 'solid 1px #ccc';
      stepTwoLeft.style.borderBottom = 'solid 1px #ccc';
      stepTwoLeft.style.borderRight = 'solid 1px #efefef';
      document.getElementById("step-two-p").style.color = '#555';
      document.getElementById("step-two-p").style.marginTop = '0';
      document.getElementById("step-two-p").style.paddingTop = '10px';
      document.getElementById("step-two-check").style.color = '#555';
  
      document.getElementById("step-three-filling").style.display = 'block';
      document.getElementById("step-three-filling").style.marginTop = '2px';
      document.getElementById("step-three-filling").style.borderTop = 'solid 1px #ccc';
      document.getElementById("step-three-done").style.display = 'none';
      stepThreeLeft.style.marginLeft = '15%';
      stepThreeLeft.style.marginTop = '2px';
      stepThreeLeft.style.backgroundColor = '#fff';
      stepThreeLeft.style.borderLeft = 'solid 1px #ccc';
      stepThreeLeft.style.borderTop = 'solid 1px #ccc';
      stepThreeLeft.style.borderBottom = 'solid 1px #ccc';
      stepThreeLeft.style.borderRight = 'none';
      document.getElementById("step-three-p").style.color = '#35b5e3';
      document.getElementById("step-three-circle").style.display = 'none';
      document.getElementById("step-three-check").style.display = 'block';
      document.getElementById("step-three-check").style.color = '#35b5e3';
  
      document.getElementById("step-four-filling").style.display = 'none';
      stepFourLeft.style.marginLeft = '17%';
      stepFourLeft.style.marginTop = '0px';
      stepFourLeft.style.backgroundColor = '#f3f3f3';
      stepFourLeft.style.borderLeft = 'solid 1px #efefef';
      stepFourLeft.style.borderTop = 'solid 1px #efefef';
      stepFourLeft.style.borderBottom = 'solid 1px #efefef';
      stepFourLeft.style.borderRight = 'solid 1px #efefef';
      document.getElementById("step-four-p").style.color = '#555';
      document.getElementById("step-four-circle").style.display = 'block';
      document.getElementById("step-four-circle").style.display = '#555';
      document.getElementById("step-four-check").style.display = 'none';
      document.getElementById("step-four-check").style.color = '#555';
    }else if(window.innerWidth <= 670){
      document.getElementById("step-two-filling").style.display = 'none';
      document.getElementById("step-two-done").style.display = 'none';
      stepTwoLeft.style.height = '75px';
      stepTwoLeft.style.marginTop = '5px';
      stepTwoLeft.style.backgroundColor = '#f3f3f3';
      stepTwoLeft.style.border = 'solid 1px #efefef';
      document.getElementById("step-two-p").style.color = '#555';
      document.getElementById("step-two-check").style.color = '#555';
  
      document.getElementById("step-three-filling").style.display = 'block';
      document.getElementById("step-three-done").style.display = 'none';
      stepThreeLeft.style.height = '80px';
      stepThreeLeft.style.marginTop = '0px';
      stepThreeLeft.style.backgroundColor = '#fff';
      stepThreeLeft.style.border = 'solid 1px #ccc';
      document.getElementById("step-three-p").style.color = '#35b5e3';
      document.getElementById("step-three-circle").style.display = 'none';
      document.getElementById("step-three-check").style.display = 'block';
      document.getElementById("step-three-check").style.color = '#35b5e3';
  
      document.getElementById("step-four-filling").style.display = 'none';
      stepFourLeft.style.height = '75px';
      stepFourLeft.style.marginTop = '5px';
      stepFourLeft.style.backgroundColor = '#f3f3f3';
      stepFourLeft.style.border = 'solid 1px #efefef';
      document.getElementById("step-four-p").style.color = '#555';
      document.getElementById("step-four-circle").style.display = 'block';
      document.getElementById("step-four-circle").style.display = '#555';
      document.getElementById("step-four-check").style.display = 'none';
      document.getElementById("step-four-check").style.color = '#555';
    }
  }
  
  function toStepFour(){
    if(window.innerWidth > 670){
      document.getElementById("step-three-filling").style.display = 'none';
      document.getElementById("step-three-done").style.display = 'block';
      stepThreeLeft.style.marginLeft = '17%';
      stepThreeLeft.style.backgroundColor = '#f3f3f3';
      stepThreeLeft.style.borderLeft = 'solid 1px #ccc';
      stepThreeLeft.style.borderTop = 'solid 1px #ccc';
      stepThreeLeft.style.borderBottom = 'solid 1px #ccc';
      stepThreeLeft.style.borderRight = 'solid 1px #efefef';
      document.getElementById("step-three-p").style.color = '#555';
      document.getElementById("step-three-p").style.marginTop = '0';
      document.getElementById("step-three-p").style.paddingTop = '10px';
      document.getElementById("step-three-check").style.color = '#555';
  
      document.getElementById("step-four-filling").style.display = 'block';
      document.getElementById("step-four-filling").style.marginTop = '2px';
      document.getElementById("step-four-filling").style.borderTop = 'solid 1px #ccc';
      stepFourLeft.style.marginLeft = '15%';
      stepFourLeft.style.marginTop = '2px';
      stepFourLeft.style.backgroundColor = '#fff';
      stepFourLeft.style.borderLeft = 'solid 1px #ccc';
      stepFourLeft.style.borderTop = 'solid 1px #ccc';
      stepFourLeft.style.borderBottom = 'solid 1px #ccc';
      stepFourLeft.style.borderRight = 'none';
      document.getElementById("step-four-p").style.color = '#35b5e3';
      document.getElementById("step-four-circle").style.display = 'none';
      document.getElementById("step-four-check").style.display = 'block';
      document.getElementById("step-four-check").style.color = '#35b5e3';
    }else if(window.innerWidth <= 670){
      document.getElementById("step-three-filling").style.display = 'none';
      document.getElementById("step-three-done").style.display = 'none';
      stepThreeLeft.style.height = '75px';
      stepThreeLeft.style.marginTop = '5px';
      stepThreeLeft.style.backgroundColor = '#f3f3f3';
      stepThreeLeft.style.border = 'solid 1px #efefef';
      document.getElementById("step-three-p").style.color = '#555';
      document.getElementById("step-three-check").style.color = '#555';
  
      document.getElementById("step-four-filling").style.display = 'block';
      stepFourLeft.style.height = '80px';
      stepFourLeft.style.marginTop = '0px';
      stepFourLeft.style.backgroundColor = '#fff';
      stepFourLeft.style.border = 'solid 1px #ccc';
      document.getElementById("step-four-p").style.color = '#35b5e3';
      document.getElementById("step-four-circle").style.display = 'none';
      document.getElementById("step-four-check").style.display = 'block';
      document.getElementById("step-four-check").style.color = '#35b5e3';
    }
  
    confirmBooking();
  }

  bookPrev2.addEventListener("click", toStepOne);
  bookPrev4.addEventListener("click", toStepThree);
  bookPrev3.addEventListener("click", toStepTwo);
  bookCont1.addEventListener("click", toStepTwo);
  bookCont2.addEventListener("click", toStepThree);
  bookCont3.addEventListener("click", toStepFour);