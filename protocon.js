/* canvas context */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var word = prompt("Enter Word: ");
var phrase = word.toLowerCase();

/* calculate size of each square */
var gridSize = Math.round(400/phrase.length);

/* setup the grid system */
for (var x = 0; x < phrase.length; x++) {
	for(var y = 0; y < phrase.length; y++){
		
		if(phrase.charAt(y) == "a"){
			ctx.fillStyle = 'yellow';
		}
		
		if(phrase.charAt(y) == "b"){
			ctx.fillStyle = 'blue';
		}
		
		if(phrase.charAt(y) == "c"){
			ctx.fillStyle = 'green';
		}
		
		if(phrase.charAt(y) == "d"){
			ctx.fillStyle = 'black';
		}
		
		if(phrase.charAt(y) == "e"){
			ctx.fillStyle = 'purple';
		}
		
		if(phrase.charAt(y) == "f"){
			ctx.fillStyle = 'pink';
		}
		
		if(phrase.charAt(y) == "g"){
			ctx.fillStyle = 'brown';
		}
		
		if(phrase.charAt(y) == "h"){
			ctx.fillStyle = 'orange';
		}
		
		if(phrase.charAt(y) == "i"){
			ctx.fillStyle = 'red';
		}
		
		if(phrase.charAt(y) == "j"){
			ctx.fillStyle = 'cyan';
		}
		
		if(phrase.charAt(y) == "k"){
			ctx.fillStyle = 'gray';
		}
		
		if(phrase.charAt(y) == "l"){
			ctx.fillStyle = 'orchid';
		}
		
		if(phrase.charAt(y) == "m"){
			ctx.fillStyle = 'khaki';
		}
		
		if(phrase.charAt(y) == "n"){
			ctx.fillStyle = 'gold';
		}
		
		if(phrase.charAt(y) == "o"){
			ctx.fillStyle = 'beige';
		}
		
		if(phrase.charAt(y) == "p"){
			ctx.fillStyle = 'crimson';
		}
		
		if(phrase.charAt(y) == "q"){
			ctx.fillStyle = 'DarkCyan';
		}
		
		if(phrase.charAt(y) == "r"){
			ctx.fillStyle = 'DarkGreen';
		}
		
		if(phrase.charAt(y) == "s"){
			ctx.fillStyle = 'DarkSalmon';
		}
		
		if(phrase.charAt(y) == "t"){
			ctx.fillStyle = 'DarkSlateBlue';
		}
		
		if(phrase.charAt(y) == "w"){
			ctx.fillStyle = 'DarkViolet';
		}
		
		if(phrase.charAt(y) == "x"){
			ctx.fillStyle = 'DimGray';
		}
		
		if(phrase.charAt(y) == "y"){
			ctx.fillStyle = 'FireBrick';
		}
		
		if(phrase.charAt(y) == "z"){
			ctx.fillStyle = 'GoldenRod';
		}
		
		if(phrase.charAt(y) == " "){
			ctx.fillStyle = 'white';
		}
		
		ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
	}
}

var dataURL = canvas.toDataURL();
document.getElementById('imgID').src = dataURL;
