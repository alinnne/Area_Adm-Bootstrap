function carregarProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const tbody = document.querySelector('#tabela-produtos tbody');
    tbody.innerHTML = ''; // Limpa a tabela

    produtos.forEach(produto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco}</td>
            <td>${produto.descricao}</td>
        `;
        tbody.appendChild(row);
    });
}

// Carrega os produtos ao abrir a página
carregarProdutos();