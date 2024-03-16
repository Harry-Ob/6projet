const api = "http://localhost:5678/api/" ; 
const apii = "http://localhost:5678/api/works" ; 

const apii_category = api + "categories" ; // je recup mes categories et cree mes bouttons avec buttons et  ce que ca implique 
const apii_works = api + "works";

// rep.response => shows the body 
// rep.status => shows the code returned by fonction 

start(); 




function build_filter(ab){
  let my_div = buildElement("div");
  my_div.classList.add("button-container")
  // my_div.addclass 
  console.log(ab); 
  console.log(ab.length);
  for (let i = 0; i<ab.length ; i++){
    my_button = buildElement("button");
    my_button.classList.add("button-filter");
    my_button.id = ab[i].id;
    my_button.textContent = ab[i].name ;
    my_button.addEventListener("click", f1);
    my_div.append(my_button); 

  }
  console.log(my_div);
   tes = document.getElementById("portfolio");
   test = tes.querySelector("h2");
   test.insertAdjacentElement('afterend',my_div);

  // createDiv 
  // add class to div
  // ajouter la class au bouton et ensuite ajouter le bouton a la div 
  // le faire 4 fois car nbr boutons 
  
  // add_button(); 
  // add2page();  
}
function f1(element){
  console.log(element.target.id); // build_work() / build_work(arg1)
  element.target.id == 0? build_work() : filter_work() ; //passer un arg avec 
} ; 
// function add_button(){
//   add_category(); 
// }

function filter_work() {
  // trier ma varr qui contient mes work 
  // tout envoyer a build work avec le nvx tableau trier 
  
console.log("r a voir");
}

 async function start() {
  try {
    const response = await fetch(apii);
    varr = await response.json();
    const response_cat = await fetch(apii_category);
    varr_cat = await response_cat.json();
    buffer = [{ id:0, name: 'Tous'}] ;
    buffer = buffer.concat(varr_cat); 
    // tab = ["figure", "img", "figcaption"] ;
    // for (let i = 0; i < varr.length; i++) {
    //   buildElement(tab,varr[i])
    // }
    build_work(varr);  
    console.log(buffer);
    build_filter(buffer);
//   add_button(); => add_category/ event 
// filter_button(); 

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
// function build_filter(ab){
    

// }
// Function that build one element at a time
// si je suis un figure je met un ID =>  
// img => src et alt
// pas facilement maintenable 
//  a redecouper  
// trop generique une fonction pour ce que tu veux faire 
// DOC = null 
// DOC = document.getElementById(maison); 
function buildElements(array,array2){
  //  faire du dure et pas comme ca 
  //  tu peut changer certaines chose mais closer to what u wanna build
  var galleryDiv = document.querySelector('#portfolio .gallery');
  var figure = document.createElement(array[0]);
  var imge = document.createElement(array[0]);
  for (let i = 0 ; i<array.length ; i++ ){
    chose = document.createElement(array[i]); 
    if (array[i]=== "img"){
      addAttributesImg(chose,array2);
      imge=chose;
    }
    if (array[i] === "figure"){
      add_attributes_fig(chose,array2);
      figure = chose ; 
    }
    if (array[i] !== "img" && array[i] !== "figure"){
      chose = document.createElement(array[i]);
      chose.textContent = array2.title ;
      figure.append(imge,chose);
      galleryDiv.appendChild(figure);
    }
  }
   

return chose ; }

function buildElement(x){
  return document.createElement(x);
}
// build_work() 
function build_work(varr){
  // var global qui contient le contenue de mon work => fait avec fetch 
  // varr !== undefined ? build-other



  var galleryDiv = document.querySelector('#portfolio .gallery');
  const res = []
  for (let i=0; i<varr.length ; i++ ) {
    img = buildElement("img") ;
    // console.log(img);
    // console.log(varr[i]);
    img.setAttribute("src",varr[i].imageUrl);
    img.setAttribute("alt",varr[i].title);
    figure = buildElement("figure") ;
    figure.setAttribute("id",varr[i].categoryId);
    figcaption = buildElement("figcaption") ; 
    figcaption.textContent = varr[i].title ; 
    figure.append(img,figcaption);
    res.push(figure);
    // galleryDiv.appendChild(figure); // ici voir comment changer cette fonction 
  }

  galleryDiv.append(...res);// look for the spread operator 

  //  var = 1 ; 
  //  var = buildElement(); 
  // put then one into another 
  // afficherpage() ;
}
// Function that build gives attributes to the element given 
// array1: possedes tous les elements 
// array2: possede les attributs de l,elements 
//  x    : la liste d'arguments de mes attributs 

//  img => src et alt 
// function add_attributes_img(array1,x){
//   array1.setAttributes(array1.querySelector("img"),{src: x.imagegUrl, alt: x.title})
// }

// function addAttributesImg(array1,x){
//   array1.setAttribute("src",x.imageUrl); 
//   array1.setAttribute("alt",x.title);
// }

// function add_attributes_fig(array1,x){
//   array1.setAttribute("id",x.categoryId);
// }


// elle add b to a => franglais a changer 
// function add2page(a,b){
//  a.append(b); 
// }


// Function who takes all my categories and build them 
//   (async () => {
//     try {
//       const response = await fetch(apii_category);   
//       console.log('HTTP status code:', response.status);
//       // I need to wait for the result of the promise to do something with it otherwise my object isnt really defined 
//       varr = await response.json() ;
//       console.log("Another version");
//       console.log(varr);
//       buffer = [{ id:0, name: 'Tous'}] ;
//       buffer = buffer.concat(varr); 
//       console.log(varr); 
//       console.log(buffer); 


// // cree des elements html / createElement ou innerElement / AppendElement / addEventListeners 
// // 

//     //  So we have varr that contains everything we need to work on it. 
//     //  it is needed to filter everything i need/want 
//     // 
//     //   console.log(response.body); 
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   })();


//   Fonction qui va chercher tout le work et qui ensuite le met dans la page 
//  Une fonction qui va chercher le boulot et gere les erreurs 
// Une autre fonction qui cree les elements pour la nouvelle page 
//  Une derniere function qui update le tout. 



// filter function to filter with what we need. 
// les id = name they are together so we are going to filter by id or we can use the name depending on what the button while send back to us 

// async function filt (obj,num) { //re tirer async dependemmennt de ou tu l'appel 
//     const filteredItems = obj.filter( x  => x.categoryId === num); 
// return filteredItems ; 
// }
