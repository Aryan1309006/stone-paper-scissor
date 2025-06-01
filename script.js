
// variable
var stone = document.getElementById("stone");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var restart = document.getElementById("restart");
var ychoice = document.getElementById("choicehuman");
var cchoice = document.getElementById("choicecomp");
var resultop = document.getElementById("result-op");
var h3 = document.getElementById("choicew");

// addEventListener for stone paper scissor
stone.addEventListener("click", () => result("stone"));
paper.addEventListener("click", () => result("paper"));
scissor.addEventListener("click", () => result("scissor"));


// main function for program
function result(opt) {
  stone.style.display = "none";
  paper.style.display = "none";
  scissor.style.display = "none";
  h3.style.display = "none";
  restart.style.display = "block";
  const choice = ["stone", "paper", "scissor"];
  const computer_choice = choice[Math.floor(Math.random() * choice.length)];
  let result;
  ychoice.innerText = opt;
  cchoice.innerText = computer_choice;
  if (opt == computer_choice) {
    resultop.textContent = "It's Tie";
    resultop.style.backgroundColor="gray";

  } else if (
    (opt == "stone" && computer_choice == "scissor") ||
    (opt = "paper" && computer_choice == "stone") ||
    (opt = "scissor" && computer_choice == "paper")
  ) {
    resultop.textContent = "You Win!";
    resultop.style.backgroundColor="green";
  } else {
    resultop.textContent = "You lose!";
    resultop.style.backgroundColor="red";
  }
}

// EventListener for relod page
restart.addEventListener("click", () => {
    
  location.reload();
});
