var add = document.getElementById('addBttn'),
	  close = document.getElementById('close'),
	  myCheck = document.getElementById('myCheck'),
  	msg = document.getElementById('msg'),
  	total = document.getElementsByClassName('newToDo').length + 1,
  	curList = document.getElementById('current-list');

add.addEventListener('click', addition);

function addition() {
	if (msg.value) {
		var div = document.createElement('div');
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

//checkbox func
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