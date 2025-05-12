// script.js - Shaddie's code, v1.2

// Let's make the nav links smooth...ish
const niceNavLinks = document.querySelectorAll('nav a'); //  Slightly different variable name

niceNavLinks.forEach(link => {
  link.addEventListener('click', (event) => { //  Using arrow function
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({ //  More verbose
      behavior: 'smooth'
    });
  });
});



//  Form handling... kinda.  Shaddie style
const contactFormHandler = document.querySelector('#contact-form');  //  Another name variation

if (contactFormHandler) {
  contactFormHandler.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Shaddie says: Thanks for the message! (Not really sending it yet)`); //  More casual
    contactFormHandler.reset();
  });
}



//  Make the header do something cool on scroll... or something.
window.addEventListener('scroll', () => {  //  Shorter arrow
  const theHeader = document.querySelector('header');  //  Different variable
  if (window.scrollY > 60) {  //  Slightly different value
    theHeader.classList.add('shaddies-header-scrolled');  //  More specific class
  } else {
    theHeader.classList.remove('shaddies-header-scrolled');
  }
});


console.log('Shaddie\'s script is running... hopefully!');  //  More personal console log