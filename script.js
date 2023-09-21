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
let healthDown = document.getElementById(`healthNumber`);
const petBox = document.getElementById("petBox");
const submitName = document.getElementById("submitName");
const feedbtn = document.getElementById(`feedbtn`);
let rabbitName = document.getElementById("rabbitName");

for (i = 0; i < mainButtons.length; i++) {
  mainButtons[i].addEventListener(`click`, () => {
    navBar.style.display = "none";
  });
}

healthDown.innerHTML = 100;
health = () => {
  setInterval(() => {
    console.log(newPet.health);
    healthDown.innerHTML = newPet.health;
    newPet.health -= 10;
  }, 1000);
};

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

// let anyName = new rabbit();
let newPet = null;

rabbitButton.addEventListener("click", () => {
  newPet = new rabbit();
  //submitt button will appear
});

submitName.addEventListener("click", () => {
  newPet.name = petBox.value;
  rabbitName.textContent = newPet.name;
  rabbitDiv.style.display = "block";
  health();
});

feedbtn.addEventListener(`click`, () => {
  newPet.drink();
});
