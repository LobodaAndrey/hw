var arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],
	amount = 0;

arr.forEach( function(el, i) {
	var n = 1;

	while (arr[i] > arr[i+n]) {

		amount = amount + (arr[i]-arr[i+n]);
		n++
		
		//каждый раз консоль лог, чтобы видеть, как растёт сумма

		console.log(amount)
	} 
});


console.log(amount)


