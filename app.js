const numbers = [2, 4, 5, 9, 3];
const names = {
    name: "arif",
    age: 22,
    pro: "web developer"
}



for (const name in names) {
    const value = names[name]
    console.log(value);
}


let x = 3;
x++;
console.log(x);

const price1 = 2;
const price2 = "2";
if (price1 == price2) {
    console.log("same");
}
const num = "2";
const numToSt = parseInt(num)
console.log(typeof (numToSt));


const gpa = "2.4";
const getNumber = parseFloat(gpa);
console.log(getNumber);
console.log(typeof (getNumber));

const modu = 3;
const toModu = modu % 2;
console.log(toModu);


const sibList = ["arif", "sharif", "alamin", "ilias", "noralam", "moni"];
sibList[5] = "farjana";
console.log(sibList.indexOf("sharif"))


const nums = [2, 4, 5, 8]
const getPop = nums.pop();
console.log(getPop);
console.log(nums)
const useMethod = nums.unshift(9)
console.log(nums)


const num3 = 10;
const num4 = 10;
if (num3 !== num4) {
    console.log("not equal")
} else {
    console.log("it's equal")
}

const num5 = 5;
const num6 = 2;
console.log(num5 >= num6)


const money = 20;
const danish = 50;
const butter = 40;
const tost = 20;

if (money >= danish) {
    console.log("i can eat danish")
} else if (money >= butter) {
    console.log("i can eat butter")
} else if (money >= tost) {
    console.log("i can eat tost")
} else {
    console.log("i only can drink tea")
}

const mark = 4;

if (mark >= 80) {
    console.log("A+")
} else if (mark >= 70) {
    console.log("A")
} else if (mark >= 60) {
    console.log("A-")
} else if (mark >= 50) {
    console.log("B")
} else if (mark >= 40) {
    console.log("C")
} else if (mark >= 33) {
    console.log("D")
} else {
    console.log("F")
}


const n1 = 79;
const n2 = 885;
const n3 = 1883;

if (n1 > n2 && n1 > n3) {
    console.log("N1 bigger")
} else if (n2 > n1 && n2 > n3) {
    console.log("N2 Bigger")
} else {
    console.log("N3 bigger")
}