import { preencheInputs } from "../componentes/preencheInputsProdutos.js";
import { clienteService } from "../service/cliente-service.js";
import { dadosProduto } from "../service/dadosNovoProduto.js";
import { validaForm } from "../service/validador.js";

// [Editar produto]
(async () => {
  const pegaURL = new URL(window.location);
  const indexDoProduto = pegaURL.searchParams.get("produto");
  const editarProduto = async (indexDoProduto) => {
    preencheInputs(indexDoProduto);

    const botaoEditar = document.querySelector("[data-cadastro='editar']");
    
    botaoEditar.addEventListener("click", async (evento) => {
      evento.preventDefault();
      try {
        await clienteService.atualizaProduto(indexDoProduto, dadosProduto());
        window.location.href = "produtos.html?admin=true";
      } catch (erro) {
        console.log(erro);
        window.location.href = "telas/erro.html";
      }
    });
  };
  editarProduto(indexDoProduto);

  const botaoSubmit = document.querySelector("[data-botao='submit']");
  const inputsFormulario = document.querySelectorAll("[data-formulario]");
  inputsFormulario.forEach((input) => {
    validaForm(botaoSubmit, input);
  });
})();
