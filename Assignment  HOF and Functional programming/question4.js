let expenses = [
    { amount: 100, category: "utilities" },
    { amount: 200, category: "groceries" },
    { amount: 50, category: "entertainment" }
];

let groceriesExpenses = expenses.filter(expense => expense.category === "groceries");

console.log(groceriesExpenses);
