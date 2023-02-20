// document.getElementById("btn-change").addEventListener("click",function(){
//     const colors = document.getElementsByClassName("p-text");
//     for(const color of colors){
//         color.style.border = "2px solid blue"
//     }
// });

const btnChange=()=>{
    const colors = document.getElementsByClassName("p-text");
    for(const color of colors){
        color.style.backgroundColor = "gray"
    }
}