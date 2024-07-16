import { clienteService } from "../service/cliente-service.js";
import { validaForm } from "../service/validador.js";
import { listarProdutos } from "../componentes/listarProdutos.js"
import { BotaoAdicionarProduto } from "../componentes/BotaoAdicionarNovoProduto.js";
import { filtrarProduto } from "../service/filtroProdutos.js";

// [Botão adiciona novo produto]
const secaoProdutos = document.querySelector("[data-produtos]");
BotaoAdicionarProduto(secaoProdutos);

// [Carrega produtos]
const carregaProdutos = async () => {
  try {
    const produtos = await clienteService.pegaProdutos();
    const categoria = new URL(window.location).searchParams.get("categoria");
    listarProdutos(produtos, categoria);
    filtrarProduto();
    return produtos;
  } catch (erro) {
    console.log(erro);
    window.location.href = "./erro.html";
  }
};
carregaProdutos();

// [Remove produto]
const cardsProdutos = document.querySelector("[data-produtos]");
cardsProdutos.addEventListener("click", async (evento) => {
  const isBotaoRemove = evento.target.className === "card__lixeira";
  const isBotaoEdita = evento.target.className === "card__caneta";
  
  try {
    const produtos = await clienteService.pegaProdutos();
    const produto = evento.target.closest("[data-id]");
    const id = produto.dataset.id;
    const index = produtos.findIndex((produto) => {
      return produto.id === id;
    });
    if (isBotaoRemove) {
      await clienteService.removeProduto(index);
      window.location.reload();
    } else if (isBotaoEdita) {
      window.location.href = `atualizar-produto.html?produto=${index}`;
    }
  } catch (erro) {
    console.log(erro);
  }
});

const botaoSubmit = document.querySelector("[data-botao='submit']");
const inputsFormulario = document.querySelectorAll("[data-formulario]");
inputsFormulario.forEach((input) => {
  validaForm(botaoSubmit, input);
});