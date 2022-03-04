var url = location.pathname;
console.log(url);
var index = url.lastIndexOf("/") + 1;
console.log(index);
let path = url.substring(index);
console.log(path);

var html_diplomes, html_formations, html_competences, html_langues, html_projets = "";
var a, b, c, d, e;
const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

const formatDate = (date) => {
    const arr = date.split("-");
    let aaaa = arr[0];
    let mm = arr[1] - 1;
    let jj = arr[2];

    let formatted_date = jj + " " + mois[mm] + " " + aaaa;
    return formatted_date;
}

var pers;
var liste_diplomes = [];
var liste_langues = [];
var liste_formations = [];
var liste_competences = [];
var liste_projets = [];
var personne;
var Algeria = [
    "Adrar",
    "Ain Defla",
    "Ain Temouchent",
    "Alger",
    "Annaba",
    "Batna",
    "Bechar",
    "Bejaia",
    "Biskra",
    "Blida",
    "Bordj Bou Arreridj",
    "Bouira",
    "Boumerdes",
    "Chlef",
    "Constantine",
    "Djelfa",
    "El Bayadh",
    "El Oued",
    "El Tarf",
    "Ghardaia",
    "Guelma",
    "Illizi",
    "Jijel",
    "Khenchela",
    "Laghouat",
    "Muaskar",
    "Medea",
    "Mila",
    "Mostaganem",
    "M'Sila",
    "Naama",
    "Oran",
    "Ouargla",
    "Oum el Bouaghi",
    "Relizane",
    "Saida",
    "Setif",
    "Sidi Bel Abbes",
    "Skikda",
    "Souk Ahras",
    "Tamanghasset",
    "Tebessa",
    "Tiaret",
    "Tindouf",
    "Tipaza",
    "Tissemsilt",
    "Tizi Ouzou",
    "Tlemcen",
];

