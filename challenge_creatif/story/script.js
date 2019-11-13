document.getElementById('play').onclick = start;
red = document.getElementById('red');
green = document.getElementById('green');
heart = document.getElementById('heart');
castleDoor = document.getElementById('castleDoor');
darkGreen = document.getElementById('darkGreen');


function start() {
	document.getElementById('title').classList.add('vanishSlow');
	setTimeout(function(){document.getElementById('title').style.display='none'; }, 1990);
	document.getElementById('play').style.display='none';
	setTimeout(chapter1(), 2000);
}

function chapter1() {
	red.classList.add('redmeoSpeach');
	setTimeout(function(){music.classList.add('floating');}, 2000);
	setTimeout(function(){heart.classList.add('floating');}, 2000);
	setTimeout(function(){green.classList.add('greenClimbing');}, 4500);
	setTimeout(function(){document.getElementById('green').appendChild(document.getElementById('heart'));}, 6500);
	setTimeout(function(){green.classList.add('greenSpeach');}, 6500);
	setTimeout(function(){red.classList.add('redmeoStay');}, 5000);
	setTimeout(function(){document.getElementById('red').appendChild(document.getElementById('heart'));}, 8500);
	setTimeout(function(){castleDoor.classList.add('doorOpen');}, 10000);
	setTimeout(function(){darkGreen.classList.add('darkGreenComing');}, 10500);
	setTimeout(function(){document.getElementById('green').appendChild(document.getElementById('heart'));}, 10500);
	setTimeout(function(){darkGreen.classList.add('darkGreenSpeach');}, 11000);
	setTimeout(function(){darkGreen.classList.remove('darkGreenComing');}, 11000);
	setTimeout(function(){document.getElementById('characters').appendChild(document.getElementById('darkGreen'));}, 11000);
	setTimeout(function(){castleDoor.style.display='none'}, 12000);
	setTimeout(function(){green.classList.add('greenStay');}, 12000);
	setTimeout(function(){insult1.classList.add('floating');}, 13000);
	setTimeout(function(){insult2.classList.add('floating');}, 13200);
	setTimeout(function(){insult3.classList.add('floating');}, 13400);
	setTimeout(function(){insult4.classList.add('floating');}, 13600);
	setTimeout(function(){red.classList.add('redReaction');}, 14000);
	setTimeout(function(){exclamation.classList.add('up');}, 14500);	
}