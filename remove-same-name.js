const names = ["arif", "sharif", "alam", "alamin", "arif", "ashik", "alam"];

let truePeople = []
for(let i = 0 ; i <names.length; i++){
    const name = names[i];
    if(truePeople.indexOf(name) ==-1){
        truePeople.push(name)
    } 
}

console.log(truePeople)


let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum)
