// declaração de um objeto
const objeto = {
    propriedade: "propriedade",

    metodo: function() {
        // corpo da função
    }

    // outra sintaxe possível
    // metodo: () => {}
}

// exemplo de um objeto na prática
const pessoa = {
    nome: "Levy",
    sobrenome: "Abreu",

    falarNomeCompleto: function() {
        return `Olá, meu nome é ${this.nome} ${this.sobrenome}!`;
    }

    /* 
        falarNomeCompleto: () => {
            return `Olá, meu nome é ${this.nome} ${this.sobrenome}!`;
        }
    */
}

// utilizando objetos na prática
console.log(pessoa.nome); // "Levy"
console.log(pessoa.sobrenome); // "Abreu"

console.log(pessoa.falarNomeCompleto()); // "Olá, meu nome é Levy Abreu!"
