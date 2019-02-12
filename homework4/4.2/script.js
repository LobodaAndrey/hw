function walkingArr(X, Y, x0, y0) {
	var startPosition = [x0, y0],
		output = [],
		N = 0; //total amount of cells
		
		//add start position to output;
		output.push(startPosition)
		let movelength = 1;
		//start the loop
		while (N < X*Y) {

			if( N%2 === 0 && N > 0 ) {
				movelength++;
			};

			if(N%4 === 0) {
				x0 += movelength;
			}
			if(N%4 === 1) {
				y0 -= movelength;
			}
			if(N%4 === 2) {
				x0 -= movelength;
			}
			if (N%4 === 3) {
				y0 += movelength;
			}
			// If current coordinates are inside of XY, we add this element to output
			if ((x0 <= X) && (y0 <= Y)) {		
				output.push([x0, y0]);
			}
			//And move to the next cell
			N++;
		}
		return output;
}

console.log(walkingArr(4, 2, 0, 0));

