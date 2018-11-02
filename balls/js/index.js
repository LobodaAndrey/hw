var ball = document.getElementById('ball');

ball.addEventListener("click", Randomizer());


function Randomizer() {
	var a = getRandomInt (0, 3);
	if (a == 0 || a ==1) {
		console.log("launch Size")
		setInterval(Size, 700);
	}
	if (a == 1 || a == 2) {
		console.log("launch Color")
		setInterval(Color, 700);
	}
	if (a == 2 || a == 0) {
		console.log("launch Move")
		setInterval(Move, 700)
	}	
};

function Size() {
	ball.style.width = ball.style.height = getRandomInt(20, 200) + "px";

};

function Move() {

	ball.style.left = getRandomInt(0, 800) + "px";
	ball.style.top = getRandomInt(0, 600) + "px";

	var posX = ball.style.left,
		posY = ball.style.top;
	console.log(posX + ", " + posY)
};

function Color() {
	var colors = ['green', 'blue', 'red', 'yellow', 'black', 'purple'];
	ball.style.backgroundColor = colors[Math.floor(colors.length * Math.random())];
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

//test
 