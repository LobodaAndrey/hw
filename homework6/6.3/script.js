"use strict"

// 1-st

let isInteger = (num) => {
	return (num ^ 0) === num;
};

let isPrime = num => {
	if (num === 2) {
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
console.log(isPrime(22));           

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

let asd
var fib = function f(n) {
  return (n > 2) ? f(n - 1) + f(n - 2) : 1;
};


console.log(fib(10));


// 4-th isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

let isSorted = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		if(arr[i] > arr[i+1]) {
			return console.log(false);
		}
		// arr[i] > arr[i+1] ? return false: return true; - почему так не работает?
	}
	return console.log(true);
}

isSorted([1, 49, 31, 51])
isSorted([1, 10, 20, 33])

// 5-th reverse - Reverses the given string (yes, using the built in reverse function is cheating).

let reverse = (str) => {
	let newString = [];

	for (let i = str.length; i > 0; i--) {
		newString.push(str.charAt(i-1));
	}
	console.log(newString.join(''));	
}

reverse ("abcd")

//6-th indexOf - Implement the indexOf function for arrays.

let indexOf = (arr, index) => {
	for (let i = 0; i < arr.length; i++) {
		if( index === arr[i]) {
			return i;
		}
	}
	return -1;
}

console.log(indexOf([1, 2, 3], 1));

console.log(indexOf([1, 2, 3], 7));


// 7. isPalindrome - Return true or false indicating whether the given string 
// is a plaindrone (case and space insensitive).

let isPalindrome = (str) => {

	function reverseString(str) {
		if (str === "")
			return "";
		else {
			return reverseString(str.substr(1)) + str.charAt(0);
		}
	}

	str = str.replace(/\s+/g, '');
	str == reverseString(str) ? console.log(true): console.log(false)
}


isPalindrome("abc ba")
isPalindrome("abcdef")

console.log("")
console.log("")
console.log("")
console.log("")

//  8. missing  

 let missing = (arr) => {
	 if(!arr.length) return console.log(undefined);

	arr.sort(function(a, b) {
		return a - b;
	});

	 let missingEl = undefined;
	 let maxEl = Math.max.apply(null, arr);
	 let newArr = [];
	 for( let j = 1; j <= maxEl; j++ ) {
		 newArr.push(j)
	 }

	 for( let k = 0; k < maxEl; k++) {
		 if(newArr[k] !== arr[k]) {
			 return console.log(newArr[k])
		 }
	 }

	 return console.log("no missing elements (or we can return undefined here)")
	}
	//  alternative when we trying to find missing el without newArr
	//  for (let i = 1; i < maxEl; i++) {
	// 	 console.log(arr[i-1])
	// 	 console.log(i)
	// 	 if( i !== arr[i-1]);
	// 	 missingEl = arr[i];
	// 	 return console.log(missingEl)
	// 	 }
	// 	return console.log(missingEl)
	//  }


missing([1, 2, 3, 5])
missing([])
missing([1, 2, 3])


// 9. I dont get this one, sorry.
// Моя идея в том, чтобы "отлавливать" символы { и }, и создать что-то вроде счетчика, где открывающая скобка даёт +1, закрывающая - -1. Если при подсчёте значение счетчика опуститься ниже 0 (закрывающих скобок больше, чем открывающих), то веренм ложь. Но Но в 3-м примере возвращается ложь, и это меня сбило. Что там не правильно?