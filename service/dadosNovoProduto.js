export const dadosProduto = () => {
  const urlImagem = document.querySelector("[data-cadastro='url']").value;
  const categoria = document.querySelector("[data-cadastro='categoria']").value;
  const nome = document.querySelector("[data-cadastro='nome']").value;
  const preco = document.querySelector("[data-cadastro='preco']").value;
  const descricao = document.querySelector("[data-cadastro='descricao']").value;
  const dados = {
    id: `${Date.now()}`,
    urlImagem,
    categoria,
    nome,
    preco,
    descricao,
  };
  return dados;
};
