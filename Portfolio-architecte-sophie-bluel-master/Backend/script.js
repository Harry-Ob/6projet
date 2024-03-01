const api = "http://localhost:5678/api/" ; 
const apii = "http://localhost:5678/api/works" ; 
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




    //  So we have varr that contains everything we need to work on it. 
    //  it is needed to filter everything i need/want 
    // 
    //   console.log(response.body); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  })();

//   Fonction qui va chercher tout le work et qui ensuite le met dans la page 
//  Une fonction qui va chercher le boulot et gere les erreurs 
// Une autre fonction qui cree les elements pour la nouvelle page 
//  Une derniere function qui update le tout. 



// filter function to filter with what we need. 
// async function filt (obj) {


// return ; 
// }
