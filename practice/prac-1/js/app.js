// Feet To Inch 
const feetToInch=(f)=>{
    const inch = f*12;
    document.getElementById("feet").innerText=inch;
}

// Cm To Meter 
const centimeterToMeter=(c)=>{
    const meter = c/100;
    document.getElementById("centimeter").innerText=meter;
}


// Paper Count 
const paperRequirement=()=>{
        const firstBookPaper = 100;
        const secondBookPaper = 200;
        const thirdBookPaper = 300;
        const firstBook = document.getElementById("input-field1");
        const firstBook1 = firstBook.value;
        const secondBook = document.getElementById("input-field2");
        const secondBook2 = secondBook.value;
        const thirdBook = document.getElementById("input-field3");
        const thirdBook3 = thirdBook.value;
        const firstBookTotalPaper = firstBook1 * firstBookPaper;
        const secondBookTotalPaper = secondBook2 * secondBookPaper;
        const thirdBookTotalPaper = thirdBook3 * thirdBookPaper;
        const totalPaper = firstBookTotalPaper + secondBookTotalPaper + thirdBookTotalPaper;
        document.getElementById("paper").innerText= totalPaper;

        firstBook.value = "";
        secondBook.value = "";
        thirdBook.value = "";
}

// longest Name From Friend List 
const friends = ["arif", "adnan","alvi","mahmudul","kab", "lovelu"];

const longestFriend = (friends)=>{
    const longestFriendName = friends[0];
    for(const friend of friends){
        if(longestFriendName.lenght > friend.lenght){
            longestFriendName = friend;
        }
    }
    return longestFriendName;
}
console.log(longestFriend(friends));


const numbers = [2,3,5,1,9,-8,6,5,99]
const onlyPrositive=(numbers)=>{
    const num = []
    for(const number of numbers){
        if(number > 0){
           num.push(number)
        }else{
            break;
        }
    }
    return num;
}
console.log(onlyPrositive(numbers))


const arr = ["arif", "adnan","alvi","mahmudul","kab", "lovelu"];
const longestName =(arr)=>{
    let lgth = 0;
    let longest;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
         lgth = arr[i].length;
          longest = arr[i];
        }
      }
    return longest;
}
  console.log(longestName(arr));