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

let happinessNumber = document.getElementById(`happinessNumber`);
const happybtn = document.querySelectorAll(`.happybtn`);

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
    newPet.health -= 2;
    newPet.checkHealth();
  }, 250);
};

happinessNumber.innerHTML = 100;
happiness = () => {
  setInterval(() => {
    console.log(newPet.happy);
    happinessNumber.innerHTML = newPet.happy;
    newPet.happy -= 2;
  }, 150);
};

class animal {
  constructor() {
    this.name = null;
    this.health = 100;
  }
  eat() {
    this.health += 5;
    return this;
  }
}

class rabbit extends animal {
  constructor() {
    super();
    this.happy = 100;
  }
  burrow() {
    this.health -= 5;
    this.happy += 10;
    return this;
  }
  special() {
    this.burrow();
  }
  checkHealth() {
    if (this.health <= 70) {
      console.log("droopy ears");
    }
  }
}

class cat extends animal {
  constructor() {
    super();
    this.happy = 100;
  }
  purr() {
    this.health -= 5;
    this.happy += 10;
    return this;
  }
  special() {
    this.purr();
  }
  checkHealth() {
    if (this.health <= 70) {
      console.log("droopy ears");
    }
  }
}

class cham extends animal {
  constructor() {
    super();
    this.happy = 100;
  }
  changeColor() {
    this.health -= 5;
    this.happy += 10;
    return this;
  }
  special() {
    this.changeColor();
  }
  checkHealth() {
    if (this.health <= 70) {
      console.log("droopy ears");
    }
  }
}

// let anyName = new rabbit();
let newPet = null;

rabbitButton.addEventListener("click", () => {
  newPet = new rabbit();
  rabbitDiv.style.display = "block";
  //submitt button will appear
});
catButton.addEventListener(`click`, () => {
  newPet = new cat();
  catDiv.style.display = "block";
});
chamButton.addEventListener(`click`, () => {
  newPet = new cham();
});

submitName.addEventListener("click", () => {
  newPet.name = petBox.value;
  petName.textContent = newPet.name;
  nameSubmission.style.display = "none";
  health();
  happiness();
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
