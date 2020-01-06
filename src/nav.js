export const nav = (() => {
  const render = () => {
    const nav = document.createElement('NAV');
    nav.id = "main-nav";
    const logo = document.createElement('DIV');
    logo.classList.add('logo');
    logo.textContent = "KHE";
    const tabs = document.createElement('DIV');
    tabs.id = "tabs";
    nav.appendChild(logo);
    nav.appendChild(tabs);
    const navList = document.createElement('UL');
    tabs.appendChild(navList);
    const about = document.createElement('LI');
    about.textContent = "About";
    tabs.appendChild(about);
    const contact = document.createElement('LI');
    contact.textContent = "Contact";
    tabs.appendChild(contact);
    const menu = document.createElement('LI');
    menu.textContent = "Menu";
    tabs.appendChild(menu);
    const reservations = document.createElement('LI');
    reservations.textContent = "Reservations";
    tabs.appendChild(reservations);
    const locations = document.createElement('LI');
    locations.textContent = "Locations";
    tabs.appendChild(locations);
    document.body.prepend(nav);
  }
  
  return { render };
})();