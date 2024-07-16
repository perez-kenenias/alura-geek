import { valida, validaForm } from "../service/validador.js";

(() => {
  const botaoLogin = document.querySelector("[data-login='loggar']");
  const inputsLogin = document.querySelectorAll("[data-input]");

  let formularioValido = true;
  botaoLogin.addEventListener("click", (evento) => {
    evento.preventDefault();
    formularioValido = true;
    inputsLogin.forEach((input) => {
      const isValid = valida(input, input.dataset.input);
      if (!isValid) formularioValido = false;
    });
    console.log(formularioValido)
    if (formularioValido) window.location.href = "produtos.html?admin=true";
  });

  inputsLogin.forEach((input) => {
    input.addEventListener("blur", () => {
      const isValid = valida(input, input.dataset.input);
      if (!isValid) formularioValido = false;
    });
  });

  const botaoSubmit = document.querySelector("[data-botao='submit']");
  const inputsFormulario = document.querySelectorAll("[data-formulario]");
  inputsFormulario.forEach((input) => {
    validaForm(botaoSubmit, input);
  });
})();
