var str="Hello Pepcoders"
console.log(str);

console.log(str[4]);

str[4]='Z';
console.log(str);

console.log(str.length);

//1)Slice method
var slicedStr = str.slice(3,7);
console.log(slicedStr)

//2)Substring method
var slicedStr = str.substring(0,5);
console.log(slicedStr);

//3)toUpperCase
var str='hello';
console.log(str.toUpperCase());

//toLowerCase
var str='BYE';
console.log(str.toLowerCase());

//4)Concatenation method
let firstStr="Hello";
let secondStr="World";
console.log(firstStr + secondStr);

//concat method
let concatenatedStr= firstStr.concat(secondStr,"You only live once");
console.log(concatenatedStr);

//5)Split Method
var str='Hello 123 hello 456';

var res=str.split("");
console.log(res);

var res=str.split(" ");
console.log(res);

var res=str.split("2");

//6)Trim method
var str='     Hello      World      ';
console.log(str.trim().length);