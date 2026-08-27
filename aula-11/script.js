const produto1 = {
    nome: "Camiseta",
    preco: 50,
    categoria: "Roupas",
    estoque: 10,
    promocao: true
};

const produto2 = {
    nome: "Tênis",
    preco: 200,
    categoria: "Calçados",
    estoque: 5,
    promocao: false
};

const produto3 = {
    nome: "Boné",
    preco: 40,
    categoria: "Acessórios",
    estoque: 8,
    promocao: true
};

function calcularDesconto(preco, percentual) {
    const desconto = preco * percentual / 100;
    return preco - desconto;
}

function exibirProduto(produto) {
    console.log(`Nome: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.estoque}`);
}

if (produto1.promocao) {
    console.log(`${produto1.nome} está em promoção!`);
} else {
    console.log(`${produto1.nome} não está em promoção.`);
}

const produtos = [produto1, produto2, produto3];

for (let i = 0; i < produtos.length; i++) {
    console.log(`${i + 1}. ${produtos[i].nome}`);
}