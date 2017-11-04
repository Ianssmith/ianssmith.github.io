

var bubbles = [];
var canvas;

function setup() {
	canvas = createCanvas(windowWidth, 1500);
	smooth();
	// clear();



}

function mousePressed(){
	for (var i = 0; i<400; i++){
		bubbles[i] = new Bubble(randomGaussian(random(mouseX-2, mouseX+2), 20), randomGaussian(random(mouseY-2, mouseY+2), 20), 0, 90, random(-5,5), random(-5,5));

	}
}

function draw() {
	background(0);
	clear();



	for(var i = 0; i<bubbles.length; i++){
		// noStroke();
		bubbles[i].update();
		bubbles[i].display();
		//if (mouseX>=windowWidth/2 && mouseY >= windowHeight/6*2 && mouseY <=windowHeight/6*3){
		//stroke(random(100,200),0,0);
		//}else if(mouseX<=windowWidth/2 && mouseY >= windowHeight/6*4 && mouseY <= windowHeight/6*5)
		//stroke(0,0,random(100,170));
	}
}





function Bubble(x, y, radx, rady, xspeed, yspeed){
	strokeWeight(random(8,10));
	this.location = createVector(x, y/*this.x, this.y*/);
	this.velocity = createVector(xspeed, yspeed);
	this.radx = radx;
	this.rady = rady;

	this.display = function() {
		line(this.location.x, this.location.y, this.radx, this.rady);
		//for particle explosion use ellipse or rect
	};

	this.update = function() {
		//this.x += randomGaussian(random(-7, 7), 2);
		//this.y += randomGaussian(random(-7, 7), 2);
		//      this.velocity.add(this.acceleration);
		//  this.velocity.limit(this.topspeed);
		this.location.add(this.velocity);


	};
}

function windowResized() {
	resizeCanvas(windowWidth, height);
}
