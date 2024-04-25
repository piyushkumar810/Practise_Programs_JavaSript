const obj=Object.create(null);
// yaha per hum null ka use karke ek object create kar rha hai

// js mai hum null se koi object create karte hai tho who newely created objejct empity {} hota hai
// ex:- 
//    const obj=Object.create(null);
//    console.log(obj)

// output:-  {}

const KeyToCheck='randomkey';


if(obj.hasOwnProperty(KeyToCheck)){
    // obj.hasOwnProperty :- abhi iss object mai hasOwnProperty naam ka property exist nhi karta hai
    console.log('key found');
}else{
    console.log('key not found');
}

// output for this program := obj.hasOwnProperty is not a function



// -----------------------------------------------correct code
const obj1=Object.create(null);
const KeyToCheck1='randomkey1';

// agar hami object mai kisi key ki existance check karni hai tho humai "Object.hasOwn" method ko use karna chaiya
if(Object.hasOwn(obj1,KeyToCheck1)){
    console.log('key found');
}else{
    console.log('key not found');
}

