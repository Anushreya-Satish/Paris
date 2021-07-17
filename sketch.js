var bg, bg2, form, system, code, security;
var score = 0;
var music;

function preload() {
  bg = loadImage("Bg1.jpg");
  //load image for the treasure background
  bg2 = loadImage("Bg2.png");
  music = loadSound("In The Rain.mp3");
}

function setup() {
  createCanvas(1200, 600);
  security = new Security();
  system = new System();
  music.play();
}

function draw() {
  background(bg);

  clues();
  security.display();

  textSize(25);
  fill("orange");
  textFont("Forte");
  text("Start Your Journey: " + score, 900, 590);

  textSize(25);
  fill("pink");
  textFont("Forte");
  text("Start your journey for Paris. ", 400, 50);
  textSize(25);
  fill("pink");
  textFont("Forte");
  text("Answer some of these simple questions about Paris. ", 300, 100);
  textSize(25);
  fill("pink");
  textFont("Forte");
  text("And get a chance to know about some of the stunning places of this wonderful city. ", 100, 150);

  // add code for changing the background to the treasure background
  if (score === 3) {
    clear();
    background(bg2);
  }

  drawSprites();
}
