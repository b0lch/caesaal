const input = document.querySelector(".textInput");
const button = document.querySelector(".convertBtn");
const output = document.querySelector(".output");

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
button.addEventListener('click', () => {
    const text = input.value.trim();
    if(text === "") {
        output.textContent = "Bitte Text eingeben!";
    } else if (/^\d+$/.test(text)) {
    output.textContent = "Ungültige Eingabe!";
    } else {
        output.textContent = caeserEncrypt(text);
    }
});
