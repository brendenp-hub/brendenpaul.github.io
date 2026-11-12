
// ==========================================
// 1. MOBILE NAVIGATION
// Controls the navigation menu on mobile devices.
// ==========================================


// Find the mobile menu button in HTML
const menuButton = document.querySelector('.menu-toggle');

// Find the navigation container in HTML
const nav = document.querySelector('.nav');


// Check whether both elements exist before adding events
if (menuButton && nav) {

  // Detect when the visitor clicks the menu button
  menuButton.addEventListener('click', () => {

    // Add or remove the "open" CSS class
    // This makes the mobile navigation appear or disappear
    nav.classList.toggle('open');


    // Update accessibility information
    // true = menu is open
    // false = menu is closed
    menuButton.setAttribute(
      'aria-expanded',
      nav.classList.contains('open')
    );

  });

}



// ==========================================
// 2. COMMENTS FORM
// Handles the visitor's comment submission.
// ==========================================


// Find the comments form using its ID
const form = document.querySelector('#comment-form');


// Only run this function on the comments page
if (form) {

  // Detect when the visitor submits the form
  form.addEventListener('submit', (event) => {

    // Prevent the browser from refreshing the page
    event.preventDefault();


    // Get the visitor's name from the name input
    const name = document
      .querySelector('#name')
      .value
      .trim();


    // Find the form response message
    const status = document.querySelector('#form-status');


    // Display a personalised thank-you message
    status.textContent =
      `THANK YOU, ${name.toUpperCase()}! YOUR COMMENT HAS BEEN PREVIEWED. THIS DEMO FORM DOES NOT SEND DATA TO A SERVER.`;


    // Clear all input fields after submission
    form.reset();

  });

}

// ==========================================
// END OF MAIN.JS
// ==========================================
