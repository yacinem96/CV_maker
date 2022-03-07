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

// debut index page
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

    // async function getWilayas() {
    //     var selectWilayas = document.getElementById('ville')


    //     let response = await fetch('../wilayas.json');
    //     let data = await response.json();

    //     selectWilayas.innerHTML +=
    //        `<option>${e.name}</option>`+ data.map(e => `<option>${e.name}</option>`)
    // }

    // getWilayas();

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

            btnS.classList.add("d-none");
            btnC.classList.remove("d-none");

        }
        else {

            console.log("bloc else");

            alert("Remplisser les cases vides");
        }





    });





}


//fin index



//debut monCV page
else if (path === "monCV.html") {

    // fonction ucFirst
    function ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // fonction etat civil
    function etatCivil(etat, personne) {

        switch (etat) {
            case "c":
                return "Célibataire";

            case "m":
                if (personne.sexe == "Homme") {
                    return "Marié";
                } else {
                    return "Mariée";
                }


            case "d":
                if (personne.sexe == "Homme") {
                    return "Divorcé";
                } else {
                    return "Divorcée";
                }


            default:
                return "Autre";

        }
    }
    // fonction convert niv en %
    function calcNiv(niv) {
        if (niv == 3) {
            return 50;
        } else {
            return niv * 20;
        }

    }

    // display langues
    function displayLangue(array) {
        html_langues = "";
        let j = 0;
        for (let i = 0; i < array.length / 2; i++) {

            console.log("langues i= " + i);
            html_langues += `
            <div class="element">
            <h5 class="">${ucFirst(array[j])}</h5>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${calcNiv(array[j + 1])}%" aria-valuenow="${calcNiv(array[j + 1])}"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
            `;
            j += 2;


        }


    }


    // display competences
    function displayCompetence(array) {
        html_competences = "";
        let j = 0;

        for (let i = 0; i < array.length / 2; i++) {
            console.log("competences j= " + j);
            html_competences += `
            <div class="col col-6">
                <div class="element">
                    <h5 class="">${ucFirst(array[j])}</h5>
                    <div class="progress w-75">
                        <div class="progress-bar" role="progressbar" style="width: ${calcNiv(array[j + 1])}%"
                            aria-valuenow="${calcNiv(array[j + 1])}" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
            `;
            j += 2;


        }


    }

    // display projets
    function displayProjet(arr) {
        html_projets = "";
        let j = 0;
        for (let i = 0; i < arr.length / 3; i++) {
            // j += i;
            console.log("projets j= " + j);
            html_projets += `
            <div class="element">
                <h5 id="projet" class="d-inline-block">${arr[j]}</h5>
                <span id="anneP" class="h5 mx-5 d-inline-block float-end">${arr[j + 2]}</span>
                <h5 id="descp" class="text-muted">${ucFirst(arr[j + 1])}</h5>
            </div>
            `;
            j += 3;


        }
    }

    // display diplomes
    function displayDiplome(arr) {
        html_diplomes = "";
        let j = 0;
        for (let i = 0; i < arr.length / 3; i++) {
            // j += i;
            console.log("diplomes j= " + j);
            html_diplomes += `
            <div class="element">
            <h5 id="dip" class="d-inline-block">${ucFirst(arr[j])}</h5>
            <span class="h5 mx-5 d-inline-block float-end">${arr[j + 2]}</span>
            <h5 class="text-muted">${ucFirst(arr[j + 1])}</h5>

        </div>
            `;
            j += 3;


        }
    }



    // display formations
    function displayFormation(arr) {
        html_formations = "";
        let j = 0;
        for (let i = 0; i < arr.length / 4; i++) {
            // j += i;
            console.log("formations j= " + j);
            html_formations += `
            <div class="element">
            <h5 id="dip" class="d-inline-block">${ucFirst(arr[j])}</h5>
            <span class="h5 mx-5 d-inline-block float-end">${arr[j + 2]} - ${arr[j + 3]}</span>
            <h5 class="text-muted">${ucFirst(arr[j + 1])}</h5>

        </div>
            `;
            j += 4;


        }


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
        if (personne.photo == "") {

            document.getElementById("imgh").style.backgroundColor = personne.color;

        } else {

            document.getElementById("imgh").style.backgroundImage = `url(/images/${personne.photo})`;
        }


        // detailp debut
        document.getElementById("detailp").innerHTML = `
        <h2 class="titre">Détails personels</h2>

        <div class="element">
            <h5 class="text-muted">Nom</h5>
            <h5 id="nom">${ucFirst(personne.prenom)} ${ucFirst(personne.nom)}</h5>
        </div>
        <div class="element">
            <h5 class="text-muted">Adresse e-mail</h5>
            <h5 id="email"> ${personne.email}</h5>
        </div>
        <div class="element">
            <h5 class="text-muted">Numéro de téléphone</h5>
            <h5 id="tel">${personne.tel}</h5>
        </div>
        <div class="element">
            <h5 class="text-muted">Adresse</h5>
            <h5 id="adr">${personne.adresse} ${personne.codep} ${personne.ville}, Algerie</h5>
        </div>
        <div class="element">
            <h5 class="text-muted">Date de naissance </h5>
            <h5 id="daten">${personne.daten}</h5>
        </div>
        <div class="element">
            <h5 class="text-muted">lieu de naissance</h5>
            <h5 id="lieun">${ucFirst(personne.lieun)}, Alger</h5>
        </div>
        <div class="element">
            <h5 class="text-muted">Sexe</h5>
            <h5 id="sexe">${personne.sexe}</h5>
        </div>
        <div class="element">
            <h5 class="text-muted">Nationalité</h5>
            <h5 id="nat">${ucFirst(personne.nationalite)}</h5>
        </div>
        <div class="element">
            <h5 class="text-muted">Etat civil</h5>
            <h5 id="etatc">${etatCivil(personne.statusC, personne)}</h5>
        </div>
        `;

        // fin detailp

        // debut profil
        if (personne.profile != "") {
            document.getElementById("profil").innerHTML = `
            <h2 class="titre">Profil</h2>
            <div class="element">
                <h5 id="desc" class="">${personne.profile} </h5>

            </div>
            <hr class="m-4 text-dark shadow">
            `;

        } else {
            console.log("pas de profile");
        }
        // fin profil

        // debut langues
        displayLangue(liste_langues);
        document.getElementById("langue").innerHTML = `<h2 class="titre">Langues</h2>` + html_langues;
        // fin langues

        // debut competences
        if (liste_competences.length == 0) {

        } else {

            document.getElementById("comptetence").innerHTML = `
            <h2 class="titre">Competeneces</h2>` +
                `   <div class="container">
                        <div class="row comp" id="comp">  
                        </div>
                    </div>
                `;
            displayCompetence(liste_competences);
            document.getElementById("comp").innerHTML = html_competences;

        }
        // fin competeneces  

        // debut projets
        if (liste_projets.length == 0) {

        } else {

            displayProjet(liste_projets);
            document.getElementById("projets").innerHTML = `<h2 class="titre">Projet</h2>` + html_projets + `<hr class="m-4 text-dark shadow">`;

        }
        // fin projets  

        // debut formations
        if (liste_formations.length == 0) {

        } else {

            displayFormation(liste_formations);
            document.getElementById("formation").innerHTML = `<h2 class="titre">Formation</h2>` + html_formations + `<hr class="m-4 text-dark shadow">`;

        }
        // fin formations  

        // debut diplomes
        if (liste_diplomes.length == 0) {

        } else {

            displayDiplome(liste_diplomes);
            document.getElementById("diplome").innerHTML = `<h2 class="titre">Diplome</h2>` + html_diplomes + `<hr class="m-4 text-dark shadow">`;

        }
        // fin diplomes  



        // couleur du cv
        document.querySelector(".infoH").style.backgroundColor = personne.color;
        document.getElementById("imgh").style.backgroundColor = personne.color;
        const titre = document.querySelectorAll(".titre");
        const progress = document.querySelectorAll(".progress-bar");


        for (let i = 0; i < progress.length; i++) {
            progress[i].style.backgroundColor = personne.color;
            
        }


    }
    // fin onlad




}
// fin monCV page
