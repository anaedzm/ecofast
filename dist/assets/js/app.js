

function slide(el) {
    const buttons = document.querySelector('#'+ el.parentNode.parentNode.id).querySelector('#'+el.parentNode.id).childNodes
    console.log(buttons)
    buttons.forEach(function(elem) {
        elem.classList.remove('active')
    })
    el.classList.add('active');

    const slides = document.getElementById(el.parentNode.parentNode.id + '-' + 'slides-container').childNodes
    const currSlide = document.getElementById(el.parentNode.parentNode.id + '-' + el.id)
    slides.forEach(function(elem) {
        elem.classList.remove('active')
    })
    currSlide.classList.add('active')
}

  

// Function to validate email addresses
function isValidEmail(email) {
    // Define the JS Regex pattern for a valid email address
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    // Test the email against the pattern and return the result (true or false)
    return emailRegex.test(email);
  }
  
  // Function to validate phone numbers
  function isValidPhoneNumber(phone) {
    // Define the JS Regex pattern for a valid 10-digit phone number
    const phoneRegex = /^\d{10}$/;
    
    // Test the phone number against the pattern and return the result (true or false)
    return phoneRegex.test(phone);
  }

  // Function to validate the contact form
function validateContactForm(contactForm) {
    // Get the values entered in the form fields
    const name = contactForm["name"].value;
    const email = contactForm["email"].value;
    const phone = contactForm["phone"].value;
    const message = contactForm["message"].value;
  
    // Check if the required fields (name, email, and message) are empty
    // If any of them are empty, return false to prevent form submission
    if (!name || !email || !message) {
      return false;
    }
  
    // Check if the email is valid using the isValidEmail function
    // If the phone field is not empty, also check if it is valid using the isValidPhoneNumber function
    // If either the email or the phone number is invalid, return false to prevent form submission
    if (!isValidEmail(email) || (phone && !isValidPhoneNumber(phone))) {
      return false;
    }
  
    // If all the validations pass, return true to allow form submission
    return true;
  }
const form = document.getElementById('contact-form')
  
form.addEventListener("submit", (event) => {
    const contactForm = event.target
    if (!validateContactForm(contactForm)) {
      event.preventDefault();
      displayError(contactForm, 'Invalid input')
    }
  });