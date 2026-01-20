alert("caution: this site might be too cute")
let mode =  document.querySelector("#modes");
let curr = "light";
const message  = document.querySelector("#messages");
// mode.onclick = (evt) =>{

//     document.querySelector("body").style.backgroundColor="black";
//  document.querySelector("body").style.color="rosybrown"
// }
mode.addEventListener("click", ()=>{
    if(curr == "light"){
        curr = "dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="rosybrown"
    }else{
        curr = "light";
document.querySelector("body").style.backgroundColor="antiquewhite";
     document.querySelector("body").style.color=" pink"
    }
    console.log(curr)
}
);
let win = 0;
let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const draw = ()=>{
console.log("game was draw.")
message.innerText = "game was draw."
message.style.backgroundColor = "antiquewhite";
}
const showWinner = (winner)=>{
    if(winner){
console.log("you won! :)")
message.style.backgroundColor = "blue"

message.innerText = "you won!!! :)";
  win = "user";
    }else{
        console.log("you lose :(")
        message.innerText = "you lose :(";
        message.style.backgroundColor = "red"
    win = "comp";
    }



}

const getCompChoice =() =>{
const  options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}
const playGame = (userChoice) =>{
console.log("user choice = ", userChoice);
const compChoice = getCompChoice();
console.log("comp choice=", compChoice)
if(userChoice==compChoice){
    draw();
    
}else{
    let winner = true;
    if(userChoice === "rock"){
        winner = compChoice === "paper"? false: true;
     }else if(userChoice === "paper"){
        winner = compChoice === "scissors"? false :true;
    }else{
        compChoice == "rock"? false:true
    }
    showWinner(winner);
  
}

};
choices.forEach((choice) =>{
choice.addEventListener("click",() =>{
const userChoice = choice.getAttribute("id");
playGame(userChoice);
});


});

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const updateScore = (win) => {
  if (win === "user") {
    userscore++;
    userScorePara.innerText = userscore;
  } else if (win === "comp") {
    compscore++;
    compScorePara.innerText = compscore;
  }
};
let firstpromise = new Promise((resolve,reject)=>{
    console.log("blue");
setTimeout(function sayMyName(){
  console.log("my name is ria");

},10000);
});
let promise1 = new Promise((resolve,reject)=>{
  let success = true;
  if(success){
    resolve("promise fulfilled");
  }else{
    reject("promise rejected");
  }
});
promise1.then((message)=>{
console.log("then message: "+message);

}).catch((error)=>{
console.log("error: "+error)
})



