const count= 100['toString'].length+1;
// yaha per hum ek number per "toString" function ko access kar rha hai and toString function ki length property ko access kar rha hai and then adding one

// we know js mai jab v hum kisi function k length property ko access karti hai tho as a result hamai parameter ka count milta hai
// toString(radix) --> tostring function ek radix parameter accept karta hai (matlab pahela se ek parameter and then + 1 ) that's why we got result 2(redix ka 1+1)

console.log(count);
