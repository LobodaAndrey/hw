var testArr = [1, 3, 7, 9, 15];

// Create method myForEach
Array.prototype.myforEach = function(fn) {
	var arr = this;

    for (var i = 0; i < arr.length; i++) {
    	//каждый элемент массива пропускаем через функцию fn
    	let el = arr[i];
    	fn(el);	
    }; 
    return arr;
};

//example func
function forEachFunc(el) {
	el++;
	console.log(el)
}

testArr.myforEach(forEachFunc);


// _________________________________________



//create method myFilter

Array.prototype.myFilter = function(fn) {
	var arr = this;
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		let el = arr[i];
		if (!!fn(el)) {
			newArr.push(el);
		}
	};
	console.log(newArr);
	return newArr;
};

// For simple example we want to pick elements more than 5

function filterFunc(el) {
 	if (el > 5) {
 		console.log("true")
 		return true;
 	} else {
 		console.log("false")
 		return false;
 	}
 }

testArr.myFilter(filterFunc);
 
//  __________________________________________



// create method myMap

Array.prototype.myMap = function(fn) {
	var arr = this;
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		arr[i] = fn(arr[i])
		newArr.push(arr[i]);
	};
	console.log(newArr);
	return newArr;
};


//Example of func which increase each element by 2

function myMapFunc(a) {
	a+=2;
	return a;
}


 testArr.myMap(myMapFunc)

// _____________________________________




// create method myPush

Array.prototype.myPush = function(el) {
	var arr = this;
	arr[arr.length] = el;
	return arr;
};


testArr.myPush(57)



// ______________________________


//create method mySort

Array.prototype.myPush = function(fn) {
	var arr = this;

	for (var i = 0; i < arr.length; i++) {
		arr[i] = fn(arr[i-1], arr[i]);
	};
	console.log(arr);
	return arr;
};


//Example of func which increase each element by 2

function mySortFunc(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}


testArr.myPush(mySortFunc)


