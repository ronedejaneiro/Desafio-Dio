let nome = "Joaquim"
let nivel = 1500
let rank
if (nivel <= 1000) rank = "Ferro"
else if (nivel <= 2000) rank = "Bronze"
else if (nivel <= 5000) rank = "Prata"
else if (nivel <= 7000) rank = "Ouro"
else if (nivel <= 8000) rank = "Platina"
else if (nivel <= 9000) rank = "Ascendente"
else if (nivel <= 10000) rank = "Imortal"
else rank = "Radiante"

console.log(
  "O Héroi " + nome + " está no nível " + nivel + " e está no rank " + rank,
);
