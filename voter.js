const age = 20;
if(age < 10){
    console.log("you are child")
}else if(age < 18){
    console.log("you are young")
}else if(age < 30){
    console.log("you are enough old")
}else {
    console.log("You are really old")
}


let num = 10;
while(num<=10){
    console.log(num);
    num--;
    if(num <1){
        break;
    }
}


const timeTable =(time)=>{
    if(time<12){
        console.log("It's morning time")
    }else if(time < 15){
        console.log("It's afternoon")
    }else{
        console.log("It's night")
    }
}
const now = new Date();

const time = now.getHours();
console.log(time);

timeTable(time)


const fToC =(f)=>{
    const c=(f - 32) * 5/9;
    const inte = parseFloat(c);
    const fixInte = inte.toFixed(0)
    return fixInte;

}
console.log(fToC(76));

const gToKg=(g)=>{
    const kg = g/1000;
    return kg;
}
console.log('Total Kg1:',gToKg(2000));
console.log('Total Kg2:',gToKg(3000));


const evenAndOdd=(x)=>{
    if(x % 2 == 0){
        console.log("Even Number")
    }else{
        console.log("Odd Number")
    }
}
evenAndOdd(70)
evenAndOdd(71)


const leapYear = (year)=>{
    if(year % 4 == 0){
        console.log("leap Year")
    }else{
        console.log("It's not Leap year")
    }
}
leapYear(2000);