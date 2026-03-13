const input = document.querySelector(".textInput");
const button = document.querySelector(".convertBtn");
const output = document.querySelector(".output");

function caesarEncrypt(text, shift = 3) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return text
    .split("")
    .map(char => {

      const lower = char.toLowerCase();
      const index = alphabet.indexOf(lower);

      if (index === -1) {
        return char;
      }

      let newChar = alphabet[(index + shift) % alphabet.length];

      if (char === char.toUpperCase()) {
        newChar = newChar.toUpperCase();
      }

      return newChar;

    })
    .join("");
}

button.addEventListener("click", () => {

  const text = input.value.trim();

  if (text === "") {
    output.textContent = "Bitte Text eingeben!";
    return;
  }

  const encrypted = caesarEncrypt(text);

  output.textContent = encrypted;

});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.click();
  }
});
