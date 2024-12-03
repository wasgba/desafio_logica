function classificarHeroi(xp) {
  /**
   * Classifica o nível de um herói com base nos pontos de experiência (XP).
   *
   * @param {number} xp - Pontos de experiência do herói.
   * @returns {string} - A classificação do herói ou uma mensagem de erro se o XP for inválido.
   */

  // Verifica se o XP é válido
  if (xp < 0) {
    return "XP inválido. O XP deve ser maior ou igual a 0.";
  }

  // Define os intervalos de XP e suas classificações
  const classificacoes = [
    { limite: 1000, nome: "Ferro" },
    { limite: 2000, nome: "Bronze" },
    { limite: 3000, nome: "Prata" },
    { limite: 4000, nome: "Ouro" },
    { limite: 5000, nome: "Platina" },
    { limite: 6000, nome: "Diamante" },
    { limite: 7000, nome: "Mestre" },
    { limite: 8000, nome: "Grão-mestre" },
    { limite: 9000, nome: "Desafiante" },
    { limite: Infinity, nome: "Lendário" }
  ];

  // Encontra a classificação correta usando find
  const classificacao = classificacoes.find(c => xp < c.limite);
  return classificacao ? classificacao.nome : "Classificação não encontrada";
}

// Exemplos de uso
console.log(classificarHeroi(500));   // Saída: Ferro
console.log(classificarHeroi(1500));  // Saída: Bronze
console.log(classificarHeroi(2500));  // Saída: Prata
console.log(classificarHeroi(3500));  // Saída: Ouro
console.log(classificarHeroi(4500));  // Saída: Platina
console.log(classificarHeroi(5500));  // Saída: Diamante
console.log(classificarHeroi(6500));  // Saída: Mestre
console.log(classificarHeroi(7500));  // Saída: Grão-mestre
console.log(classificarHeroi(8500));  // Saída: Desafiante
console.log(classificarHeroi(9500));  // Saída: Lendário
console.log(classificarHeroi(-100));  // Saída: XP inválido. O XP deve ser maior ou igual a 0.
