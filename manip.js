$liste = document.getElementById("liste");

function selectionne(e) {
 	// e.target correspond au <li> qui a été cliqué dans le <ul> !
	e.target.classList.toggle("selected");
}

function eraseSelect() {
	console.log($liste.children);
}

$liste.onclick = selectionne;
document.getElementById('erase').onclick = eraseSelect;