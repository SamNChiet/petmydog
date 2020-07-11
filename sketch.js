function setup() {
  createCanvas(500, 500);
  springX = width/2;
  doggo = loadImage('assets/GoodDog.png');
}
let picWidth = 300, picHeight = 200;

let touching = false;
let millisecondsSinceLetGo = 0;
let touchX = 0;
let touchY = 0;
let springX = 0;
let doggo;

function s_lerp(a, b, t)
{
  return (a + (b-a)*t);
}

function draw() {
  
  background(0);
  c = color('hsb(' + (floor(millis()*0.05)%255) + ', 100%, 100%)');
  
  if(mouseIsPressed)
  {
    springX = s_lerp(springX, mouseX, 0.2);
    fill(c);
    ellipse(mouseX-5, mouseY-5, 10, 10)
  }
  else
  {
    springX = s_lerp(springX, width/2, 0.1);
  }
  stroke(c);
  strokeWeight(3);
  fill(0);
  textSize(42*(1+0.1*sin(millis()*0.001)));
  textAlign(CENTER);
  text("Pet My Dog", width / 2, height / 8);
  image(doggo, 0, 0);
  
  let angle = -((width/2)-springX)/width;
  let shear_factor = -1 / tan(PI / 2 - angle);
  applyMatrix(1, 0, shear_factor, 1, 0, 0);
  translate(width/2- picWidth/2 - shear_factor*picWidth - picHeight*shear_factor, height-picHeight);
  rect(0, 0, picWidth, picHeight);
  image(doggo, 0, 0, picWidth, picHeight);

}