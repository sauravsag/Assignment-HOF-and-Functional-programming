let expenses = [
    { amount: 100, category: "utilities" },
    { amount: 200, category: "groceries" },
    { amount: 50, category: "entertainment" }
];
let taxRate = 0.10;
let expensesWithTax = expenses.map(expense => {
    let tax = expense.amount * taxRate;
    return {
        ...expense,
        tax: tax
    };
});
console.log(expensesWithTax);
