// create char.

function Character() {
	this.health = 100;
	this.happiness = 100;
	this.satiety = 100;
	this.cheerfulness = 100;
	var isAlive = true;
};

var character = new Character(),
	defaultNames = ["Johnny", "Billy", "Tommy", "Randy", "Kenny"];
	ranNum = Math.ceil(Math.random() * 5)
startGame.addEventListener("click", start);


// start the action
function start() {

character.name = prompt("What is the name of your new friend?", defaultNames[Math.floor(Math.random() * defaultNames.length)]);

document.getElementById('ava' + ranNum).style.display = "block";

character.health = 100;
character.happiness = 100;
character.satiety = 100;
character.cheerfulness = 100;
var isAlive = true;

ShowStats();

//	create button actions


feed.addEventListener("click", feedFunc);

function feedFunc() {
	character.satiety +=4;
	character.cheerfulness -=2; 
	ShowStats()
	return character;
}


walk.addEventListener("click", walkFunc);

function walkFunc() {
	character.health +=1
	character.satiety -=2;
	character.happiness +=1;
	character.cheerfulness -=1;
	ShowStats()
	return character;

}


sleep.addEventListener("click", sleepFunc);

function sleepFunc() {
	character.health +=1
	character.satiety -=2;
	character.happiness -=1;
	character.cheerfulness +=4;
	ShowStats();
	return character;
}

play.addEventListener("click", playFunc);

function playFunc() {

	character.satiety -=3;
	character.happiness +=1;
	character.cheerfulness -=4;
	ShowStats();
	return character;
}

//for live update of stats

function ShowStats() {
	// value 100 is max
	for (var key in character) {
		if (character[key] > 100) {
			character[key] = 100;
			return character.key;
		}
	}

	document.getElementById('nameValue').innerHTML = character.name;

	document.getElementById('healthValue').innerHTML = character.health;

	document.getElementById('happinessValue').innerHTML = character.happiness;

	document.getElementById('satietyValue').innerHTML = character.satiety;

	document.getElementById('cheerValue').innerHTML = character.cheerfulness;

}


//decreasing of stats

var timer = setInterval(function(){ 
	character.health -=3
	character.satiety -=3;
	character.happiness -=3;
	character.cheerfulness -=3;

	for (key in character) {

		if (character[key] <= 25) {
	  		alert("Hey, take care of me, inrease my " + key);
	    }
	    if (character[key] <= 0) {
	  		character.isAlive = false;
	    }
	}

	if (character.isAlive === false) {
		alert("Oh my God, you killed hero! You bastard! Try to play 1 more time");
		clearInterval(timer);
		character = new Character();
		return start();
	};

	ShowStats();


}, 2500);

};

