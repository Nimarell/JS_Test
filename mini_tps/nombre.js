var rnd = (Math.floor(Math.random() * 100) + 1);
var counter = 0
console.log (rnd)

function checkNumber() {
	var check = document.getElementById('number').value;
	counter++
	document.getElementById('nbCoups').innerHTML = 'Nombre de coups: '+counter;
	if (check < rnd) {
		document.getElementById('find').innerHTML = 'Plus grand !';
	}
	else if (check > rnd) {
		document.getElementById('find').innerHTML = 'Plus petit !';
	}
	else {
		document.getElementById('find').innerHTML = 'Tu as trouvé bravo c\'était bien '+rnd+' !';
	}
}

document.getElementById('valider').onclick = checkNumber;