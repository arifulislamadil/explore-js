let numbers = [2,3,5,8.10,44]
for(let i =0; i<numbers.length; i++){
    console.log(numbers[i])
}

const person = [
    {name: "arif" , age: 22, pro: "web-developer"},
    {name: "shrif" , age: 20, pro: "teacher"},
    {name: "arif" , age: 28, pro: "driver"},
]
for(let i =0; i<person.length; i++){
    console.log(person[i])
}


for(const per of person){
    console.log(per.age)
}


for(let i =1; i<=10; i+=2){
    console.log(i)
}

const numbers3= [22,45,100,99,120,90,77];
for(let i = 0; i<numbers3.length; i++){
    const getItem = numbers3[i];
    if(getItem>50){
        continue;
    }
    console.log(getItem)
}

let numbers4= [22,45,100,99,120,90,77];
let i = 0;
while(i<numbers4.length){
    const item = numbers4[i]
    if(item>40){
        continue;
    }
    i++;
    console.log(item)
}



let x= 10;
while(x>= 1){
    console.log(x)
    x--;
}

