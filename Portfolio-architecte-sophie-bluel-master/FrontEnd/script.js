const api = "http://localhost:5678/api/" ; 
const apii = "http://localhost:5678/api/works" ; 

const apii_category = api + "categories" ; // je recup mes categories et cree mes bouttons avec buttons et  ce que ca implique 
const apii_works = api + "works";

// rep.response => shows the body 
// rep.status => shows the code returned by fonction 

start(); 
build_work();
build_filter();
//  add_button(); => add_category/ event 
filter_button(); 


(async () => {
  try {
    const response = await fetch(apii_category);   
    console.log('HTTP status code:', response.status);
    // I need to wait for the result of the promise to do something with it otherwise my object isnt really defined 
    varr = await response.json() ;
    buffer = [{ id:0, name: 'Tous'}] ;
    buffer = buffer.concat(varr); 
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})();

function build_filter(){
  // createDiv 
  // add class to div
  // ajouter la class au bouton et ensuite ajouter le bouton a la div 
  // le faire 4 fois car nbr boutons 
  
  add_button(); 
  add2page();  
}

function add_button(){
  add_category(); 
}
 async function start() {
  try {
    const response = await fetch(apii);
    // console.log('HTTP status code:', response.status);
    // I need to wait for the result of the promise to do something with it otherwise my object isnt really defined 
    varr = await response.json();
    // console.log(varr);
    // console.log(varr.length);
    // console.log(varr[0].id);
    // console.log(varr[0].title)

    // console.log(varr[0].category.name);
    // console.log(varr[3].category.name);

    // console.log(varr[0].categoryId);
    // console.log(varr[3].categoryId);

    // .title => figcaption and alt 
    // .imageUrl => src 
    // doc =  document.createElement("figure"); 
    // doc.append(document.createElement("img")); 
    // doc.append(document.createElement("figcaption")); 

    // console.log(buildElement(3, ["figure", "img", "figcaption"], varr));
    // addAttributes(,varr);
    //  dans notre cas ici on sait que c'est que pour les img qu'on met  des choses 
    // ensuite pour mettre une figcaption 
    // DOC = null;
    
    tab = ["figure", "img", "figcaption"] ;
    // tab2=[]  
    for (let i = 0; i < varr.length; i++) {
      // DOC = buildElement(tab[i], varr[i].imageUrl, varr[i].title);
      // DOC = 
      buildElement(tab,varr[i])
      // console.log(DOC);
      // array1.setAttributes(array1.querySelector("img"),{src: x.imagegUrl, alt: x.title} ; 
      // DOC.setAttribute(DOC.querySelector("img"),{src: varr[i].imagegUrl, alt: varr[i].title}) ; 
    }
    // console.log(DOC);
    // mott = "bonjour";
    // console.log(mott.length);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function that build one element at a time
// si je suis un figure je met un ID =>  
// img => src et alt
// pas facilement maintenable 
//  a redecouper  
// trop generique une fonction pour ce que tu veux faire 
DOC = null 
DOC = document.getElementById(maison); 
function buildElement(array,array2){
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
      addAttributesFig(chose,array2);
      figure = chose ; 
    }
    if (array[i] !== "img" && array[i] !== "figure"){
      chose = document.createElement(array[i]);
      chose.textContent = array2.title ;
      figure.append(imge,chose);
      galleryDiv.appendChild(figure);
    }
  }
   
  //  console.log(array); 
  //  console.log(array2);
  // chose = document.createElement(array); 
  // array2.length>1 ? addAttributes(chose,varr) : chose.setAttributes(array2[0],array3[0]);
  // if ( num == 1 ){
  //   chose = document.createElement(array[0]);
  //   chose.setAttributes()
  // }else{
  //   // i==0 ?
  //   chose = document.createElement(array[0]);
  //   for (let i=1;  i< array.length; i++ ){
  //     chose.append(document.createElement(array[i])) ;
  //     // if array[i] == "img" 
  //   }
    // cb d'elem a cree => num et quels sont leur noms => dans Array 
    // Ils sont ensuite imbriquer dans le premier element qui a ete donnee 
  // }

return chose ; }

// Function that build gives attributes to the element given 
// array1: possedes tous les elements 
// array2: possede les attributs de l,elements 
//  x    : la liste d'arguments de mes attributs 

//  img => src et alt 
function addAttributes(array1,x){
  array1.setAttributes(array1.querySelector("img"),{src: x.imagegUrl, alt: x.title})
}

function addAttributesImg(array1,x){
  array1.setAttribute("src",x.imageUrl); 
  array1.setAttribute("alt",x.title);
}

function addAttributesFig(array1,x){
  array1.setAttribute("id",x.categoryId);
}

function add2page(){

}


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
