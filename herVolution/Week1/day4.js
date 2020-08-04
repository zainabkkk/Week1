/*
	Loop over numbers 1 to 100 (inclusive) and only print numbers that are odd.
	Do not copy over the code from the continue statement example.
*/

let i = 1;
while (i > 0 && i < 100) { 
    if (i%2==1) {
        console.log( i ); 
	    i++;
    }   else if (i%2==0) {
        i++
    }
}

/*
	Given an array, print out all its members using the 
		1. for loop, help with this one
		2. for in loop, 
		3. for of loop, help with this one
		4. while loop.
*/

let array = ["One", "Two", "Three"]

i = 0
for (i in array){
    console.log(i);
}

j=0
length = len(array);
while (j<length){
    console.log(array[j]);
    j++
}

/*
Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

i = 1;
while (i > 0 && i < 100) { 
    if (i%3==0){
        console.log("Fizz");
        i++
    }else if (i%5==0){
        console.log("Buzz");
        i++
    }else if (i%5==0 && i%3==0){
        console.log("FizzBuzz")
        i++
    }else if (i%5!==0 && i%3!==0){
        console.log(i)
        i++
    }
    
    	    
}

/*
	Extend FizzBuzz and make it reusable for any range of numbers by using a function.
	Example: 
	fizzBuzz(0, 100) --> outputs the same as above
	fizzBuzz(12, 1901) --> Also works and outputs correctly.
*/
greatestnumber = 100
smallestnumber = 0 
m = 1;

function numbers(smallestnumber, greatestnumber) {
    while (i > smallestnumber && i < greatestnumber) { 
        if (i%3==0){
            console.log("Fizz");
            m++
        }else if (i%5==0){
            console.log("Buzz");
            m++
        }else if (i%5==0 && i%3==0){
            console.log("FizzBuzz")
            m++
        }else if (i%5!==0 && i%3!==0){
            console.log(i)
            m++
        }
        
                
    }
	return m;
}
numbers(1,100);



