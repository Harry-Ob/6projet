const api = "http://localhost:5678/api/" ; 
const apii = "http://localhost:5678/api/works" ; 

const apii_category = api + "categories" ; // je recup mes categories et cree mes bouttons avec buttons et  ce que ca implique 
const apii_works = api + "works";
// const  rep = await fetch (apii) ; 
// revoir await et asynch utilization 
//  Look at fech methode to know what arguments it takes
// console.log(rep.status) ; 

// rep.response => shows the body 
// rep.status => shows the code returned by fonction 

(async () => {
    try {
      const response = await fetch(apii);   
      console.log('HTTP status code:', response.status);
      // I need to wait for the result of the promise to do something with it otherwise my object isnt really defined 
      varr = await response.json() ;
      console.log(varr);
      console.log(varr.length) ;
      console.log(varr[0].id);
      console.log(varr[0].title)

      console.log(varr[0].category.name);
      console.log(varr[3].category.name); 

      console.log(varr[0].categoryId); 
      console.log(varr[3].categoryId); 

      // .title => figcaption and alt 
      // .imageUrl => src 
      doc =  document.createElement("figure"); 
      doc.append(document.createElement("img")); 
      doc.append(document.createElement("figcaption")); 
      
      console.log(buildElements(1,["img"]));

      console.log(doc);
      mott = "bonjour"; 
      console.log(mott.length);
      



// cree des elements html / createElement ou innerElement / AppendElement / addEventListeners 
// 

    //  So we have varr that contains everything we need to work on it. 
    //  it is needed to filter everything i need/want 
    // 
    //   console.log(response.body); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  })();

// Function that build one element at a time
function buildElements(num, array){
  
  if ( num == 1 ){
    chose = document.createElement(array[0]);
  }else{
    // cb d'elem a cree => num et quels sont leur noms => dans Array 
    // Ils sont ensuite imbriquer dans le premier element qui a ete donnee 
  }

return chose ; }

// Function that build gives attributes to the element given 
// array1: possedes tous les elements 
// array2: possede les attributs de l,elements 
//  x    : la liste d'arguments de mes attributs 
function addAttributes(array1, array2, x ){

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
//       temp = [{ id:0, name: 'Tous'}] ;
//       temp = temp.concat(varr); 
//       console.log(varr); 
//       console.log(temp); 


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