// begin index page
if (path === "index.html") {
    // nombre de diplome
    var nbrd = document.getElementById("nbrd");
    // nombre de formation
    var nbrf = document.getElementById("nbrf");
    // nombre de compétence
    var nbrc = document.getElementById("nbrc");
    // nombre de langues
    var nbrl = document.getElementById("nbrl");
    // nombre de projet
    var nbrp = document.getElementById("nbrp");


    // var diplomes = document.getElementById("diplomes");
    // var formations= document.getElementById("formations");
    // var langues= document.getElementById("langues");
    // var competences = document.getElementById("competences");


    // diplome
    nbrd.addEventListener("change", () => {
        console.log(nbrd.value);
        html_diplomes = "";
        for (let i = 0; i < nbrd.value; i++) {
            html_diplomes += `
         <div class="col-4 mt-2  mb-2">
        <div class="form-floating ">
            <input type="text" class="form-control" nom="nomD" id="nomD${i}" placeholder="BAC">
            <label for="nomD">Nom du diplome ${i + 1}</label>
        </div>
    </div>
    <div class="col-4 mt-2  mb-2">
        <div class="form-floating ">
            <input type="text" class="form-control" nom="detailD" id="detailD${i}" placeholder="mention">
            <label for="detailD">Détail sur le diplome ${i + 1}</label>
        </div>
    </div>
    <div class="col-4 mt-2  mb-2">
        <div class="form-floating ">
            <input type="number" class="form-control" nom="anneD" id="anneD${i}" placeholder="2015">
            <label for="anneD">Année du diplome ${i + 1}</label>
        </div>
    </div>`;

        }
        diplomes.innerHTML = html_diplomes;
    });

    // formation
    nbrf.addEventListener("change", () => {
        console.log(nbrf.value);
        html_formations = "";
        for (let i = 0; i < nbrf.value; i++) {

            html_formations += `
            <div class="col-3 mt-2  mb-2">
           <div class="form-floating ">
               <input type="text" class="form-control" nom="nomF" id="nomF${i}" placeholder="BAC">
               <label for="nomF">Nom de la formation ${i + 1}</label>
           </div>
       </div>
       <div class="col-3 mt-2  mb-2">
           <div class="form-floating ">
               <input type="text" class="form-control" nom="detailF" id="detailF${i}" placeholder="mention">
               <label for="detailF">Détails sur la formation ${i + 1}</label>
           </div>
       </div>
       <div class="col-3 mt-2  mb-2">
           <div class="form-floating ">
               <input type="text" class="form-control" nom="dateDF" id="dateDF${i}" placeholder="2015">
               <label for="dateDF">mois-année début formation ${i + 1}</label>
           </div>
       </div>
       <div class="col-3 mt-2  mb-2">
           <div class="form-floating ">
               <input type="text" class="form-control" nom="dateFF" id="dateFF${i}" placeholder="2015">
               <label for="dateFF">mois-année fin formation ${i + 1}</label>
           </div>
       </div>
       `;

        }

        formations.innerHTML = html_formations;
    });


    // langues

    nbrl.addEventListener("change", (e) => {
        e.preventDefault();
        console.log(nbrl.value);
        html_langues = "";
        for (let i = 0; i < nbrl.value; i++) {
            html_langues += `
     <div class="col-5 mt-2  mb-2">
    <div class="form-floating ">
        <input type="text" class="form-control" nom="nomL" id="nomL${i}" placeholder="BAC">
        <label for="nomL">Langue ${i + 1}</label>
    </div>
</div>
<div class="col-4 mt-2  mb-2">
    <div class="form-floating ">
        <select id="nivL${i}" class="form-select" aria-label="Default select example" aria-placeholder="nieaux">
        <option  selected disabled>Niveau de la langue ${i + 1}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </div>
</div>

`;

        }
        langues.innerHTML = html_langues;
    });


    // projet
    nbrp.addEventListener("change", () => {
        console.log(nbrp.value);
        html_projets = "";
        for (let i = 0; i < nbrp.value; i++) {
            html_projets += `
     <div class="col-4 mt-2  mb-2">
    <div class="form-floating ">
        <input type="text" class="form-control" nom="nomP" id="nomP${i}" placeholder="BAC">
        <label for="nomP">Nom du projet ${i + 1}</label>
    </div>
</div>
<div class="col-4 mt-2  mb-2">
    <div class="form-floating ">
        <input type="text" class="form-control" nom="detailP" id="detailP${i}" placeholder="mention">
        <label for="detailP">Détail sur le projet ${i + 1}</label>
    </div>
</div>
<div class="col-4 mt-2  mb-2">
    <div class="form-floating ">
        <input type="number" class="form-control" nom="anneP" id="anneP${i}" placeholder="2015">
        <label for="anneP">Année du projet ${i + 1}</label>
    </div>
</div>`;

        }
        projets.innerHTML = html_projets;
    });

    // competences

    nbrc.addEventListener("change", () => {
        console.log(nbrc.value);
        html_competences = "";
        for (let i = 0; i < nbrc.value; i++) {
            html_competences += `
     <div class="col-5 mt-2  mb-2">
    <div class="form-floating ">
        <input type="text" class="form-control" nom="nomC" id="nomC${i}" placeholder="JAVA">
        <label for="nomC">Nom de la compétence ${i + 1}</label>
    </div>
</div>
<div class="col-4 mt-2  mb-2">
    <div class="form-floating ">
        <select id="nivC${i}"  class="form-select" aria-label="Default select example" aria-placeholder="nieaux">
        <option selected disabled>Selectionnez le nieau de la compétence ${i + 1}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </div>
</div>

`;

        }
        competences.innerHTML = html_competences;
    });

    // function pour créer des diplomes
    function creeDiplome(n) {
        for (let i = 0; i < n; i++) {
            var nomD = document.getElementById(`nomD${i}`).value;
            var detailD = document.getElementById(`detailD${i}`).value;
            var anneeD = document.getElementById(`anneD${i}`).value;

            liste_diplomes.push(nomD);
            liste_diplomes.push(detailD);
            liste_diplomes.push(anneeD);

        }
    }

    // function pour créer des langues
    function creeLangue(n) {
        for (let i = 0; i < n; i++) {
            var nomL = document.getElementById(`nomL${i}`).value;
            var nivL = document.getElementById(`nivL${i}`).value;

            liste_langues.push(nomL);
            liste_langues.push(nivL);

        }
    }

    // function pour créer des formations
    function creeFormation(n) {
        for (let i = 0; i < n; i++) {
            var nomF = document.getElementById(`nomF${i}`).value;
            var detailF = document.getElementById(`detailF${i}`).value;
            var dateDF = document.getElementById(`dateDF${i}`).value;
            var dateFF = document.getElementById(`dateFF${i}`).value;

            liste_formations.push(nomF);
            liste_formations.push(detailF);
            liste_formations.push(dateDF);
            liste_formations.push(dateFF);

        }
    }

    // function pour créer des projets
    function creeProjet(n) {
        for (let i = 0; i < n; i++) {
            var nomP = document.getElementById(`nomP${i}`).value;
            var detailP = document.getElementById(`detailP${i}`).value;
            var anneeP = document.getElementById(`anneP${i}`).value;

            liste_projets.push(nomP);
            liste_projets.push(detailP);
            liste_projets.push(anneeP);

        }
    }

    // function pour créer des competences
    function creeCompetence(n) {
        for (let i = 0; i < n; i++) {
            var nomC = document.getElementById(`nomC${i}`).value;
            var nivC = document.getElementById(`nivC${i}`).value;

            liste_competences.push(nomC);
            liste_competences.push(nivC);

        }
    }

    // recuperer les données

    var btnC = document.getElementById("btnC");
    var btnS = document.getElementById("btnS");
    var cvForm = document.getElementById("cvForm");

    cvForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const sexe = document.cvForm.sexe.value;
        const daten = document.getElementById("daten").value;
        const date = formatDate(daten);
        const lieun = document.getElementById("lieun").value;
        const nationalite = document.getElementById("nationalite").value;
        const adresse = document.getElementById("adresse").value;
        const ville = document.getElementById("ville").value;
        const codep = document.getElementById("codep").value;
        const statusC = document.getElementById("statusC").value;
        const email = document.getElementById("email").value;
        const tel = document.getElementById("tel").value;
        const photo = document.getElementById("photo").value;
        const color = document.getElementById("color").value;
        const profile = document.getElementById(`profile`).value;
        const nbrD = nbrd.value;
        creeDiplome(nbrD);

        const nbrL = nbrl.value;
        creeLangue(nbrL);

        const nbrF = nbrf.value;
        creeFormation(nbrF);

        const nbrC = nbrc.value;
        creeCompetence(nbrC);

        const nbrP = nbrp.value;
        creeProjet(nbrP);

        var path = photo.split(`fakepath\\`);
        const img = path[1];

        console.log("on submit");

        console.log("color= " + color);
        console.log("img= " + img);
        console.log("sexe= " + sexe);
        console.log("daten= " + date);
        console.log("profile= " + profile);
        console.log("status " + statusC);
        console.log("langues " + liste_langues);
        console.log("diplomes " + liste_diplomes);
        console.log("formations " + liste_formations);
        console.log("projets " + liste_projets);
        console.log("competences " + liste_competences);



        if (nom && prenom && sexe && daten && lieun && adresse && nationalite && ville && codep && statusC && email && tel) {

            console.log("bloc if");

            personne = {
                nom,
                prenom,
                sexe,
                daten: date,
                lieun,
                adresse,
                nationalite,
                ville,
                codep,
                statusC,
                email,
                tel,
                profile,
                photo: img,
                color
            };


            console.log("personne: " + personne);
            console.log("langues " + liste_langues);
            console.log("diplomes " + liste_diplomes);
            console.log("formations " + liste_formations);
            console.log("projets " + liste_projets);
            console.log("competences " + liste_competences);


            localStorage.setItem("pers", JSON.stringify(personne));
            localStorage.setItem("l_langues", liste_langues);
            localStorage.setItem("l_diplomes", liste_diplomes);
            localStorage.setItem("l_formations", liste_formations);
            localStorage.setItem("l_projets", liste_projets);
            localStorage.setItem("l_competences", liste_competences);

            //  btnS.classList.add("d-none");
            //  btnC.classList.remove("d-none");

        }
        else {

            console.log("bloc else");

            alert("Remplisser les cases vides");
        }





    });





}


