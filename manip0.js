$liste = document.getElementById("liste");
var saveList = $liste.children
var removeSelect = [];

function selectionne(e) {
 	// e.target correspond au <li> qui a été cliqué dans le <ul> !
	e.target.classList.toggle("selected");
}

function eraseSelect() {
	for (var i = 0; i < $liste.children.length; i++) {
		if ($liste.children[i].classList.contains("selected")){
			removeSelect.push($liste.removeChild(liste.children[i]));
			i--
			console.log(removeSelect);
		}
	console.log("Boucle "+i);
	}
	console.log($liste.children);
}

function restaure() {
	for (var i = 0; i < removeSelect.length; i++) {
		document.getElementById('liste').innerHTML += removeSelect[i];
		console.log($liste.children);
	}
}

$liste.onclick = selectionne;
document.getElementById('erase').onclick = eraseSelect;
document.getElementById('restaure').onclick = restaure;