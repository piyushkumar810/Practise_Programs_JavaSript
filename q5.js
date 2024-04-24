let num=0;
setInterval(()=>{
    console.log(num++);
},100)

// ? question is ?
// if we run this code on browser number ek ek kar ke increase hota rahega never stop , but but but
// if we change the page/ change the tab of browser then the timer will stop or not ? 
// ans => timer will stop , js mai jo timer hote hai jaise(setInterval and setTimeOut) agar hum apni tab ko change kar deti hai tho timer suspend ho jati hai
