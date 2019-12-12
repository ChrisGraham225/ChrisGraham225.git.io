//function setup() {
    //var canvas = createCanvas(750, 500);
    //canvas.parent('sketch-holder');
//}

//function draw() {
    //background(199,221,255); //an RGB color for the canvas' background (dark blue)
//    noStroke();
  // fill(255,255,127,200); //white, semi-transparent
 //  ellipse(mouseX+50,mouseY+50,10,10); // follows the mouse, 10px dia
//}
//
//function setup() {
//    var canvas = createCanvas(400, 400);
//    
//}
//
//function draw() {
// background(140, 170, 191); //A Blue-ish Gray 

var redMouse = 0;
var blueMouse = 0;

function preload() { 
  soundFormats('mp3', 'ogg');
  mySound = loadSound('doom.mp3');
}

function setup() {
//    mySound = loadSound('doom.mp3');
    createCanvas(750, 500);
    mySound.setVolume(0.1);
//  mySound.play();
}

function mousePressed() {
  if (mySound.isPlaying()) {
    // .isPlaying() returns a boolean
    mySound.stop();
      } else {
    mySound.play();
      }
}

function draw() {
    redMouse = map(mouseX, 0, width, 0, 255);
    blueMouse = map(mouseY, 0, height, 0, 255);
//    console.log(redMouse);
//    background(255);
    background(199,221,225);
    
    fill(255,225,127,200);
    noStroke();
//    stroke(0,255,0);
//    strokeWeight(10);
    ellipse(width/2,height/2,200,200);
    
    fill(255,0,225);
    ellipse(mouseX,mouseY,50,100);
    fill(255);
    ellipse(mouseX,mouseY,20,40);
  // put drawing code here
}

//function preload() { 
//  soundFormats('mp3', 'ogg');
//  mySound = loadSound('doom.mp3');
//}
    
//function setup() {
//mySound.setVolume(0.1);
//  mySound.play();
//}
