function encriptar() {
        let texto = document.getElementById ("texto").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo"); 
        let avatar = document.getElementById("avatar");  


        let textoCifrado = texto
                            .replace (/e/gi, "enter")
                            .replace (/i/gi, "imes")
                            .replace (/a/gi, "ai")
                            .replace (/o/gi, "ober")
                            .replace (/u/gi, "ufat");

 if (texto.length != 0) {
    document.getElementById ("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    avatar.src = "./img/encriptado.png";
 } else {
    avatar.src ="./img/muneco con fondo.png"
    tituloMensaje.textcontent = "Ningún mensaje fue encontrado"
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
    alert("debes ingresar algún texto");
 }
}

