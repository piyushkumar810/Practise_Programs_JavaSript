
// ------------------------concept of rest operator
// const arr1=[1,2,3];
// const arr2=[4,5,6,...arr1];

// console.log(arr2);

// function run(a,b,c,...d) 


// ---------------------we can also use Rest operator inside function
function run(...d)
{
    // console.log(a);
    // console.log(b);
    // console.log(c);
    d.forEach((num)=>{
        console.log(num);
    })
}

run("sonu", "piyush",1,4,7,9,4)