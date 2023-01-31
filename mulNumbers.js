const mulNumbers=(nums)=>{
    let total= 1;
    for(let num of nums){
        total+=num;
    }
    return total;
}

const nums = [1,2,3,4,5]
console.log(mulNumbers(nums))


// 1*1 = 1;
// 1*2 = 2;
// 2*3 = 6;
// 6*4 = 24;
// 24 * 5 =120

let total = 1;
for(let i = 5; i >= 1; i--){
   total *=i; 
   if(i<1){
    break;
}
}
console.log(total);


function print(a, b, c){
  return a+2;
  return a*b;
  return b*c+a;
}
console.log(print(1,2,3))

const num1 = [2,3,4,5,6]
const num2= [7,8,9]
const totalNum = num1+num2;
console.log(totalNum);