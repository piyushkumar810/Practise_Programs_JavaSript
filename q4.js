var foo="😘";
// this foo is like a global variable

function showName()
{
    foo="💕";
    // this foo is like a local variable

    return;
    function foo()
    {
    }
}

// duobt

showName();
console.log(foo);


// js mai jo function hote usske function name ko variable ki therah treat kiya ja sakta hai
//  example: -
// function show(){}
// show="js is love"
// console.log(show);

// output = js is love