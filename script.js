document.addEventListener('DOMContentLoaded', () => {
    const addExpenseBtn = document.getElementById('addExpenseBtn');
    const expenseNameInput = document.getElementById('expenseName');
    const expenseAmountInput = document.getElementById('expenseAmount');
    const expenseList = document.getElementById('expenseList');
    const totalAmountSpan = document.getElementById('totalAmount');

    let totalAmount = 0;

    function updateTotalAmount(amount) {
        totalAmount += amount;
        totalAmountSpan.textContent = totalAmount.toFixed(2);
    }

    function addExpense(name, amount) {
        const li = document.createElement('li');
        li.textContent = `${name} - ₹${amount.toFixed(2)}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            expenseList.removeChild(li);
            updateTotalAmount(-amount);
        });

        li.appendChild(deleteBtn);
        expenseList.appendChild(li);
        updateTotalAmount(amount);
    }

    addExpenseBtn.addEventListener('click', () => {
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if (name === '' || isNaN(amount) || amount <= 0) {
            alert('Please enter a valid expense name and amount.');
            return;
        }

        addExpense(name, amount);

        // Clear inputs
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    });

    // Optional: Allow pressing Enter to add an expense
    expenseAmountInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addExpenseBtn.click();
        }
    });
});
