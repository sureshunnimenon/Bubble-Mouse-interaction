var bubbles = [];

function setup() { 
  createCanvas(600, 600);
  
  for(let i=0; i<50; i++){
  let x = random(width);
  let y = random(height);
  let r = random(10,40)  
  let b = new Bubble(x,y,r)
  bubbles.push(b);}
   
} 

function draw() { 
  background(111); 
  for (var i=0; i<bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();  }  
 }

function mousePressed(){
  for(var i = 0; i<bubbles.length; i++){
    if (bubbles[i].contains(mouseX,mouseY))
      bubbles.splice(i,1);
          }}

// below is the CLASS BUBBLE which is template for creating as many bubbles as required.
//==============================
class Bubble {
  constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
    this.brightness = 0;
  };  
  move(){
    this.x=this.x+random(-5,5);
    this.y=this.y+random(-5,5);
  };  
  show(){
    stroke(255);
    strokeWeight(4);
    fill(this.brightness,125);
    
    ellipse(this.x, this.y, this.r*2);
  };
  
  changeColor(){
    this.brightness=255;
      }
  
  contains(x,y){
    let d= dist(x,y,this.x,this.y);
    return (d < this.r)
    
  };
  
}