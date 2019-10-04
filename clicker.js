var nbTotal = 0
var click = 1
var priceAuto = 10
var autoClick = 0

function updateNb() {
	document.getElementById('nbClick').innerHTML = 'Compte de $clicks$: '+nbTotal
	document.getElementById('autoClick').innerHTML = 'Acheter clicker auto $'+priceAuto+'clicks$'
	document.getElementById('clickerAuto').innerHTML = 'Nombre de clicker auto (1 click/s): '+autoClick
	document.getElementById('btnClick').innerHTML = click+' $clicks$'
}

function addClick() {
	nbTotal = nbTotal + click
	updateNb();
}

function timerClick() {
	if (nbTotal >= priceAuto){
		nbTotal = (nbTotal - priceAuto)
		autoClick++
		priceAuto = (priceAuto + 15)
		updateNb();
		setInterval(addClick, 1000);
	}
	else {
		alert('Pas assez de $clicks$ !')
	}
}

document.getElementById('autoClick').onclick = timerClick;
document.getElementById('btnClick').onclick = addClick;

updateNb();