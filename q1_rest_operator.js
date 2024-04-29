// ----------------------------------------normal question

// function getlength(a,b)
// {
// }
// console.log(getlength.length);

// ------you will get output 2--> (js mai kabhi v function ka length property ko access karte hai tho in result number of parameters ka count dekhne ko milta hai)


// -----------------------------------------interview question

function getData1(a,b, ... rest){
}
function getData2(a,b=0,c){
}

console.log(getData1.length);
// output = 2  how?
// js mai kabhi v hum rest operator ka use karki parameter ko collect karte hai tho rest operator parameter ki langth mai count nhi hote hai that's why we got length count as 2


console.log(getData2.length);
// output = 1   how?
// js mai kabhi v kisi function k parameter ko ek default value se assign kar dete hai tho wo parameter optional ban jata hai and usski baad jitne v parameter hai wo saare parameter v optional ban jata hai that's why we got the length count as 1


// -----------------------------THANK YOU-------------------------------