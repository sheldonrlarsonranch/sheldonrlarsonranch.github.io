/* CONTACT US PAGE */
function contactUsMail(){
    const contactName = document.getElementById("contact-name").value; //Variable for name
    const contactEmail = document.getElementById("contact-email").value; //Variable for email
    
    let contactPhone = document.getElementById("contact-phone").value; //Variable for phone number
      const cleaned = ('' + contactPhone).replace(/\D/g, ''); //Gets rid of any extra non-number characters from phone number
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);  //Divides phone number into 3/3/4 numbers
      if (match) {
        contactPhone = '(' + match[1] + ') ' + match[2] + '-' + match[3]; //Formats like: (123)456-7890
      }else{
        contactPhone = "Couldn't recognize phone number"; //Error message
      }
  
    const contactSubject = document.getElementById("contact-subject").value; //Adds subject to email
    const contactMessage = document.getElementById("contact-message").value; //Adds message to email body
    
    if(confirm("Opening message in your default mail app. You may alternatively contact us by email at SheldonRLarsonRanch@gmail.com, or by phone at (435)340-0075. Thank you!")){ //Message to confirm opening email app
      window.location.assign("mailto:sheldonrlarsonranch@gmail.com?Subject=" + encodeURIComponent(contactSubject) + "&body=" + encodeURIComponent(contactMessage) + "%0D%0A%0D%0A----------------%0D%0A" + encodeURIComponent(contactName) + "%0D%0A" + encodeURIComponent(contactEmail) + "%0D%0A" + encodeURIComponent(contactPhone));
    } // Puts all the info into the email
  
}