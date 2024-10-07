let playerScore = 0;
let computerScore = 0;
let isPlayerOut = false;
let isComputerOut = false;
let isPlayerBatting = true;  // Player bats first
function showAbout() {
    document.getElementById('about-section').style.display = 'block';
}

function showHowToPlay() {
    document.getElementById('how-to-play-section').style.display = 'block';
}

function closeSection(sectionId) {
    document.getElementById(sectionId).style.display = 'none';
}


function playGame(playerChoice) {
    if (isPlayerOut && isComputerOut) return;

    const computerChoice = Math.floor(Math.random() * 6) + 1;

    document.getElementById('player-choice').textContent = playerChoice;
    document.getElementById('computer-choice').textContent = computerChoice;

    if (isPlayerBatting) {
        if (playerChoice === computerChoice) {
            document.getElementById('game-status-player').textContent = " Bowling!";


            isPlayerOut = true;
            document.getElementById('innings-message').textContent = "Your out!now Computer is going to batting";

            showInningsMessage();
            isPlayerBatting = false;
            document.getElementById('game-status').textContent = "Batting!";
        } else {
            playerScore += playerChoice;
            document.getElementById('player-score').textContent = "Score: " + playerScore;
        }
    } else {
        if (playerChoice === computerChoice) {
            document.getElementById('game-status').textContent = "Computer Out!";
            isComputerOut = true;
            checkWinner();
        } else {
            computerScore += computerChoice;
            document.getElementById('computer-score').textContent = "Score: " + computerScore;
        }
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    isPlayerOut = false;
    isComputerOut = false;
    isPlayerBatting = true;

    document.getElementById('player-score').textContent = "Score: 0";
    document.getElementById('computer-score').textContent = "Score: 0";
    document.getElementById('player-choice').textContent = "None";
    document.getElementById('computer-choice').textContent = "None";
    document.getElementById('game-status-player').textContent = "Batting";
    document.getElementById('game-status').textContent = "Batting";
    document.getElementById('innings-message').style.display = 'none'; // Hide innings message
    document.getElementById('result-message').textContent = ''; // Clear result message

    // Hide game controls
    document.getElementById('game-controls').style.display = 'none';
    document.getElementById('number-buttons').style.display = 'block'; // Show number buttons
}

function checkWinner() {
    document.getElementById('number-buttons').style.display = 'none'; // Hide number buttons

    if (playerScore > computerScore) {
        document.getElementById('result-message').textContent = "Congratulations! You Win!";
    } else if (playerScore < computerScore) {
        document.getElementById('result-message').textContent = "Try Again! Computer Wins!";
    } else {
        document.getElementById('result-message').textContent = "It's a Tie!";
    }

    // Show game controls
    document.getElementById('game-controls').style.display = 'block';
}

function showInningsMessage() {
    const inningsMessage = document.getElementById('innings-message');
    inningsMessage.style.display = 'block';
    setTimeout(() => {
        inningsMessage.style.display = 'none';
    }, 3000); // Message disappears after 3 seconds
}
