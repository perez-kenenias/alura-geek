export function valida(input, tipoDeInput) {
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("formulario__campo--invalido");
    input.parentElement.querySelector("span").innerHTML = "";
    return true;
  } else {
    input.parentElement.classList.add("formulario__campo--invalido");
    input.parentElement.querySelector("[data-erro]").innerHTML = mostraMensagem(
      tipoDeInput,
      input
    );
    return false;
  }
}

const tiposDeErro = [
  "customError",
  "patternMismatch",
  "typeMismatch",
  "valueMissing",
];

const validadores = {
  preco: (input) => validaPreco(input),
};

const mensagensDeErro = {
  nome: {
    valueMissing: "Campo nome é obrigatório.",
  },
  email: {
    typeMismatch: "Informe um endereço de e-mail válido.",
    patternMismatch: "Exemplo de e-mail válido: seuemail@dominio.com.",
    valueMissing: "Campo e-mail é obrigatório.",
  },
  senha: {
    valueMissing: "Campo senha é obrigatório.",
    patternMismatch:
      "A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não símbolos",
  },
  mensagem: {
    valueMissing: "Campo mensagem é obrigatório.",
  },
  url: {
    valueMissing: "Campo url é obrigatório.",
  },
  categoria: {
    valueMissing: "Campo categoria é obrigatório.",
  },
  preco: {
    valueMissing: "Campo preço é obrigatório.",
    customError: "O campo preço não pode ser 0,00.",
  },
  descricao: {
    valueMissing: "Campo descrição é obrigatório.",
  },
};

function mostraMensagem(tipoDeInput, input) {
  let mensagem = "";
  tiposDeErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagensDeErro[tipoDeInput][erro];
    }
  });
  return mensagem;
}

function validaPreco(input) {
  const preco = input.value;
  let mensagem = "";
  if (preco == "R$ 0,00") {
    mensagem = "O campo preço não pode ser 0,00.";
  }
  input.setCustomValidity(mensagem);
}

export function validaForm(botaoSubmit, input) {
  botaoSubmit.addEventListener("click", (evento) => {
    evento.preventDefault();
    valida(input, input.dataset.formulario);
  });

  input.addEventListener("blur", () => {
    valida(input, input.dataset.formulario);
  });
}
