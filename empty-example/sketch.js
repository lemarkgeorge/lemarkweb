var textY = 0;
var diam = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(60,0,240);
  fill(250,200,0,100);
  stroke(255,235,20,80);
  strokeWeight(0);
  textSize(50);
  textFont("New Roman");
  textStyle(BOLD);
  textAlign(LEFT);
  text('Fire',width/3,textY);
  text('Fire',random(width),textY);
  if(textY>400){
    textY=0;}else{
      textY=textY+6;}
  
strokeWeight(7);
ellipse(width/2,200,diam,diam);
ellipse(150,300,diam,diam);
  ellipse(270,312,diam,diam);
if(diam>160){
  diam=5;}else{
    diam=diam+6
    }
  
}
