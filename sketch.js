var x = 0;
var y = 0;
//var radius = 15;


function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  clear();
  x = random(windowWidth);
  y = random(windowHeight);
  

}

var noiseScale=0.02;

function draw() {
  // background(0);
 
  clear();
  for (var x=200; x < width; x++) {
    var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    var col = noiseVal*255;
    //var radius = noiseVal*20;
    if(x<width/2){
    stroke(60,60,col);
    }else if(x>width/2){
      stroke(col,60,60);
    }
    // fill(col/4*3);
    rect(x, mouseY+noiseVal*280, x-windowWidth/2, 25);
    // rect(x, mouseY+noiseVal*280, x, windowHeight/20);
  }
  
  // strokeWeight(11);
  //   stroke(255,0,0);
  //   line(width+5,height/18*17,width/6*5,height+5);
}

function windowResized() {
  resizeCanvas(windowWidth, height);
}
