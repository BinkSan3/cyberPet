//create event listener that sets display of nav to none when any button is clicked

//all divs for animals display set to none until their own button is clicked

//Create parent animal class with subclasses for each animal

const navBar = document.getElementById(`top`);
const mainPage = document.getElementById(`pageTwo`);
const mainButtons = document.getElementsByClassName(`mainButtons`);
const rabbitButton = document.getElementById("rabbitButton");
const catButton = document.getElementById("catButton");
const chamButton = document.getElementById("chamButton");
const rabbitDiv = document.getElementById("rabbit");
const catDiv = document.getElementById("cat");
const chamDiv = document.getElementById("cham");

const nameSubmission = document.getElementById("nameSubmission");
const petBox = document.getElementById("petBox");
const submitName = document.getElementById("submitName");

let rabbitName = document.getElementById("rabbitName");

let animalType = null;

for (i = 0; i < mainButtons.length; i++) {
  mainButtons[i].addEventListener(`click`, function (event) {
    navBar.style.display = "none";
    nameSubmission.style.display = "flex";

    // animalType = mainButtons[i].id;
    // console.log(animalType);

    // newPet = new animalType();
  });
}

class animal {
  constructor() {
    this.name = null;
    this.health = 100;
  }
  drink() {
    this.health += 10;
    return this;
  }
  eat() {
    this.health += 5;
    return this;
  }
  healthdown() {
    this.health -= 10;
  }
}
class rabbit extends animal {
  constructor() {
    super();
    this.earDroop = 50;
  }
  burrow() {
    this.healthdown();
    return this;
  }
}

let newPet = null;

rabbitButton.addEventListener("click", () => {
  newPet = new rabbit();
});

submitName.addEventListener("click", () => {
  newPet.name = petBox.value;
  rabbitName.textContent = newPet.name;
  rabbitDiv.style.display = "block";
  nameSubmission.style.display = "none";
});

// const newName = new Rabbit(petBox.textContent);
// newName.burrow();
