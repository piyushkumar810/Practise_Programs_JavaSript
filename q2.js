// find out the bug

const score=[100,330,2,70]
// using js inbult function sort
score.sort();
console.log(score);
// output = [100,2,330,70] --> arranged in unaccepted way because, js ka jo in-bult function sort hai woo number ko string mai convert karne k baad compair karta hai
// like ["100", "2", "330", "70"] (now it will compair like 100 ka 1 and 330 ka 3, is 1<3 true 100 is printed ... then 330 ka 3 and 2, is 3<2 false 2 is printed)


// -----------------------------to solve tish bug
const score1=[100,330,2,70]
score1.sort((a,b)=>a-b);
console.log(score1);
// output --> [ 2, 70, 100, 330 ] (got correct output)