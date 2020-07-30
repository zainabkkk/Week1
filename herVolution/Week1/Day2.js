/*
	A student scored 
	25/50 in math, 
	30/50 in english, 
	14/50 in Physics, 
	48/50 in Chemistry
	and 50/50 in Accounting
	Calculate and print out the average.
	Also calculate and print out overall percentage.
*/

let math = 25/50
let english = 30/50
let physics = 24/50
let chemistry = 48/50
let accounting = 50/50

let average = (math + english + physics + chemistry + accounting) / 5 
console.log(average * 100)


/*
Given 5 numbers, find and print the largest one.
*/

let num1 = -900;
let num2 = 13.3298;
let num3 = 23;
let num4 = 1.0009;
let num5 = 32;

number = 0

if (num1 > num2) {
  number = num1
} else if (num2 < number) {
  number = num2
}

if (num3 > number) {
  number = num3
} else if (num3 < number) {
  number = number
}

if (num4 > number) {
  number = num4
} else if(num4 < number) {
  number = number
}

if (num5 > number) {
  number = num5
} else if (num5 < number){
  number = number
}


console.log(number)


// Seperation between the first two questions and the last two



/*
	Find and log the sign of the product of three numbers.
	Example: 
		Sample numbers : 3, -7, 2
		Output : The sign is - 
*/

let numberx1 = 78;
let numberx2 = -56;
let numberx3 = -900;

let product = (numberx1*numberx2*numberx3)
if (product > 0) {
  console.log("The sign is + ")
}
else {
  console.log("The sign is -")
}

/*
	Given 2 pairs of numbers, calculate and log the sum of their products.


  
	Example: 
		(assume the first 2 numbers are a pair and the last 2 are a pair)
		Sample numbers : 5, 10, 3, 6 
		Output : The sum of products is 68
/**/

let number1 = 5;
let number2 = 10;
let number3 = 3;
let number4 = 6;

Sum_of_products = number1 * number2 + number3 * number4

console.log(Sum_of_products)



