// write a javaScript program to get extension 
// of a filename

const getFileExtension=(str)=>str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('java.lang.package.fs'));

console.log(getFileExtension('name.txt'));
