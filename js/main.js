'use strict';

console.log('Ready :)');

const buttonOpenMenu = document.querySelector('.nav-trigger');
const navigationMenu = document.querySelector('.nav');
const buttonCloseMenu = document.querySelector('.nav-close');

buttonOpenMenu.innerHTML = '';
buttonCloseMenu.innerHTML = '';

navigationMenu.classList.add('hidden');

console.log(buttonOpenMenu.style);
buttonOpenMenu.style.backgroundImage = "url('../images/ico-menu.svg')";
buttonCloseMenu.style.backgroundImage = "url('../images/ico-close.svg')";



function handleOpenMenu() {
  console.log('clickando');
  navigationMenu.classList.toggle('hidden');
}

function handleCloseMenu() {
  console.log('estoy clickando');
  navigationMenu.classList.toggle('hidden');
}

buttonOpenMenu.addEventListener('click', handleOpenMenu);
buttonCloseMenu.addEventListener('click', handleCloseMenu);