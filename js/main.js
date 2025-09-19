/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

const block_Categorie = document.querySelectorAll(".block_Categorie");
const content_Categorie = document.querySelectorAll(".modal_containt");
const toggle_Modal = document.querySelectorAll('.toggle-Modal');

block_Categorie.forEach(content => {
	content.addEventListener('click', () => {
		const targetID = content.getAttribute('data-target');
		const targetSection = document.querySelector(targetID);
		targetSection.classList.toggle("afficheContent");
	});
});

toggle_Modal.forEach(close => {
	close.addEventListener('click', () => {
		const contentActive = document.querySelector(".afficheContent");
		console.log(contentActive);
		contentActive.classList.toggle('afficheContent');
	});
});

// 1. Sélectionnez TOUS les éléments avec la classe .element-a-observer
const mesElements = document.querySelectorAll('.element-a-observer');

// 2. Créez une seule instance d'IntersectionObserver
// La fonction de rappel reste la même, elle est gérée pour tous les éléments
const observateur = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
		console.log('Un élément est apparu : ', entry.target);
		observer.unobserve(entry.target); // Arrête d'observer cet élément
		entry.target.classList.add('visible'); // Ajoute une classe pour l'animation
    }
  });
});

// 3. Bouclez sur chaque élément et dites à l'observateur de le surveiller
mesElements.forEach(element => {
  observateur.observe(element);
});



