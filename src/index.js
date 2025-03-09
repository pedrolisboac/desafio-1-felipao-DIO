// Desafio #1 - Classificador de Nível de Herói 

let nivelHeroi = 70000;
let userName = "Faker";
let rankedELO = "";

switch (true){
    case nivelHeroi < 1000:
        rankedELO = "Ferro";
        break;
    case nivelHeroi <= 2000:
        rankedELO = "Bronze";
        break;
    case nivelHeroi <= 5000:
        rankedELO = "Prata";
        break;
    case nivelHeroi <= 7000:
        rankedELO = "Ouro";
        break;
    case nivelHeroi <= 8000:
        rankedELO = "Platina";
        break;
    case nivelHeroi <= 9000:
        rankedELO = "Esmeralda";
        break;
    case nivelHeroi <= 10000:
        rankedELO = "Diamante";
        break;
    default:
        rankedELO = "Desafiante";  
}

console.log("O Herói de nome " + userName + " está no nível de " + rankedELO)
