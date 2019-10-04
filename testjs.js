/* Story Teller

alert("Créeons une histoire !");
var question = 5

var characterName = prompt("Comment s'appelle ton personnage ? ("+ question +" questions restantes.)");
question -= 1
console.log("Son personnage s'appelle"+ characterName);

var characterDream = prompt ("Quel est son objectif, son rêve ? ("+ question +" questions restantes.)");
question -= 1

var characterLocation = prompt ("Où doit-il aller pour le réaliser ? ("+ question +" questions restantes.)");
question -= 1

var characterWar = prompt ("Est-il armé ? (oui / non) ("+ question +" questions restantes.)");
	question -= 1
	if (characterWar == "oui") {
		characterWeapon = prompt ("Quelle est son arme ? ("+ question +" questions restantes.)");
	}
	question -= 1

var characterEnemy = prompt ("Quel est son principal obstacle / adversaire ? ("+ question +" questions restantes.)");
	if (characterWar == "oui") {
		var story = "Il était une fois "+ characterName +" qui s'en alla à "+ characterLocation +" pour réaliser son rêve de "+ characterDream +" arborant fièrement "+ characterWeapon +" pour triompher de "+ characterEnemy +" !";
	}
	else {
		var story = "Il était une fois "+ characterName +" qui s'en alla à "+ characterLocation +" pour réaliser son rêve de "+ characterDream +" en triomphant de "+ characterEnemy +" !";
	}

alert(story); 
*/



/* Exercice 3.1 : Les tests */

var nb31 = prompt ("Exercice 3.1 - Donne moi un nombre, je te dirais s'il est positif, négatif ou nul.");
	console.log ("Son nombre est "+nb31);
if (nb31 > 0) {
	alert ("Ton nombre est positif.");
}
else if (nb31 < 0) {
	alert ("Ton nombre est négatif.");
}
else
	alert ("Ton nombre est nul.");

/* Exercice 3.2 et 3.4 : Les tests */

alert ("Exercice 3.2 et 3.4 - Donne moi deux nombre, je te dirais si leur produit est positif, négatif ou nul.");
var nb32_1 = prompt ("Donne moi ton premier nombre.");
	console.log ("Son nombre est "+nb32_1);
var nb32_2 = prompt ("Donne moi ton second nombre.");
	console.log ("Son nombre est "+nb32_2);
if ((nb32_1 < 0 && nb32_2 < 0) || (nb32_1 > 0 && nb32_2 > 0)) {
	alert ("Le produit de "+nb32_1+" et "+nb32_2+" est positif.");
}
else if (nb32_1 == 0 || nb32_2 == 0) {
	alert ("Le produit de "+nb32_1+" et "+nb32_2+" est nul.");
}
else {
	alert ("Le produit de "+nb32_1+" et "+nb32_2+" est négatif.");
}

/* Exercice 3.3 : Les tests */

alert ("Exercice 3.3 - Donne moi trois noms, je te dirais s'ils sont classés dans l'ordre alphabétique ou non.");
var nb33_1 = prompt ("Donne moi ton premier nom.");
	console.log ("Son premier nom est "+nb33_1);
var nb33_2 = prompt ("Donne moi ton deuxième nom.");
	console.log ("Son deuxième nom est "+nb33_2);
var nb33_3 = prompt ("Donne moi ton troisième nom.");
	console.log ("Son troisième nom est "+nb33_3);
if (nb33_1 < nb33_2 && nb33_2 < nb33_3) {
	alert ("Ils sont bien rangés dans l'ordre alphabétique.");
}
else {
	alert ("Ils ne sont pas rangés dans l'ordre alphabétique.");
}

/* Exercice 3.5 : Les tests */

var nb35 = prompt ("Exercice 3.5 - Donne moi l'âge d'un enfant, je te dirais dans quelle catégorie il est.");
if (nb35 > 12) {
	alert ("L'enfant est dans la catégorie \"Cadet\".");
}
else if (nb35 <= 11 && nb35 >= 10) {
	alert ("L'enfant est dans la catégorie \"Minime\".");
}
else if (nb35 <= 9 && nb35 >= 8) {
	alert ("L'enfant est dans la catégorie \"Pupille\".");
}
else if (nb35 <= 7 && nb35 >= 6) {
	alert ("L'enfant est dans la catégorie \"Poussin\".");
}
else {
	alert ("L'enfant est trop jeune pour entrer dans une catégorie.");
}

