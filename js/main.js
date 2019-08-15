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


/* MAIN CABIN PAGES */
window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 100);
});




