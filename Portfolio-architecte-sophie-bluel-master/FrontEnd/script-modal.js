// all var 
let modifier_element = document.getElementById("open_modale");
let modale_container_element = document.getElementById("modale-container");
let modale_show_element = document.getElementById("modale-show");
let close_modale_element = document.getElementById("x-button");
let c_close_modale_element = document.getElementById("xx-button");
let valider_modale_element = document.getElementById("valider-button");
let modale_add_element = document.getElementById("modale-add");
let left_arrow = document.getElementById("previous-modale");
let modale_gallery_element = gallery_div;
let modale_gallery_img = document.getElementById("modale-show-main");

const url_database = "http://localhost:5678/api/works";
const input_file = document.getElementById("input-file");
const input_title = document.getElementById("input-title");
const input_category = document.getElementById("input-category");
// a utiliser pour avoir notre preview de l'img
const input_img = document.getElementById("input-img");
const input_img_data = {
    // id: "",
    title: "",
    src: "",
    category_id: "",
    user_id: 0
};
const form_data = new FormData(); 

// main fonction usage 
modale();



// function declaration 
function modale() {
    open_modale();
    close_modale();
    next_modale();
    previous_modale();
    form_preview();
}

function form_complete(img) {

    const form_add = document.getElementById("input-form");
    form_add.addEventListener("submit",elem => {
        elem.preventDefault();
        form_data.append("img",img);
        form_data.append("categoryId",input_img_data.category_id);
        
    });
    add_to_database(form_data);
    // when form is complete je lance add_to_database()
}



function form_preview() {
    // img preview 
    let file;
    input_file.addEventListener("change", () => {
        file = input_file.files[0];
        // if file is good read it 
        if (file) {
            const reader = new FileReader();
            reader.onload = function (elem) {
                input_img_data.src = elem.target.result;
            };
            reader.readAsDataURL(file);
            f_name = file.name  ; 
            f_name = f_name.slice(0,f_name.lastIndexOf('.')) ; 
            input_title.value = f_name ; 
            if ( input_img_data.category_id != "" && input_title.value != "" ){
                document.getElementById("submit-form-add-img").className = "submit-button" ; 
                form_complete(file);
            }
        }
    });
    input_category.addEventListener("change", (elem) => {
        // console.log(elem.target);
        input_img_data.category_id = elem.target.value;
        if ( input_img_data.category_id != "" && input_title.value != "" ){
            document.getElementById("submit-form-add-img").className = "submit-button" ; 
            form_complete(file);
        }
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
    //  tu trouves ton id pour delete avec ton queryselector du parent de ton elem 
    span_element.append(i_element);
    return span_element;
}


function add_to_database(formdata) {
    // id_img +=1; rajouter au bon endroit 
    
    return console.log("DONE-add");
exit 
}

function remove_from_database(id) {
    // code non complet
    // ici pour faire le remove avec un appel bien concluant on peut attendre de sortir ou de revenir en arriere 
    // pour faire l'appel complet du fetch 
    // tu delete 
    // tu rebuild ta gallery 
    // et ta modale 

    // id_img -=1; a mettre au bon endroit 
    return console.log("DONE-delete");
    const user_token = window.localStorage.getItem("user_token");
    const url_database_delete = url_database + "/" + id;
    const arg_author = "Bearer " + user_token;
    const request = {
        method: "DELETE",
        headers: {
            authorization: arg_author,
            "Content-type": "application/json",
        },
        mode: "cors",
        credential: "same-origin",
    };

    // verifier quoi faire une fois que l'image est supp de la BD
    // regarder quel fonction appeler pour tout refaire 
    // build_work et build_modale_visuals 
    fetch(url_database_delete, request,).then(start()).then().catch();

}
function add_span_modale_gallery(elem, span) {
    elem.insertAdjacentElement('beforebegin', span);
}

function modale_gallery() {
    build_modale_gallery();
}

//  look why it works like that and not with named function in this case 
function open_modale() {
    modifier_element.addEventListener("click", () => {
        modale_container_element.style = "display:block";
        modale_show_element.style = "display:flex";
    });
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
    });
}

function previous_modale() {
    left_arrow.addEventListener("click", () => {
        modale_add_element.style = "";
        modale_show_element.style = "display:flex";
    });
}