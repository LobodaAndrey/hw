var myArray = [34242,"2", -675, 987, 324, 7, 0, 4, 8, -342],
	obj = {};


function Solution(arr) {
	var sum = 0,
		min = 0,
		max = 0;


	for (let i = 0; i < arr.length; i++) {

		//string to num
		arr[i] = +arr[i];


		if(!isFinite(arr[i])) {
			sum+=0;
			
		} else {
		sum+=arr[i];
		  };
		};

	//How to exclude NaN from Array here?

	min = (Math.min(...arr));
	max = (Math.max(...arr));

	obj.sum = sum;
	obj.min = min;
	obj.max = max;


	// to switch min and max indexes

	var indexMax = (arr.indexOf(max)),
		indexMin = (arr.indexOf(min));

		arr[indexMax] = min;
		arr[indexMin] = max;

	//console.log to show how indexes are changed
		console.log(arr)

}


Solution(myArray)
console.log(obj)

// array ro obj

function toObject(arr) {
  var newObj = {};
  for (var i = 0; i < arr.length; i++)
    newObj[i] = arr[i];
  return newObj;
}

console.log(toObject(myArray));
	
//callback example

function myCB(a, b) {

	if (a < b) {
		return a+myCB(a+1, b);
	} else {
		return a;
	};

return sum;
};


console.log(myCB(2, 10))
	



