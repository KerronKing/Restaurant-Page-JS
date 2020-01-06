export const defaultContent = (() => {
  const render = () => {
    const content = document.getElementById('content');
    const original = document.createElement('DIV');
    original.classList.add('info');
    original.classList.add('original-info');
    original.textContent = 'King\'s Trini Eats';
    content.appendChild(original);
  }
  return { render };
})();