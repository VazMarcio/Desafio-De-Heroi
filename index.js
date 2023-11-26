let nomeDoHeroi = "Baiken"
let xpDoHeroi = 7500

let nivelDoHeroi

//Numero de jogadas do jogador (3)

for (let contador = 3; contador >=1; contador --){
    console.log("Número de jogadas " + contador)
}

if (xpDoHeroi < 1000) {
   nivelDoHeroi = "Ferro"

} else if (xpDoHeroi <= 2000) {
   nivelDoHeroi = "Bronze"

} else if (xpDoHeroi <= 5000) {
   nivelDoHeroi = "Prata"

} else if (xpDoHeroi <= 7000) {
   nivelDoHeroi = "Ouro"

} else if (xpDoHeroi <= 8000) {
   nivelDoHeroi = "Platina"

} else if (xpDoHeroi <= 9000) {
   nivelDoHeroi = "Ascendente"

} else if (xpDoHeroi <= 10000) {
   nivelDoHeroi = "Imortal"

} else {
   nivelDoHeroi = "Radiante"
}

console.log("O Herói " + nomeDoHeroi + " está no nivel " + nivelDoHeroi)
