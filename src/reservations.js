const reserveTab = (() => {
  const render = () => {
    const content = document.getElementById('content');
    content.firstChild.remove();
    const reservationSection = document.createElement('DIV');
    reservationSection.classList.add('info');
    reservationSection.classList.add('reserve-info');
    const reserveInfo = document.createElement('P');
    reservationSection.appendChild(reserveInfo);
    reserveInfo.textContent = 'Make a reservation:';
    const form = document.createElement('FORM');
    const firstLabel = document.createElement('LABEL');
    firstLabel.textContent = 'Enter your full name:';
    form.appendChild(firstLabel);
    const input1 = document.createElement('INPUT');
    form.appendChild(input1);
    const br1 = document.createElement('BR');

    form.appendChild(br1);
    const secondLabel = document.createElement('LABEL');
    secondLabel.textContent = 'Enter your contact number:';
    form.appendChild(secondLabel);

    const input2 = document.createElement('INPUT');
    form.appendChild(input2);
    const br2 = document.createElement('BR');

    form.appendChild(br2);
    const thirdLabel = document.createElement('LABEL');
    thirdLabel.textContent = 'Enter your desired reservation time:';
    form.appendChild(thirdLabel);

    const res = document.createElement('INPUT');
    form.appendChild(res);
    const br3 = document.createElement('BR');

    form.appendChild(br3);
    const submit = document.createElement('BUTTON');
    submit.textContent = 'Submit';
    form.appendChild(submit);
    reservationSection.appendChild(form);
    content.appendChild(reservationSection);
  };
  return { render };
})();
export default reserveTab;