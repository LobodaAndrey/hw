const ball = document.getElementById('ball');

ball.addEventListener("click", move);

function move() {
  switch (Math.floor(6 * Math.random())) {
    case 0:
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