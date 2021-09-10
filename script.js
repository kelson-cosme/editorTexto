const texto = document.getElementById("texto");

function esquerda(){
    texto.style.textAlign = "left"
}

function direita(){
    texto.style.textAlign = "right"
}

function centralizar(){
    texto.style.textAlign = "center"
}

function justificar(){
    texto.style.textAlign = "justify"
}

function negrito(){

    if (texto.style.fontWeight == ""){
        texto.style.fontWeight = "bold"
    } else {
        texto.style.fontWeight = ""
    }
}

function italico(){

    if (texto.style.fontStyle == ""){
        texto.style.fontStyle = "italic"
    } else {
        texto.style.fontStyle = ""
    }
}

function underline(){
    if (texto.style.textDecoration == ""){
        texto.style.textDecoration = "underline"
    } else {
        texto.style.textDecoration = ""
    }

}