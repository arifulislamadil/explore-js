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