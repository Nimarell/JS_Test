$carousel = document.getElementById("carousel");
$suivant = document.getElementById("suivant");
$precedent = document.getElementById("precedent");
index = 0
indexMax = 3

// Vous aurez besoin de ce genre de choses :
// $carousel.style.borderColor = "#f00";

function suivant() {
	if (index >= indexMax) {
 		index = 0
 		for (var i = 0; i < $carousel.children.length; i++) {
 			$carousel.children[i].style.display='inline-block';
 		}
 		console.log($carousel.children);
 		console.log('index: '+index);
 	}
 	else {
 		console.log($carousel.children);
 		console.log($carousel.children[index]);
 		$carousel.children[index].style.display='none';
 		index++
 		console.log('index: '+index);
 	}
}

function precedent() {
	if (index == 0) {
 		index = 3
 		for (var i = 0; i < (($carousel.children.length)-1); i++) {
 			$carousel.children[i].style.display='none';
 		}
 		console.log($carousel.children);
 		console.log('index: '+index);
 	}
 	else {
 		console.log($carousel.children);
 		console.log($carousel.children[index]);
 		index--
 		$carousel.children[index].style.display='inline-block';
 		console.log('index: '+index);
 	}
	
}

$suivant.onclick = suivant;
$precedent.onclick = precedent;