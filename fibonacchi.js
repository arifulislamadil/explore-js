const fibo = [0,1, 2];

for(var i =2;i<=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]
}
console.log(fibo);

const num = 10;

const getMath = Math.round(Math.random(num) * 10);
console.log(getMath)

function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))