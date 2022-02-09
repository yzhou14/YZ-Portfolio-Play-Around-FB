
  //let canvas = createCanvas(1377, 850, WEBGL);
  //canvas.parent("sketch01");
  function setup() {
  let canvas = createCanvas(1377, 850);
  canvas.parent("sketch01");
  }
  
  let img
  function preload() {
    balloon = loadImage('balloon.png');
  }
  
  
  function draw() {
    background(214, 241, 251);
    image(balloon, 10, mouseY, 0, 0);
    image(balloon, 300, mouseX, 0, 0);
    image(balloon, 600, mouseY, 0, 0);
    image(balloon, 900, mouseX, 0, 0);
    image(balloon, 1200, mouseY, 0, 0);
    
  }