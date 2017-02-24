/*
https://vimeo.com/channels/learningp5js/139587733
*/
var ball = { //this is where the eye starts from
  x: 300, 
  y: 200, 
  xspeed: 4, 
  yspeed: -3
}

function setup() {
  createCanvas(600, 400);

}

function draw() {
  background("gray");
  move();
  bounce();
  display();
  
  
  
}

function bounce() {
  
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  } 
  
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  stroke(255);
  strokeWeight(4);
  fill(mouseX, mouseY);
  ellipse(ball.x, ball.y, 100, 50);
  fill("red");
  ellipse(ball.x, ball.y, 50,50);
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  
}