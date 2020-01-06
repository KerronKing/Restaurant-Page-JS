export const menuTab = (() => {
  const render = () => {
    const content = document.getElementById('content');
    content.firstChild.remove();
    const menuInfo = document.createElement('DIV');
    menuInfo.classList.add('info');
    menuInfo.classList.add('menu-info');
    const menuDsc = document.createElement('P');
    menuDsc.textContent = 'Menu';
    menuInfo.appendChild(menuDsc);
    const appetizers = document.createElement('DIV');
    appetizers.classList.add('food');
    const firstList = document.createElement('UL');
    firstList.innerHTML = '<li>Appetizers</li>';
    firstList.innerHTML += '<li>Saltfish Accra</li>';
    firstList.innerHTML += '<li>Geera Chicken</li>';
    firstList.innerHTML += '<li>Saheena</li>';
    firstList.innerHTML += '<li>Breadfruit Chips</li>';
    firstList.innerHTML += '<li>Corn Soup</li>';
    firstList.innerHTML += '<li>Shrimp Kebabs</li>';
    firstList.innerHTML += '<li>Souse</li>';
    firstList.innerHTML += '<li>Wantons</li>';
    firstList.innerHTML += '<li>Pholourie</li>';
    appetizers.appendChild(firstList);
    menuInfo.appendChild(appetizers);
    const main = document.createElement('DIV');
    main.classList.add('food');
    const secondList = document.createElement('UL');
    secondList.innerHTML = '<li>Entreè</li>';
    secondList.innerHTML += '<li>Chicken Roti</li>';
    secondList.innerHTML += '<li>Chicken Pelau</li>';
    secondList.innerHTML += '<li>Dhal and Curried Goat</li>';
    secondList.innerHTML += '<li>Bake and Shark</li>';
    secondList.innerHTML += '<li>Macaroni Pie and Stewed Chicken</li>';
    secondList.innerHTML += '<li>Roasted Lobster</li>';
    secondList.innerHTML += '<li>Lamb Burger</li>';
    main.appendChild(secondList);
    menuInfo.appendChild(main);
    const desserts = document.createElement('DIV');
    desserts.classList.add('food');
    const thirdList = document.createElement('UL');
    thirdList.innerHTML = '<li>Desserts</li>';
    thirdList.innerHTML += '<li>Trini Christmas Cake</li>';
    thirdList.innerHTML += '<li>Carrot Cake</li>';
    thirdList.innerHTML += '<li>Currants Roll</li>';
    thirdList.innerHTML += '<li>Coconut Ice Cream</li>';
    thirdList.innerHTML += '<li>Soursop Ice Cream</li>';
    thirdList.innerHTML += '<li>Trinidad Paime</li>';
    thirdList.innerHTML += '<li>Trinidad Buns</li>';
    desserts.appendChild(thirdList);
    menuInfo.appendChild(desserts);
    content.appendChild(menuInfo);
  }
  return { render };
})();