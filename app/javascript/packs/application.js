// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function topIsInViewport(element) {
  const rect = element.getBoundingClientRect();
  console.log(rect.top);
  return (
    Math.round(rect.top) <= 100
  );
}

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  if (window.innerWidth > 768) {
    $(function () {
      $('[data-toggle="modal"]').tooltip()
    })
  }


  // LE WAGON LINES ANIMATION
  const leWagon = document.querySelector('.le-wagon');
  const horiz = leWagon.querySelector('.horiz-line');
  const vert = leWagon.querySelector('.vert-line-lw');

  // PROJECT LINES ANIMATION
  const projects = document.querySelector('.projects');
  const firstMidLine = projects.querySelector('.first-mid-line');
  const vertOne = projects.querySelector('.vert-line-one');
  const vertTwo = projects.querySelector('.vert-line-two');
  
  const secondMidLine = projects.querySelector('.second-mid-line');
  const thirdMidLine = projects.querySelector('.third-mid-line');
  const vertThree = projects.querySelector('.vert-line-three');
  const vertFour = projects.querySelector('.vert-line-four');

  // TESTIMONIALS ANIMATION
  const testimonials = document.querySelector('.testimonials');
  const studentTestimonialsLines = testimonials.querySelectorAll('.student-testimonials-line');
  const clientTestimonialsLines = testimonials.querySelectorAll('.client-testimonials-line');
  
  window.addEventListener('scroll', () => {
    // LE WAGON LINES ANIMATION
    if (isInViewport(leWagon)) {
      vert.classList.add('increase-height');
      // setTimeout(() => {
        horiz.classList.add('increase-width');
      // }, 400);
    } else {
      vert.classList.remove('increase-height');
      // setTimeout(() => {
        horiz.classList.remove('increase-width');
      // }, 400);
    };
    
    // PROJECT LINES ANIMATION
    
    if (topIsInViewport(projects)) {
      firstMidLine.classList.add('increase-width');
      vertOne.classList.add('increase-height');
      vertTwo.classList.add('increase-height');
    } else {
      vertOne.classList.remove('increase-height');
      vertTwo.classList.remove('increase-height');
      firstMidLine.classList.remove('increase-width');
    };

    if (topIsInViewport(firstMidLine)) {
      secondMidLine.classList.add('increase-width');
      thirdMidLine.classList.add('increase-width');
      vertThree.classList.add('increase-height');
      vertFour.classList.add('increase-height');
    } else {
      vertThree.classList.remove('increase-height');
      vertFour.classList.remove('increase-height');
      secondMidLine.classList.remove('increase-width');
      thirdMidLine.classList.remove('increase-width');
    };

    // TESTIMONIALS ANIMATION

    if (topIsInViewport(testimonials)) {
      studentTestimonialsLines.forEach(line => line.classList.add('increase-width'));
      clientTestimonialsLines.forEach(line => line.classList.add('increase-width'));
    } else {
      studentTestimonialsLines.forEach(line => line.classList.remove('increase-width'));
      clientTestimonialsLines.forEach(line => line.classList.remove('increase-width'));
    };

  });
});
