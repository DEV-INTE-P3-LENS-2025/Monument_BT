//Je déclare mes variable ARTICLE associer a mes classe HTML
const ae = document.getElementById("p_eiffel");
const a_dame = document.getElementById("p_dame");
const a_triomphe = document.getElementById("p_arc");
const a_michel = document.getElementById("p_michel");
const a_versaille = document.getElementById("p_versaille");
//Variable BOUTTON
const btn_e = document.getElementById("btn_eiffel");
const btn_d = document.getElementById("btn_dame");
const btn_a = document.getElementById("btn_arc");
const btn_m = document.getElementById("btn_michel");
const btn_v = document.getElementById("btn_versaille");

//Variable IMAGE 
const img_tour = document.getElementById("tour");
const img_dame = document.getElementById("dame");
const img_arc = document.getElementById("arc");
const img_michel = document.getElementById("michel");
const img_versaille = document.getElementById("versaille");


// Liste des IDs des articles et des images associées
const ids = ["p_eiffel", "p_dame", "p_arc", "p_michel", "p_versaille"];
  const imgIds = ["tour", "dame", "arc", "michel", "versaille"];


//fonction pour afficher mon article selon le boutton monument
function appel(articleClass) {


  // Masquer tous les articles et appliquer le filtre grayscale sur toutes les images
  ids.forEach((cls, index) => {
      const article = document.getElementById(cls); // Trouver l'article
      const img = document.getElementById(imgIds[index]); // Trouver l'image correspondante

      if (article) {
          article.style.display = "none"; // Masquer l'article

      }

      if (img) {
          img.style.filter = "grayscale(100%)"; // Appliquer le filtre grayscale sur l'image
           }
  });

  // Afficher l'article correspondant au bouton cliqué et enlever le filtre gris sur l'image correspondante
  const articleToShow = document.getElementById(articleClass); // Trouver l'article à afficher
  const imgToShow = document.getElementById(imgIds[ids.indexOf(articleClass)]); // Trouver l'image correspondante à cet article

  if (articleToShow) {
      articleToShow.style.display = "block"; // Afficher l'article sélectionné
  }

  if (imgToShow) {
      imgToShow.classList.toggle("active");
      imgToShow.style.filter = "unset";
      
  }
  
}
  