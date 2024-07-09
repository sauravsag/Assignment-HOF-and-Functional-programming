let expenses = [
    { amount: 100, category: "utilities" },
    { amount: 200, category: "groceries" },
    { amount: 50, category: "entertainment" }
];

let totalAmount = expenses.reduce((total, expense) => total += expense.amount, 0);

console.log(totalAmount);
