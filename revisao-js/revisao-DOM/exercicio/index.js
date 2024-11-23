let developers = JSON.parse(localStorage.getItem('developers')) || [];

// Função para salvar no localStorage
function saveToLocalStorage() {
    localStorage.setItem('developers', JSON.stringify(developers));
}

// Função para criar um rótulo (label)
function createLabel(name, htmlFor) {
    const label = document.createElement('label');
    label.innerText = name;
    label.htmlFor = htmlFor;
    return label;
}

// Função para criar um campo de entrada (input)
function createInput(type = 'text', name = '', id = '', placeholder = '') {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.id = id;
    input.placeholder = placeholder;
    return input;
}

// Função para criar uma opção de botão de rádio
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

// Adiciona uma nova tecnologia ao formulário
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

// Função para lidar com o envio do formulário
const form = document.querySelector('#devForm');
form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    const fullnameInput = document.querySelector('#nome');
    const inputRows = document.querySelectorAll('#devCadastros li');

    let technologies = [];
    let hasError = false;

    inputRows.forEach(function (li) {
        const techName = li.querySelector('input[name="tech-name"]').value;
        const techExp = li.querySelector('input[type="radio"]:checked');

        if (!techName || !techExp) {
            hasError = true;
        } else {
            technologies.push({ name: techName, exp: techExp.value });
        }
    });

    if (!fullnameInput.value || hasError) {
        alert('Preencha todos os campos corretamente.');
        return;
    }

    const newDev = {
        fullname: fullnameInput.value,
        technologies: technologies
    };

    developers.push(newDev);
    saveToLocalStorage();

    alert('Dev cadastrado com sucesso!');
    fullnameInput.value = '';
    ulCadastros.innerHTML = ''; // Limpa a lista de tecnologias
});

// Função para limpar todos os dados
const clearDataBtn = document.querySelector('#clearData');
clearDataBtn.addEventListener('click', () => {
    developers = [];
    saveToLocalStorage();
    alert('Todos os dados foram apagados!');
});

// Função para exibir os dados salvos
const showDataBtn = document.querySelector('#showData');
const dataDisplay = document.querySelector('#dataDisplay');

showDataBtn.addEventListener('click', () => {
    dataDisplay.innerHTML = '';

    if (developers.length === 0) {
        dataDisplay.innerHTML = '<p>Nenhum dado cadastrado.</p>';
    } else {
        const ul = document.createElement('ul');

        developers.forEach((dev, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Desenvolvedor ${index + 1}: ${dev.fullname}</strong>
                <ul>
                    ${dev.technologies
                        .map(
                            tech =>
                                `<li>Tecnologia: ${tech.name} - Experiência: ${tech.exp}</li>`
                        )
                        .join('')}
                </ul>
            `;
            ul.appendChild(li);
        });

        dataDisplay.appendChild(ul);
    }

    dataDisplay.classList.toggle('hidden');
});
