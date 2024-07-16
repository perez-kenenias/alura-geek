import { produtoService } from "../service/criaProdutos.js"; 

// [Lista todos os produtos]
export const listarProdutos = (produtos, categoria) => {
  const secaoProdutos = document.querySelector("[data-produtos]");

  const tituloCategoria = document.querySelector("[data-categoria]");
  tituloCategoria.innerText = `Todos os produtos`;

  const lista = document.createElement("ul");
  lista.classList.add("produtos__cards");

  produtos.forEach((produto) => {
    const novoProduto = produtoService.criaCardProduto(
      produto,
      produto.categoria
    );
    if (categoria == null) {
      lista.appendChild(novoProduto);
    } else if (categoria === produto.categoria.replace(" ", "")) {
      lista.appendChild(novoProduto);
      tituloCategoria.innerText = produto.categoria;
    }
  });
  secaoProdutos.appendChild(lista);
};
