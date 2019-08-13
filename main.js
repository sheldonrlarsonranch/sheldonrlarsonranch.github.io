alert("loads");
/* Global Variables */
let dateRange;
let selectCabin;

const menuTrigger = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close-icon');
const menuOverlay = document.getElementById('overlay');
const aboutUs = document.getElementById('about-us');
const cabinsMenu = document.getElementById('cabins-menu');
const cabinSubMenu = document.getElementById('cabin-sub-menu-pages');
const aboutUsMenu = document.getElementById('about-us');
const aboutUsSubMenu = document.getElementById('about-us-sub-menu-pages');

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

alert("pass Variables");

/* Background Images Slideshow */
alert("PassVARIABLES");
/*
$(".rslides8-5").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 2000,            // Integer: Speed of the transition, in milliseconds
  timeout: 7000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});
$(".rslides6-5").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 2000,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});
$(".rslides4-5").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 2000,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});
$(".rslides1-2").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 2000,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});
*/
alert("Pass slides");

/* Mobile Header */
function mobileMenuSlideIn(){
  mobileMenu.className += ' slide-in';
  menuOverlay.style.display = 'block';
  menuClose.style.display = 'block';
  menuTrigger.style.display = 'none';
}

function mobileMenuClose(){
  mobileMenu.className = 'mobile-menu';
  menuOverlay.style.display = 'none';
  menuTrigger.style.display = 'block';
  menuClose.style.display = 'none';
}

function cabinSubMenus(){
  if(cabinSubMenu.style.display === "block"){
    cabinSubMenu.style.display = 'none';
  }else{
    cabinSubMenu.style.display = 'block';
  }
}
function aboutUsSubMenus(){
  if(aboutUsSubMenu.style.display === "block"){
    aboutUsSubMenu.style.display = 'none';
  }else{
    aboutUsSubMenu.style.display = 'block';
  }
}

menuTrigger.addEventListener('click',mobileMenuSlideIn);
menuClose.addEventListener('click',mobileMenuClose);
menuOverlay.addEventListener('click',mobileMenuClose);
cabinsMenu.addEventListener('click', cabinSubMenus);
aboutUsMenu.addEventListener('click', aboutUsSubMenus);
alert("pass mobile header");
/* Function for the homepage calendar */
let url;
let urlCabinParse;
let urlDateParse;
let urlStartDateParse;
let urlEndDateParse;
if(window.location.search != ""){
  url= window.location.search;
  urlCabinParse = url.substring(url.indexOf("selectCabin")+12,url.indexOf("&daterange"));
  document.getElementById('cabin-selection').value=urlCabinParse; //Sets the cabin on the bookNow page
  urlDateParse = url.substring(url.indexOf("daterange")+10);//,url.indexOf("daterange")+41);
  urlDateParse = urlDateParse.replace(/%2F/gi, "/");
  urlStartDateParse = urlDateParse.substring(0,10);
  urlEndDateParse = urlDateParse.substring(13,23);
  }

const today = new Date();
const nextWeek = new Date(today.getTime() + 7*24*60*60*1000);
$(function() {
  const x=1
    $('input[name="daterange"]').daterangepicker({
      opens: 'center',
      drops: 'down',
      showDropdowns: true,
      alwaysShowCalendars: true,
      minDate: today,
      startDate: window.location.search == "" ? today : urlStartDateParse,
      endDate: window.location.search == "" ? nextWeek : urlEndDateParse,
      autoApply: true
      });
});

/* CONTACT US PAGE */
function contactUsMail(){
  const contactName = document.getElementById("contact-name").value;
  const contactEmail = document.getElementById("contact-email").value;
  
  let contactPhone = document.getElementById("contact-phone").value;
    const cleaned = ('' + contactPhone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      contactPhone = '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }else{
      contactPhone = "Couldn't recognize phone number";
    }

  const contactSubject = document.getElementById("contact-subject").value;
  const contactMessage = document.getElementById("contact-message").value;
  
  alert("Opening message in your default mail app. You may alternatively contact us by email at SheldonRLarsonRanch@gmail.com, or by phone at (435)340-0075. Thank you!")
  window.location.assign("mailto:sheldonrlarsonranch@gmail.com?Subject=" + encodeURIComponent(contactSubject) + "&body=" + encodeURIComponent(contactMessage) + "%0D%0A%0D%0A----------------%0D%0A" + encodeURIComponent(contactName) + "%0D%0A" + encodeURIComponent(contactEmail) + "%0D%0A" + encodeURIComponent(contactPhone));
}

