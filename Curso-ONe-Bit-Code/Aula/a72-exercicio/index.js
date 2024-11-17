let transactions = []

// Funções de criação de elementos
function createTransactionContainer(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}

function createTransactionTitle(name) {
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title
}

function createTransactionAmount(amount) {
    const span = document.createElement('span')
    span.classList.add('transaction-amount')

    const formatter = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    const formattedAmount = formatter.format(amount)

    if (amount > 0) {
        span.textContent = `${formattedAmount} C`
        span.classList.add('credit')
    } else {
        span.textContent = `${formattedAmount} D`
        span.classList.add('debit')
    }

    return span
}

function createEditTransactionBtn(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', () => {
        document.querySelector('#id').value = transaction.id
        document.querySelector('#name').value = transaction.name
        document.querySelector('#amount').value = transaction.amount
    })
    return editBtn
}

function createDeleteTransactionButton(id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Excluir'
    deleteBtn.addEventListener('click', async () => {
        try {
            await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' })
            deleteBtn.parentElement.remove()
            const indexToRemove = transactions.findIndex((t) => t.id === id)
            transactions.splice(indexToRemove, 1)
            updateBalance()
        } catch (error) {
            console.error('Erro ao excluir transação:', error)
        }
    })
    return deleteBtn
}

// Renderização das transações
function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const editBtn = createEditTransactionBtn(transaction)
    const deleteBtn = createDeleteTransactionButton(transaction.id)

    container.append(title, amount, editBtn, deleteBtn)
    document.querySelector('#transactions').append(container)
}

// Atualização do saldo
function updateBalance() {
    const balanceSpan = document.querySelector('#balance')
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)

    const formatter = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    balanceSpan.textContent = formatter.format(balance)
}

// Fetch de transações
async function fetchTransactions() {
    try {
        const response = await fetch('http://localhost:3000/transactions')
        if (!response.ok) throw new Error('Erro ao buscar transações')
        return await response.json()
    } catch (error) {
        console.error('Erro ao buscar transações:', error)
        return []
    }
}

// Salvando transação
async function saveTransaction(ev) {
    ev.preventDefault()

    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value
    const amount = parseFloat(document.querySelector('#amount').value)

    if (!name || isNaN(amount)) {
        alert('Preencha todos os campos corretamente.')
        return
    }

    try {
        if (id) {
            // Editar transação
            const response = await fetch(`http://localhost:3000/transactions/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, amount })
            })

            if (!response.ok) throw new Error('Erro ao editar transação')

            const transaction = await response.json()
            const indexToUpdate = transactions.findIndex((t) => t.id === Number(id))
            transactions.splice(indexToUpdate, 1, transaction)
            document.querySelector(`#transaction-${id}`).remove()
            renderTransaction(transaction)
        } else {
            // Criar nova transação
            const response = await fetch('http://localhost:3000/transactions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, amount })
            })

            if (!response.ok) throw new Error('Erro ao criar transação')

            const transaction = await response.json()
            transactions.push(transaction)
            renderTransaction(transaction)
        }

        ev.target.reset()
        updateBalance()
    } catch (error) {
        console.error('Erro ao salvar transação:', error)
    }
}

// Inicialização
async function setup() {
    try {
        const results = await fetchTransactions()
        transactions.push(...results)
        transactions.forEach(renderTransaction)
        updateBalance()
    } catch (error) {
        console.error('Erro ao inicializar a aplicação:', error)
    }
}

// Eventos
document.addEventListener('DOMContentLoaded', setup)
document.querySelector('form').addEventListener('submit', saveTransaction)



