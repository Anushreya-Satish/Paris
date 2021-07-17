class Security {
  constructor() {
    this.access1 = createInput("Answer");
    this.access1.position(370, 330);
    this.access1.style("background", "lavender");

    this.button1 = createButton("Check");
    this.button1.position(370, 360);
    this.button1.style("background", "lavender");

    this.access2 = createInput("Answer");
    this.access2.position(370, 460);
    this.access2.style("background", "lavender");

    this.button2 = createButton("Check");
    this.button2.position(370, 490);
    this.button2.style("background", "lavender");

    //add code for creating and positioning the third input box and button
    this.access3 = createInput("Answer");
    this.access3.position(370, 610);
    this.access3.style("background", "lavender");

    this.button3 = createButton("Check");
    this.button3.position(370, 640);
    this.button3.style("background", "lavender");
  }

  display() {
    this.button1.mousePressed(() => {
      if (system.authenticate(accessCode1, this.access1.value())) {
        this.button1.hide();
        this.access1.hide();
        score = score+1;
      }
    });

    this.button2.mousePressed(() => {
      if (system.authenticate(accessCode2, this.access2.value())) {
        this.button2.hide();
        this.access2.hide();
        score = score+1;
      }
    });

    //add code for what happens when the third button is pressed
    this.button3.mousePressed(() => {
      if (system.authenticate(accessCode3, this.access3.value())) {
        this.button3.hide();
        this.access3.hide();
        score = score+1;
      }
    });
  }
}
