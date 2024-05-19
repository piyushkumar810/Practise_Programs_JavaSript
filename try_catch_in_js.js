console.log("ths is the example if try-catch block")

try{
    let a=undefined;
    console.log(a[0]);
}catch{
    console.log("if error comes catch block will execute.");
}finally{
    console.log("finally this block will always execute.")
}


console.log("no matter what happend above if your code is under try-catch block then further statement will always execute.")
let arr=[23,56,34,];
console.log(arr[1]);
