$liste = document.getElementById("liste");

function selectionne(e) {
 	// e.target correspond au <li> qui a été cliqué dans le <ul> !
	e.target.classList.toggle("selected");
}

function eraseSelect() {
	for (var i = 0; i < $liste.children.length; i++) {
		if ($liste.children[i].classList.contains("selected")){
			$liste.children[i].style.display='none';
		}
	}
}

function restaure() {
	for (var i = 0; i < $liste.children.length; i++) {
		if ($liste.children[i].classList.contains("selected")){
			$liste.children[i].classList.toggle("selected");
			$liste.children[i].style.display='list-item';
		}
	}
	console.log($liste.children)
}

$liste.onclick = selectionne;
document.getElementById('erase').onclick = eraseSelect;
document.getElementById('restaure').onclick = restaure;