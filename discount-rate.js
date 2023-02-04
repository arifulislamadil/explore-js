const discount=(tShirt)=>{
    const lessThenOrEqual100 = 10;
    const moreThen100LessThen200OrEqual200 = 9;
    const moreThen200LessThen300OrEqual300 = 7;
    const moreThen300 = 5;
    if(tShirt < 1 || isNaN(tShirt)==true){
        return `please input a valid number "${tShirt}" not a valid number`;    
    }
    else if(tShirt <=100){
        const totalTshirtPrice = lessThenOrEqual100 * tShirt;
        return totalTshirtPrice;
    }else if(tShirt > 100 && tShirt <=200){
        const first100Rate = 100 * lessThenOrEqual100;
        const restTshirtPrice = tShirt - 100;
        const second100Rate = restTshirtPrice * moreThen100LessThen200OrEqual200;
        const totalRate = first100Rate + second100Rate;
        return totalRate;
    }else if(tShirt > 200 && tShirt<=300){
        const first100Rate = 100 * lessThenOrEqual100;
        const secondTotal = 100 * moreThen100LessThen200OrEqual200;
        const third100Remaining = tShirt - 200;
        const thirdTotal = third100Remaining * moreThen200LessThen300OrEqual300;
        const totalForMoreThen200OrLessThen300 = first100Rate+secondTotal + thirdTotal;
        return totalForMoreThen200OrLessThen300;
    }else if(tShirt > 300){
        const first100Rate = 100 * lessThenOrEqual100;
        const secondTotal = 100 * moreThen100LessThen200OrEqual200;
        const thirdTotal = 100 * moreThen200LessThen300OrEqual300;
        const moreThen300Remaining = tShirt - 300;
        const moreThen300Rate = moreThen300Remaining * moreThen300;
        const moreThen300TotalRate = first100Rate + secondTotal + thirdTotal + moreThen300Rate;
        return moreThen300TotalRate;
    }

}
const shirt = "hh";
console.log(discount(shirt))