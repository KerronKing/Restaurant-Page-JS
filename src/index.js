import { nav } from "./nav.js";
import { defaultContent } from "./default.js";
import { aboutTab } from "./about.js";
import { contactTab } from "./contact.js";
import { menuTab } from "./menu.js";
import { reserveTab } from "./reservations.js";

nav.render();
defaultContent.render();

const content = document.getElementById('content');
const about = document.getElementById('about');
about.addEventListener('click', () => {
  aboutTab.render()
})
const contact = document.getElementById('contact');
contact.addEventListener('click', () => {
  contactTab.render()
})
const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
  menuTab.render();
})
const reserve = document.getElementById('reserve');
reserve.addEventListener('click', () => {
  reserveTab.render();
})
// const locations = document.getElementById('locations');
// locations.addEventListener('click', () => {
//   locationsTab.render();
// })