/* MAIN CABIN PAGES */
window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 100);
});


/* Functions for Book Now page */
const calcNightlyCost = (cabinSelected, nights, guests, numOfPets) => {
  let nightlyCost;
  if(cabinSelected === "Main Cabin"){
    nightlyCost = 129;
    if(nights >= 7){
      nightlyCost = 775/7;
    }
  }else if(cabinSelected === "Guest Cabin"){
    nightlyCost = 99;
    if(nights >= 7){
      nightlyCost = 600/7;
    }
  }else if(cabinSelected === "Both Cabins"){
    nightlyCost = 200;
    if(nights >= 7){
      nightlyCost = 1200/7;
    }
  }else{
    return "Error calculating cost. You may still proceed and then contact the owner regarding price. We apologize for the inconvenience."
  }
  return nightlyCost;
}

const formatPhoneNumber = (guestPhone) => {
  const cleaned = ('' + guestPhone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      guestPhone = '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }else{
      guestPhone = "Can't recognize phone number";
    }
    return guestPhone;
}

function stepOneDone(){
  const startDate = document.getElementById('date-select').value.slice(0,10); 
  const endDate = document.getElementById('date-select').value.slice(13,23); 
  const startDateFormatted = new Date(Date.parse(startDate));
  const endDateFormatted = new Date(Date.parse(endDate));
  const startDateParse = startDateFormatted.toString().slice(0,15);
  const endDateParse = endDateFormatted.toString().slice(0,15);
  const nights = Math.round((endDateFormatted-startDateFormatted)/(1000*60*60*24));
  const stayDates = startDateParse.slice(0,3) + ", " + startDateParse.slice(8,11) + startDateParse.slice(4,8) + startDateParse.slice(11,15) + " - " + endDateParse.slice(0,3) + ", " + endDateParse.slice(8,11) + endDateParse.slice(4,8) + endDateParse.slice(11,15);
  document.getElementById("step-one-done-date-range").innerHTML = stayDates;
  document.getElementById("step-one-done-nights").innerHTML = nights + " nights";
  const cabinSelect = document.getElementById('cabin-selection');
  const cabinSelected = cabinSelect.options[cabinSelect.selectedIndex].text;
  document.getElementById("step-one-done-cabin").innerHTML = cabinSelected;
}

function stepTwoDone(){
  if(document.getElementById('first-name').value === ""){
    return false;
  }else{
    const guestName = document.getElementById('first-name').value  + " " + document.getElementById('last-name').value;
    document.getElementById("step-two-done-name").innerHTML = guestName;
  }
  if(document.getElementById('guest-email').value === ""){
    return false;
  }else{
    const guestEmail = document.getElementById("guest-email").value;
    document.getElementById("step-two-done-email").innerHTML = guestEmail;
  }
  let guestPhone = document.getElementById("guest-phone").value;
  let phoneNumber = formatPhoneNumber(guestPhone);
  document.getElementById("step-two-done-phone").innerHTML = phoneNumber;
  if(phoneNumber === "Can't recognize phone number"){
    return false;
  }
  return true;
}

