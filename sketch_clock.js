var vec;
var Yvec;
var vecWeight;
var highCount; 
var wideCount; 
var units;

var startHexX;
var startHexY;
var hexVec;
var hexWeight;
var startHexX0;
var startHexY0;
var colr30;
var colr60;
var colr;

var Upx;
var Downx;
var Leftx;
var Rightx;
var Rx;
var Lx;

var Upy;
var Downy;
var Lefty;
var Righty;
var URy;
var ULy;
var DRy;
var DLy;

function setup() {
  createCanvas(2000, 1000)

}

function draw() {
  smooth();
      vec = 46;
      yVec = int(sqrt(sq(vec)-sq(vec/2)));
      vecWeight = 0.73;
  for (var y = 0; y<height+yVec; y+=yVec){
  for(var x = 0; x<width+2*vec; x+=vec){
    if(y%2 ===0 ){
	  stroke(120);
      //stroke(255);
      strokeWeight(vecWeight);
      fill(0);
       triangle(x,y, x+vec/2,y+yVec, x+vec,y );
       triangle(x,y, x-vec/2,y-yVec, x-vec,y );
    }else{
       triangle(x-vec/2,y, x,y+yVec, x+vec/2,y );
       triangle(x-vec/2,y, x-vec,y-yVec, x-1.5*vec,y );
    }
   }
  }

   highCount = height/yVec*1.014;
 wideCount = width/vec*2+3.048;
 units = highCount*wideCount;
     startHexX = wideCount/4*vec-vec;
     startHexY = highCount/2*yVec-2*yVec;
     startHexX0 = wideCount/4*vec-0.5*vec;
     startHexY0 = highCount/2*yVec-9*yVec;
     hexVec = vec*2;
     hexWeight = vecWeight*3;
     //hexWeight = vecWeight*2.8;
     
 Upx= 0;
 Downx= 0;
 Leftx = -3*vec
 Rightx = 3*vec
 Rx= 1.5*vec;
 Lx= -1.5*vec;
 
 Upy= -2*yVec;
 Downy= 2*yVec;
 Lefty = 0;
 Righty = 0;
 Ulry= -yVec;
 Dlry= yVec;

var s = second();
var m = minute();
var h = hour();

  colr30=255;

  colr60=0;
  
  colr=180;
  
  




//translate(Rx,Dlry);

 stroke(0);
  
beginShape();
if(s>=0){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=30){
  fill(colr60,100);
  }
strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);


translate(Rightx,Righty);
beginShape();
if(s>=1){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=31){
  fill(colr60,100);
  }
strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate(Lx,Dlry);
beginShape();
if(s>=2){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=32){
  fill(colr60,100);
  }
strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate(Rightx,Righty);
beginShape();
if(s>=3){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=33){
  fill(colr60,100);
  }
strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate(Lx,Dlry);
beginShape();
if(s>=4){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=34){
  fill(colr60,100);
  }

strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate(Rx,Dlry); beginShape();
if(s>=5){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=35){
  fill(colr60,100);
  }
strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate(Downx, Downy); 
beginShape();
if(s>=6){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=36){
  fill(colr60,100);
  }
strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Downx, Downy);
beginShape();
if(s>=7){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=37){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Downx, Downy); 
beginShape();
if(s>=8){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=38){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Downx, Downy);
beginShape();
if(s>=9){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=39){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Downx, Downy); 
beginShape();
if(s>=10){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=40){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Lx,Dlry);
beginShape();
if(s>=11){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=41){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Upx,Upy);
beginShape();
if(s>=12){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=42){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Lx,Dlry);
beginShape();
if(s>=13){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=43){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Lx,Dlry);
beginShape();
if(s>=14){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=44){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Leftx,Lefty);
beginShape();
if(s>=15){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=45){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Leftx,Lefty);
beginShape();
if(s>=16){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=46){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Rx,Ulry);
beginShape();
if(s>=17){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=47){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Leftx,Lefty);
beginShape();
if(s>=18){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=48){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Rx,Ulry);
beginShape();
if(s>=19){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=49){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Lx,Ulry);
beginShape();
if(s>=20){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=50){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Upx,Upy);
beginShape();
if(s>=21){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=51){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Upx,Upy);beginShape();
if(s>=22){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=52){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Upx,Upy);
beginShape();
if(s>=23){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=53){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Upx,Upy);
beginShape();
if(s>=24){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=54){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Upx,Upy);
beginShape();
if(s>=25){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=55){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Rx,Ulry);
beginShape();
if(s>=26){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=56){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Downx,Downy);
beginShape();
if(s>=27){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=57){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate(Rx,Ulry);
beginShape();
if(s>=28){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=58){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);

translate( Rx,Ulry);
beginShape();
if(s>=29){
   fill(colr,235);
 }else{
   fill(colr30,235);
   }
if(s>=59){
  fill(colr60,100);
  }
  strokeWeight(hexWeight-0.7);
vertex(startHexX0, startHexY0);
vertex(startHexX0+2*vec, startHexY0);
vertex(startHexX0+3*vec, startHexY0+2*yVec);
vertex(startHexX0+2*vec, startHexY0+4*yVec);
vertex(startHexX0, startHexY0+4*yVec);
vertex(startHexX0-vec, startHexY0+2*yVec);
endShape(CLOSE);


   /////////^^^SECONDS^^^///////


  ///////vvvvMINUTESvvvv//////

  translate(Rx, Dlry);

  //stroke(0);

  beginShape();
  if (m >= 0) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 30) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);




  translate(Rx, Dlry);
  beginShape();
  if (m >= 1) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 31) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  translate(Rx, Dlry);
  beginShape();
  if (m >= 2) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 32) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  translate(Rx, Dlry);
  beginShape();
  if (m >= 3) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 33) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);



  translate(Downx, Downy);
  beginShape();
  if (m >= 4) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 34) {
    fill(colr60,200);
  }

  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);



  translate(Downx, Downy);
  beginShape();
  if (m >= 5) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 35) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);



  translate(Downx, Downy);
  beginShape();
  if (m >= 6) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 36) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);



  translate(Lx, Dlry);
  beginShape();
  if (m >= 7) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 37) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);



  translate(Lx, Dlry);
  beginShape();
  if (m >= 8) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 38) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  

  translate(Lx, Dlry);
  beginShape();
  if (m >= 9) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 39) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


 

  translate(Lx, Ulry);
  beginShape();
  if (m >= 10) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 40) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


 

  translate(Lx, Ulry);
  beginShape();
  if (m >= 11) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 41) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


 
  translate(Lx, Ulry);
  beginShape();
  if (m >= 12) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 42) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  
  translate(Upx, Upy);
  beginShape();
  if (m >= 13) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 43) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  

  translate(Upx, Upy);
  beginShape();
  if (m >= 14) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 44) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


 

  translate(Upx, Upy);
  beginShape();
  if (m >= 15) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 45) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  

  translate(Rx, Ulry);
  beginShape();
  if (m >= 16) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 46) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  

  translate(Rx, Ulry);
  beginShape();
  if (m >= 17) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 47) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  
  translate(Rx, Dlry);
  beginShape();
  if (m >= 18) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 48) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


 

  translate(Rx, Dlry);
  beginShape();
  if (m >= 19) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 49) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


 

  translate(Rx, Dlry);
  beginShape();
  if (m >= 20) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 50) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  translate(Downx, Downy);
  beginShape();
  if (m >= 21) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 51) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  translate(Downx, Downy);
  beginShape();
  if (m >= 22) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 52) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  translate(Lx, Dlry);
  beginShape();
  if (m >= 23) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 53) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


 

  translate(Lx, Dlry);
  beginShape();
  if (m >= 24) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 54) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);



  translate(Lx, Ulry);
  beginShape();
  if (m >= 25) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 55) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);




  translate(Lx, Ulry);
  beginShape();
  if (m >= 26) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 56) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);



  translate(Upx, Upy);
  beginShape();
  if (m >= 27) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 57) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);



  translate(Upx, Upy);
  beginShape();
  if (m >= 28) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 58) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);



  translate(Rx,Ulry);
  beginShape();
  if (m >= 29) {
    fill(colr,235);
  } else {
    fill(colr30,235);
  }
  if (m >= 59) {
    fill(colr60,200);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


  
  
  /////^^^^MINUTES^^^^///
  
  /////vvvvHOURSvvvv////
  
  translate(Rx, Dlry);

//stroke(50);

  beginShape();
  if (h >= 0) {
    fill(colr,235);
  } 
  
  if (h >= 6) {
    fill(colr30,235);
  } 
  
  if (h >= 12) {
    fill(colr,235);
  } 
  
  if (h >= 18) {
    fill(colr60,200);
  }
  
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);





