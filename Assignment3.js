//difference between = & ===
let x = 10;
const name = x ;
console.log(name);

let y = 12 ;
let z = 12 ;
console.log(y===z);

let m = "Hello";
let n = 15;
console.log(m===n);

// Pre-increment & Post-Increment
let a = 10 //12
let b = ++a //12
let c = ++b //13
let d = ++a + ++c //25
console.log(a,b,c,d);

let a1 = 10 //10 + 1 =11
let b1 = a1++ //10 + 1 = 11
let c1 = b1++ //10+1+1=12
let d1 = c1++ + c1++ //11 + 10 = 21
console.log(a1,b1,c1,d1);

//Modulus Operator
let i = 10 
let j = 3
let k = (i%j)
console.log(k)

//AND OPERATOR
let value1 = 50
let value2 = 100
console.log(value1 > 20 && value2 > 20);

//Solve this
(5 >= 4 || !(5 == 5)) //(true || !(true)) --> (true)||(false) -->(true)

//Concatenation
let str1 = "Hello"
let str2 = "World"
console.log(str1 + str2);
//Template String
let yourname = "Sreejith";
let context = `Hello,${yourname}!`
console.log(context);

//implicit type conversion

str3 = "15"
num12 = 15
merge = str3+num12
console.log(merge);

//string + num

str10 = "10"
num10 = 10 
result = str10+num10
console.log(result);
console.log(typeof result);

// string + boolean

word = "Is it ?"
Boolean1 = true ;
result1 = word+Boolean1
console.log(result1);
console.log(typeof result1); //anything by string is string .

//explicit with Number()function

let ab ="12345"
let cd = []
let ef = true
let num20 = Number(ab)
let num25 = Number(cd)
let num30 = Number(ef)
console.log(num20);
console.log(num25);
console.log(num30);
console.log(typeof num20);
console.log(typeof num25);
console.log(typeof num30);

//Boolean conversion rules
console.log(Boolean(0));
console.log(Boolean(""));
//In Boolean 0 is considered as false , 1 is considered as True

//if-else
let assignedvalue = 0
if (assignedvalue > 0) {
    console.log("The Given Value is Positive");
}else if(assignedvalue < 0)
{
    console.log("The Given Value is Negative");
}else
{
    console.log("The Given value is Zero");
}
//Switch Statement
let day = 5
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        break;
}

//Ternary Operator
// Condition ? if true : if False;

// let age = 15;
let age = 18;
console.log( age >= 18 ? "Adult" : "Minor" );

//print first 10 even numbers 

let s = 2;
for(s=1;s<10;s++){
    console.log(s*2)
}

//while & do-While

let t = 1
while (t<=20) {
    console.log(t);
    t++;
}

let r = 1
do {
    console.log(r);
    r++;
} while (r<=20);

//default parameters

function addition(a,b,c) {
    console.log(10,20);
}
addition(a,b)

//var , let , const

// var = global scope
// let & const = Block Scope


// var : redeclared & reassigned outside the block :

var a10 = 15
console.log(a10);
var a10 = 25
console.log(a10);
/////////////////
var v = 12
if (true) {
    console.log(v);
}
console.log(v);
////////////////////

// let:

let xyz = 15
console.log(xyz);
 xyz = 25
console.log(xyz);
//////////////////
let u = 12
if (true) {
    console.log(u);
}
console.log( typeof u);
//////////////////

//const:

const pi = 3.15;
// console.log(pi);
// pi = 3.14;
// console.log(pi);

// //
// const w =3.14
// if (true) {
//     console.log(w);
// }
// console.log(w);

const multiply = (a,b) => a * b;
const result30 =multiply(5*9);
console.log(result30);
multiply()
