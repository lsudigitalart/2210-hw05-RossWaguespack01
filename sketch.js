var radius = 400
var x1
var y1
var x2
var y2

var img;

function setup() {
    createCanvas(300, 700);
    background(255);
    img = loadImage('Gojo.jpg')
    frameRate(30);
  }
  
  function draw() {
    image(img,0,0,300,700)
    translate(width/2, height/2);
    fill(255);
    strokeWeight(2);
  
    for (var i = 0; i < 10; i++) {
      var x1 = random(-radius, radius);
      var y1 = random(-radius, radius);
      var x2 = random(-radius, radius);
      var y2 = random(-radius, radius);
      strokeWeight(.5);
      noFill();
      rotate(0.0005)
      line(x1, y1 + 20, x1 + 20, y1);
    }
  
    push();
    noFill();
    strokeWeight(10);
    stroke(255);
    pop();
  }