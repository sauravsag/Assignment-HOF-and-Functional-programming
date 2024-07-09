let expenses = [
    { amount: 100, category: "utilities" },
    { amount: 200, category: "groceries" },
    { amount: 50, category: "entertainment" }
];

function categorizeExpense(amount) {
    return amount > 100 ? "High Expense" : "Low Expense";
}

let categorizedExpenses = expenses.map(expense => categorizeExpense(expense.amount));

console.log(categorizedExpenses);
