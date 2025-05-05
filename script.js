//Je déclare mes variable ARTICLE associer a mes classe HTML
const a_eiffel = document.getElementsByClassName("p_eiffel");
const a_dame = document.getElementsByClassName("p_dame");
const a_triomphe = document.getElementsByClassName("p_arc");
const a_michel = document.getElementsByClassName("p_michel");
const a_versaille = document.getElementsByClassName("p_versaille");
//Variable BOUTTON
const btn_e = document.getElementsByClassName("click","btn_eiffel");
const btn_d = document.getElementsByClassName("btn_dame");
const btn_a = document.getElementsByClassName("btn_arc");
const btn_m = document.getElementsByClassName("btn_michel");
const btn_v = document.getElementsByClassName("btn_versaille");


//fonction pour afficher mon article selon le boutton monument

function appel(btn){
    let btn 

    if (btn == btn_e) {

        a_eiffel.style.display = "inline-block";

    }
}