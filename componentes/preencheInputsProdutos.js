import { clienteService } from "../service/cliente-service.js";

export const preencheInputs = async (indexDoProduto) => {
  const urlImagem = document.querySelector("[data-cadastro='url']");
  const categoria = document.querySelector("[data-cadastro='categoria']");
  const nome = document.querySelector("[data-cadastro='nome']");
  const preco = document.querySelector("[data-cadastro='preco']");
  const descricao = document.querySelector("[data-cadastro='descricao']");

  const produto = await clienteService.pegaProdutoUnico(indexDoProduto);

  urlImagem.value = produto.urlImagem;
  categoria.value = produto.categoria;
  nome.value = produto.nome;
  preco.value = produto.preco;
  descricao.value = produto.descricao;
};
