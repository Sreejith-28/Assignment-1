//Concat 

let concat1 =[1,2]
let concat2 =[3,4]
let concat3 =[5,6,7]
let concatVal = concat1.concat(concat2).concat(concat3)
console.log(concatVal);

//Slice Method

let slice1 = [10,20,30,40,50]
let sliceVal = slice1.slice(1,3)
console.log(sliceVal);

//Flat Method
 
let nested = [1,[2,3],[4,[5,6]]];
let flattened = nested.flat(2)
console.log(flattened);

//Fill Method

let arr =[1,2,3,4,5];
let fillVal = arr.fill("x",2,4)
console.log(fillVal);

//Sort Method

let sort =[5, 2, 9, 1, 5, 6];
let sorVal = sort.sort()
console.log(sorVal);

//Reverse Method

let arr1 = [1, 2, 3, 4, 5];
let reverseVal = arr1.reverse()
console.log(reverseVal);

//Sort(Higher Order function)

 let arr2 = [10, 5, 8, 12, 3];
 let highSort = arr2.sort((a,b)=>{
return a-b
 })
console.log(highSort);

// Sort(Lower Order Function)

let lowSort = arr2.sort((a,b)=> {
    return b-a
})
console.log(lowSort);

//Some Method

let values = [1, 3, 5, 6, 7];
let someVal = values.some((c,i,t)=>{
    return c% 2==0
})
console.log(someVal);

//Every Method 

let values1 = [2, 4, 6, 8];
let everyVal = values1.every((num)=>{
    return num % 2===0
})
console.log(everyVal);

//forEach Method

 let fruits = ["apple", "banana", "orange"];
 let foreachVal = fruits.forEach((fruit)=>{
    console.log(fruit.toUpperCase());
 })


 //Map Method

  let numbers = [1, 2, 3, 4];
  let result = numbers.map(num => num*2);
  console.log(result);
  
  //Filter Method 

  let employees =[{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 20}];
  let employeesVal = employees.filter((c,i,t)=>{
    return c.age > 25;
  })
  console.log(employeesVal);

  //Find Method 

  let employeesAge = employees.find( emp => emp.age===30);
  console.log(employeesAge);
  
  //Reduce Method

  let salaries = [{amount: 1000}, {amount: 2000}, {amount: 3000}];
  let total = salaries.reduce((sum,salary)=>sum+salary.amount,0);
  console.log(total);
  
  //CharAt

   let str = "Hello";
   let CharAt = str.charAt(2)
   console.log(CharAt);

   //CharCodeAt Method

    let str1 = "JavaScript";
    let charCodeAt = str1.charCodeAt(0)
    console.log(charCodeAt);

    //Includes Method 

    // let str1 = "JavaScript";
    let Includes = str1.includes("Java");
    console.log(Includes);
    
    //Indexoff

    // let str1 = "JavaScript";

    let IndexoffVal = str1.indexOf("a",2);
    console.log(IndexoffVal);

    //Last Indexoff 

    // let str1 = "JavaScript";

    let lastIndexOf = str1.lastIndexOf("a",5);
    console.log(lastIndexOf);
    
    // slice 

    // let str = "Hello";
    let sliceVal1 = str.slice(1,4);
    console.log(sliceVal1);
    
    
    
    
   




