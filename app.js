const feelings = ["sad", "happy", "worried", "surprised", "angry", "ouchie"];

const randomFeeling = feelings[Math.floor(Math.random() * feelings.length)];

document.getElementById("feeling").textContent = randomFeeling;

window.onload = myMain;

const pictures = document.getElementById("pictures");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const reset = document.getElementById("reset");
const instructions = document.getElementById("instructions");
const dropdown = document.getElementById("dropdown");

correct.style.display = "none";
wrong.style.display = "none";
reset.style.visibility = "hidden";

function myMain() {
  document.getElementById("feelingIcons").onclick = buton;
}

function buton(e) {
  if (e.target.tagName == "IMG") {
    if (e.target.id === randomFeeling) {
      correct.style.display = "block";
      wrong.style.display = "none";
      reset.style.visibility = "visible";
      pictures.style.display = "none";
      instructions.innerHTML = "WELL DONE!";
      dropdown.style.display = "none";
    } else {
      wrong.style.display = "block";
      correct.style.display = "none";
      reset.style.visibility = "hidden";
    }
  }

  reset.addEventListener("click", function () {
    location.reload();
  });
}

// Code for dropdown
function imageChange() {
  document.getElementById("animalImage").src = `images/${this.value}.png`;
}
document.getElementById("chooseAnimal").onchange = imageChange;
