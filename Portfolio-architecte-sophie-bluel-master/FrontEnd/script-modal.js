// all var 
let modifier_element = document.getElementById("open_modale");
let modale_container_element = document.getElementById("modale-container");
let modale_show_element = document.getElementById("modale-show");
let close_modale_element = document.getElementById("x-button");
let c_close_modale_element = document.getElementById("xx-button");
let valider_modale_element = document.getElementById("valider-button");
let modale_add_element = document.getElementById("modale-add");
let modale_add_bouton = document.getElementById("modale-button-add");
let left_arrow = document.getElementById("previous-modale");
let modale_gallery_element = gallery_div;
let modale_gallery_img = document.getElementById("modale-show-main");

const url_database = "http://localhost:5678/api/works";
const input_file = document.getElementById("input-file");
const input_title = document.getElementById("input-title");
const input_category = document.getElementById("input-category");
const max_file_size = 4 *1024 * 1024; 
const input_img = document.getElementById("input-img");
const prev_img = document.getElementById("prev-img");
const container_img_preview = document.querySelectorAll("#input-form .container-img-preview *");
const input_img_data = {
    title: "",
    src: "",
    category_id: "",
    user_id: 0
};
let form_data = new FormData(); 

// main fonction usage 
modale();


// function declaration 
function modale() {
    open_modale();
    close_modale();
    next_modale();
    add_img_text();
    previous_modale();
    form_preview();
    form_complete(); 
}



function add_img_text() {
    modale_add_bouton.addEventListener("click", elem => {
        elem.preventDefault();
        input_file.click();
        form_preview();

    })
}


function form_complete(){
    if(input_img_data.img){
        const form_add = document.getElementById("input-form");
        form_add.addEventListener("submit",elem => {
            elem.preventDefault();
            form_data.append("img",input_img_data.img);
            form_data.append("title",input_title.value);
            form_data.append("categoryId",parseInt(input_img_data.category_id));
            add_to_database(form_data);
            
    });
    }
}



function form_preview() {

    input_file.addEventListener("change", () => {
        let file ; 
        file = input_file.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (elem) {
                input_img_data.src = elem.target.result;
                input_img.src = elem.target.result; 
            };
            reader.readAsDataURL(file);
            f_name = file.name  ; 
            f_name = f_name.slice(0,f_name.lastIndexOf('.')) ;
            f_ext = file.name.slice((f_name.lastIndexOf(".")+1) ,file.name.length).toLowerCase();
            input_title.value = f_name ;
            display_img();
            
            if ( input_img_data.category_id != "" && input_title.value != "" && ( f_ext == "png" || f_ext == "jpg") && file.size <= max_file_size ){
                document.getElementById("submit-form-add-img").className = "submit-button" ; 
            }else
                // console.log("erreur fichier non accepter"); 

            input_img_data.img = file ; 
        }
    });
    input_category.addEventListener("change", (elem) => {
        elem.preventDefault();
        input_img_data.category_id = elem.target.value;
        if ( input_img_data.category_id != "" && input_title.value != "" ){
            document.getElementById("submit-form-add-img").className = "submit-button" ; 
        }
    });
    form_complete();   
}


function display_img(){
    container_img_preview.forEach(elements => {
        // console.log(elements.id); 
        ( elements.id == "prev-img" || elements.id == "input-img" )  ? elements.classList.add("visible"): elements.classList.add("invisible"); 
         });
}

function remove_display_img(){
    container_img_preview.forEach(elements =>{
        (elements.id == "prev-img" || elements.id == "input-img" ) ?elements.classList.remove("visible"): elements.classList.remove("invisible");
    });
}
function category_modale(elem) {
    
        for (i = 0; i < elem.length; i++) {
            option_element = build_element("option");
            option_element.value = elem[i].id;
            option_element.text = elem[i].name;
            input_category.append(option_element);
        }

   

}

// toto is called into script.js and build the gallery at the same time
// that build_work is called
function toto(img, figure, figcaption) {
    c_figure = figure.cloneNode();
    c_img = img.cloneNode();
    c_figcaption = figcaption.cloneNode();
    c_figcaption.innerHTML = figcaption.innerHTML;
    c_figcaption.style = "display:none";
    c_figure.append(build_trash_icon_element(), c_img, c_figcaption);
    modale_gallery_img.append(c_figure);
}

function build_trash_icon_element() {
    const span_element = build_element("span");
    const i_element = build_element("i");
    i_element.classList.add("fa-solid", "fa-trash-can");
    span_element.addEventListener("click", (elem) => {
        parent_elem = elem.target.parentElement;
        parent_elem = parent_elem.parentElement;
        img = parent_elem.querySelector("img");
        remove_from_database(img.id);
        
    });
    span_element.append(i_element);
    return span_element;
}

function show_modale(){
    modale_container_element.style = "display:block";
    modale_show_element.style = "display:flex";
}

function add_to_database(formdata) {

    // console.log(formdata);  
    const user_token = window.localStorage.getItem("user_token");
    const url_database_add = url_database;
    const arg_author = "Bearer " + user_token; 
    const request = {
        method: "POST",
        body: formdata,
        headers: {
            authorization: arg_author,
        },
    }
    fetch(url_database_add, request,)
    .then((response) => {
        if(!response.ok){throw new Error("Erreur, fichier non envoyer");}
        return response.json(); 
    })
    .then((data) => {
        modale_gallery_img.innerHTML="";
        form_data = new FormData(); 
        start();
        show_modale();

    })
    .catch((error)=> {console.error("Erreur:",error)}); 

}

function remove_from_database(id) {
    const user_token = window.localStorage.getItem("user_token");
    const url_database_delete = url_database + "/" + id;
    const arg_author = "Bearer " + user_token;
    const request = {
        method: "DELETE",
        headers: {
            authorization: arg_author,
            "Content-type": "application/json",
        },
    };

    fetch(url_database_delete, request)
    .then(() => {
        modale_gallery_element.querySelectorAll("img").forEach(element => {
            if (element.id == id ) {
                element.remove();
                modale_gallery_img.innerHTML="";
                start(); 
                show_modale(); 
            }
                
        });
    })
    .then()
    .catch((error)=> {console.error("Erreur:",error)}); 

}
function add_span_modale_gallery(elem, span) {
    elem.insertAdjacentElement('beforebegin', span);
}


function open_modale() {
    modifier_element.addEventListener("click", () => {
        show_modale();
    });
    
}
function show_modale(){
    modale_container_element.style = "display:block";
    modale_show_element.style = "display:flex";

}
function close_modale() {
    close_modale_element.addEventListener("click", () => {
        modale_container_element.style = "";
        modale_show_element.style = "";
        
    });

}

function next_modale() {
    valider_modale_element.addEventListener("click", () => {
        modale_add_element.style = "display:flex";
        modale_show_element.style = "";
    })
    c_close_modale_element.addEventListener("click", () => {
        modale_container_element.style = "";
        modale_add_element.style = "";
        reset_form();
    });
}



function previous_modale() {
    left_arrow.addEventListener("click", (elem) => {
        elem.preventDefault();
        prev_modale(); 
    });
       
}

function prev_modale(){
    modale_add_element.style = "";
    modale_show_element.style = "display:flex";
    reset_form(); 


}

function reset_form(){
    //  ajouter ici le code pour remettre le formulaire comme il est au depart en faisant l'inverse
    // que ce que fais display_img() ; 
    document.getElementById("submit-form-add-img").className = "submit-button-not-valid" ; 
    input_title.value="";
    input_img_data.category_id=""; 
    input_category.value = "";
    remove_display_img(); 
}