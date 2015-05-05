function startup() {
	document.getElementById('one').addEventListener("click", function() { send(this.id); });
	document.getElementById('two').addEventListener("click", function() { send(this.id); });
	document.getElementById('three').addEventListener("click", function() { send(this.id); });
	document.getElementById('four').addEventListener("click", function() { send(this.id); });
	document.getElementById('five').addEventListener("click", function() { send(this.id); });
	document.getElementById('six').addEventListener("click", function() { send(this.id); });
	document.getElementById('seven').addEventListener("click", function() { send(this.id); });
	document.getElementById('eight').addEventListener("click", function() { send(this.id); });
	document.getElementById('nine').addEventListener("click", function() { send(this.id); });
	document.getElementById('zero').addEventListener("click", function() { send(this.id); });
	document.getElementById('clear').addEventListener("click", back);
	document.getElementById('minus').addEventListener("click", function() { evaluate(this.id); });
	document.getElementById('plus').addEventListener("click", function() { evaluate(this.id); });
	document.getElementById('times').addEventListener("click", function() { evaluate(this.id); });
	document.getElementById('slash').addEventListener("click", function() { evaluate(this.id); });
	document.getElementById('equal').addEventListener("click", calc);
	}

var display = [];
var leftDisplay = [];
var operator;

function send(clickedId) {
	
	display.push(document.getElementById(clickedId).innerHTML);
	if (display.length > 17) {
		display.splice(17, 1);
	}
	if (display.length == 0 && operator) {
		rightDisplay.push(document.getElementById(clickedId).innerHTML);
	}
	disp(); 
}

function back() {
	if (display.length  ===  0) {
		read.innerHTML = 0;
		display = display.splice(0, display.length);
	} else {
		display.pop();
		disp();
	}
}

function evaluate(operatorID) {
	if (display.length > 0) {
		operator = operatorID;
		for (var i = 0; i < display.length; i++) {
    		leftDisplay.push(display[i]);
    	}
    	display.push(document.getElementById(operatorID).innerHTML);
    	//test to see if display value resets
    	display = [];
	}
}

function disp() {
	read.innerHTML = display.join("");
}

function calc() {
	var rightDisplay = display;
	var x = leftDisplay.join("");
	var y = rightDisplay.join("");
	var result = (x.concat() + getOperator() + y.concat());
	alert(result);
	alert(display);
	alert(rightDisplay);
	read.innerHTML = eval(result);
	display = [];
	leftDisplay = [];
	operator = "";
	result = 0;
}

function getOperator() {
	switch (operator) {
		case 'minus': operator = "-";
		break;
		case 'plus': operator = "+";
		break;
		case 'times': operator = "*";
		break;
		case 'slash': operator = "/";
	}
	return operator;
}

window.addEventListener("load", startup);
read = document.getElementById('view');

