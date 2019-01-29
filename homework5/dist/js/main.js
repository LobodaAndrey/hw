const add = document.getElementById('addBttn');
const	close = document.getElementById('close');
const myCheck = document.getElementById('myCheck');
const	msg = document.getElementById('msg');
const	curList = document.getElementById('current-list');
let	total = document.getElementsByClassName('newToDo').length + 1;

add.addEventListener('click', addition);

function addition() {
	if (msg.value) {
		let div = document.createElement('div');
		total = document.getElementsByClassName('newToDo').length + 1;
		div.className = "newToDo";
		div.innerHTML = '<input id="myCheck" class="myCheck" type="checkbox" onclick="checkFunc(this)" title="Click if you finished it"><p class="todoText" rows="4" cols="50" disabled>' + msg.value + '</p><span title="Delete ToDo" id="close" class="close" onclick="closeFunc(this)"> X </span>';
		msg.value = "";
		curList.appendChild(div);
		document.getElementById('total_amount').innerHTML = "<p>Total amount of toDo: " + total + "</p>";
	} else {
		alert("U have to type something")
	}
}

function checkFunc(e) {
	if (e.checked) {
		e.parentNode.style.backgroundColor = "#62f442";
	} else {
		e.parentNode.style.backgroundColor = "transparent"
	}
};

function closeFunc(e) {
	e.parentNode.parentNode.removeChild(e.parentNode);
	total = document.getElementsByClassName('newToDo').length;
	document.getElementById('total_amount').innerHTML = "<p>Total amount of toDo: " + total + "</p>";

}