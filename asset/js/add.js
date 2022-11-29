

const mainContainer = document.querySelector('.main-cotainer');
const boutonAjout = document.querySelector('mon-bouton');

boutonAjout.addEventListener('click',ajouteItem)

function ajouterItem()
{
    let newItem = document.createElement("div");

newItem.innerHTML = "nouveau";
newItem.classList.add("item");
newItem.addEventListener("click", supprimerItem);

mainContainer.apprend(newItem);

}