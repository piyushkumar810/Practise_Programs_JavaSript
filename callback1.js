const callAnother=()=>{
    console.log("called function");
}

// callback function
function caller(called){
    console.log("inner function call");
    called();
    // console.log("value is"+called);
}


// caller(5)
caller(callAnother);


// setTimeout(()=>{
//     console.log("timer set");
// },3000)

