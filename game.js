const randomNumber = Math.floor(Math.random() * 10 + 1);

const messageList = document.getElementById("message-list");
const errorMessage = document.getElementById("error-message");
const playerNumberCount = document.getElementById("player-number-count");

let currentPlayer = 1;

function getInputValue() {
  const inputField = document.getElementById("guess-input");
  const inputNumber = inputField.value;
  const number = parseFloat(inputNumber);

  if (!inputNumber) {
    errorMessage.innerText = "Please enter a number!";
  } else {
    let listItem = document.createElement("li");

    if (randomNumber === number) {
      listItem.innerText =
        "Congratulations! Player " +
        currentPlayer +
        " guessed the number correctly";
      errorMessage.innerText = "";
      messageList.appendChild(listItem);
      inputField.disabled = true;
      return;
    } else if (randomNumber < number) {
      listItem.innerText = "Too high, try again";
      errorMessage.innerText = "";
    } else if (randomNumber > number) {
      listItem.innerText = "Too low, try again";
      errorMessage.innerText = "";
    }

    messageList.appendChild(listItem);

    currentPlayer = currentPlayer === 1 ? 2 : 1;
    playerNumberCount.innerText = currentPlayer;
  }

  inputField.value = "";
}

document
  .getElementById("guess-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      getInputValue();
    }
  });
