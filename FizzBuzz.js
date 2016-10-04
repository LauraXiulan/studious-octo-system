//For loop from 1 to 100. Multiples of 3 print Fizz, multiples of 5 print Buzz, multiples of both 3 and 5 print FizzBuzz.
for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz"); //multiples of 3 and 5, using modulo to specify the multiples
	} else if (i % 5 == 0) {
		console.log("Buzz"); //multiples of only 5
	} else if (i % 3 == 0) {
		console.log("Fizz"); //multiples of only 3
	} else {
		console.log(i);
	}
}