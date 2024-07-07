function encriptar() {
        let texto = document.getElementById ("texto").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo"); 
        let avatar = document.getElementById("avatar");  

        let textoCifrado = texto
                            .replace (/e/gi, "ketib")
                            .replace (/i/gi, "Iohar")
                            .replace (/a/gi, "ari")
                            .replace (/o/gi, "oryan")
                            .replace (/u/gi, "umet");
 if (texto.length != 0) {
    document.getElementById ("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    avatar.src = "./Img/encriptado.png";
 } else {
    avatar.src ="./Img/muneco con fondo.png"
    tituloMensaje.textcontent = "Ningún mensaje fue encontrado"
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
    swal("Wooops!", "Debes considerar agregar un texto", "warning");
 }
}

function desencriptar () {
    let texto = document.getElementById("texto").value
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo"); 
    let avatar = document.getElementById("avatar");  

    let textoCifrado = texto
    .replace(/ketib/gi, "e")
    .replace (/Iohar/gi, "i")
    .replace (/ari/gi, "a")
    .replace (/oryan/gi, "o")
    .replace (/umet/gi, "u");

    if (texto.length != 0) {
        document.getElementById ("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        avatar.src = "./Img/desencriptado.png";   
    } else {
        avatar.src ="./img/muneco con fondo.png"
        tituloMensaje.textcontent = "Ningún mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        swal("Wooops!", "Debes considerar agregar un texto", "warning"); 
    }
}

