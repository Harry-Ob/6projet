// all var 
const email = document.getElementById("email"); 
const password = document.getElementById("password"); 
const form = document.querySelector("form");
const err_style =  "2px solid #FF0000"; // to modify 
 ewsdew = "http://localhost:5678/api/users/login" ;  ; 
// soucis avec le regex de text mais on a compris ce qu'il nous faut
 const verif_email = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/ ; 
 const user = {};
form_verification() ; 
console.log(user);
// login(user,pass_w);
// token() ; => stocker et sa gestion 
// page_acc(); => redirection 
// ok                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
// verifier le local storage 
// localStorage.setItem => 
// localStorage.getItem => 
// localStorage.removeItem = > 
function free_local_storage(){} 
function error (){
    email.style.border = err_style ; 
    password.style.border = err_style; 
    // mess d'err precis where the err was found 
    // votre mot de passe ou votre identifiant est incorrect, 
    
}
// ma page d'accueil verifie si j'ai qqchose dans mon localStorage !== null => token existant donc mode admin sinon normal 
function form_verification(){
    form.addEventListener("submit", 
    (event)=> {
    event.preventDefault() ;
    console.log(verif_email.test(email.value)); 
    password.value == "" ? alert("Veuillez taper votre mdp") : console.log("mdp:",password.value) ;
    user.email = email.value; 
    user.password = password.value ; 
    console.log(user);

}); 
}


function login (user){
    const data = { 
        method: "Post",
        mode:"", 
        credentials:"", 
        headers:{},
        body: "", 
    }
    // voir comment ca fonctionne and use another type of writings 
    fetch().then().then().catch() ; 
}


function log_out (){

}