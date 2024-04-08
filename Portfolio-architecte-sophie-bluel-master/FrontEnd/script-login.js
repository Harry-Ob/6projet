// all var 
const email = document.getElementById("email"); 
const password = document.getElementById("password"); 
const form = document.querySelector("form");
const errr = document.querySelector(".error-login");
const err_style =  "2px solid #FF0000"; // to modify 
const msg_err="Votre mot de passe ou votre email est incorrect"
const api = "http://localhost:5678/api/users/login" ; 
const txt = "logout";
// soucis avec le regex de text mais on a compris ce qu'il nous faut
 const verif_email = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/ ; 
 const user = {};
 const youser = {
 email:"sophie.bluel@test.tld",
 password:"S0phie" }

form_verification() ;



// console.log(user);
// login(user);
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
    errr.style = "color: red;margin: 2%;font-weight: bolder;"; 
    errr.innerHTML=msg_err ; 
    
    // mess d'err precis where the err was found 
    // votre mot de passe ou votre identifiant est incorrect, 
    
}
// ma page d'accueil verifie si j'ai qqchose dans mon localStorage !== null => token existant donc mode admin sinon normal 
function form_verification(){
    form.addEventListener("submit", 
    (event)=> {
    event.preventDefault() ;
    user.email = email.value; 
    user.password = password.value ; 
    // console.log(verif_email.test(email.value)); 
    password.value == "" && verif_email.test(email.value) ? error2() : login(user) ; console.log("mdp:",password.value,"email:",email.value) ;

    // console.log(user); 
    // verify password et email with regex => mess globale et son css 
    // login(user);

}); 
}

function error2 () {
    error();
    

}
// look more info into it 

function login (user){
    // user.email = "sophie.bluel@test.tld";
    // user.password ="S0phie"; 
    const youser= JSON.stringify(user);
    console.log(user);
    console.log(youser);
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
            throw new Error("Soucis mon reuf "); 
     }else
        return result.json();
        // result.ok ? result.json() : throw new Error('User not found');
        // console.log (result) ; result.json() ; 
    })
    // .catch(err => console.log("hey",err))
    .then(result2 =>{ 
        console.log(result2);
        // if(result2.ok){
        let user_id= result2.userId ; 
        let user_token = result2.token;
        // sessionStorage.setItem('userId', user_id);
        // sessionStorage.setItem('token', user_token);
        x = document.querySelector('nav ul li:nth-of-type(3)');
        x.textContent = txt;         
        console.log("vide ton local storage a la main"); 
        console.log(result2); 
        window.localStorage.setItem('user_id', user_id); 
        window.localStorage.setItem('user_token', user_token);
        window.location.href = './index.html' 
        console.log("vide ton local storage a la main"); 
        // }else{
        //     console.log(result2.response.status);
        //     if (result2.status == 404){
        //         console.log(result2.response.status);
        //         throw new Error('User not found');

        //     }
                

        //     throw new Error("Il y a un soucis") ;
            
        // }
})
    .catch(err => {
        console.log(err);
        // console.log(err)
    })
//     // voir comment ca fonctionne and use another type of writings 
// attention a la case because it matters. 
    // fetch(api,{
    //     method: "POST",
    //     // mode:"cors",
    //     // credentials:"same-origin", 
    //     headers:{"content-type":"application/json"},
    //     body: youser, }).
    //     then( (e)=>  {console.log(e) ; e.json() ; 
    //     } ).
    //     then( result => console.log("Voici id",result.userId,"\nvoici token",result.token)).
    //     // gestion error 
    //     catch((erro) => console.error(erro)) ; 
    // fetch(api,{method:"POST", mode: "cors", credentials:"same-origin",headers:{"content-type":"application/json"},body:youser,}).then(e=>console.log(e))
    // fetch(api,{method:"POST", mode: "cors", credentials:"same-origin",headers:{"content-type":"application/json"},body:youser,}).then(e=>e.json()).then(chose => console.log(chose.token))
    // window.location.href="index.html" 
}

// console.log(fetch( api,{method:"POST",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/js"},body:youser2} ) ) 

// sophie.bluel@test.tld
// S0phie  



// .then(data => {
//     let userId = data.userId
//     let token = data.token
//     //stocker le token dans le sessionStorage
//     sessionStorage.setItem('userId', userId)
//     sessionStorage.setItem('token', token)

//     // Rediriger vers la page d'acceuil
//     window.location.href = './index.html' 