const str="hello, this is piyush here";
const str2="one, two, three, four, five";
const str1="hello123world456javascript";

// splitting every character
console.log(str.split(''));

console.log(str.split(" "));
// getting length
let hold=str.split(" ");
console.log(hold.length);

// seprated through comma and limited number of splits
console.log(str.split(",", 2));

// seprated through regular expression 
console.log(str1.split(/\d+/));

// splitting without specifying  a separator
console.log(str.split());

console.log(str2.split(",", 3));


// want to count the length 
let storedStr=str.split(",");
console.log(storedStr.length);