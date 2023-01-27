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


const sibList = ["arif", "sharif", "alamin", "ilias","noralam", "moni"];
sibList[5]="farjana"
console.log(sibList)

