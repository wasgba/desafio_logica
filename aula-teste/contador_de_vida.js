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

  // Classifica o herói com base nos intervalos de XP
  if (xp < 1000) {
    return "Ferro";
  } else if (xp <= 2000) {
    return "Bronze";
  } else if (xp <= 3000) {
    return "Prata";
  } else if (xp <= 4000) {
    return "Ouro";
  } else if (xp <= 5000) {
    return "Platina";
  } else if (xp <= 6000) {
    return "Diamante";
  } else if (xp <= 7000) {
    return "Mestre";
  } else if (xp <= 8000) {
    return "Grão-mestre";
  } else if (xp <= 9000) {
    return "Desafiante";
  } else {
    return "Lendário";
  }
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
