var turn = "X";
var count= 0;


var board = [
[" "," ", " "],
[" "," ", " "],
[" "," ", " "]
];

var active = [
[true, true, true],
[true, true, true],
[true, true, true]
];

function clickTTT(r, c)
{
	if(active[r][c])
	{
		count ++; 
		active[r][c] = false;
		board[r][c] = turn;
		document.getElementById("cont"+r+c).innerHTML = turn;
		if (count % 2 === 1)
		{
			turn = "O";
		}
		else
		{
			turn = "X";
		}
	}
}

function playSound(soundobj)
{
	var thissound = document.getElementById(soundobj);
	thissound.play();
}

function stopSound(soundobj)
{
	var thissound = document.getElementById(soundobj);
	thissound.pause();
	thissound.cu
}