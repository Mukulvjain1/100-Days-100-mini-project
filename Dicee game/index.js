
let player1 = document.querySelector(".img1");
let player2 = document.querySelector(".img2");
let playerOne=Math.floor(Math.random() * 6)+1;
let playerTwo=Math.floor(Math.random() * 6)+1;
player1.setAttribute('src',`images/dice${playerOne}.png`)
player2.setAttribute('src',`images/dice${playerTwo}.png`)
const title =document.querySelector("h1");
if (playerOne<playerTwo) {
    title.innerHTML=`Player 1 Wins 🥳!`
} 
else if(playerOne==playerTwo){
    title.innerHTML=`It's a tie !`
}
else {
    title.innerHTML=`Player 2 Wins 🥳!`
    }
