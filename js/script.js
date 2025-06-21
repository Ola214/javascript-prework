var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;
var argButtonName, buttonPaper, buttonRock, buttonScissors;

var roundAmounts = 0, playerScore = 0, computerScore = 0;


/**
 * Game logic - result - who won
 */
function displayResult(argPlayerMove, argComputerMove) {
  roundAmounts++;

  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerScore++;
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerScore++;
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    playerScore++;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
    computerScore++;
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  printRoundsMessage(roundAmounts + ': ' + playerScore + ' - '+ computerScore);
}



/**
 * Get move name from id
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
  return 'kamień';
}


/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);

  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);


  displayResult(playerMove, computerMove);

}


buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });



// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
// console.log('wybór ruchu gracza to: ' + playerInput);
// playerMove = getMoveName(playerInput);








