const locationsTab = (() => {
  const render = () => {
    const content = document.getElementById('content');
    content.firstChild.remove();
    const locationInfo = document.createElement('DIV');
    locationInfo.classList.add('info');
    locationInfo.classList.add('location-info');
    const opening = document.createElement('P');
    opening.classList.add('opening');
    opening.textContent = 'Opening hours and days';
    locationInfo.appendChild(opening);
    const locationOne = document.createElement('P');
    locationOne.textContent = 'Port of Spain, Trinidad, W.I.';
    locationInfo.appendChild(locationOne);
    const locationTwo = document.createElement('P');
    locationTwo.textContent = 'San Fernando, Trinidad, W.I.';
    locationInfo.appendChild(locationTwo);
    const hours = document.createElement('P');
    hours.textContent = 'Mon - Sat: 11AM - 10PM';
    locationInfo.appendChild(hours);
    content.appendChild(locationInfo);
  };
  return { render };
})();
export default locationsTab;