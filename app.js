let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");



const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game was Draw.Play Again!";
    msg.style.backgroundColor = "#252733";

};

const showWinner = (userWin,userChoice,CompChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        // console.log(`You Win!`);
        msg.innerText = `You win! ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        // console.log(`You Lose!`);
        msg.innerText = `You Lose! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const genCompChoice = () => {

    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const playGame = (userChoice) => {
    // console.log("userChoice:",userChoice);
    //Generate computer choice
    const CompChoice = genCompChoice();
    // console.log("comp choice:",CompChoice);

    if(userChoice === CompChoice){
        //draw game
        drawGame();
     } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors,paper
           userWin = CompChoice ==="paper" ? false : true;
        } else if (userChoice === "paper") {
           userWin = CompChoice === "scissors" ? false : true;
        } else {
          userWin = CompChoice === "rock" ? false : true; 

        }

        showWinner(userWin,userChoice,CompChoice);
     }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice,"choice was clicked");
        playGame(userChoice);
    });
});