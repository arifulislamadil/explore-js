const validation=(a,b)=>{
    if(a < 1 || typeof a !== "number" || typeof b !== "number"){
        return "please inter a valid number"
    }
    return a + b;
}
console.log(validation(-0,4))