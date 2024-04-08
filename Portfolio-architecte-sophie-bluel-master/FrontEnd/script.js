// all var 
const api = "http://localhost:5678/api/" ; 
const apii_category = api + "categories" ; 
const apii_works = api + "works";

let all_work_elements ; 
let all_categories ; 
let work_done = 0 ;

const gallery_div = document.querySelector('#portfolio .gallery');


start();
// test();
// log_out();  

function test() {
    window.localStorage.length > 0 ? console.log("afficher admin element") : console.log("Ici c'est vide donc tu viens d'arriver");
    window.localStorage.removeItem("user_token"); 
    window.localStorage.removeItem("user_id");
    window.location.href="login.html" 
} 

function log_out(){
  test(); 
  console.log("everything was done according to plan");

}


// all function and the code 


 async function start() {
  try {
    const result_work = await fetch(apii_works);
    temp_work = await result_work.json();
    const result_category = await fetch(apii_category);
    temp_category = await result_category.json();
    buffer_category = [{ id:0, name: 'Tous'}] ;
    buffer_category = buffer_category.concat(temp_category); 
    all_categories = buffer_category ; 
    all_work_elements = temp_work ; 
    build_work(temp_work); 
    build_filter(buffer_category);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


function build_work(work){
  if (work_done == 1){gallery_div.innerHTML = "" ;}  
   const result = []
   for (let i=0; i<work.length ; i++ ) {
     img = build_element("img") ;
     img.setAttribute("src",work[i].imageUrl);
     img.setAttribute("alt",work[i].title);
     figure = build_element("figure") ;
     figure.setAttribute("id",work[i].categoryId);
     figcaption = build_element("figcaption") ; 
     figcaption.textContent = work[i].title ; 
     figure.append(img,figcaption);
     result.push(figure);
   }
   gallery_div.append(...result);// look for the spread operator 
   work_done = 1;
 }

function build_element(x){
  return document.createElement(x);
}


function button_filter(element){
  console.log(element.target.id); 
  element.target.id == 0 ? build_work(all_work_elements) : filter_work(element.target.id) ; //passer un arg avec 
} ; 


function filter_work(id) {
   build_work(all_work_elements.filter( item => item.categoryId == id)); 
}

function build_filter(all_filter_elements){
  let my_div = build_element("div");
  my_div.classList.add("button-container")
  for (let i = 0; i<all_filter_elements.length ; i++){
    my_button = build_element("button");
    my_button.classList.add("button-filter");
    my_button.id = all_filter_elements[i].id;
    my_button.textContent = all_filter_elements[i].name ;
    my_button.addEventListener("click", button_filter);
    my_div.append(my_button); 

  }
  // ici a changer => nom de var a trouver et mettre ici 
   portfolio_element = document.getElementById("portfolio");
   h2_element = portfolio_element.querySelector("h2");
   h2_element.insertAdjacentElement('afterend',my_div);

}


// here because u left the other page with a redirection 
function log_out (){
// empty local sto 
// rediriger vers login ou rester la ou tu es et supp elem admin 
// 
}
 