// end index


// monCV page
else if (path === "monCV.html") {

    function ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }







    // onload infos CV

    onload = () => {

        personne = JSON.parse(localStorage.getItem("pers"));
        liste_langues = localStorage.getItem("l_langues").split(",");
        liste_diplomes = localStorage.getItem("l_diplomes").split(",");
        liste_formations = localStorage.getItem("l_formations").split(",");
        liste_projets = localStorage.getItem("l_projets").split(",");
        liste_competences = localStorage.getItem("l_competences").split(",");

        console.log(personne.photo);
        console.log("langues " + liste_langues);
        console.log("diplomes " + liste_diplomes);
        console.log("formations " + liste_formations);
        console.log("projets " + liste_projets);
        console.log("competences " + liste_competences);

        // header info
        document.getElementById("infoH").innerHTML = `
    <h1 id="nomH"> ${ucFirst(personne.prenom)} ${ucFirst(personne.nom)}</h1>
    <span id="adrH" class="col"><i class="fas fa-map-pin mx-1"></i> ${ucFirst(personne.ville)}, Algerie</span>
    <span id="emailH" class="col"><i class="fas fa-envelope mx-1"></i> ${personne.email}</span>
    <span id="telH" class="col"><i class="fas fa-phone mx-1"></i> ${personne.tel}</span>
    `;

        // header photo
        if (personne.photo=="") {
            document.getElementById("imgh").style.backgroundColor=personne.color;
        } else {
            
        }
        document.getElementById("imgh").style.backgroundImage.url(`../images/${personne.photo}`);


    }




}
// end monCV page