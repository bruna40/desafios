const prompt = require('prompt-sync')();

const vitories = parseInt(prompt('Numero de vitórias: '));
const defeats = parseInt(prompt('Numero de derrotas: '));

function calculatePoints(vitories, defeats) {
  const points = vitories - defeats;

    if (points < 10) {
        console.log(`O Herói tem de saldo de ${points} está no nível de Ferro`);
    } else if (points > 10 && points <= 20) {
        console.log(`O Herói tem de saldo de ${points} está no nível de Bronze`);
    } else if (points > 20 && points <= 50) {
        console.log(`O Herói tem de saldo de ${points} está no nível de Prata`);
    } else if (points > 50 && points <= 80) {
        console.log(`O Herói tem de saldo de ${points} está no nível de Ouro`);
    } else if (points > 80 && points <= 90) {
        console.log(`O Herói tem de saldo de ${points} está no nível de Diamante`);
    } else if (points > 90 && points <= 100) {
        console.log(`O Herói tem de saldo de ${points} está no nível de Lendário`);
    } else if (points > 100) {
        console.log(`O Herói tem de saldo de ${points} está no nível de Mestre Lendário`);
    }

  
}

calculatePoints(vitories, defeats);