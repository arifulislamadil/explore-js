const answer = confirm("Do you think cow has egg?");
if(answer == true){
    document.getElementById("p-text").innerHTML="Thank you for agree with us"
}else{
  const getValue=  prompt("what's the reason please write us");
 document.getElementById("p-text2").innerHTML=`${getValue}`;
 if(getValue == null){
    document.getElementById("p-text2").innerHTML="You should write something"
 }
}
let count = [1,2,3,4,5,6,7,8,9,10];
console.log(count.slice(0,5))

let nums = [3,4,5,9,10,33];
const name = "Bangladesh"

if(name.includes("B")){
    console.log("it's included")
}else{
    console.log("it's not included")
}