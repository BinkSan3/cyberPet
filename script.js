//create event listener that sets display of nav to none when any button is clicked

//all divs for animals display set to none until their own button is clicked

//Create parent animal class with subclasses for each animal

const navBar = document.getElementById(`top`);
const mainPage = document.getElementById(`pageTwo`);
const mainButtons = document.getElementsByClassName(`mainButtons`);
const rabbitButton = document.getElementById("rabbitButton");
const catButton = document.getElementById("catButton");
const chamButton = document.getElementById("chamButton");
const rabbit = document.getElementById("rabbit");
const cat = document.getElementById("cat");
const cham = document.getElementById("cham");

for (i = 0; i < mainButtons.length; i++) {
  mainButtons[i].addEventListener(`click`, () => {
    navBar.style.display = "none";
  });
}
