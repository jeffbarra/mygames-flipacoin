const coinArray = ["Heads", "Tails"];
let score = [0, 0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function tossCoin(e) {
    // When clicked, the function is invoked
    let playerGuess = e.target.innerText; // This tells the computer what was clicked by checking the innerText that was clicked
    let computerToss = Math.floor(Math.random() * 2);
    let computerGuess = coinArray[computerToss];
    message.innerHTML = "Computer Selected " + computerGuess + "<br>";
    let output;
    if (playerGuess === computerGuess) {
      output = "Player Wins! ";
      score[0]++;
    } else {
      output = "Computer Wins! ";
      score[1]++;
    }
    message.innerHTML +=
      output +
      "<br>Player Score = " +
      score[0] +
      "<br>Computer Score = " +
      score[1];
  });
}
