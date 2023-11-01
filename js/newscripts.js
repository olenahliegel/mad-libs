function getAndSetMadLibValues() {
  // in this section we get the value for each form input
  const person1Input = document.getElementById("person1Input").value;
  const person2Input = document.getElementById("person2Input").value;
  const animalInput = document.getElementById("animalInput").value;
  const exclamationInput = document.getElementById("exclamationInput").value;
  const verbInput = document.getElementById("verbInput").value;
  const nounInput = document.getElementById("nounInput").value;

  // then we set the story variables to the values we got from the form
  document.querySelector("span#person1a").innerText = person1Input;
  document.querySelector("span#person1b").innerText = person1Input;
  document.querySelector("span#person1c").innerText = person1Input;
  document.querySelector("span#person2a").innerText = person2Input;
  document.querySelector("span#person2b").innerText = person2Input;
  document.querySelector("span#animal").innerText = animalInput;
  document.querySelector("span#verb").innerText = verbInput;
  document.querySelector("span#noun").innerText = nounInput;
  document.querySelector("span#exclamation").innerText = exclamationInput;

}

function advertisement() {
  window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");
  let form = document.querySelector("form");
  form.removeEventListener("submit", advertisement);
}

window.onload = function () {
  // first we set up an event handler for the form submission
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let story = document.querySelector("div#story");

  form.addEventListener("submit", function (event) {
    getAndSetMadLibValues();
    story.removeAttribute("class");
    event.preventDefault();
  });

  form.addEventListener("submit", function () {
    resetBtn.removeAttribute("class");
  });

  form.addEventListener("submit", advertisement);

  resetBtn.addEventListener("click", function () {
    story.setAttribute("class", "hidden");
    document.getElementById("person1Input").value = null;
    document.getElementById("person2Input").value = null;
    document.getElementById("animalInput").value = null;
    document.getElementById("exclamationInput").value = null;
    document.getElementById("verbInput").value = null;
    document.getElementById("nounInput").value = null;
  });
};