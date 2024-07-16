// [botão adiciona novo produto]
export const BotaoAdicionarProduto = (secaoProdutos) => {
  const botaoAdicionarProduto = document.createElement("a");
  botaoAdicionarProduto.classList = "botao botao--azul";
  botaoAdicionarProduto.href = "../telas/adicionar-produto.html";
  botaoAdicionarProduto.setAttribute("data-adicionar", "");
  botaoAdicionarProduto.innerText = "Adicionar produto";

  if (window.location.href.includes("produtos.html?admin=true")) {
    const divTitulo = secaoProdutos.querySelector("div");
    divTitulo.appendChild(botaoAdicionarProduto);
  }
};
