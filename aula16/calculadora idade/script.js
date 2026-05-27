function calcularAno() {
  const idade = document.getElementById("idade").value;
  const anoAtual = new Date().getFullYear();

  if (idade === "" || idade < 0) {
    document.getElementById("resultado").innerHTML =
      "Digite uma idade válida.";
    return;
  }

  const anoNascimento = anoAtual - idade;

  document.getElementById("resultado").innerHTML =
    "Você nasceu em " + anoNascimento;
}