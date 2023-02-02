// const tallest = [150,170,180,144];

// const tallestPersonn = (h)=>{
//     let store = []
//     for(const s of h){
//         store.push(s)
//     }
//     return Math.max(...store);
// }
// console.log(tallestPersonn(tallest));

const tallest = [150,170,180,144];
const tallestPersonn = (h)=>{
    let store = h[0];
    for(const s of h){
        if(s<store){
            store = s;
        }
    }
    return store;
}
console.log(tallestPersonn(tallest));