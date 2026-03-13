function caesarEncrypt(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shift = 3;
  return text
    .split("")
    .map(char => {
      const index = alphabet.indexOf(char);
      if (index === -1) return char;

      return alphabet[(index + shift) % 26];
    })
    .join("");
}
