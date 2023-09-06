// exemplo de uma fábrica de objetos
function fabricaDeObjetos(propriedade) {
    return {
        propriedade,
        // outra sintaxe possível
        // propriedade: propriedade,

        metodo: function() {
            // corpo do método
        }
    }
}

// exemplo prático de uma fábrica de objetos
function fabricaDePessoas(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        falarNomeCompleto: function() {
            return `Olá, meu nome é ${this.nome} ${this.sobrenome}!`;
        }
    }
}

// criando pessoas utilizando a função "fabricaDePessoas()"
const levy_abreu = fabricaDePessoas("Levy", "Abreu");
const ricardo_rubens = fabricaDePessoas("Ricardo", "Rubens");

console.log(levy_abreu.falarNomeCompleto()); // "Olá, meu nome é Levy Abreu!"
console.log(ricardo_rubens.falarNomeCompleto()); // "Olá, meu nome é Ricardo Rubens!"
