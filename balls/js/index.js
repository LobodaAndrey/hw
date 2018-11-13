var ball = document.getElementById('ball');

// ball.addEventListener("click", Randomizer());


// function Randomizer() {
// 	var a = getRandomInt (0, 3);
// 	if (a == 0 || a ==1) {
// 		console.log("launch Size")
// 		setInterval(Size, 700);
// 	}
// 	if (a == 1 || a == 2) {
// 		console.log("launch Color")
// 		setInterval(Color, 700);
// 	}
// 	if (a == 2 || a == 0) {
// 		console.log("launch Move")
// 		setInterval(Move, 700)
// 	}	
// };

// function Size() {
// 	ball.style.width = ball.style.height = getRandomInt(20, 200) + "px";

// };

// function Move() {

// 	ball.style.left = getRandomInt(0, 800) + "px";
// 	ball.style.top = getRandomInt(0, 600) + "px";

// 	var posX = ball.style.left,
// 		posY = ball.style.top;
// 	console.log(posX + ", " + posY)
// };

// function Color() {
// 	var colors = ['green', 'blue', 'red', 'yellow', 'black', 'purple'];
// 	ball.style.backgroundColor = colors[Math.floor(colors.length * Math.random())];
// };

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// };

// //test
//  


// ball.addEventListener("click", toTheBasket);

// function toTheBasket() {
// 	ball.
// 		style.left = x + "px";
// 		style.
// }

ball.addEventListener("click", move);

function move() {
	switch (Math.floor(6 * Math.random())) {
    case 0:
    //1-st bucket
        ball.style.backgroundColor = "black";
        ball.style.top = "155px";
        ball.style.left = "95px";
        break;
    case 1:
        ball.style.backgroundColor = "red";
        ball.style.top = "155px";
        ball.style.left = "260px";
        break;
    case 2:
        ball.style.backgroundColor = "green";
        ball.style.top = "155px";
        ball.style.left = "425px";
        break;
    case 3:
        ball.style.backgroundColor = "yellow";
        ball.style.top = "315px";
        ball.style.left = "95px";
        break;
    case 4:
        ball.style.backgroundColor = "blue";
        ball.style.top = "315px";
        ball.style.left = "260px";
        break;
    case 5:
        ball.style.backgroundColor = "purple";
        ball.style.top = "315px";
        ball.style.left = "425px";
        break;
    default: 
        console.log("click");
}
};