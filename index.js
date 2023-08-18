//!SECTION 1st
/*
A. Q + A:
    1. The only way assign a variable is through the equal operator (=). This allows us to assign a value to the given variable.ex let x= 10. This assigns the variable with the value of 10
    2. We can change the value of a variable by using the (=) operator with a const declaration so that the value of the variable is the same throughout the script.
    3. With the existing variable, you can use the = operator to have the new variable equal to the old one. Ex. Let x = 10; let x = newVariable;
    4.  Declare:
            This is to call out and create a new variable, it doesn't necessarily need to include a value. The declared variable can also be called back.
        Assign:
            This allows us to give the variable that we are working with a variation of data types such as; number, string, boolean, object, array, null, undefined, symbol, function
        Define: Reassigning the value that we can later callback and assign in the code.
    5. Pseudo coding is how we can write our code prior to writing the actual lines into the program. This allows us to write out our intentions for what we want the operator and assignments to do. It allows us to break down each step of what will happen in our program.
    6. Before we even begin writing our code, we should constantly be thinking about what is being asked, what operators are needed to proceed with the steps. This allows us to break down clearly what steps we need to take. Working smarter not harder. 
B. Strings:
    let firstVariable =;
    let firstVariable ="Hello World";
    let firstVariable = "20";
    let secondVariable = firstVariable;
    let secondVariable = "Goodbye World";
    firstVariable = "Goodbye World";
    let myName = "Joe Chang"
    console.log("Hello, my name is (myName)");
C. Booleans: ALL PRINT TRUE
    console.log(a != b)
    console.log(a != d);
    console.log('Kevin' === 'Kevin');
    console.log(true || false);
    console.log(false || false || false || false || false || true);
    console.log(e === 'Kevin');
    console.log(a <= b <=c);
    console.log(a <= b < d);
    console.log(48 == '48');
D. The Farm:
    let animal = "";
    if (animal === "cow"){
    console.log("mooooo");
    } else {
    console.log("Hey! You're not a cow.");
    }
E. Driver's Ed:
    let age= "19"
    if (age >=16){
    console.log("Here are the keys!");
    } else {
    console.log("Sorry, you're too young.");
    }*/

//!SECTION 2nd
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  // 2. Write a loop that will print out all the numbers from 10 up to and including 400
  for (let i = 10; i <= 400; i++) {
    console.log(i);
  }
  // 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
  for (let i = 12; i <= 4000; i += 3) {
    console.log(i);
  }
  
  
  // 1. Print out the numbers that are within the range of 1 - 100
  // 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i + " <-- is an even number");
    } else {
      console.log(i);
    }
  }
  
  // Find a number and check divisible 
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("I found a " + i + ". It's divisible by both 3 and 5.");
    } else if (i % 3 === 0) {
      console.log("I found a " + i + ". Three is a crowd.");
    } else if (i % 5 === 0) {
      console.log("I found a " + i + ". High five!");
    } else {
      console.log("I found a " + i + ".");
    }
  }
  
  
  // Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
  // Check your work! Your bank account should have $55 in it.
  let bank_account_plus = 0;
  
  for (let i = 1; i <= 10; i++) {
    bank_account_plus += i;
  }
  
  console.log("Bank account balance: $" + bank_account_plus);
  
  // 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
  // Check your work! Your bank_account should have $10, 100 in it.
  let bank_account_plusBy2 = 0;
  
  for (let i = 1; i <= 100; i++) {
    bank_account_plusBy2 += i * 2;
  }
  
  console.log("Bank account balance: $" + bank_account_plusBy2);
  

//!SECTION 3rd

//ANCHOR - A
//1. Things in array are called elements.
//2. Yes it gurantees that the elements will be in-order.
//3.  A real life example would be a carton of eggs.

//ANCHOR - B

const quotes = ["It is never too late to be what you might have been." , "Love your family, work super hard, live your passion." , "Opportunities don't happen, you create them."];

//ANCHOR - C

const randomThings = [1 , 10 , "Hello" , true];
//1. To acces the first thing in the array you would do-

randomThings[0]


//2. 

randomThings[2] = "World"


//3. 

console.log(randomThings);

//ANCHOR - D

const ourClass = ["Salty" , "Zoom" , "Sardine" , "Slack", "Github"];

//1.To access the 3rd element you would write-

ourClass[2];

//2.

ourClass[ourClass.length - 1] = "Octocat"

//3.

ourClass.push("Cloud City");

//ANCHOR - E

const myArray = [ 5, 10 , 500 ,20 ];

//1.

myArray.push("Aagon" , "Hi");

//2.

myArray.shift();

//3.

myArray.unshift("Bob Marley");

//4.

myArray.pop();

//5.

myArray.reverse();
//It only seemed to work when i removed protoype and it did return a reversed array. And yes we mutated since the orignal array changed.

//ANCHOR - F
let number = 10 ;
if(number < 100){
    console.log("little number")
}
else{
    console.log("big number");
}

//ANCHOR - G

if(number < 5){
console.log("little number");
}else if(number > 10){
    console.log("big number");
}else{
    console.log("monkey")
}

//ANCHOR - H

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshamallow peeps"
];

const thomsCloset = [
[
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up"
],[
   "grey jeans" ,
   "jeans" ,
   "Pjs"
],[
    "wool mittens",
    "wool scarf",
    "raybans",
]
];


//1.

console.log("Kristyn is rocking that" , kristynsCloset[2] , "today");

//2.

kristynsCloset.splice(6, 0, "raybans");


//3.

kristynsCloset[5] = "stained knit hat";

//4.

thomsCloset[0][0];

//5.

thomsCloset[1][1];

//6.

thomsCloset[2][2];

//7.

console.log(`Thomas is looking fierce in a` , thomsCloset[0][0], `,` , thomsCloset[1][1] , `and` , thomsCloset[2][2] );

//8.

thomsCloset[1][2] = "Footie Pajamas";




//!SECTION OBJECTS


//ANCHOR - A
user = {
    name : "simo",
    email : "simo@gmail.com",
    age : 12,
    purchased : [

    ]
};

//ANCHOR - B
//1. 

user.email = "newsimo@gmail.com";

//2.

user.age++;

//ANCHOR - C

user.location = "DownTown";

//ANCHOR - D

//1.


user.purchased.push("carbohydrates");

//2.

user.purchased.push("peace of mind");

//3.

user.purchased.push("Merino jodhpurs");

//4.

console.log(user.purchased[user.purchased.length -1]);


//ANCHOR - E

//1.

user.friend = {
    name: "joe",
    age : 12 ,
    location : "BellTown" ,
    purchased : [

    ] 
}

//2.

console.log(user.friend.name);

//3.

console.log(user.friend.location);

//4.

user.friend.age = 55;

//5.

user.friend.purchased.push("The One Ring");


//6.

user.friend.purchased.push("A latte");

//7.

console.log(user.friend.purchased[user.friend.purchased.length - 1]);


//ANCHOR - F

//1.

for(i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
}

//2.

for(i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
}


//ANCHOR - G

//1.
//function =updatedUser, increment age by 1 so age++, make name uppercase

let age = user.age;
let newName;
const updatedUser = () =>{
    age ++;
    newName = user.name.toUpperCase();
}


//2.
// function =  oldAndLoud, 

const oldAndLoud = (person) =>{
    age ++;
    newName = person.name.toUpperCase();
}

const resultOfOldAndLoud = oldAndLoud(user);
console.log(resultOfOldAndLoud);