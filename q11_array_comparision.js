console.log([43,23] > [89]);
console.log([3] > [2]);
// output:- false
//          true


// -------------------------------explanation
// jab v hum javaScript mai array ko compair karte hai using >,< operator tho js simply array ko string mai convert kar deta hai
// ("[43,23]" > "[89]")
// ("[3]" > "[2]")

// yaha per jo comparision ho rha hai woo character by character ho rha hai
// 1st compair [>[ (dono same hai)
// again       4>8 (output will be false)