const name1 = ()=>{
    console.log("I'm first man")
}

const name2 = ()=>{
    name1()
    console.log("I'm second man")
}

name2 ()