// W.A.P in js to replace every character in a give string  
// with the character following it in the alphabet

const moveCharForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(moveCharForward('abcd')); 