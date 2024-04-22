// all var 
const api = "http://localhost:5678/api/";
const apii_category = api + "categories";
const apii_works = api + "works";

let all_work_elements;
let all_categories;
let work_done = 0;

const gallery_div = document.querySelector('#portfolio .gallery');
const log_element = document.getElementById("log_element");


start();
// test() ; 
admin_elem();
// admin_elem(); 

// verifie localSto pour elem admin ou non 
// test();
// log_out();  

function test() {
  if (window.localStorage.length > 0)
    admin_elem();
  // ffsdfdaddd
  //  aded  adasddddd? admin_elem() : console.log("Ici c'est vide donc tu viens d'arriver");
}

// if non connect => containerFiltres.style = "display:none"; 
// maintenant le soucis c'est que mon login/logout fonctionne pas tout le temps car pas de a href donc a noter 

function admin_elem() {
  // log_element.addEventListener("click",log_);


  //  there we need to have the admin elem showed

  if (log_element.innerHTML == "login") {
    if (window.localStorage.length > 0) {
      log_element.innerHTML = "logout";
      // afficher admin elemenmt 
      //  => le p 
      //  => le header 
      //  => le modifier 
      log_element.addEventListener("click", log_out());
    }

  } else {
    // log_element.addEventListener("click",log_in());
    log_element.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "login.html";
    });
  }
  // log_element == "login" ? log_element.innerHTML="logout" : console.log(window.localStorage.length==NaN);
  // my_button.addEventListener("click", button_filter); 
}

function log_() {
  console.log(log_element.innerHTML);
  log_element.innerHTML=="login" ? log_in() : log_out() ;
}

function log_in() {
  window.location.href = "login.html";
}

function log_out() {

  // + retirer les elem admin
  // .header-admin => display none 
  // elem sur mes projet dehors 
  // logout redeviens login
  log_element.innerHTML = "login";
  window.localStorage.removeItem("user_token");
  window.localStorage.removeItem("user_id");
  window.location.href = "login.html";

  log_element.innerHTML = "logout";


}

// function log_in(){
//   // <a href="http://"></a>
//   // log_element.innerHTML+='<a href="projet/6projet/Portfolio-architecte-sophie-bluel-master/FrontEnd/login.html"></a>'
//   // log_element.addEventListener("click",log_out())
//   window.location.href="login.html";
//   console.log("here we are");
// }


// all function and the code 


async function start() {
  log_element.addEventListener("click", log_);
  try {
    const result_work = await fetch(apii_works);
    temp_work = await result_work.json();
    const result_category = await fetch(apii_category);
    temp_category = await result_category.json();
    buffer_category = [{ id: 0, name: 'Tous' }];
    buffer_category = buffer_category.concat(temp_category);
    all_categories = buffer_category;
    all_work_elements = temp_work;
    build_work(temp_work);
    build_filter(buffer_category);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


function build_work(work) {
  if (work_done == 1) { gallery_div.innerHTML = ""; }
  const result = []
  for (let i = 0; i < work.length; i++) {
    img = build_element("img");
    img.setAttribute("src", work[i].imageUrl);
    img.setAttribute("alt", work[i].title);
    figure = build_element("figure");
    figure.setAttribute("id", work[i].categoryId);
    figcaption = build_element("figcaption");
    figcaption.textContent = work[i].title;
    figure.append(img, figcaption);
    result.push(figure);
  }
  gallery_div.append(...result);// look for the spread operator 
  work_done = 1;
}

function build_element(x) {
  return document.createElement(x);
}


function button_filter(element) {
  console.log(element.target.id);
  element.target.id == 0 ? build_work(all_work_elements) : filter_work(element.target.id); //passer un arg avec 
};


function filter_work(id) {
  build_work(all_work_elements.filter(item => item.categoryId == id));
}

function build_filter(all_filter_elements) {
  let my_div = build_element("div");
  my_div.classList.add("button-container")
  for (let i = 0; i < all_filter_elements.length; i++) {
    my_button = build_element("button");
    my_button.classList.add("button-filter");
    my_button.id = all_filter_elements[i].id;
    my_button.textContent = all_filter_elements[i].name;
    my_button.addEventListener("click", button_filter);
    my_div.append(my_button);

  }
  // ici a changer => nom de var a trouver et mettre ici 
  portfolio_element = document.getElementById("portfolio");
  // h2_element = portfolio_element.querySelector("h2");
  // h2_element.insertAdjacentElement('afterend', my_div);
  span_element = portfolio_element.querySelector("span");
  span_element.insertAdjacentElement('afterend', my_div);

}


// here because u left the other page with a redirection 
function log_out() {
  // empty local sto 
  // rediriger vers login ou rester la ou tu es et supp elem admin 
  // 
}