function confirmBooking(){
  document.getElementById("confirm-name").innerHTML = document.getElementById('first-name').value  + " " + document.getElementById('last-name').value;
  document.getElementById("confirm-name0").value = document.getElementById('first-name').value  + " " + document.getElementById('last-name').value;

  document.getElementById("confirm-email").innerHTML = document.getElementById('guest-email').value;
  document.getElementById("confirm-email0").value = document.getElementById('guest-email').value;

  let guestPhone = document.getElementById('guest-phone').value;
  document.getElementById("confirm-phone").innerHTML = formatPhoneNumber(guestPhone);
  document.getElementById("confirm-phone0").value = formatPhoneNumber(guestPhone);
  
  const totalGuests = Number(document.getElementById('adults').value) + Number(document.getElementById('children').value);
  document.getElementById("confirm-totalNumber").innerHTML = totalGuests;
  document.getElementById("confirm-totalNumber0").value = totalGuests;
  
  document.getElementById("confirm-adults").innerHTML = document.getElementById('adults').value;
  document.getElementById("confirm-adults0").value = document.getElementById('adults').value;
  
  document.getElementById("confirm-children").innerHTML = document.getElementById('children').value;
  document.getElementById("confirm-children0").value = document.getElementById('children').value;

  const numOfPets = Number(document.getElementById('pets').value);
  document.getElementById("confirm-pets").innerHTML = numOfPets;
  document.getElementById("confirm-pets0").value = numOfPets;
  
    const cabinSelect = document.getElementById('cabin-selection');
    const cabinSelected = cabinSelect.options[cabinSelect.selectedIndex].text;
  document.getElementById("confirm-cabin").innerHTML = cabinSelected;
  document.getElementById("confirm-cabin0").value = cabinSelected;
 
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
  
  document.getElementById("confirm-nights").innerHTML = nights;
  document.getElementById("confirm-nights0").value = nights;
  
  document.getElementById("confirm-message").innerHTML = document.getElementById('add-comment').value;
  document.getElementById("confirm-message0").value = document.getElementById('add-comment').value;
  
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


  document.getElementById("cost-calculator").innerHTML = "-Cost Breakdown-<br>" + cabinSelected + ": $" + cabinCost +"<br>Extra Guests: $" + guestCharge + "<br>Pet Charge: $" + petCharge + "<br>" + nights + " night(s) @ $" + nightlyCost.toString() + "/night";
  document.getElementById("cost-calculator0").value = "-Cost Breakdown-<br>" + cabinSelected + ": $" + cabinCost +"<br>Extra Guests: $" + guestCharge + "<br>Pet Charge: $" + petCharge + "<br>" + nights + " night(s) @ $" + nightlyCost.toString() + "/night";
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
    document.getElementById("step-one-circle").style.display = 'none';
    document.getElementById("step-one-check").style.display = 'block';
    document.getElementById("step-one-check").style.color = '#35b5e3';

    document.getElementById("step-two-filling").style.display = 'none';
    document.getElementById("step-two-done").style.display = 'none';
    stepTwoLeft.style.height = '75px';
    stepTwoLeft.style.marginTop = '5px';
    stepTwoLeft.style.backgroundColor = '#f3f3f3';
    stepTwoLeft.style.border = 'solid 1px #efefef';
    document.getElementById("step-two-p").style.color = '#555';
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
    document.getElementById("step-one-done").style.display = 'block';
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
    document.getElementById("step-three-check").style.color = '#555';
    
  }
}

function toStepThree(){
  stepTwoDone();
  if(!stepTwoDone()){
    alert("Please ensure all fields are filled out correctly (i.e. phone number field contains only number and not letters, and all other fields do indeed contain text, thank you!\n\nIf there still seems to be an error please send us an email directly with your booking information at SheldonRLarsonRanch@gmail.com")
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
    document.getElementById("step-four-done").style.display = 'none';
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
    document.getElementById("step-two-done").style.display = 'block';
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
    document.getElementById("step-four-done").style.display = 'none';
    stepFourLeft.style.height = '75px';
    stepFourLeft.style.marginTop = '5px';
    stepFourLeft.style.backgroundColor = '#f3f3f3';
    stepFourLeft.style.border = 'solid 1px #efefef';
    document.getElementById("step-four-p").style.color = '#555';
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
    document.getElementById("step-four-done").style.display = 'none';
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
    document.getElementById("step-three-done").style.display = 'block';
    stepThreeLeft.style.height = '75px';
    stepThreeLeft.style.marginTop = '5px';
    stepThreeLeft.style.backgroundColor = '#f3f3f3';
    stepThreeLeft.style.border = 'solid 1px #efefef';
    document.getElementById("step-three-p").style.color = '#555';
    document.getElementById("step-three-check").style.color = '#555';

    document.getElementById("step-four-filling").style.display = 'block';
    document.getElementById("step-four-done").style.display = 'none';
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

document.getElementById("date-select").value = "7/7/2017 - 8/8/2018";



