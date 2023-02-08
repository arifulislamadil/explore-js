const numbers = [2,4,5,9,3];
const names ={
    name:"arif", 
    age: 22,
    pro: "web developer"
}


for(const name in names){
    const value = names[name]
 console.log(value);
}


let x = 3;
x++;
console.log(x);

const price1= 2;
const price2 = "2";
if(price1==price2){
    console.log("same");
}
const num = "2";
const numToSt = parseInt(num)
console.log(typeof(numToSt));


const gpa = "2.4";
const getNumber = parseFloat(gpa);
console.log(getNumber);
console.log(typeof(getNumber));

const modu = 3;
const toModu = modu % 2;
console.log(toModu);

// Addition 1 to 5

let total = 0;
for(let i = 0; i<=5; i++){
    total+=i;
}
console.log(total);


// Decrease the value
let sum = 0;
for(let i = 5; i>=1;i--){
    sum+=i;
}
console.log(sum);


function sum(i){
    if(i==1){
        return 1;
    }
    return i+(i-1)
}
const result = 5;
console.log(sum(result));


//factorial 
let factorial = 1;
for(let i=5; i>=1; i--){
    factorial*=i;
}
console.log(factorial);

// factorial 

function factorial(i){
    if(i == 1){
        return 1;
    }
    return i*(factorial(i-1))
}
console.log(factorial(5))

// object

const student ={
    name:"Ariful Islam",
    id:121,
    address:"movie cinema",
    isSingle: true,
    friends:["Api","Razaa","salman"],
    car:{
        name:"tesla",
        price:223434,
        modal: 2011,
    },
    fac: function(){
        console.log("hello I'm from function");
    },

}
// console.log(student.address);
console.log(student.address);
student.fac();



// find product depending on input search 
const products = [
    {id: 1,name: "phone of samsung brand", price: 1200},
    {id: 2,name: "laptop apple brand", price: 3200},
    {id: 3,name: "watch best watch in 2000", price: 100},
    {id: 4,name: "bag top Brand", price: 200},
]

function matchProducts(products,search){
    const storeProduct = [];
    for(const product of products){
            // if(product.price>200){
            //     storeProduct.push(product)
            // }
           if(product.name.toLowerCase().includes(search.toLowerCase())){
            storeProduct.push(product)
           }
    }
    return storeProduct
}
console.log(matchProducts(products, "brand"));


/* function matchProducts(products,search){
    for(const product of products){
        if(product.price < 200){
            console.log(product);
        }
    }
}
matchProducts(products); */
//filter 
/* const product = products.find(product=>product>200)
console.log(product); */
//Traditional for loop
// for(let i = 0; i<products.length; i++){
//     const product = products[i]
//     console.log(product);
// }

//for loop of 
// for(let product of products){
//     console.log(product);
// }

//Map on loop
// {
//     products.map(product=>console.log(product))
// }


const num2 = "10.2";
console.log(parseInt(num2));
console.log(typeof num2);



