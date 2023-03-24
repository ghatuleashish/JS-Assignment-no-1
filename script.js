// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

var str1 = 'Today is';
var str2 = '         a beautiful day      '
var str3 = 'In Hawaii.       '

console.log("" + "" + "" + "" + "", str1, str2, str3)

console.log("Q1 End ********************************************************************************")



// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case.
// Change value of enteredAlphabet and check if your code works fine.


var number = prompt("Enter the character for which you want to check it is  vowel, consonant or non-alphabet")

console.log("The character you entered is ", number)


switch (number) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log("The character you entered is an vowel");
        break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
    case 'B':
    case 'C':
    case 'D':
    case 'F':
    case 'G':
    case 'H':
    case 'J':
    case 'K':
    case 'L':
    case 'M':
    case 'N':
    case 'P':
    case 'Q':
    case 'R':
    case 'S':
    case 'T':
    case 'V':
    case 'W':
    case 'X':
    case 'Y':
    case 'Z':
        console.log("The character you entered is an consonant");
        break;
    default:
        console.log("Not an alphabet")
}

console.log("Q2 End ********************************************************************************")



// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations 
// (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and 
// an operator: +, -, *, / from the user. It should perform operation according to the operator entered 
// and must take input in given format.

var number1 = parseInt(prompt("Enter first number"))
console.log("First number you entered is: ", number1)
var op = prompt("Enter operation to be performed")
console.log("Operation you want to perform is: ",op)
var number2 = parseInt(prompt("Enter second number"))
console.log("Second number you entered is: ", number2)
var result = 0;

switch (op) {
    case '+':
        result = number1 + number2;
        console.log('The addition of two numbers:'+result)
        break;
    case '-':
        result = number1 - number2;
        console.log("The substraction of two numbers:"+result )
        break;
    case '/':
        result = number1 / number2;
        console.log("The division of two numbers:"+result)
        break;
    case '*':
        result = number1 * number2;
        console.log("The multiplication of two numbers:"+result)
        break;
    default:
        console.log("Wrong operation inputed please input +,-,/ or *")
}

console.log("Q3 End ********************************************************************************")

// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, 
//scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of 
//triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. 
//Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.


var a = parseInt(prompt("Enter first side of triangle"))
console.log("First side you entered is ",a)
var b = parseInt(prompt("Enter second side of triangle"))
console.log("Second side you entered is ",b)
var c = parseInt(prompt("Enter third side of triangle"))
console.log("Third side you entered is ",c)

if(a == b == c){
    console.log("The triangle is Equilateral Triangle ")
}
else if (a == b || b == c || a == c){
    console.log("The triangle is Isosceles Triangle")
}
else{
    console.log("The triangle is Scalene Triangle")
}



console.log("Q4 End ********************************************************************************")



// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill 
//according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

var units = prompt("Enter Electricity Units Consumed")
console.log("According to you" +" " +units + " " + "units are consumed")
var bill = 0;

if(units <= 50){
    bill = units * 0.5
}
else if ( units <= 150){
    bill = (50 * 0.5) + (units - 50) * 0.75
}
else if ( units <= 250){
    bill = (50 * 0.5) + (100 * 0.75) + (units - 150 ) * 1.20
}
else if (units > 250 ){
    bill = 50 * 0.5 + 100* 0.75 + 150 * 1.20 + (units - 250) * 1.50
}
else(
    console.log("Give correct input")
)

if(units > 250){
    bill = bill + bill * 0.2
}
console.log("The bill you will pay is RS:",bill)




console.log("Q5 End ********************************************************************************")
