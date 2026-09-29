class Aluno{
    constructor(nome, nota1, nota2){
      this.nome = nome;
      this.nota1 = nota1;
      this.nota2 = nota2;
    }
    calcularMedia(){
      let m = (this.nota1 + this.nota2)/2;
      return m;  
    }
    exibir(){
      let m = this.calcularMedia();  
      let resp = "Nome: "+this.nome+" Media: "+m;
      return resp;
      
    }
}
