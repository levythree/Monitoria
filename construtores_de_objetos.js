// exemplo de um construtor de objetos
function Objeto(propriedade) {
    this.propriedade = propriedade;

    this.metodo = function() {
        // corpo do método
    }
}

// exemplo prático de um construtor de objetos
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falarNomeCompleto = function() {
        return `Olá, meu nome é ${this.nome} ${this.sobrenome}!`;
    }
}

// criando pessoas utilizando a função "Pessoa()"
const levy = Pessoa("Levy", "Abreu");
const ricardo = Pessoa("Ricardo", "Rubens");

console.log(levy.falarNomeCompleto()); // "Olá, meu nome é Levy Abreu!"
console.log(ricardo.falarNomeCompleto()); // "Olá, meu nome é Ricardo Rubens!"
