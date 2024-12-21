let transactions = [];

function createTransactionContainer(id) {
    const container = document.createElement('div');
    container.classList.add('transaction');
    container.id = `transaction-${id}`;
    return container;
}

function createTransactionTitle(name) {
    const title = document.createElement('span');
    title.classList.add('transaction-title');
    title.textContent = name.trim(); // Remove espaços extras
    return title;
}

function createTransactionAmount(amount) {
    const span = document.createElement('span');
    const formater = new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    });

    const formatedAmount = formater.format(amount);

    if (amount > 0) {
        span.textContent = `${formatedAmount} C `;
        span.classList.add('credit');
    } else {
        span.textContent = `${formatedAmount} D `;
        span.classList.add('debit');
    }

    return span;
}

function createEditTransactionBtn(transaction) {
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Editar';
    editBtn.addEventListener('click', () => {
        document.querySelector('#id').value = transaction.id;
        document.querySelector('#name').value = transaction.name.trim();
        document.querySelector('#amount').value = transaction.amount;
    });

    return editBtn;
}

function createDeleteTransactionBtn(id) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' });
        deleteBtn.parentElement.remove();

        const indexToRemove = transactions.findIndex((t) => t.id === id);
        if (indexToRemove !== -1) {
            transactions.splice(indexToRemove, 1);
        }
        updateBalance();
    });

    return deleteBtn;
}

function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id);
    const title = createTransactionTitle(transaction.name);
    const amount = createTransactionAmount(transaction.amount);
    const editBtn = createEditTransactionBtn(transaction);
    const deleteBtn = createDeleteTransactionBtn(transaction.id);

    container.append(title, amount, editBtn, deleteBtn);
    document.querySelector('#transactions').append(container);
}

async function saveTransaction(ev) {
    ev.preventDefault();

    const id = document.querySelector('#id').value.trim();
    const name = document.querySelector('#name').value.trim();
    const amount = parseFloat(document.querySelector('#amount').value.trim());

    // Validação
    if (!name || isNaN(amount)) {
        console.error("Por favor, preencha os campos corretamente.");
        return;
    }

    if (id) {
        // Editar transação existente
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const transaction = await response.json();
            const indexToUpdate = transactions.findIndex((t) => t.id === Number(id));

            if (indexToUpdate !== -1) {
                transactions.splice(indexToUpdate, 1, transaction);
            }

            document.querySelector(`#transaction-${id}`).remove();
            renderTransaction(transaction);
        } else {
            console.error("Erro ao editar a transação.");
        }
    } else {
        // Criar nova transação
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            body: JSON.stringify({ name, amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const transaction = await response.json();
            transactions.push(transaction);
            renderTransaction(transaction);
        } else {
            console.error("Erro ao salvar a transação.");
        }
    }

    // Resetar o formulário e atualizar o saldo
    ev.target.reset();
    document.querySelector('#id').value = '';
    updateBalance();
}

async function fetchTransactions() {
    return await fetch('http://localhost:3000/transactions').then(res => res.json());
}

function updateBalance() {
    const balanceSpan = document.querySelector('#balance');
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    const formater = new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    });

    balanceSpan.textContent = formater.format(balance);
}

async function setup() {
    const result = await fetchTransactions();
    transactions.push(...result);
    transactions.forEach(renderTransaction);
    updateBalance();
}

document.addEventListener('DOMContentLoaded', setup);
document.querySelector('form').addEventListener('submit', saveTransaction);
