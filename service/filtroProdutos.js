const procurarProdutoInput = document.querySelector(".cabecalho__search input");

export const filtrarProduto = () => {
  const produtos = document.querySelectorAll(".produtos__cards li");

  if (procurarProdutoInput != "") {
    produtos.forEach((produto) => {
      let nomeProduto = produto.querySelector(".card__titulo");
      nomeProduto = nomeProduto.textContent.toLowerCase();
      let filtroTexto = procurarProdutoInput.value.toLowerCase();
      if (!nomeProduto.includes(filtroTexto)) {
        produto.style.display = "none";
      } else {
        produto.style.display = "block";
      }
    });
  } else {
    produtos.forEach((produto) => {
      produto.style.display = "block";
    });
  }
}

procurarProdutoInput.addEventListener("input", filtrarProduto);
