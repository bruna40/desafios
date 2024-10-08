const prompt = require('prompt-sync')();

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        
    }
    atacar() {
        let ataque;
        let tipoNome;

        switch (this.tipo) {
            case 1: 
                tipoNome = "Mago";
                ataque = "magia";
                break;
            case 2: 
                tipoNome = "Guerreiro";
                ataque = "espada";
                break;
            case 3:
                tipoNome = "Monge";
                ataque = "artes marciais";
                break;
            case 4:
                tipoNome = "Ninja";
                ataque = "shuriken";
                break;
            default:
               
                ataque = "ataque desconhecido";
        }

        console.log(`O ${tipoNome} atacou usando ${ataque}`);
    }

}

function criarHeroi() {
    const nome = prompt('Digite o nome do herói: ');
    const idade = prompt('Digite a idade do herói: ');


    const tipo = parseInt(prompt(`Digite o número do tipo do herói: \n1 - Mago\n2 - Guerreiro\n3 - Monge\n4 - Ninja\n`));

    const heroi = new Heroi(nome, parseInt(idade), tipo);
    heroi.atacar();

  
    const resposta = prompt('Deseja criar outro herói? (s/n): ');
    if (resposta.toLowerCase() === 's') {
        criarHeroi();
    } else {
        console.log('Obrigado por jogar!');
    }
}

criarHeroi();
