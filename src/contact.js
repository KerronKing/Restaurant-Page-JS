const contactTab = (() => {
  const render = () => {
    const content = document.getElementById('content');
    content.firstChild.remove();
    const contactSection = document.createElement('DIV');
    contactSection.classList.add('info');
    contactSection.classList.add('contact-info');
    const contactInfo = document.createElement('P');
    contactSection.appendChild(contactInfo);
    contactInfo.textContent = 'Send us a message!';
    const form = document.createElement('FORM');
    const firstLabel = document.createElement('LABEL');
    firstLabel.textContent = 'Name';
    form.appendChild(firstLabel);
    const input1 = document.createElement('INPUT');
    form.appendChild(input1);
    const br1 = document.createElement('BR');

    form.appendChild(br1);
    const secondLabel = document.createElement('LABEL');
    secondLabel.textContent = 'Email';
    form.appendChild(secondLabel);

    const input2 = document.createElement('INPUT');
    form.appendChild(input2);
    const br2 = document.createElement('BR');

    form.appendChild(br2);
    const thirdLabel = document.createElement('LABEL');
    thirdLabel.textContent = 'Message';
    form.appendChild(thirdLabel);

    const message = document.createElement('TEXTAREA');
    form.appendChild(message);
    const br3 = document.createElement('BR');

    form.appendChild(br3);
    const submit = document.createElement('BUTTON');
    submit.textContent = 'Submit';
    form.appendChild(submit);
    contactSection.appendChild(form);
    content.appendChild(contactSection);
  };
  return { render };
})();
export default contactTab;