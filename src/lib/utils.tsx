export const validateIban = (iban: string): boolean => {
  if (iban.length !== 22) {
    return false;
  }

  if (!iban.startsWith("ME")) {
    return false;
  }

  const rearrangedIban = iban.slice(4) + iban.slice(0, 4);
  const numericIban = rearrangedIban.replace(/[A-Z]/g, (char) => {
    return (char.charCodeAt(0) - 55).toString();
  });

  let remainder = numericIban.slice(0, 9);
  for (let i = 9; i < numericIban.length; i += 7) {
    remainder = String(Number(remainder) % 97) + numericIban.slice(i, i + 7);
  }

  return Number(remainder) % 97 === 1;
};

function levenshteinDistance(s1: string, s2: string) {
  const len1 = s1.length;
  const len2 = s2.length;
  const matrix = [];

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[len1][len2];
}

export const suggestCorrectIBAN = (
  userInputIBAN: string,
  validIBANs: string[]
) => {
  let minDistance = Infinity;
  let suggestedIBAN = null;

  for (let iban of validIBANs) {
    const distance = levenshteinDistance(userInputIBAN, iban);
    if (distance < minDistance) {
      minDistance = distance;
      suggestedIBAN = iban;
    }
  }

  return suggestedIBAN;
};
