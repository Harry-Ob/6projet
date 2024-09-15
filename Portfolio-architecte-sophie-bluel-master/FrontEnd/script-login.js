// all var 
const email = document.getElementById("email"); 
const password = document.getElementById("password"); 
const form = document.querySelector("form");
const errr = document.querySelector(".error-login");
const err_style =  "2px solid #FF0000"; // to modify 
const msg_err="Votre mot de passe ou votre email est incorrect"
const api = "http://localhost:5678/api/users/login" ; 
const txt = "logout";

 const verif_email = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/ ; 
 const user = {};

form_verification() ;


function error (){
    email.style.border = err_style ; 
    password.style.border = err_style;                                 
    errr.innerHTML=msg_err ;    
}

function form_verification(){
    form.addEventListener("submit", 
    (event)=> {
    event.preventDefault() ;
    user.email = email.value; 
    user.password = password.value ; 
    password.value === "" || !verif_email.test(email.value) ? error() : login(user) ;

}); 
}




function login (user){

    const youser= JSON.stringify(user);
    const data = { 
        method: "POST",
        mode:"cors", 
        credentials:"same-origin", 
        headers:{"content-type":"application/json"},
        body: youser, 
    }
    fetch(api,data)
    .then(result =>{ 
        if (!result.ok){
            throw new Error("Vos identifiants sont incorrecte"); 
     }else
        return result.json();
    })
    .then(result2 =>{ 
        // let user_id= result2.userId ; here u dont use it 
        let user_token = result2.token;
        log_elem = document.querySelector('nav ul li:nth-of-type(3)');
        log_elem.textContent = txt;         
        // window.localStorage.setItem('user_id', user_id); not needed
        window.localStorage.setItem('user_token', user_token);
        window.location.href = './index.html' 

    })
    .catch(err => {
       error(); 
    })

}

