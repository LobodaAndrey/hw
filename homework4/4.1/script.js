// I dont know why I did it. Correct methods in testscr.js file


var testArr = [1, 3, 7, 9, 15],
	myObj = {
		myForEach: function(arr, func) {
			for (var i = 0; i < arr.length; i++) {
				if(!!func) {
					var el = arr[i];
					func(el); 
				} else { //default func
					console.log("no func picked");
				}				
			}
		},
		myMap: function(arr, func) {
			var newArr = [];

			for (var i = 0; i < arr.length; i++) {
				if(!!func) {
					el = arr[i];
					func(el);
					newArr.push(el); 
				} else { //default func
						console.log("no func picked");
					}

			}

			return newArr;
		},
		mySort: function(arr, func) {
			for (var i = 1; i < arr.length; i++) {
				var a = arr[i-1],
					b = arr[i];
				arr[i] = func(a, b);
			}
				return arr;

		},
		myFilter: function(arr, func) {
			var newArr = [];

			for (var i = 0; i < arr.length; i++) {
				el = arr[i];
				func(el);
				if (!!func(el)) {
					newArr.push(el);
				}
			}

			return newArr;

		},

		myPush: function(arr, el) {
			arr[arr.length] = el;
			console.log(arr)
			return arr;
		}
	};



	//test func for foreach
	function forEachFunc(el) {
		console.log((el));
	}

	//test func for map
	function mapFunc() {
		el +=2;
		return el;
	}

	//test func for filter 

	function filterFunc(el) {
		if (el > 5) {
			return true;
		} else {
			return false;
		}
	}

	function compareMax(a, b) {
	  if (a > b) return a;
	  if (a < b) return b;
	}

	// myObj.myForEach(testArr, forEachFunc)

	// console.log(myObj.myMap(testArr, mapFunc));

	// console.log(myObj.myFilter(testArr, filterFunc));

	// myObj.myPush(testArr, 1488);

	console.log(myObj.mySort(testArr, compareMax));









