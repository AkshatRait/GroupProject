// Functions:
//A.
//function printGreeting
const printGreeting = (name) => {
    console.log( name);
}
printGreeting("Slimer");
//B.
//function printCool, name = anyName
const printCool = (name) => {
    console.log(name + " is cool");
}
printCool("Captain reynolds");
//C.
//function calculateCube, numberCube = anynumber, cube = number*number*number
let numberCube = 10;
let sum;

const calculateCube = (numberCube) => {
   sum = numberCube*numberCube*numberCube;
   return sum;
}

const resultForCube = calculateCube(numberCube);
console.log(resultForCube);

//function isVowel, givenCharacter = "any letter", if statement for if givenCharacter = "a", "e" ,"i" , "o" ,"u" then return true else return false
let givenCharacter = "h";

const isVowel = (givenCharacter) => {
    if (givenCharacter == "a"
    ||
    givenCharacter =="e"
    ||
    givenCharacter =="i"
    ||
    givenCharacter =="o"
    ||
    givenCharacter =="u") {
        return true
    }
    else{
        return false
    }
};

const resultVowel = isVowel(givenCharacter);
console.log(resultVowel);
 //E.
 // function getTwoLengths(string1 ,sting2) , let string1 = "" , let string2 = "" , string1.length, string2.length

 let string1 = "Hi";
 let string2 = "Byek";
 let result =  0 ;

 const getTwoLengths = (string1, string2) =>{
    result = [string1.length , string2.length];
    return result
 }

 const resultArray = getTwoLengths( string1 , string2 );
 console.log(resultArray);


 //F. 
 // function getMultiplelengths(["hi", "i" , "am" , :])

 let array = ["hi", "i","am", "excited", "to", "do","this"];
 let newlengthArray 
 const getMultiplelengths = (array) => {
     return array.map(item => item.length)
 }

 const resultNewArray = getMultiplelengths(array)
 console.log(resultNewArray);
 //G.
 //function maxOfThree(num1, num2, num3), return the largest of them 
let num1 = 17;
let num2 = 8;
let num3 = 9;
 const maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
const resultMax = maxOfThree(num1, num2, num3)
console.log(resultMax);
//H.
//function printLongestWord(arrayOfStrings), return the longest word in the array
let arrayOfStrings = ["hi", "i","am", "excited", "to", "do","this"];
const printLongestWord = (array) => {
    let longestWord = array[0];
    for(i = 0; i < array.length; i++){
       if(longestWord.length < array[i].length ){
        longestWord = array[i]
   } 
    }
   return longestWord;
}
const resultString = printLongestWord(arrayOfStrings);
console.log(resultString);