// const addOddNumber=(nums)=>{
// let totalOdd = 0;
// for(let num of nums){
//     if(num % 2!==0){
//         totalOdd+=num;
//     }
// }
// return totalOdd;
// }

// const numbers = [2,3,3,7,8,2];
// console.log(addOddNumber(numbers))


const addOddNumber=(nums)=>{
let totalOdd = [];
for(let num of nums){
    if(num % 2!==0){
        totalOdd.push(num)
    }
}
return totalOdd;
}

const numbers = [2,3,3,7,8,2];
console.log(addOddNumber(numbers))


