import nav from './nav';
import './styles.css';
import defaultContent from './default';
import aboutTab from './about';
import contactTab from './contact';
import menuTab from './menu';
import reserveTab from './reservations';
import locationsTab from './locations';

nav.render();
defaultContent.render();

const about = document.getElementById('about');
about.addEventListener('click', () => {
  aboutTab.render();
});
const contact = document.getElementById('contact');
contact.addEventListener('click', () => {
  contactTab.render();
});
const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
  menuTab.render();
});
const reserve = document.getElementById('reserve');
reserve.addEventListener('click', () => {
  reserveTab.render();
});
const locations = document.getElementById('locations');
locations.addEventListener('click', () => {
  locationsTab.render();
});
