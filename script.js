let textoEntrada = document.getElementById("texto_entrada");

let textoSaida = document.getElementById("texto_saida");

const btnCriptografar = document.getElementById("btn-cript");
const btnDescriptografar = document.getElementById("btn-descript");
const btnCopiar = document.getElementById("btn-copiar");
const btnLimpar = document.getElementById("btn-limpar");

function copiarTexto() {
  navigator.clipboard.writeText(textoSaida.value);
  
}

function encriptarTexto() {
  let fraseEncriptada = textoEntrada.value;
  fraseEncriptada = fraseEncriptada
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  textoSaida.value = fraseEncriptada;
}

function desencriptarTexto() {
  let fraseDesencriptada = textoEntrada.value;
  fraseDesencriptada = fraseDesencriptada
    .replaceAll("ai", "a")
    .replaceAll("imes", "i")
    .replaceAll("ufat", "u")
    .replaceAll("enter", "e")
    .replaceAll("ober", "o");
  textoSaida.value = fraseDesencriptada;
}

function limparDados() {
  document.getElementById('texto_entrada').value="";
  document.getElementById('texto_saida').value="";
}


btnLimpar.addEventListener("click" , (event)=> {
  event.preventDefault();
  limparDados();
})


btnCriptografar.addEventListener("click", (event) => {
  event.preventDefault();
  encriptarTexto();
});

btnDescriptografar.addEventListener("click", (event) => {
  event.preventDefault();
  desencriptarTexto();
});

btnCopiar.addEventListener("click", (e) => {
  e.preventDefault();
  copiarTexto();
});
