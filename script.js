function enviar(event){
event.preventDefault()
const nome = document.getElementById('nome').value;
const msg = document.getElementById('msg').value;

const celular = '559187177069';
const texto = `Olá! Me chamo ${nome}, ${msg}`;
const msgFormatada = encodeURIComponent(texto);
const url =`https://api.whatsapp.com/send?phone=${celular}&text=${msgFormatada}`;


window.open (url,'_blank')

}

const botao = document.querySelector(".botao-menu");
const menu = document.querySelector(".menu");

botao.addEventListener("click", () => {
menu.classList.toggle("ativo");
});
