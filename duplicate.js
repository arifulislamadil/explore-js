const names = ["abul", "babul", "kabul", "cabul", "dabul", "abul", "gabul", "babul"];

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