class contact {
	constructor(firstName, name, number) {
		this.prenom = firstName;
		this.nom = name;
		this.numero = number;
	}
}

contacts = [{
	 prenom: "Julien",
	 nom: "Grillot",
	 numero: "0123456789"
	},
	 {
	 prenom: "John",
	 nom: "Smith",
	 numero: "0987654321"
	}];

function texteContact(contact) {
	 var result = contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
	 return result;
}
	
//alert(texteContact(contacts[0])); // affiche « Julien Grillot (0123456789) »

function afficherListe() {
	var annuaire = "";
	for (var i = 0; i < contacts.length; i++) {
		annuaire += '<li>'+texteContact(contacts[i])+'</li>'
	}
	document.getElementById('liste').innerHTML = annuaire;
}

function ajouter() {
	var firstName = document.getElementById('firstName').value;
	var name = document.getElementById('name').value;
	var number = document.getElementById('number').value;
	contacts.push(new contact(firstName, name, number));
	afficherListe();
}

function search() {
	var searchInput = document.getElementById('searchInput').value;
	var searchList = ""
	for (var i = 0; i < contacts.length; i++) {
		if (contacts[i].prenom == searchInput || contacts[i].nom == searchInput || contacts[i].numero == searchInput) {
			searchList += "<li>" + contacts[i].prenom + " " + contacts[i].nom + " (" + contacts[i].numero + ")</li>";
			afficherListe();
		}
	}
	document.getElementById('resultatRecherche').innerHTML = searchList;
}

afficherListe();
document.getElementById('add').onclick = ajouter;
document.getElementById('searchBtn').onclick = search;