function Person(name) {
    // O this faz referência ao nome da const. Ou seja, está dizendo para adicionar a key name com o valor que está no parâmetro name.
    this.name = name;

    // O valor walk recebe a function que retorna o nome da pessoa com a string.
    this.walk = function() {
        return this.name + " está andando..."
    };
};

// O new antes de chamar a função é obrigatório.
const mayk = new Person("Mayk");
const joao = new Person("João");

// O valor walk dentro do objeto está sendo acessado, o valor é uma função.
console.log(mayk.walk());
console.log(joao.walk());