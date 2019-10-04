var tab = ["Bob","Julien","Roger"]; 

function afficherListe() {
	var firstName = "";
	for (var i = 0; i < tab.length; i++) {
		firstName += '<li>'+tab[i]+'</li>'
	}
	document.getElementById('liste').innerHTML = firstName;
}

function ajouterElement() { 
	var add = document.getElementById('texte').value;
	tab.push(add);
	afficherListe();
}

function annulerElement() {
	tab.pop();
	afficherListe();
}

document.getElementById('ajouter').onclick = ajouterElement;
document.getElementById('annuler').onclick = annulerElement;

afficherListe();