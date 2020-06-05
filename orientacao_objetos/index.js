// class Cliente {
//   constructor(nome, email, cpf) {
//     this.nome = nome;
//     this.email = email;
//     this.cpf = cpf;
//   }
// }

// const cliente1 = new Cliente('Jéssica', 'jessica@email.com', 'XXX.XXX.XX-XX')

// console.log("Dados da cliente: ", cliente1);

// 1-Crie uma classe chamada Colaboradores.
// class Colaboradores {}
// 2. Crie uma classe chamada Colaboradores, atribua as propriedades a seguir dentro do método constructor. 
// Propriedades que estarão dentro do método constructor: 
// nome, departamento, função

// class Colaboradores {
  //   constructor(nome, departamento, funcao)
  // }

// 3.Analise o código e ajuste os erros. 


// class Usuario{
//   constructor(nome, email, confirmacaoEmail){
//            this.nome = nome;
//           this.email = email;
//           this.confirmacaoEmail = confirmacaoEmail;
// }
// }

// 4.Qual será a saída após instanciar a classe Colaboradores?


// class Colaboradores{
//   constructor(nome, departamento, funca){
//   this.nome = nome;
//   this.departamento = departamento;
//   this.funcao = funcao;
//   }
  
//   }
  
//   const colaborador1 = new Colaboradores('Jenifer', 'Engenharia', 'Engenheira de Dados')
  
//   console.log(colaborador1);
// R:erro no console

// 5. Dado uma classe: 

// class Usuario {
//   constructor(nome, email, confirmacaoEmail) {
//   this.nome = nome;
//   this.email = email;
//   this.confirmacaoEmail = confirmacaoEmail;
//   }
//   verificarEmail(){
//     if(this.confirmacaoEmail === this.email){
//       return "email de buenas"
//     }else{
//       return "email diferente, faz de novo meu amor =)"
//     }
//   }
//   }
//   const nomedomeuobjeto = new Usuario('nayla', 'naylasouza@gmail.com', 'naylaasouza@gmail.com');
//   console.log(nomedomeuobjeto.verificarEmail())
//   Crie um metodo que confirme se os dois emails são iguais ou diferentes. 
//   Lembre-se de tratar o campo de emails, colocando-os em letras minúsculas e
//    testando o código para verificar se realmente deu certo. 


// 6. Insira uma propriedade chamada sobrenome na classe Usuario. Em seguida, crie um método de saudações e retorne a seguinte frase: `Olá nome sobrenome, seja bem vinda a plataforma de estudos da Reprograma!`

//   class Usuario {
//   constructor(nome, sobrenome, email, confirmacaoEmail, celular) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.email = email;
//     this.confirmacaoEmail = confirmacaoEmail;
//     this.celular = celular;
//   }

//   saudacoes() {
//     return `Olá ${this.nome} ${this.sobrenome}, seja bem vinda a plataforma de estudos da Reprograma!`
//   }
// }

// const aluna1 = new Usuario('Bruna', 'Almeida', 'bruna@email.com.br', 'bruna@email.com.br')

// console.log(aluna1.saudacoes())

// a empresa PhoneJa percebeu que era necessario inserir uma opcao de desconto, de acordo com a tabela:
// ate R$ 1.500,00 - 5%, de 1500 a 3000 -7% e acima de 3000 -10%

