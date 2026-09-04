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

 const tag = document.querySelector (".card-tag");
 console.log("querySelector('.card-tag') encontrou: " , tag.textContent);

 const cards = document.querySelectorAll(".card");
console.log(`querySelectorAll (".card) encontrou ${cards.length} cards(s)`);

cards.forEach(function (card, indice) {
    const tituloDoCard = card.querySelector(".card-title");
    console.log('Card ${indice +1}:' , tituloDoCard ? tituloDoCard.textContent : "(sem titulo)")
})

cards.forEach(function (card, indice){
    const tituloDoCard = card.querySelector(".card-title");
    console.log(`Card ${indice + 1}:`, tituloDoCard ? tituloDoCard.textContent : "(sem título)");
});


tag.innerHTML = "<strong>Frontend</strong>";
console.log("innerHTML interpretou a tag <strong/>. Resultado:", tag.innerHTML);


const elementoDeTeste = document.createElement("span");
elementoDeTeste.textContent = "<strong>Frontend</strong>";
console.log("textContent NÃO interpreta a tag - ela vira texto puro:", elementoDeTeste.textContent);
