const accessCode1 = "FRANCE";
const accessCode2 = "CITY OF LIGHTS";
const accessCode3 = "EIFFEL TOWER";

function clues() {
  fill("red");
  textSize(20);
  text("N C E F A R", 200, 210);
  fill("black");
  text("Question 1: In which country Paris is located ?", 200,230);

  // add code for displaying rest of the names and the hints.
  fill("red");
  textSize(20);
  text("Y T I C  F O  S T H G I L ", 200, 350);
  fill("black");
  text("Question 2: What is the other name of Paris ?", 200, 370);

  fill("red");
  textSize(20);
  text("L F E I F E  E R W O T", 200, 500);
  fill("black");
  text("Question 3: What is the most famous landmark of Paris ?  ", 200, 520);
}