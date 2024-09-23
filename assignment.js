//-----Chapter 35 to 38 ------------//
//---------Question 1 ---------//
function displayDateTime() {
    var now = new Date();
    document.write(now);
    }
displayDateTime()
    
//-------Question 2 ------//

function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    document.write("Hello, " + fullName + "!");
    }
    greetUser("Maryam", "Amir")
    
 //------Question 3 ------//
 
 function addNumbers(num1, num2) {
    const sum = parseInt(num1) + parseInt(num2);
    document.write("The sum is: " + sum);
    }
    var num1 = prompt("Enter first number:");
    var num2 = prompt("Enter second number:");
    addNumbers(num1, num2)

//---------Question 4 ---------//


function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }

  function calculator(num1, num2, operator) {
    if (operator === "+") {
      return add(num1, num2);
    } else if (operator === "-") {
      return subtract(num1, num2);
    } else if (operator === "*") {
      return multiply(num1, num2);
    } else if (operator === "/") {
      return divide(num1, num2);
    } else {
      return "Invalid operator";
    }
  }
  
  
  var num1 = parseInt(prompt("Enter first number:"));
  var num2 = parseInt(prompt("Enter second number:"));
  var operator = prompt("Enter operator (+, -, *, /):");
  
  
  document.write("The result is: " + calculator(num1, num2, operator));

  //---------------Question 5 -------------//
  
  function square(num) {
    var result = num * num;
    document.write("The square of " + num + " is: " + result);
    }
    var num = parseInt(prompt("Enter a number:"));
    square(num)
    
 //--------------Question 6---------//

 function factorial(num) {
  var result = 1;
  for (let i = 1; i <= num; i++) {
  result *= i;
  }
  document.write("The factorial of " + num + " is: " + result);
  }
  var num = parseInt(prompt("Enter a number:"));
  factorial(num)
  
//--------------Question 7 -------------//

function count(start, end) {
  for (let i = start; i <= end; i++) {
  document.write(i + "");
  }
  }
  var start = parseInt(prompt("Enter start number:"));
  var end = parseInt(prompt("Enter end number:"));
  count(start, end)
  
//------------Question 8 --------//

function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }

  var hypotenuse = (calculateSquare(base) + calculateSquare(perpendicular)) ** 0.5;
  document.write("The hypotenuse is: " + hypotenuse);
}

// Take input from user
var base = parseInt(prompt("Enter base:"));
var perpendicular = parseInt(prompt("Enter perpendicular:"));

// Call the function
calculateHypotenuse(base, perpendicular);

//------------Question 9 ---------//

function calculateArea(width, height) {
  var area = width * height;
  document.write("The area is: " + area);
  }
  calculateArea(10, 20)
  var width = 30;
  var height = 40;
  calculateArea(width, height)
  
  //------------Question 10 -------//

  function isPalindrome(str) {
    var reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
    }
    var str = prompt("Enter a string:");
    document.write(str + " is palindrome: " + isPalindrome(str))
    
 //------------Question 11 --------//
 
 function capitalizeFirstLetter(str) {
  var words = str.split(" ");
  var result = "";

  for (var i = 0; i < words.length; i++) {
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
  }

  return result.trim();
}

var str = "the quick brown fox";
document.write(capitalizeFirstLetter(str)); 

  //------------Question 12 ---------//

  function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
    for (var word of words) {
    if (word.length > longestWord.length) {
    longestWord = word;
    }
    }
    document.write("The longest word is: " + longestWord);
    }
    var str = prompt("Enter a string:");
    findLongestWord(str)
    
  //-------------Question 13 --------//

  function countLetter(str, letter) {
    var count = 0;
  
    for (var i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    }
  
    return count;
  }
  
  var str = "JSResourceS.com";
  var letter = "o";
  document.write(countLetter(str, letter));
  
//--------------Question 14 -----------//

function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  document.write("The circumference is: " + circumference + "<br>");
}

function calcArea(radius) {
  var area = Math.PI * radius * radius;
  document.write("The area is: " + area);
}

// Test the functions
var radius = prompt("Enter radius:");
calcCircumference(radius);
calcArea(radius);
