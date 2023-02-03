const names = ["abul", "babul", "kabul", "cabul", "dabul", "abul", "gabul", "babul"];

const store = []
for(let i = 0; i<names.length;i++){
    let getName = names[i];
    if(store.indexOf(getName)==-1){
        store.push(getName)
    }
}
console.log(store)
// .................................. 
let store= []
for(const name of names){
    if(store.indexOf(name) ==-1){
        store.push(name)
    }
}
console.log(store)

// ..................................... 
const myfunc = (names) => {
    let store = []
    for (const name of names) {
        if (store.indexOf(name) == -1) {
            store.push(name)
        }
    }
    return store;
}
console.log(myfunc(names))