/* Exercice 4.2 et 4.3 : La Logique */

alert ("Exercice 4.2 et 4.3 - Donne moi l'heure, les minutes et les secondes, je te dirais ce qu'il en est une seconde plus tard.");
var heure42 = prompt ("Quelle heure est-il ? (un nombre entre 0 et 24)");
var minute42 = prompt ("Combien de minutes est-il ? (un nombre entre 0 et 59");
var seconde42 = prompt ("Combien de secondes est-il ? (un nombre entre 0 et 59");
seconde42++
	console.log ("Son nombre de seconde +1 est "+seconde42);
if (seconde42 == 60) {
	minute42++
	seconde42 = 0
}
if (minute42 == 60) {
	heure42++
	minute42 = 0
}
if (heure42 == 24) {
	heure42 = 0
}
alert ("Dans une seconde il sera "+heure42+" heures, "+minute42+" minutes et "+seconde42+" secondes.");

/* Exercice 4.4 : La Logique */

var nb44 = prompt ("Exercice 4.4 - Combien de photographies veux-tu faire ? Je te donnerais le prix total.");
if (nb44 > 30) {
	nb44 = (2.80+0.08*(nb44-30));
}
else if (nb44 <= 10) {
	nb44 = (0.10*nb44);
}
else {
	nb44 = (1+0.09*(nb44-10));
}
alert ("Le prix total est de "+nb44.toFixed(2)+" €.");

/* Exercice 4.5 : La Logique */

alert ("Exercice 4.5 - Les habitants paient l'impôt selon certaines règles. Dis moi ton sexe et ton âge et je te dirais si tu es impôsable.");
var nb45_1 = prompt ("Es-tu un homme ou une femme ? (homme / femme)");
var nb45_2 = prompt ("Quel âge as-tu ?");
	console.log ("Son sexe: "+nb45_1);
	console.log ("Son âge: "+nb45_2);
if (nb45_1 == "homme" && nb45_2 >= 20) {
	alert ("Désolé, tu es impôsable...");
	console.log ("condition 1 (homme imposable)");
}
else if (nb45_1 == "femme" && nb45_2 >= 18 && nb45_2 <= 35) {
	alert ("Désolé, tu es impôsable...");
	console.log ("condition 2 (femme imposable)");
}
else {
	alert ("Toutes mes félicitations, tu es exempté d'impôts ! CHAMPAGNE !");
	console.log ("condition 3 (non imposable)");
}

/* Exercice 4.6 : La Logique */

alert ("Exercice 4.6 - C'est les éléctions législatives. Donne moi le nombre de voix de chacun des 4 candidats, je te dirais ce qu'il en est pour le premier.");
var nb46_1 = prompt ("Combien de voix a obtenu le candidat n°1 ?");
var nb46_2 = prompt ("Combien de voix a obtenu le candidat n°2 ?");
var nb46_3 = prompt ("Combien de voix a obtenu le candidat n°3 ?");
var nb46_4 = prompt ("Combien de voix a obtenu le candidat n°4 ?");
if (nb46_1 > (nb46_2+nb46_3+nb46_4)) {
	alert ("Le premier candidat est élu à plus de 50% des suffrages.");
	console.log ("1er: "+nb46_1+" / Addition 3 autres: "+(nb46_2+" "+nb46_3+" "+nb46_4));
}
else if ((nb46_1 / (nb46_1+nb46_2+nb46_3+nb46_4)) < 0.125) {
	alert ("Le premier candidat est battu...");
	console.log ("1er: "+nb46_1+" / Addition 4: "+(nb46_1+" "+nb46_2+" "+nb46_3+" "+nb46_4));
}
else if ((nb46_1 / (nb46_1+nb46_2+nb46_3+nb46_4)) > 0.125) {
	if ((nb46_1 > nb46_2) && (nb46_1 > nb46_3) && (nb46_1 > nb46_4)) {
		alert ("Le premier candidat se trouve en ballotag faborable.");
		console.log ("1er (supérieur aux autres): "+nb46_1+" / Valeurs des 4: "+(nb46_1+" "+nb46_2+" "+nb46_3+" "+nb46_4));
	}
	else {
		alert ("Le premier candidat se trouve en ballotage défavorable.");
		console.log ("1er (inférieur à un autre): "+nb46_1+" / Valeurs des 4: "+(nb46_1+" "+nb46_2+" "+nb46_3+" "+nb46_4));
	}
}

