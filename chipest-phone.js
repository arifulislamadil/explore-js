const phones = [
    {name: "apple", price: 70, color: "red", quantity: 2},
    {name: "samsung", price: 50, color: "black", quantity: 5},
    {name: "lenovo", price: 30, color: "green", quantity: 8},
    {name: "Oppo", price: 40, color: "orange", quantity: 10},
]

// let cheapPhone = phones[0]
// for(let i = 0; i<phones.length; i++){
//     const phone = phones[i]
//    if(phone.price < cheapPhone.price ){
//     cheapPhone = phone;
//    }
// }
// console.log(cheapPhone)
// ......................................................... 
// let totalShoppingAmount = 0;
// for(let i = 0; i<phones.length; i++){
//     const phone = phones[i];
//     totalShoppingAmount+=phone.price
// }
// console.log(totalShoppingAmount)

// ........................................................

// function totalAmount(phones){
//     let totalShoppingAmount = 0;
//     for(let i = 0; i<phones.length; i++){
//         const phone = phones[i];
//         totalShoppingAmount+=phone.price
//     }
//     return totalShoppingAmount;
// }
// console.log(totalAmount(phones))
// ...................................................................
function totalAmount(phones){
    let totalShoppingAmount = 0;
    for(const phone of phones){
        totalShoppingAmount+=phone.price * phone.quantity;
    }
    return totalShoppingAmount;
}
console.log(totalAmount(phones))