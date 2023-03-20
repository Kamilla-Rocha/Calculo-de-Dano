const atacante = prompt("Qual é o nome do personagem atacante ?");
const poderDeataque = prompt("Qual é o seu poder de ataque ?");

const defensor = prompt("Qual é o nome do personagem defensor ?");
let pontosDeVida = prompt("Quantos pontos de vida ele possuí ?");
const poderDeDefesa = prompt("Qual é o seu poder de defesa ?");
const possuiEscudo = prompt("Ele possui um escuto ? (sim/não)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não ") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === " Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert((atacante = "causou" + danoCausado + " pontos de dano em " + defensor));
alert(
  atacante +
    "\n Poder de atacante: " +
    poderDeataque +
    "\n\n" +
    defensor +
    "\n Pontos de vida: " +
    pontosDeVida +
    "\n Poder de defesa:" +
    poderDeDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);
