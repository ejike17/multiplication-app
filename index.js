/* Multiplication app for kids to practice with 
Correctt answers gets a point but wrong answers losses a point
*/

const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

const quest = document.querySelector(".question");
quest.innerText = `Multiply ${num1} with ${num2}`;
let answer = num1 * num2;

const inp = document.getElementById("input");
const formEl = document.getElementById("form");

let score = JSON.parse(
  localStorage.getItem("score")
); /* Supposed to start with zero */

formEl.addEventListener("submit", () => {
  const userAns = +inp.value;
  if (userAns === answer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

/* Storing the variable in the localStorage */
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

const defaultScore = 0;

/* Ensuring that score is not null and less than zero so we don't diplay negative number on the UI */
if (score === null || score < 0) {
  localStorage.setItem("score", JSON.stringify(defaultScore));
  score = 0;
  updateLocalStorage();
}
const scoreEl = document.getElementById("score");
scoreEl.innerText = `Score: ${score}`;
