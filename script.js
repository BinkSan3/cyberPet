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
let chamImage = document.getElementById(`chamImage`);

const nameSubmission = document.getElementById("nameSubmission");
const petBox = document.getElementById("petBox");
const submitName = document.getElementById("submitName");

const feedbtn = document.querySelectorAll(`.feedbtn`);
let petName = document.getElementById("petName");
let rabbitEars = document.getElementById("rabbitEars");
let cattPurr = document.getElementById("catPurr");
let changeColor = document.getElementById("changeColor");

let reload = document.getElementById("reload");
let risingImage = document.getElementById("risingImage");

for (i = 0; i < mainButtons.length; i++) {
  mainButtons[i].addEventListener(`click`, () => {
    navBar.style.display = "none";
    nameSubmission.style.display = "flex";
  });
}
happinessNumber.innerHTML = 100;

healthDown.innerHTML = 100;
health = () => {
  setInterval(() => {
    healthDown.innerHTML = newPet.health;
    newPet.health -= 1;
    healthBar.style.width = `${newPet.health}%`;

    happinessNumber.innerHTML = newPet.happy;
    newPet.happy -= 2;
    happinessBar.style.width = `${newPet.happy}%`;

    newPet.checkHappy();
    newPet.checkHealth();
    newPet.rabbitHappy();
  }, 150);
};

catAudioLoop = () => {
  setInterval(() => {
    newPet.checkAudio();
  }, 2000);
};

gameOver = () => {
  mainPage.style.display = "none";
  petName.textContent = "YOU ARE DEAD";
  reload.style.display = "block";
  risingImage.style.display = "block";
};

reload.addEventListener("click", () => {
  location.reload();
});

class animal {
  constructor() {
    this.name = null;
    this.health = 100;
    this.happy = 100;
  }
  eat() {
    this.health += 4;
    return this;
  }

  checkHealth() {
    if (this.health <= 100 && this.health >= 70) {
      healthBar.style.backgroundColor = `green`;
    } else if (this.health < 70 && this.health >= 30) {
      healthBar.style.backgroundColor = `yellow`;
    } else if (this.health < 30 && this.health > 0) {
      healthBar.style.backgroundColor = `red`;
    } else {
      gameOver();
    }
  }
  checkHappy() {
    if (this.happy <= 100 && this.happy >= 70) {
      happinessBar.style.backgroundColor = `green`;
      chamImage.src = "./assets/chameleon.svg";
    } else if (this.happy < 70 && this.happy >= 30) {
      happinessBar.style.backgroundColor = `yellow`;
      chamImage.src = "./assets/chamYellow.svg";
    } else if (this.happy < 30 && this.happy > 0) {
      happinessBar.style.backgroundColor = `red`;
      chamImage.src = "./assets/chamRed.svg";
    } else {
      gameOver();
    }
  }
}

class rabbit extends animal {
  constructor() {
    super();
  }
  burrow() {
    this.health -= 4;
    this.happy += 10;
    return this;
  }
  special() {
    this.burrow();
  }
  rabbitHappy() {
    if (this.happy <= 34) {
      rabbitEars.src = "./assets/rabbitDown.svg";
    } else if (this.happy <= 70) {
      rabbitEars.src = "./assets/rabbitMid.svg";
    } else if (this.happy <= 0) {
      ("display death screen");
    } else {
      rabbitEars.src = "./assets/rabbitUp.svg";
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

  checkAudio() {
    if (this.happy <= 34) {
      catAudio.src = "./assets/meow.mp3";
      catAudio.play();
    } else if (this.happy <= 70) {
      catAudio.src = "./assets/growlingCat.mp3";
      catAudio.play();
    } else if (this.happy <= 0) {
      catAudio.src = "./assets/dyingMeow.mp3";
      catAudio.play();
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

  // checkCham() {
  //   if (this.happy <= 100 && this.happy >= 70) {
  //     chamImage.src = "./assets/chameleon.svg";
  //   } else if (this.happy < 70 && this.happy >= 30) {
  //     chamImage.src = "./assets/chamYellow.svg";
  //   } else {
  //     chamImage.src = "./assets/chamRed.svg";
  //   }
  // }

 
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
  catAudioLoop();
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


  catAudioLoop();

});

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
