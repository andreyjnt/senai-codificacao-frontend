const produtos = [
    {
        nome: "Camiseta",
        preco: 50,
        categoria: "Roupas",
        imagem: "camiseta.jpg"
    },
    {
        nome: "Tênis",
        preco: 200,
        categoria: "Calçados",
        imagem: "tenis.jpg"
    },
    {
        nome: "Boné",
        preco: 40,
        categoria: "Acessórios",
        imagem: "bone.jpg"
    },
    {
        nome: "Calça",
        preco: 120,
        categoria: "Roupas",
        imagem: "calca.jpg"
    },
    {
        nome: "Chinelo",
        preco: 60,
        categoria: "Calçados",
        imagem: "chinelo.jpg"
    }
];

// Função listar
function listarProdutos(lista) {
    lista.forEach(produto => {
        const { nome, preco, categoria, imagem } = produto;

        console.log(
            `Nome: ${nome} | Preço: R$ ${preco} | Categoria: ${categoria} | Imagem: ${imagem}`
        );
    });
}

// Função filtrar
function filtrarPorCategoria(categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}

// Destructuring
const { nome, preco } = produtos[0];

console.log("Produto escolhido:", nome);
console.log("Preço:", preco);

// Spread operator
const produtosCopia = [...produtos];

const produtosModificados = [
    ...produtos,
    {
        nome: "Jaqueta",
        preco: 180,
        categoria: "Roupas",
        imagem: "jaqueta.jpg"
    }
];

// Testes
console.log("Todos os produtos:");
listarProdutos(produtos);

console.log("Produtos da categoria Roupas:");
console.log(filtrarPorCategoria("Roupas"));

console.log("Lista duplicada:");
console.log(produtosCopia);

console.log("Lista modificada:");
console.log(produtosModificados);