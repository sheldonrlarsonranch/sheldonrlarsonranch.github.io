/* Global Variables */
const menuTrigger = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close-icon');
const menuOverlay = document.getElementById('overlay');
const aboutUs = document.getElementById('about-us');
const cabinsMenu = document.getElementById('cabins-menu');
const cabinSubMenu = document.getElementById('cabin-sub-menu-pages');
const aboutUsMenu = document.getElementById('about-us');
const aboutUsSubMenu = document.getElementById('about-us-sub-menu-pages');

/* MOBILE HEADER FUNCTIONALITY */
function mobileMenuSlideIn(){ //In mobile, if menu is clicked, the menu slides in
  mobileMenu.className += ' slide-in';
  menuOverlay.style.display = 'block';
  menuClose.style.display = 'block';
  menuTrigger.style.display = 'none';
}

function mobileMenuClose(){ //In mobile, if the "x" is pressed or outside the menu, the menu goes away
  mobileMenu.className = 'mobile-menu';
  menuOverlay.style.display = 'none';
  menuTrigger.style.display = '';
  menuClose.style.display = '';
}

function cabinSubMenus(){ //Opens sub menu for cabin when clicked
  if(cabinSubMenu.style.display === "block"){
    cabinSubMenu.style.display = 'none';
  }else{
    cabinSubMenu.style.display = 'block';
  }
}

function aboutUsSubMenus(){ //Opens the about us sub menu when clicked
  if(aboutUsSubMenu.style.display === "block"){
    aboutUsSubMenu.style.display = 'none';
  }else{
    aboutUsSubMenu.style.display = 'block';
  }
}

//Event listener for menu and sub menu
menuTrigger.addEventListener('click',mobileMenuSlideIn);
menuClose.addEventListener('click',mobileMenuClose);
menuOverlay.addEventListener('click',mobileMenuClose);
cabinsMenu.addEventListener('click', cabinSubMenus);
aboutUsMenu.addEventListener('click', aboutUsSubMenus);


/* HOMEPAGE FORM TRANSFER TO BOOK NOW PAGE FORM */
let url;
let urlCabinParse;
let urlDateParse;
let urlStartDateParse;
let urlEndDateParse;

if(window.location.search != ""){
  url= window.location.search;
  urlCabinParse = url.substring(url.indexOf("selectCabin")+12,url.indexOf("&daterange"));
  document.getElementById('cabin-selection').value=urlCabinParse; //Sets the cabin on the bookNow page
  urlDateParse = url.substring(url.indexOf("daterange")+10); //Gets the date range from the URL
  urlDateParse = urlDateParse.replace(/%2F/gi, "/"); //to adjust for the format of the URL to match normal format
  urlStartDateParse = urlDateParse.substring(0,10); //Parses for the start date
  urlEndDateParse = urlDateParse.substring(13,23); //Parses for the end date
}

const today = new Date(); //Gets today
const nextWeek = new Date(today.getTime() + 7*24*60*60*1000); //Gets the date in one week from today

$(function() { //Function for the dateRangePicker
  const x=1
    $('input[name="daterange"]').daterangepicker({
      opens: 'center',
      drops: 'down',
      showDropdowns: true,
      alwaysShowCalendars: true,
      minDate: today,
      startDate: window.location.search == "" ? today : urlStartDateParse, //Sets start date to today or value from url
      endDate: window.location.search == "" ? nextWeek : urlEndDateParse, //Sets end date to one woeek from today or from url
      autoApply: true
      //isInvalidDate: function(date) { //This function is for any dates that can't be selected
        //if (date.format('YYYY-M-D') == '2019-10-25') {
        //    return true; 
        //}
    //}
      });
});

/* MAIN CABIN PAGES */
window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 100); //On the main cabin page, if you click on the menu, it places it 100px from top so it's just below the header
});

/* Google Calendar API fake example.
    SOMETHING LIKE THIS.
    1. Create whatever node needs to send a get/post/etc request.
    2. Set the paramaters for our authorization key.
    3. Send the request, basically call it like a function. (might need to specify asynchronous here).
    4. Parse the json that comes back.
      4a. json.items is the list of events.
      4b. Loop through json.items. Each element of the array has a .start.date and .end.date
      4c. Add the start date and all dates up to, but not indcluding, the end date to a list of booked dates.
    5. In the daterangepicker, the isInvalidDate function is called for every single date. So write a function that checks if the date is in our list of booked dates. (something like if (date in bookedList) return true;)


Servser myWebServer = Servser.start();
myWebServer.setParamer(key = "myauthorizationkey");
json foo = myWebServer.get("/calendars/calendarId/events");

list upcomingEvents = foo.items; // List of events from the calendar

Set bookedDatesset = new set(); // This will be the set of booked dates.
foreach(element e in upcoming Events) {
  stardate = e.start.date;
  enddate = e.end.date;
  // add dates to our bookedDatesList.
}

// THEN in the daterangepicker, we do something like:
if (date in bookedDatesList)
  return true;
*/