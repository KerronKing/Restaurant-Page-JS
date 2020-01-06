export const aboutTab = (() => {
  const render = () => {
    const content = document.getElementById('content');
    if (content.firstChild !== null) {
      content.firstChild.remove();
    }
    const aboutInfo = document.createElement('DIV');
    aboutInfo.classList.add('info');
    aboutInfo.classList.add('about-info');
    aboutInfo.textContent = 'King\'s Healthy Eats (KHE) is your premium one stop' + 
    ' shop for quality Caribbean cooking. Come dine with us and we promise you\'ll' + 
    ' leave in better stead than you came';
    content.appendChild(aboutInfo);
  }
  return { render };
})();