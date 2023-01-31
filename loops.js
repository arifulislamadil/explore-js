// let counts = [1,2,3,4,5,6,7,8,9,10];

// const totalNum = (nums)=>{
//     let total= 1;
//     for(let num of nums){
        
//     }
//     return total;
// }
// console.log(totalNum(counts));



let counts = [1,2,3,4,5,6,7,8,9,10,55];
const totalNum = (nums)=>{
        let total= 0;
    for(let num of nums){
        total+=num;
    }
    if(total < 60){
        total+=10;
    }else{
        console.log(total)
        total+=-50
    }
    return total; 
}
console.log(totalNum(counts));