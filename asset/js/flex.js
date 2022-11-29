// Sélection de tous les items par défaut
let listeItems = document.querySelectorAll('.item');
// Lie l'événement clique d'un item à la fonction supprimeItem
listeItems.forEach(item => {
    item.addEventListener('click', supprimeItem)
});

let listeBoutonsChoix = document.querySelectorAll('.liste-bouton-choix .bouton-choix');

let maDiv = document.querySelector(".madiv");

function supprimeItem(e) {
    // e.target représente l'élément qui a lancé l'événement
    e.target.remove();
}

function ajouteItem() {
    
    let lastItem = maDiv.querySelector("div:last-child");
    let newItem = document.createElement("div");

    newItem.innerHTML = parseInt(lastItem.innerHTML) + 1;
    newItem.classList.add("item");
    newItem.addEventListener('click', supprimeItem);
    maDiv.append(newItem);
}

function modifierJustify(bouton){
    let valeurJustify = bouton.getAttribute('data-choix');
    let ligneCode = document.querySelector(".ligne-justify-content");
    maDiv.style.justifyContent = valeurJustify;
    ligneCode.innerHTML = "justify-content: " + valeurJustify + ";";

    listeBoutonsChoix.forEach( bouton => bouton.classList.remove('bouton-select'));
    bouton.classList.add('bouton-select');
}