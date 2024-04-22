function showMessage(marks){
    const message=marks || "Absent";
    console.log(`Marks ${message}`);
}

showMessage(29);


showMessage(0);
// -------------------problem
// ||--> ye operator check karta hai ki agar lefthand side koi faulsi value hai 
// tho right side walla value return kar do, (js mai 0 ek faulsi value hai that's why you got result as absent)

// ------------------to resolve this bug we can use "null coellcing" oprerator (denoted by ??)
// function showMessage(marks){
//     const message=marks ?? "Absent";
//     console.log(`Marks ${message}`);
// }

// ?? --> ye check karta hai agar left hand side null, undefined hai tho he right hand side walla value print karo.


showMessage(34);

// ----------------------------THANK YOU-------------------------------