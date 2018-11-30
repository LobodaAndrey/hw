"use strict"

// 1-st

// function isPrime(n) {
// 	if(n<2) return console.log(false);

// 	for (let i = 1; i <= n; i++) {
// 		if ((n%n)) {
// 			console.log(true)
// 		} else {
// 			console.log(false)
// 		}
// 	};
// }

// isPrime(0)                          
// isPrime(1)                          
// isPrime(17)                         
// isPrime(100)             

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

