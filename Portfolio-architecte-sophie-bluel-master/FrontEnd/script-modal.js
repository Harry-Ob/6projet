// const { debug } = require("console");

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

// const dd


modale();
// modale_gallery(modale_gallery_element);

function modale() {
    open_modale();
    close_modale();
    next_modale();
    previous_modale();
    console.log(modale_gallery_img);
    // console.log()
}
function toto(img,figure,figcaption){
    // console.log(figure,img,figcaption);
    c_figure = figure.cloneNode();
    c_img = img.cloneNode();
    c_figcaption = figcaption.cloneNode();
    c_figure.append(build_trash_icon_element(),c_img,c_figcaption);
    modale_gallery_img.append(c_figure);
}

function build_trash_icon_element(){    
const span_element = build_element("span");
const i_element = build_element("i");
i_element.classList.add("fa-solid", "fa-trash-can");
span_element.append(i_element);
    return span_element; 
}

function build_modale_gallery(gallery) {
    const div_element = build_element("div");

    // const figure
    
    // console.log(gallery[0]);
    // se = gallery.children;
    //     for (let i=0; i<se.length; i++){
    //         // console.log(se.item(i).insertAdjacentElement('afterbegin',span_element)); 
    //         console.log(se.item(i).innerHTML);
    //         console.log(se.item(i));

    //         // add_span_modale_gallery(se[i],span_element);
    //         // se[i].insertAdjacentElement('afterend', span_element);
    //         // console.log(se[i]);
    //     }
    // console.log(se);
    // modale_gallery_img.append(...se);
    // console.log(se[1].insertAdjacentElement('afterbegin', span_element));
    // se[2].insertAdjacentElement('afterbegin', span_element);
    // se[3].insertAdjacentElement('afterbegin', span_element);
    // console.log(se);
    // for (let i = 0; i < gallery.children.length; i++) {
    //     se[i].insertAdjacentElement('afterbegin', span_element);
    // }

}

function add_span_modale_gallery(elem,span){
    elem.insertAdjacentElement('beforebegin',span);
    // console.log(elem);
    // console.log(span);

}

function modale_gallery() {
    //     console.log("???");
    //  console.log(gallery_div);
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

function un() {
    modale_container_element.style = "display:block";
    modale_show_element.style = "display:flex";
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