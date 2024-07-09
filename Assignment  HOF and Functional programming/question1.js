const orderList =[
    {name: "laptop", price :120000},
    {name: "mobile", price :70000},
    {name: "mobile charger", price :1500},
    {name: "laptop charger", price :10500},
]
function pricecalculator(params) {
    let totalprice = 0;
    orderList.forEach(vlaue =>{totalprice += vlaue.price});
    return totalprice;
}
console.log(pricecalculator(orderList));