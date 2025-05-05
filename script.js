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

//fonction pour afficher mon article selon le boutton monument

function appel(articleClass) {
    // Masquer tous les articles (on suppose qu'ils sont déjà en display: none par défaut)
    const id = ["p_eiffel", "p_dame", "p_arc", "p_michel", "p_versaille"];
    
    // Masquer tous les articles
    id.forEach(cls => {
      const element = document.getElementById(cls);
      if (element) {
        element.style.display = "none";
      }
      
    });
  
    // Afficher l'article correspondant au bouton cliqué
    const article = document.getElementById(articleClass);
    if (article) {
      article.style.display = "block";
      
    }
  }
  