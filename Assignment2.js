let cars =["Audi","Renault","Benx","Porche","Mc Claren"];
console.log(cars[0]);
console.log(cars[4]);


let fruit=["Kiwi","Strawberry","Papya","Guava","Gooseberry"];
console.log(fruit[1]);

let fruitcolor={
greenfruit:["Kiwi","Guava"],
redfruit:["Cherry","Apple"],
Yellowfruit:["Banana","Lemon"]
}
console.log(fruitcolor["greenfruit"]);
console.log(fruitcolor["redfruit"][0]);
console.log(fruitcolor["Yellowfruit"][0]);

let fruits =["Kiwi","Strawberry","Papya","Guava","Gooseberry","Cherry","Strawberry"];
console.log(fruits[fruits.length-1]);

let num10 = 10;
let num11 = ++num10;
let num12 = --num11;
let num13 = num10++;
console.log(num10); 
console.log(num11);
console.log(num12);
console.log(num13);89

let a = 5;
let b = ++a;
console.log(a);
console.log(b);

let x = 5;
let y = x++;
console.log(x);
console.log(y);

let i =5;
let j =--i;
console.log(i);
console.log(j);

let m = 5;
let n = m--;
console.log(m);
console.log(n);

let num1= 15;
let num2= 3;
const box= num1*num2;
console.log(box);

let a1 = 5 ;
let b1 = a1++;
console.log(a1,b1)

let fruitcolor1={
    Yellowfruit1:["Mango","Lemon","Banana"]
}
console.log(fruitcolor1["Yellowfruit1"][0]);

const number = 25 ;
const diviser = 5
if (number%diviser == 0) {
    console.log("25 is Divisible by 5");
}
else{
    console.log("25 isn't Divisble by 5");
}

let no= 2;
let result = no++ + ++no;
console.log(result);
