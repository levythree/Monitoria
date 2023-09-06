class Classe {
    propriedade = "propriedade";

    metodo = function() {
        // corpo do método
    }
}

class Pessoa {
    nome = "Levy";
    sobrenome = "Abreu";

    falarNomeCompleto = function() {
        return `Olá, meu nome é ${this.nome} ${this.sobrenome}!`;
    }
}

const pessoa = new Pessoa();

console.log(pessoa.nome); // "Levy"
console.log(pessoa.sobrenome); // "Abreu"

console.log(pessoa.falarNomeCompleto()); // "Olá, meu nome é Levy Abreu!"


// 