import { clienteService } from "../service/cliente-service.js";
import { dadosProduto } from "../service/dadosNovoProduto.js";
import { valida, validaForm } from "../service/validador.js";

(() => {
  const botaoAdicionar = document.querySelector(
    "[data-cadastro-botao='salvar']"
  );

  // [Adicionar novo produto]
  const adicionarNovoProduto = () => {
    botaoAdicionar.addEventListener("click", async (evento) => {
      evento.preventDefault();
      const inputsCadastro = document.querySelectorAll("[data-cadastro]");
      let isValid = true;
      inputsCadastro.forEach((input) => {
        if (!valida(input, input.dataset.cadastro)) {
          isValid = false;
        }
      });

      if (isValid) {
        try {
          await clienteService.criaProduto(dadosProduto());
          window.location.href = "produtos.html?admin=true";
        } catch (erro) {
          console.log(erro);
          window.location.href = "telas/erro.html";
        }
      }
    });
  };
  adicionarNovoProduto();

  const botaoSubmit = document.querySelector("[data-botao='submit']");
  const inputsFormulario = document.querySelectorAll("[data-formulario]");
  inputsFormulario.forEach((input) => {
    validaForm(botaoSubmit, input);
  });
})();
