// class Cliente{
//     constructor(nome, email, cpf){
//         this.nome = nome;
//         this.email = email;
//         this.cpf = cpf;
//     }
// }
// const cliente1 = new Cliente('Nayla', 'nayla@gmail.com','399.345.980-23')
// console.log("Dados da cliente", cliente1);

// 1. Crie uma classe chamada Celular, inicializando-a com o metódo chamado constructor.
// class Celular { 
//     constructor(modelo, cor, tamanho)}
// 2. Dado um objeto: 

// let celular = {
// nome: 'Super X'
// modelos: 'XX-Y', 
// valor: 900
// }

// Utilizando a Orientação a Objetos para modular, de forma mais legível, crie uma classe, com o metódo constructor, atribua os parametros no metódo e em seguida, insira as propriedades e valores dentro do constructor. 
// class Celular1{
//     constructor(nome, modelos, valor){
//         this.nome = nome;
//         this.modelos = modelos;
//         this.valor = valor;
//     }
// }
// const celular2 = new Celular1('super x', 'xx-y', '100');
// console.log('dados do ceular: ', celular2);

class Cliente {
    constructor(nome, cpf, dataDacompra, valor, modeloDoCelular, anoDoCelular, loja, atendente) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDacompra = dataDacompra;
        this.valor = valor;
        this.modeloDoCelular = modeloDoCelular;
        this.anoDoCelular = anoDoCelular;
        this.loja = loja;
        this.atendente = atendente;

    }
    descontar() {
        //primeiro jeito
        // if (this.valor < 1500) {
        //     return `tera um desconto de 10%`
        // } else {
        //     return `nao tera desconto`
        // }

        //com ternarioo
        const desconto = this.valor < 1500 ? `${this.nome}tera desconto` : `nao tera desconto`
        return desconto;
    }
}


const cliente1 = new Cliente('Dora Barreto', '223.001.221-29', 'R$ 2.000,00', 'XXX-12', 2020, 'Amarelo', 'RJ-BR', 'Joana Maria');
console.log('Primeira cliente:', cliente1)
console.log('terá desconto?', cliente1.descontar())
console.log('------------------')


const cliente2 = new Cliente("Marcela Janino Silva ", '321.101.231-29', 1.300,00, 'XXM-y', '2019', 'roxo', 'SP-br', 'Drielly gomes Almeida');
console.log('Primeira cliente:', cliente2)
console.log('terá desconto?', cliente2.descontar())
console.log('------------------')


const cliente3 = new Cliente('Raquel gigante', '399.999.999-00', '40000', 'mdm-pro', 2020, 'azul', 'ms-break', 'fran carneiro de pinha');
console.log('Primeira cliente:', cliente3)
console.log('terá desconto?', cliente3.descontar())
console.log('------------------')