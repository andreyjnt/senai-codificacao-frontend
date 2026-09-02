const titulo = document.getElementById("cardTitulo");
const descricao = document.getElementById("cardDescricao");
const botao = document.getElementById("btnSaibaMais");

//exibe os elementos selecionados no console do navegador

console.log ("Elemento do título:", titulo);
console.log ("Elemento do botão:", botao);



console.log("Elemento atual do título:", titulo.innerText);




botao.addEventListener("click", function (){
    titulo.innerText = "JavaScript no Dom! " ;

    descricao.innerText = "Você clicou no botão e o textom foi nalterado usando doument.getElemnentById() com sucesso!"
    
    titulo.style.color = "#4f46e5";
    botao.style.background = "#10b981"; 
    botao.innerText = "Texto atualizado!" 
})