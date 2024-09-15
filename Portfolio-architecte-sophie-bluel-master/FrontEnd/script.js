// all var 
const api = "http://localhost:5678/api/";
const apii_category = api + "categories";
const apii_works = api + "works";

let all_work_elements;
let all_categories;
let work_done = 0;
let work ; 
let category_done = 0;

const gallery_div = document.querySelector('#portfolio .gallery');
const log_element = document.getElementById("log_element");
let elem_active = [] ; 

let div_element = document.getElementById("pro");

const admin_elements = document.getElementsByClassName("admin-element");
let id_img ; 


function display_on(element){
element.style ="";
}

function display_off(element){
element.style="display:none"
}



// activer le button tous par defaut 
start();

// if the admin is one here is what i do 
connexion() ? admin_elem_on() : admin_elem_off();

function connexion (){
  if (window.localStorage.getItem("user_token")) {
    return true ; 
  }
  return false; 
  // return window.localStorage.length > 0 ;
}
function test() {
  if (window.localStorage.getItem("user_token"))
    admin_elem();
}


function admin_elem_off(){
  Array.from(admin_elements).forEach(elements => display_off(elements));

}
function admin_elem_on() {
  Array.from(admin_elements).forEach(elements => display_on(elements));
  document.addEventListener("DOMContentLoaded",function () {
    button_filter_out();
  });


  if (log_element.innerHTML === "login") {
    if (window.localStorage.length > 0) {
      log_element.innerHTML = "logout";
      log_element.addEventListener("click", (event)=> {
        event.preventDefault();
        log_out(); 
      });
    }

  } else {
    log_element.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "login.html";
      
    });
  }

}

//  soucis dans cette fonction a gerer 
function log_() {
  tss =  log_element.innerHTML ;
  tss === "login" ? log_in() : log_out() ;
}

function log_in() {
  window.location.href = "login.html";
}

function log_out() {
  log_element.innerHTML = "login";
  window.localStorage.removeItem("user_token");
  window.localStorage.removeItem("user_id");
  window.location.href = "login.html";
  log_element.innerHTML = "logout";

}


// all function and the code 

// start function build the gallery on the main page 
// the filters 
async function start() {
  log_element.addEventListener("click", log_);
  try {
    const result_work = await fetch(apii_works);
    temp_work = await result_work.json();
    const result_category = await fetch(apii_category);
    temp_category = await result_category.json();
    buffer_category = [{ id: 0, name: 'Tous' }];
    buffer_category = buffer_category.concat(temp_category);
    // new function for category into modal 
    if (category_done == 0){
      category_modale(temp_category);
      all_categories = buffer_category;
      category_done=1;
    }

    all_work_elements = temp_work;
    build_work(temp_work);
    if ( !connexion() )
      build_filter(buffer_category);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


// toto function is to build at the same time the gallery in the modales 

function build_work(work) {
  if (work_done == 1) { gallery_div.innerHTML = ""; }
  const result = []
 
  for (let i = 0; i < work.length; i++) {
  
    img = build_element("img");
    img.setAttribute("src", work[i].imageUrl);
    img.setAttribute("alt", work[i].title);
    img.setAttribute("id",work[i].id);
    figure = build_element("figure");
    figure.setAttribute("id", work[i].categoryId);
    figcaption = build_element("figcaption");
    figcaption.textContent = work[i].title;
    toto(img,figure,figcaption);
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
  button_clicked = element.target ; 
  if( elem_active.length > 0) 
    change_button_color() ;
  button_clicked.style = "background-color:#1D6154; color:white";
  elem_active.push(button_clicked); 
  element.target.id == 0 ? build_work(all_work_elements) : filter_work(element.target.id); //passer un arg avec 
};

function change_button_color(){
  button_active = elem_active.pop() ; 
  button_active.style = "" ;
}
function filter_work(id) {
  build_work(all_work_elements.filter(item => item.categoryId == id));
}

function build_filter(all_filter_elements) {
  let my_div = build_element("div");
  my_div.classList.add("button-container");
  my_div.setAttribute("id","button-container");
  for (let i = 0; i < all_filter_elements.length; i++) {
    my_button = build_element("button");
    my_button.classList.add("button-filter");
    my_button.id = all_filter_elements[i].id;
    my_button.textContent = all_filter_elements[i].name;
    if (i == 0 ){
      my_button.style = "background-color:#1D6154; color:white";
      elem_active.push(my_button);
    }
    my_button.addEventListener("click", button_filter);
    my_div.append(my_button);

  }
  
  portfolio_element = document.getElementById("portfolio");
  div_element = portfolio_element.querySelector("div");
  div_element.insertAdjacentElement('afterend', my_div);
}





function button_filter_out(button_container_element){
  var button_container_element = document.getElementById("button-container");
  if(button_container_element)
    display_off(button_container_element);
} 