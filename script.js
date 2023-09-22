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
let mainText = document.getElementById(`mainText`);
let healthBar = document.getElementById(`healthBar`);
let divDisplay = document.getElementById(`divDisplay`);
let happinessBar = document.getElementById(`happinessBar`);
let happinessNumber = document.getElementById(`happinessNumber`);
const happybtn = document.querySelectorAll(`.happybtn`);
let barDisplay = document.getElementById(`barDisplay`);
let catAudio = document.getElementById(`catAudio`);

const nameSubmission = document.getElementById("nameSubmission");
const petBox = document.getElementById("petBox");
const submitName = document.getElementById("submitName");

const feedbtn = document.querySelectorAll(`.feedbtn`);
let petName = document.getElementById("petName");
let rabbitEars = document.getElementById("rabbitEars");
let cattPurr = document.getElementById("catPurr");
let changeColor = document.getElementById("changeColor");

for (i = 0; i < mainButtons.length; i++) {
  mainButtons[i].addEventListener(`click`, () => {
    navBar.style.display = "none";
    nameSubmission.style.display = "flex";
  });
}

healthDown.innerHTML = 100;
health = () => {
  setInterval(() => {
    console.log(newPet.health);
    healthDown.innerHTML = newPet.health;
    newPet.health -= 1;
    healthBar.style.width = `${newPet.health}%`;

    newPet.checkHealth();
  }, 150);
};

happinessNumber.innerHTML = 100;
happiness = () => {
  setInterval(() => {
    console.log(newPet.happy);
    happinessNumber.innerHTML = newPet.happy;
    newPet.happy -= 2;
    happinessBar.style.width = `${newPet.happy}%`;

    newPet.checkHappy();
  }, 150);
};

catAudioLoop = () => {
  setInterval(() => {
    newPet.checkAudio();
  }, 2000);
};

class animal {
  constructor() {
    this.name = null;
    this.health = 100;
  }
  eat() {
    this.health += 4;
    return this;
  }
}

class rabbit extends animal {
  constructor() {
    super();
    this.happy = 100;
  }
  burrow() {
    this.health -= 4;
    this.happy += 10;
    return this;
  }
  special() {
    this.burrow();
  }
  checkHealth() {
    if (this.health <= 34) {
      rabbitEars.src = "./assets/rabbitMid.svg";
      healthBar.style.backgroundColor = `red`;
    } else if (this.health <= 70) {
      rabbitEars.src = "./assets/rabbitDown.svg";
      healthBar.style.backgroundColor = `yellow`;
    } else if (this.health == 0) {
      ("display death screen");
    } else {
      rabbitEars.src = "./assets/rabbitUp.svg";
      healthBar.style.backgroundColor = `green`;
    }
  }
  checkHappy() {
    if (this.happy <= 34) {
      rabbitEars.src = "./assets/rabbitMid.svg";
      happinessBar.style.backgroundColor = `red`;
    } else if (this.happy <= 70) {
      rabbitEars.src = "./assets/rabbitDown.svg";
      happinessBar.style.backgroundColor = `yellow`;
    } else if (this.happy == 0) {
      ("display death screen");
    } else {
      rabbitEars.src = "./assets/rabbitUp.svg";
      happinessBar.style.backgroundColor = `green`;
    }
  }
}

class cat extends animal {
  constructor() {
    super();
    this.happy = 100;
  }
  purr() {
    this.health -= 4;
    this.happy += 10;
    return this;
  }
  special() {
    this.purr();
  }
  checkHealth() {
    if (this.health <= 34) {
      // catAudio.src = "./assets/meow.mp3";
      healthBar.style.backgroundColor = `red`;
    } else if (this.health <= 70) {
      healthBar.style.backgroundColor = `yellow`;
      // catAudio.src = "./assets/growlingCat.mp3";
    } else healthBar.style.backgroundColor = `green`;
  }

  checkAudio() {
    if (this.health <= 34) {
      catAudio.src = "./assets/meow.mp3";
      catAudio.play();
    } else if (this.health <= 70) {
      catAudio.src = "./assets/growlingCat.mp3";
      catAudio.play();
    } else if (this.health <= 0) {
      catAudio.src = "./assets/dyingMeow.mp3";
      catAudio.play();
    }
  }
  checkHappy() {
    if (this.happy <= 34) {
      rabbitEars.src = "./assets/meow.mp3";
      happinessBar.style.backgroundColor = `red`;
    } else if (this.happy <= 70) {
      rabbitEars.src = "./assets/growlingCat.mp3";
      happinessBar.style.backgroundColor = `yellow`;
    } else if (this.happy == 0) {
      ("display death screen");
    } else {
      rabbitEars.src = "./assets/dyingMeow.mp3";
      happinessBar.style.backgroundColor = `green`;
    }
  }
}

class cham extends animal {
  constructor() {
    super();
    this.happy = 100;
  }
  changeColor() {
    this.health -= 4;
    this.happy += 10;
    return this;
  }
  special() {
    this.changeColor();
  }
  checkHealth() {
    if (this.health <= 34) {
      rabbitEars.src = "./assets/chameleon.svg";
      healthBar.style.backgroundColor = `red`;
    } else if (this.health <= 70) {
      rabbitEars.src = "./assets/chameleon.svg";
      healthBar.style.backgroundColor = `yellow`;
    } else if (this.health == 0) {
      ("display death screen");
    } else {
      rabbitEars.src = "./assets/chameleon.svg";
      healthBar.style.backgroundColor = `green`;
    }
  }
  checkHappy() {
    if (this.happy <= 34) {
      rabbitEars.src = "./assets/chameleon.svg";
      happinessBar.style.backgroundColor = `red`;
    } else if (this.happy <= 70) {
      rabbitEars.src = "./assets/chameleon.svg";
      happinessBar.style.backgroundColor = `yellow`;
    } else if (this.happy == 0) {
      ("display death screen");
    } else {
      rabbitEars.src = "./assets/chameleon.svg";
      happinessBar.style.backgroundColor = `green`;
    }
  }
}

// let anyName = new rabbit();
let newPet = null;

rabbitButton.addEventListener("click", () => {
  newPet = new rabbit();
  rabbitDiv.style.display = "block";
  divDisplay.style.display = "flex";
  barDisplay.style.display = "flex";

  //submitt button will appear
});
catButton.addEventListener(`click`, () => {
  newPet = new cat();
  catDiv.style.display = "block";
  divDisplay.style.display = "flex";
  barDisplay.style.display = "flex";
});
chamButton.addEventListener(`click`, () => {
  newPet = new cham();
  chamDiv.style.display = "block";
  divDisplay.style.display = "flex";
  barDisplay.style.display = "flex";
});

submitName.addEventListener("click", () => {
  newPet.name = petBox.value;
  petName.textContent = newPet.name;
  nameSubmission.style.display = "none";
  health();
  happiness();
  catAudioLoop();
});

// happybtn.addEventListener(`click`, () => {
//   newPet.burrow();
// });

feedbtn.forEach((btnValue) => {
  btnValue.addEventListener(`click`, () => {
    newPet.eat();
  });
});

happybtn.forEach((happyValue) => {
  happyValue.addEventListener(`click`, () => {
    newPet.special();
  });
});
