var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {

	// mode button event listener
	for(var i=0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;	
		
			reset();
		});
	}
	// square click event listener
	for(var i = 0; i < squares.length; i++){
			//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetBtn.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

	reset();
}


function reset() {
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetBtn.textContent = "new colors";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	// change h1 background color
	h1.style.backgroundColor = "steelblue";

}

resetBtn.addEventListener("click", function() {
	reset();
});


function changeColors(color){
	//loop through all squares
	for (var i=0; i < squares.length; i++){
		//change each other to match given color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor(){
	var idx = Math.floor(Math.random() * colors.length);
	return colors[idx];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i=0; i < num; i++){
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		arr.push("rgb(" + red + ", " + green + ", " + blue + ")");
	}
	// return that array
	return arr;
}
