
let formulario1=document.querySelector("#formulario1");
let formulario2 = document.querySelector("#form2");
let copiar = document.querySelector('#copiar');
let textArea = document.querySelector('#result');
let abc=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',' ','\n']
/// https://www.youtube.com/watch?v=sYccyYm1N6s
let diccionario = {
    "a" : "z",

    "b" : 'y',

    'c' : "x",

    'd' : 'w',

    'e' : "v",

    'f' : 'u',

    'g' : 't',

    'h' : 's',

    'i' : 'r',

    'j' : 'q',

    'k' : 'p',

    'l' : 'o',

    'm' : 'n',

    'n' : 'm',

    'o' : 'l',

    'p' : 'k',

    'q' : 'j',

    'r' : 'i',

    's': 'h',

    't' : 'g',

    'u' : 'f',

    'v' : 'e',

    'w' : 'd',

    'x' : 'c',

    'y' : 'b',

    'z' : 'a',
    
    'ñ' : '@',
    ' ' : ' ',
    '\n' : '\n'


}
formulario1.addEventListener("submit", codificar)
copiar.addEventListener("click", copy)

function codificar(text){
    text.preventDefault();
    let lista = [];
    let texto = document.querySelector("#ingreso").value;
    let txt = document.querySelector("#ingreso");
    texto.split("");
    
    for(var i = 0 ; i<texto.length ; i++){
        if (abc.includes(texto[i])){
            lista.push(diccionario[texto[i]])
            
        }
        else{
            lista=["has ingresado un caracter invalido !solo se permiten letras minusculas y sin acetno¡"]
            break
        }
        
        
    }

    document.querySelector("#result").value=lista.join("")

    
    let result = document.querySelector('#result');
    result.style.setProperty('background','white')




}

function copy(){
    textArea.select();
    document.execCommand("copy");
    formulario1.reset();
    formulario2.reset();
}
