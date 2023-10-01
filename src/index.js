// variavel com nome e xp do herói
let nomeDoHeroi = "Samba";
let xpDoHeroi = 11000; // mude o valor para 1000 e veja o erro proposto pelo desafio

// variavel com nível do herói
let nivelDoHeroi;

// tem um erro onde o numero 1000 não define nenhum nível do Herói, pois o nível Ferro é menor e o nível Bronze é maior
if (xpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else if (xpDoHeroi >= 10001 ) {
    nivelDoHeroi = "Radiante";
}

// mensagem com o nível do herói
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);
