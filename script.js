// Create random number

const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

// Create and assign the total attemps

let totalAttemps = 5;

const totalAtt = document.getElementById("attemps");
totalAtt.textContent = totalAttemps;

// Create button event listener

const button = document.getElementById("btn-guess");

button.addEventListener("click", () => {
  const userNumber = document.getElementById("input-number").value;
  //   console.log(userNumber);
  const result = document.getElementById("result");
  // Check the attemps left is bigger than 0
  const rangeMax = document.getElementById("range-max");
  const rangeMin = document.getElementById("range-min");
  if (totalAttemps > 0) {
    if (userNumber >= 1 && userNumber < 101) {
      if (userNumber < randomNumber) {
        result.textContent = "Go higher!";
        rangeMin.textContent = userNumber;
      } else if (userNumber > randomNumber) {
        result.textContent = "Go lower!";
        rangeMax.textContent = userNumber;
      } else {
        result.textContent = "You are the winner!";
      }

      totalAttemps--;
      totalAtt.textContent = totalAttemps;
      if(totalAttemps === 0){
        result.textContent = "Game over!";
      }
    } else {
        alert ("Please enter a number between 1 and 100!");
    }
  }
});
