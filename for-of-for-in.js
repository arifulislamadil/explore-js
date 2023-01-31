let student = [
    {id: 1,name: "Arif", num:233434, cls:"nine", address:"Dhaka"},
    {id: 2,name: "Arif", num:233434, cls:"nine", address:"Dhaka"},
    {id: 3,name: "Arif", num:233434, cls:"nine", address:"Dhaka"},
    {id: 4,name: "Arif", num:233434, cls:"nine", address:"Dhaka"},
];

for(const stu of student){
    console.log(stu)
}

for(const stu in student){
    console.log(stu.values)
}


const color = "black";
switch(color){
    case "red":
        console.log("you are red");
        break;
    case "blue":
        console.log("You are blue");
        break;
    case "green":
        console.log("You are green");
        break;
    case "orange":
        console.log("you are orange");
        break;
    default:
        console.log("No color match")
}