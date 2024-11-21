/*function createLabel(name, htmlFor) {
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

// Variável para controle global do ID das tecnologias
let idRows = 0;

const addTech = document.querySelector('#addTech');
const ulCadastros = document.querySelector('#devCadastros');

addTech.addEventListener('click', () => {
    // Incrementa o idRows globalmente
    idRows++;
    
    // Cria um item de lista para cada tecnologia adicionada
    const li = document.createElement('li');
    li.id = `tech-${idRows}`;
    
    // Cria o rótulo e o input com IDs únicos
    const label = createLabel('Tecnologia: ', `tech-${idRows}`);
    const input = createInput('text', `tech-${idRows}`, `tech-${idRows}`, 'Digite a tecnologia');

    const inputTech1 = createInput('radio','expTech',`exp-${idRows}.1`)
    const labelTech1 = createLabel('0-2 anos',`exp-${idRows}.1`)

    const inputTech2 = createInput('radio','expTech',`exp-${idRows}.2`)
    const labelTech2 = createLabel('3-4 anos',`exp-${idRows}.2`)

    const inputTech3 = createInput('radio','expTech',`exp-${idRows}.3`)
    const labelTech3 = createLabel('5 ou + anos',`exp-${idRows}.3`)


    // Cria um botão para remover a tecnologia
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.innerText = 'Remover';
    removeBtn.addEventListener('click', () => {
        li.remove(); // Remove o elemento <li> correspondente
    });

    // Adiciona os elementos ao item de lista
    li.append(label, input,inputTech1,labelTech1,inputTech2,labelTech2,inputTech3,labelTech3, removeBtn);
    ulCadastros.append(li); // Adiciona o item à lista
});
*/

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

// Função para criar uma opção de rádio com seu label
function createRadioOption(name, id, labelText) {
    const container = document.createElement('div');
    container.className = 'radio-option'; // Classe para estilização

    const input = createInput('radio', name, id);
    const label = createLabel(labelText, id);

    container.append(input, label);
    return container;
}

// Variável para controle global do ID das tecnologias
let idRows = 0;

const addTech = document.querySelector('#addTech');
const ulCadastros = document.querySelector('#devCadastros');

addTech.addEventListener('click', () => {
    // Incrementa o idRows globalmente
    idRows++;
    
    // Cria um item de lista para cada tecnologia adicionada
    const li = document.createElement('li');
    li.id = `tech-${idRows}`;
    li.className = 'tech-item'; // Classe para estilização

    // Cria o rótulo e o input com IDs únicos
    const label = createLabel('Tecnologia: ', `tech-${idRows}`);
    const input = createInput('text', `tech-${idRows}`, `tech-${idRows}`, 'Digite a tecnologia');

    // Contêiner para as opções de experiência
    const experienceContainer = document.createElement('fieldset');
    experienceContainer.className = 'experience-container'; // Classe para estilização
    const legend = document.createElement('legend');
    legend.innerText = 'Nível de Experiência:';
    experienceContainer.appendChild(legend);

    // Adiciona as opções de rádio ao contêiner
    experienceContainer.append(
        createRadioOption('expTech', `exp-${idRows}.1`, '0-2 anos'),
        createRadioOption('expTech', `exp-${idRows}.2`, '3-4 anos'),
        createRadioOption('expTech', `exp-${idRows}.3`, '5 ou + anos')
    );

    // Cria um botão para remover a tecnologia
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'remove-btn'; // Classe para estilização
    removeBtn.innerText = 'Remover';
    removeBtn.addEventListener('click', () => {
        li.remove(); // Remove o elemento <li> correspondente
    });

    // Adiciona os elementos ao item de lista
    li.append(label, input, experienceContainer, removeBtn);
    ulCadastros.append(li); // Adiciona o item à lista
});
