let developers = [];

function createLabel(name, htmlFor) {
    const label = document.createElement('label');
    label.innerText = name;
    label.htmlFor = htmlFor;
    return label;
}

function createInput(type = 'text', name = '', id = '', placeholder = '') {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.id = id;
    input.placeholder = placeholder;
    return input;
}

function createRadioOption(name, id, labelText) {
    const container = document.createElement('div');
    const input = createInput('radio', name, id);
    input.value = labelText;
    const label = createLabel(labelText, id);
    container.append(input, label);
    return container;
}

let idRows = 0;
const addTech = document.querySelector('#addTech');
const ulCadastros = document.querySelector('#devCadastros');

addTech.addEventListener('click', () => {
    idRows++;

    const li = document.createElement('li');
    li.id = `tech-${idRows}`;

    const label = createLabel('Tecnologia: ', `tech-${idRows}`);
    const input = createInput('text', `tech-name`, `tech-${idRows}`, 'Digite a tecnologia');

    const experienceContainer = document.createElement('div');
    experienceContainer.append(
        createRadioOption(`exp-${idRows}`, `exp-${idRows}-1`, '0-2 anos'),
        createRadioOption(`exp-${idRows}`, `exp-${idRows}-2`, '3-4 anos'),
        createRadioOption(`exp-${idRows}`, `exp-${idRows}-3`, '5 ou + anos')
    );

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.innerText = 'Remover';
    removeBtn.addEventListener('click', () => li.remove());

    li.append(label, input, experienceContainer, removeBtn);
    ulCadastros.append(li);
});

const form = document.querySelector('#devForm');
form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    const fullnameInput = document.querySelector('#nome');
    const inputRows = document.querySelectorAll('#devCadastros li');

    let technologies = [];

    inputRows.forEach(function (li) {
        const techName = li.querySelector('input[name="tech-name"]').value;
        const techExp = li.querySelector('input[type="radio"]:checked');

        if (techName && techExp) {
            technologies.push({ name: techName, exp: techExp.value });
        }
    });

    const newDev = {
        fullname: fullnameInput.value,
        technologies: technologies
    };

    developers.push(newDev);

    alert('Dev cadastrado com sucesso!');
    console.log(developers);

    fullnameInput.value = '';
    ulCadastros.innerHTML = ''; // Limpa a lista de tecnologias
});
