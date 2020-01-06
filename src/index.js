import { nav } from "./nav.js";
import { aboutTab } from "./about.js";

nav.render();

const content = document.getElementById('content');
const about = document.getElementById('about');
about.addEventListener('click', () => {
  aboutTab.render()
})
const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
const reserve = document.getElementById('reserve');
const locations = document.getElementById('locations');

