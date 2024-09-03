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