/* Exercice 5.1 : Les boucles */

var nb51 = prompt ("Exercice 5.1 - Choisis un nombre entre 1 et 3.");
while ((nb51 < 1) || (nb51 > 3)) {
	nb51 = prompt ("Le numéro choisi n'est pas entre 1 et 3, recommence.");
}
alert ("Tu as choisi "+nb51+" ! C'est entre 1 et 3, bravo, tu es intelligent !")

/* Exercice 5.2 : Les boucles */

var nb52 = prompt ("Exercice 5.2 - Choisis un nombre entre 10 et 20.");
while (nb52 > 20 || nb52 < 10) {
	if (nb52 > 20) {
		nb52 = prompt ("Plus petit !");
	}
	else {
		nb52 = prompt ("Plus grand !");
	}
}
alert ("Le nombre "+nb52+" est bien entre 10 et 20, bravo !");

/* Exercice 5.3 : Les boucles */

var nb53 = prompt ("Exercice 5.3 - Donne moi un nombre, je te donnerais les 10 suivants.");
for (var i = 0; i < 10; i++) {
	nb53++
	alert (nb53);
	console.log ("Boucle "+i+" : "+nb53);
}

/* Exercice 5.5 : Les boucles */

var nb55 = prompt ("Exercice 5.5 - Donne moi un nombre, je te donnerais sa table de multiplication.");
for (var i = 1; i < 11; i++) {
	alert (nb55+" x "+i+" = "+(nb55*i));
	console.log ("Boucle "+i+" : "+nb55+" x "+i+" = "+(nb55*i));
}

/* Exercice 5.6 : Les boucles */

var nb56 = prompt ("Exercice 5.6 - Donne moi un nombre et je calculerais la somme des entiers jusqu'à ce nombre.");
var somme56 = 0
for (var i = 0; i <= nb56; i++) {
	somme56 = (somme56 + i)
	console.log ("Boucle "+i+" : nb56 = "+nb56);
	console.log ("Boucle "+i+" : somme56 = "+somme56);
}
alert ("La somme des entiers jusqu'à "+nb56+" est de "+somme56+" .");

/* Exercice 6.1 : Les tableaux */

var table61 = [0,0,0,0,0,0,0];
alert ("Exercice 6.1 - "+table61);
	console.log (table61);

/* Exercice 6.2 : Les tableaux */

var table62 = ["A","E","I","O","U","Y"];
alert ("Exercice 6.2 - "+table62);
	console.log (table62);

/* Exercice 6.3 : Les tableaux */

var table63 = [];
for (var i = 0; i < 9; i++) {
	table63[i] = prompt ("Entre la valeur n°"+(i+1)+".");
	console.log ("Boucle "+i+" : "+table63);
	console.log (table63)
}
alert (table63);

/* Exercice 6.4 : Les tableaux */

var nb64 = prompt ("Exercice 6.4 - Combien de valeurs souhaites-tu entrer ?");
var table64 = [];
n64 = 0
p64 = 0
for (var i = 0; i < nb64; i++) {
	table64[i] = prompt ("Entre la valeur n°"+(i+1)+".");
	console.log ("Boucle "+i+" : "+table64);
	if (table64[i] > 0) {
		p64++
		console.log ("Boucle "+i+" : p64 ="+p64);
	}
	else {
		n64++
		console.log ("Boucle "+i+" : n64 ="+n64);
	}
}
alert ("Dans tes valeurs "+table64+" tu as "+p64+" valeurs positives et "+n64+" valeurs négatives.")

/* Exercice 7.1 : Les tableaux multidimensionnels */

var table71 = [];
table71.lenght = 12;

for (var i = 0; i < 5; i++) {
	table71[i] = [];
}
for (var i = 0; i < 12; i++) {
	for (var j = 0; j < 5; j++) {
		table71[i][j] = 0;
		console.log ("Case "+i+" - "+j+" : "+table71[i][j]);
	}
}
