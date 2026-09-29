let turma = new Turma("POO","João");

function cadastrar() {
  const nome = document.getElementById("nome").value;
  const nota1 = Number(document.getElementById("n1").value);
  const nota2 = Number(document.getElementById("n2").value);
  let aluno = new Aluno(nome, nota1, nota2);
  aluno.calcularMedia();
  alert("Cadastrado com sucesso!");
  turma.adicionarAluno(aluno);
}
function listarTurma() {
  let lista = "";
  for (i in turma.alunos) {
    lista = lista + turma.alunos[i].exibir() + "<br>";
  }
  document.getElementById("resultado").innerHTML = lista;
  document.getElementById("dadosTurma").innerHTML = "Codigo:"+turma.codigo + " - " +"Prof:"+turma.professor+" - "+"Disciplina:"+turma.disciplina;
}
function alterar(){
  let nome = prompt("Digite o codigo do turma que deseja alterar");
  turma.codigo = nome;
  alert("Turma Alterado com sucesso!")
}
