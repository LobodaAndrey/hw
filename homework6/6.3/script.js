"use strict"

// 1-st

let isInteger = (num) => {
	return (num ^ 0) === num;
	}
	
	let isPrime = num => {
	if (num == 2) {
	return true;
	}
	for (let i =2; i < num; i++) {
	let result = num/i;
	if (isInteger(result)) {
	return false;
	} else {
	return true;
	}
	}
	}
	
	console.log(isPrime(17));           

//2-nd

function factorial(n) {
	let sum = 1;

	for (let i = 1; i <= n; i++) {
		sum = sum*i;
	}
	console.log(sum);
}

factorial(0)                        // 1
factorial(1)                        // 1
factorial(6)                        // 720

//3-rd


var fib = function f(n) {
    return (n > 2) ? f(n - 1) + f(n - 2) : 1;
  };


console.log(fib(10));



