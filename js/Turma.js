class Turma{
  #codigo = "123b";
  disciplina;
  professor;
  alunos;
  constructor(disciplina, professor){
    this.#codigo = this.#gerarcodigo();
    this.disciplina = disciplina;
    this.professor = professor;
    this.alunos = [];
  }
  adicionarAluno(aluno){
    this.alunos.push(aluno);
  }
  consultarAluno(nome){
    for(i in this.alunos){
      if(this.alunos[i].nome == nome){
        return this.alunos[i];
      }
    }
  }
  #gerarcodigo(){
    let letras = "abcdefghijklmnopqrstuvwxyz";
    let parte1 = Math.floor(Math.random() * 10) + 1;
    let parte2 = letras.charAt(this.#getRndInteger(0,letras.length));
   
    return parte1+parte2;
  }
  #getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
 
}
