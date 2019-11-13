var grille = document.getElementById('jeu');
var reset = document.getElementById('restart');
var player = true;
grille.onclick = placerPion;
reset.onclick = restart;


function placerPion(e) {
	//alert(e.target.id);
	if (player) {
		e.target.classList.toggle("player1");
		player = false;
		//if (document.getElementById('jeu').getRowStyle = 'player1' ) {
		//	alert('Victoire du Joueur 1 !')
		//}
	}
	else {
		e.target.classList.toggle("player2");
		player = true;
		//if (document.getElementById('jeu').getRowStyle = 'player2' ) {
		//	alert('Victoire du Joueur 2 !')
		//}
	}

}

function restart() {
	for (var i = 0; i < grille.children.length; i++) {
		if (grille.children[i].classList.contains('player1') || grille.children[i].classList.contains('player2')) {
			grille.children[i].className = '';
		}
	}
}