translate(Rx, Dlry);


  beginShape();
  if (h >= 1) {
    fill(colr,235);
  }
  
  if (h >= 7) {
    fill(colr30,235);
  } 
  
  if (h >= 13) {
    fill(colr,235);
  } 
  
  if (h >= 19) {
    fill(colr60,200);
  }
  
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);





translate(Downx, Downy);


  beginShape();
  if (h >= 2) {
    fill(colr,235);
  } 
  
  if (h >= 8) {
    fill(colr30,235);
  } 
  
  if (h >= 14) {
    fill(colr,235);
  } 
  
  if (h >= 20) {
    fill(colr60,200);
  }
  
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);




translate(Lx, Dlry);


  beginShape();
  if (h >= 3) {
    fill(colr,235);
  } 
  
  if (h >= 9) {
    fill(colr30,235);
  } 
  
  if (h >= 15) {
    fill(colr,235);
  } 
  
  if (h >= 21) {
    fill(colr60,200);
  }
  
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);




translate(Lx, Ulry);


  beginShape();
  if (h >= 4) {
    fill(colr,235);
  } 
  
  if (h >= 10) {
    fill(colr30,235);
  } 
  
  if (h >= 16) {
    fill(colr,235);
  } 
  
  if (h >= 22) {
    fill(colr60,200);
  }
  
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);



translate(Upx, Upy);


  beginShape();
  if (h >= 5) {
    fill(colr,235);
  } 
  
  if (h >= 11) {
    fill(colr30,235);
  } 
  
  if (h >= 17) {
    fill(colr,235);
  } 
  
  if (h >= 23) {
    fill(colr60,200);
  }
  
  strokeWeight(hexWeight*1.5);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);



  
  
  /////^^^HOURS^^^/////


