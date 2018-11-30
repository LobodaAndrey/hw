var add = document.getElementById('addBttn'),
	close = document.getElementById('close'),
	myCheck = document.getElementById('myCheck'),
	msg = document.getElementById('msg'),
	total = document.getElementsByClassName('newToDo').length+1,
	curList = document.getElementById('current-list');

add.addEventListener('click', addition);

//for enter to add:

// document.addEventListener("keydown", function(event) {
//     if (event.keyCode == 13 )
//       addition();
//   });

function addition() {
	if(msg.value) {
		var div = document.createElement('div');
		total = document.getElementsByClassName('newToDo').length+1;
	div.className = "newToDo";
	div.innerHTML = '<input id="myCheck" type="checkbox" onclick="checkFunc(this)" title="Click if you finished it"><p class="todoText" rows="4" cols="50" disabled>' + msg.value + '</p><span title="Delete ToDo" id="close" class="close" onclick="closeFunc(this)"> X </span>';
	msg.value = "";
	curList.appendChild(div);
	document.getElementById('total_amount').innerHTML = "<p>Total amount of toDo: " + total + "</p>";
	} else {
		alert("U have to type something")
	}
	} 
	



//checkbox func
function checkFunc(e) {
	if(e.checked) {
		console.log("true")
		e.parentNode.style.backgroundColor = "#62f442"
	} else {
		console.log("false")
		e.parentNode.style.backgroundColor = "transparent"
	}
	// 	e.parentNode.style.backgroundColor = "#62f442";
	// 	console.log(e.parentNode.style.backgroundColor)
	// 	return e.parentNode.style.backgroundColor
	// } else {
	// 	e.parentNode.style.backgroundColor = "red";
	// }
	
	// if (document.querySelector(".newToDo").style.backgroundColor != "#62f442") {
	// 	document.querySelector(".newToDo").style.backgroundColor = "#62f442";
	// } else {
	// 	document.querySelector(".newToDo").style.backgroundColor = "red";
	// }
	
};

function closeFunc(e) {
	e.parentNode.parentNode.removeChild(e.parentNode);
	total = document.getElementsByClassName('newToDo').length;
	document.getElementById('total_amount').innerHTML = "<p>Total amount of toDo: " + total + "</p>";

}



