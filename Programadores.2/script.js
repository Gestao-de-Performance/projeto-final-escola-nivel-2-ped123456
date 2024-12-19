const titulo = document.querySelector("h1");
const subTitulos = document.querySelectorAll("h2");
const subTituloskills = document.querySelectorAll("h3");

const links = document.querySelectorAll("a");
const textos = document.querySelectorAll("p");

const corTitulo = titulo.style.color;
const corSubtitulo = subTitulos[0].style.color;
const corSubtituloskill = subTituloskills[0].style.color;
const corLink = links[0].style.color;
const corTexto = textos[0].style.color;

const diurno = true;

function noturno(){
    
    if (diurno)
    
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
    
    console.log(links);

    links.forEach(link => { 
        link.style.color = "white";
    });
    
    else {
        document.body.style.backgroundColor = "white";

        titulo.style.color = corTitulo;

        subTitulos.forEach(subTitulo =>{
            subTitulo.style.color = corSubTitulo;
        })

        subTituloskills.forEach(subTituloskill =>{
            subTituloskill.style.color = corSubTituloskill; 
        })

        links.forEach(link =>{
            link.style.color = "corLinks";
        })

        textos.forEach(texto =>{
            texto.style.color = "corTexto";
        })
    }
    
}