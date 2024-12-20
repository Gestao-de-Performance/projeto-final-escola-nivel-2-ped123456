const titulo = document.querySelector("h1");
const subTitulos = document.querySelectorAll("h2");
const subTituloskills = document.querySelectorAll("h3");

const links = document.querySelectorAll("a");
const textos = document.querySelectorAll("p");

const corTitulo = titulo.style.color;
const corSubTitulo = subTitulos[0].style.color;
const corSubTituloskill = subTituloskills[0].style.color;
const corLink = links[0].style.color;
const corTexto = textos[0].style.color;

let diurno = true;

function noturno(){
    
    if (diurno) {
    
    document.body.style.backgroundColor="black";
    titulo.style.color = "white";

    textos.forEach(texto => {
        texto.style.color = "white";
    })
    

    subTitulos.forEach(subTitulo => {
        subTitulo.style.color = "white";   
    });

    subTituloskills.forEach(subTituloskill => {
        subTituloskill.style.color = "white";   
    });
    
    
    links.forEach(link => { 
        link.style.color = "white";
    });

        return diurno = false;
    
    }else {
        document.body.style.backgroundColor = "white";

        titulo.style.color = corTitulo;

        textos.forEach(texto =>{
            texto.style.color = corTexto;
        });


        subTitulos.forEach(subTitulo =>{
            subTitulo.style.color = corSubTitulo;
        });

        subTituloskills.forEach(subTituloskill =>{
            subTituloskill.style.color = corSubTituloskill; 
        });

        links.forEach(link =>{
            link.style.color = corLink;
        });

       
    }
    
}