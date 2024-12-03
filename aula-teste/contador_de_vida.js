function classificarHeroi(nivel) {
    /**
     * Classifica o nível de um herói com base no seu nível.
     *
     * @param {number} nivel O nível do herói.
     * @returns {string} A classificação do herói ou uma mensagem de erro se o nível for inválido.
     */
    if (nivel < 1) {
      return "Nível inválido. O nível deve ser maior ou igual a 1.";
    } else if (nivel <= 10) {
      return "Ferro";
    } else if (nivel <= 20) {
      return "Bronze";
    } else if (nivel <= 30) {
      return "Prata";
    } else if (nivel <= 40) {
      return "Ouro";
    } else if (nivel <= 50) {
      return "Platina";
    } else if (nivel <= 60) {
      return "Diamante";
    } else if (nivel <= 70) {
      return "Mestre";
    } else if (nivel <= 80) {
      return "Grão-mestre";
    } else if (nivel <= 90) {
      return "Desafiante";
    } else {
      return "Lendário";
    }
  }
  
  // Exemplos de uso
  console.log(classificarHeroi(