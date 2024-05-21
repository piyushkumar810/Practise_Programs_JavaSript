// write a java script program to check two number 
// and return true one of the number is 100
// or if the sum of the number is 100.


// -----------------------type 1

console.log("----------------------type 1");

function sum(a,b)
{
    if(a===100 || b===100 || (a+b)===100)
        {
            console.log("true")
        }
    else{
            console.log("false");
        }
}

sum(100,0);
sum(0,100);

sum(50,35);
sum(0,10);

sum(50,50);
sum(20,80)


// ------------------------type 2

console.log("---------------------------type 2");

const isEqualTo100=(c,d)=> c===100 || d===100 || (c+d)===100;

console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));

console.log(isEqualTo100(10,0));
console.log(isEqualTo100(0,10));

console.log(isEqualTo100(20,80));
console.log(isEqualTo100(50,50));

