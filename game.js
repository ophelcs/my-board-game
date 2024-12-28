console.log("Game script loaded!");

const diceResult = document.getElementById('dice-result');
const rollDiceButton = document.getElementById('roll-dice');

if (rollDiceButton) {
  rollDiceButton.addEventListener('click', () => {
    const roll = Math.ceil(Math.random() * 6);
    diceResult.textContent = `Roll: ${roll}`;
  });
} else {
  console.error("Button not found!");
}
