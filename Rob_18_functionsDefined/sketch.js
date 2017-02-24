/*
https://vimeo.com/channels/learningp5js/139587733
*/
var ball = { //this is where the eye starts from
  x: 300, //position of the eye
  y: 200, //position of the eye
  xspeed: 4, //the speed of the eye
  yspeed: -3
}

function setup() {
  createCanvas(600, 400); //the background size

}

function draw() {
  background("gray"); // the background color
  move(); //these functions make the eye bounce around
  bounce();
  display();
  
  
  
}

function bounce() {
  
  if (ball.x > width || ball.x < 0) { //when the eye hit the edge of the canvas it bounce back the oppisite direction
    ball.xspeed = ball.xspeed * -1;
  } 
  
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  stroke(255); //this is the setup of the eye
  strokeWeight(4);
  fill(mouseX, mouseY);
  ellipse(ball.x, ball.y, 100, 50); 
  fill("red");
  ellipse(ball.x, ball.y, 50,50);
}

function move() { //this is the move function of the eye
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  
}