translate(Rx, Dlry);
//rotate(45);
//translate(-988,-5*yVec);
//scale(2,2);




  beginShape();
  if (h >= 0) {
    fill(colr);
  }else if (h >= 5) {
    fill(colr30);  
  }else if (h >= 12 ) {
    fill(colr);
  } else if (h >= 19) {
    fill(colr60);
  }
  strokeWeight(hexWeight);
  vertex(startHexX0, startHexY0);
  vertex(startHexX0 + 2 * vec, startHexY0);
  vertex(startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
  vertex(startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
  vertex(startHexX0, startHexY0 + 4 * yVec);
  vertex(startHexX0 - vec, startHexY0 + 2 * yVec);
  endShape(CLOSE);


//vvvvcross lines for middle cellvvv///
   strokeWeight(0.33);
   //strokeWeight(vecWeight);
   stroke(150);
   line(startHexX0, startHexY0, startHexX0 + 2 * vec, startHexY0 + 4 * yVec);
   line(startHexX0 + 2 * vec, startHexY0 + 4 * yVec, startHexX0, startHexY0 + 4 * yVec);
   line(startHexX0, startHexY0 + 4 * yVec, startHexX0 + 2 * vec, startHexY0);
   line(startHexX0 + 2 * vec, startHexY0, startHexX0 + 3 * vec, startHexY0 + 2 * yVec);
   line(startHexX0 + 3 * vec, startHexY0 + 2 * yVec, startHexX0 - vec, startHexY0 + 2 * yVec);
   line(startHexX0 - vec, startHexY0 + 2 * yVec, startHexX0 - vec / 2, startHexY0 + yVec);
   line(startHexX0 - vec / 2, startHexY0 + yVec, startHexX0 + vec, startHexY0 + 4 * yVec);
   line(startHexX0 + vec, startHexY0 + 4 * yVec, startHexX0 + 2.5 * vec, startHexY0 + yVec);
   line(startHexX0 + 2.5 * vec, startHexY0 + yVec, startHexX0 - vec / 2, startHexY0 + yVec);
   line(startHexX0 - vec / 2, startHexY0 + yVec, startHexX0, startHexY0);
   line(startHexX0, startHexY0, startHexX0 + vec, startHexY0);
   line(startHexX0 + vec, startHexY0, startHexX0 - vec / 2, startHexY0 + 3 * yVec);
   line(startHexX0 - vec / 2, startHexY0 + 3 * yVec, startHexX0 + 2.5 * vec, startHexY0 + 3 * yVec);
   line(startHexX0 + 2.5 * vec, startHexY0 + 3 * yVec, startHexX0 + vec, startHexY0);
   // line(startHexX0+vec,startHexY0,);





     //beginShape();
     ////stroke(0);
     //stroke(150);
     //strokeWeight(0.33);
     ////strokeWeight(vecWeight);
     //vertex(startHexX0,startHexY0);
     //vertex(startHexX0+2*vec, startHexY0+4*yVec);
     //vertex(startHexX0, startHexY0+4*yVec);
     //vertex(startHexX0+2*vec, startHexY0);
     //vertex(startHexX0+3*vec, startHexY0+2*yVec);
     //vertex(startHexX0-vec, startHexY0+2*yVec);
     //vertex(startHexX0-vec/2,startHexY0+yVec);
     //vertex(startHexX0+vec, startHexY0+4*yVec);
     //vertex(startHexX0+2.5*vec, startHexY0+yVec);
     //vertex(startHexX0-vec/2,startHexY0+yVec);
     //vertex(startHexX0,startHexY0);
     //vertex(startHexX0+vec,startHexY0);
     //vertex(startHexX0-vec/2,startHexY0+3*yVec);
     //vertex(startHexX0+2.5*vec,startHexY0+3*yVec);
     //vertex(startHexX0+vec,startHexY0);
     //endShape(CLOSE);





  //   beginShape();
  //                 var s = second();
  //     var sm = map(s, 0, 59, 0, 255);
  //   if (s%2 ===0){
  //       fill(255,235);
  //   }else{
  //     fill(0,235);
  //   }
  // strokeWeight(hexWeight);
  // vertex(startHexX, startHexY);
  // vertex(startHexX+2*vec, startHexY);
  // vertex(startHexX+3*vec, startHexY+2*yVec);
  // vertex(startHexX+2*vec, startHexY+4*yVec);
  // vertex(startHexX, startHexY+4*yVec);
  // vertex(startHexX-vec, startHexY+2*yVec);
  // endShape(CLOSE);

  // translate(Upx, Upy)
  //     beginShape();
  //                 var s = second();
  //     var sm = map(s, 0, 59, 0, 255);
  //   if (s%2 ===0){
  //       fill(255,235);
  //   }else{
  //     fill(0,235);
  //   }
  // strokeWeight(hexWeight);
  // vertex(startHexX, startHexY);
  // vertex(startHexX+2*vec, startHexY);
  // vertex(startHexX+3*vec, startHexY+2*yVec);
  // vertex(startHexX+2*vec, startHexY+4*yVec);
  // vertex(startHexX, startHexY+4*yVec);
  // vertex(startHexX-vec, startHexY+2*yVec);
  // endShape(CLOSE);
}

