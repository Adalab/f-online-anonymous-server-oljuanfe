'use strict';

console.log('Ready :)');

const buttonOpenMenu = document.querySelector('.nav-trigger');
const navigationMenu = document.querySelector('.nav');
const buttonCloseMenu = document.querySelector('.nav-close');

buttonOpenMenu.innerHTML = '';
buttonCloseMenu.innerHTML = '';

navigationMenu.classList.add('hidden');
buttonCloseMenu.classList.add('hidden');

// Handle clicks
function handleOpenMenu() {
  console.log('clickando');
  navigationMenu.classList.remove('hidden');
  navigationMenu.classList.add('nav-animation__intro');
  navigationMenu.classList.remove('nav-animation__closing');
  buttonCloseMenu.classList.toggle('hidden');
  buttonOpenMenu.classList.toggle('hidden');
}

function handleCloseMenu() {
  console.log('estoy clickando');
  navigationMenu.classList.add('nav-animation__closing');
  navigationMenu.classList.remove('nav-animation__intro');
  setTimeout(function addHidden() {
    navigationMenu.classList.add('hidden')
  },1000);
  buttonOpenMenu.classList.toggle('hidden');
  buttonCloseMenu.classList.toggle('hidden');
}

// Listeners
buttonOpenMenu.addEventListener('click', handleOpenMenu);
buttonCloseMenu.addEventListener('click', handleCloseMenu);