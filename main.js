// Tableau pour stocker les utilisateurs
const utilisateurs = [];

// Récupérez les éléments du DOM
const nomInput = document.getElementById('nom');
const ageInput = document.getElementById('age');
const adresseInput = document.getElementById('adresse');
const listeUtilisateurs = document.getElementById('listeUtilisateurs');
const valider = getElementById("valider")
// Ajoutez un écouteur d'événements au bouton "Valider"
valider.addEventListener('click', function() {
    // Récupérez les valeurs des champs de saisie
    const nom = nomInput.value;
    const age = parseInt(ageInput.value); // Convertissez l'âge en nombre
    const adresse = adresseInput.value;

    // Générez un identifiant unique (peut être basé sur la date actuelle, par exemple)
    const id = Date.now();

    // Créez un objet utilisateur avec les données saisies
    const utilisateur = {
        id: id,
        nom: nom,
        age: age,
        adresse: adresse
    };

    // Ajoutez l'utilisateur au tableau
    utilisateurs.push(utilisateur);

    // Affichez la liste des utilisateurs dans le HTML
    afficherListeUtilisateurs();

    // Effacez les valeurs des champs de saisie
    nomInput.value = '';
    ageInput.value = '';
    adresseInput.value = '';
});

// Fonction pour afficher la liste des utilisateurs
function afficherListeUtilisateurs() {
    // Effacez le contenu précédent
    listeUtilisateurs.innerHTML = '';

    // Parcourez le tableau d'utilisateurs et affichez-les
    utilisateurs.forEach(function(utilisateur) {
        const utilisateurDiv = document.createElement('div');
        utilisateurDiv.className = 'mb-4';

        const nomElement = document.createElement('h2');
        nomElement.className = 'text-2xl font-semibold mb-2';
        nomElement.textContent = `Nom : ${utilisateur.nom}`;

        const ageElement = document.createElement('h3');
        ageElement.className = 'text-xl font-medium mb-2';
        ageElement.textContent = `Âge : ${utilisateur.age}`;

        const adresseElement = document.createElement('p');
        adresseElement.className = 'text-lg font-normal';
        adresseElement.textContent = `Adresse : ${utilisateur.adresse}`;

        utilisateurDiv.appendChild(nomElement);
        utilisateurDiv.appendChild(ageElement);
        utilisateurDiv.appendChild(adresseElement);

        listeUtilisateurs.appendChild(utilisateurDiv);
    });
}
