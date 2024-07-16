import { clienteService } from "../service/cliente-service.js";
import { pegaCategoria } from "../service/categoriasUnicas.js";
import { produtoService } from "../service/criaProdutos.js";
import { validaForm } from "../service/validador.js";
import { filtrarProduto } from "../service/filtroProdutos.js";

(async () => {
  try {
    const $produtos = document.querySelector("[data-produtos]");
    const produtos = await clienteService.pegaProdutos();
    const categorias = pegaCategoria(produtos);

    categorias.forEach((categoria) => {
      const secao = produtoService.criaSecao(categoria);
      $produtos.appendChild(secao);
      const $lista = document.querySelector(`[data-list='${categoria}']`);
      produtos.forEach((produto) => {
        if (produto.categoria === categoria) {
          const produtoNovo = produtoService.criaCardProduto(produto, categoria);
          $lista.appendChild(produtoNovo);
        }
      });
    });
  } catch (erro) {
    console.log(erro);
    window.location.href = "./telas/erro.html";
  }

  const botaoSubmit = document.querySelector("[data-botao='submit']");
  const inputsFormulario = document.querySelectorAll("[data-formulario]");
  inputsFormulario.forEach((input) => {
    validaForm(botaoSubmit, input);
  });

  filtrarProduto();
})();
