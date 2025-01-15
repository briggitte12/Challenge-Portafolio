function encriptar() {
    const texto = document.getElementById("input-text").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    const texto = document.getElementById("input-text").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    const outputText = document.getElementById("output-text");
    const lupaImg = document.getElementById("lupa-img");

    if (texto) {
        outputText.value = texto;
        lupaImg.style.display = "none";
    } else {
        outputText.value = "";
        lupaImg.style.display = "block";
    }
}

function copiarTexto() {
    const texto = document.getElementById("output-text");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}