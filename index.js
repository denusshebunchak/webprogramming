function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  const resultText = document.getElementById("result-text");

  if (randomNumber1 > randomNumber2) {
    resultText.textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    resultText.textContent = "Player 2 Wins! 🚩";
  } else {
    resultText.textContent = "It's a Draw!";
  }
}

rollDice();

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    rollDice();
  }
});
