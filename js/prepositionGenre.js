console.log("Youhoooo !");

const paysFeminin =  estUnPaysFeminin();
const paysMasculinVoyelle = ["Afghanistan","Angola", "Azerbaidjan", "Equateur", "Irak","Iran","Ouganda", "Ouzbékistan", "Urugay","Oman"];
const paysMasculin = estUnPaysMasculin();
const paysPluriel = ["Bahamas", "Bermudes", "Comores", "Émirats arabes unis", "États-Unis", "Fidji", "Kiribati", "Îles Caïmans", "Îles Féroé", "îles Vierges britanniques", "Palaos", "Pays-Bas", "Philippines", "Samoa Américaines", "Seychelles", "Tokelau", "Tonga", "Tuvalu"];
const paysSansArticle = ["Bahreïn", "Chypre", "Cuba", "Djibouti", "Haïti", "Hong Kong", "Israël", "Kiribati", "Jersey", "Madagascar", "Malte", "Maurice", "Mayotte", "Monaco", "Montserrat", "Nauru", "Niue", "Oman", "Saint-Barthélemy", "Sainte-Hélène"];


function estUnPaysFeminin(paysEmpl) {
    // Liste des exceptions qui sont masculines bien qu'elles finissent par "e"
    const exceptionsMasculines = ["Mexique", "Cambodge", "Mozambique", "Zimbabwe", "Belize", "Suriname"];

    // Vérification si le pays est dans la liste des exceptions
    if (exceptionsMasculines.includes(paysEmpl)) {
        return false; // Le pays est masculin
    }

    // Vérification si le pays se termine par "e"
    if (paysEmpl.endsWith("e")) {
        return true; // Le pays est féminin
    } else {
        return false; // Le pays est masculinu
    }
}

function estUnPaysMasculin(paysEmpl) {
    // Liste des exceptions qui sont masculines bien qu'elles finissent par "e"
    const exceptionsMasculinesVoyelles = paysMasculinVoyelle;
    console.log("Afficher mes exceptions et voir si ça affice bien mon tableau des Pays Masculins à qui commence par une Voyelle : " + exceptionsMasculinesVoyelles);
    

    // Vérification si le pays est dans la liste des exceptions
    if (exceptionsMasculinesVoyelles.includes(paysEmpl)) {
        return false; // Le pays est un pays masculin commençant par une voyelle
    }

    // Vérification si le pays se termine par "e"
    if (paysEmpl.endsWith("e")) {
        return false; // Le pays est féminin
    } else {
        return true; // Le pays est masculin
    }
}

// console.log(estUnPaysFeminin("France"));      
// console.log(estUnPaysFeminin("Canada"));      
// console.log(estUnPaysFeminin("Mexique"));     
// console.log(estUnPaysFeminin("Italie"));      
// console.log(estUnPaysFeminin("Cambodge"));

// console.log(estUnPaysMasculin("France"));      
// console.log(estUnPaysMasculin("Canada"));      
// console.log(estUnPaysMasculin("Mexique"));     
// console.log(estUnPaysMasculin("Italie"));      
// console.log(estUnPaysMasculin("Cambodge"));   


