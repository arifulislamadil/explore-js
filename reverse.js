const text = 'amar shunar bangla';

const reverText = (t)=>{
    let rever = '';
    for(let i = t.length-1; i>=0; i--){
        const j = t[i];
        rever+=j 
    }
    return rever;
}

console.log(reverText(text))