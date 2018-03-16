//var nums = [];
var x;
var y;
var cnv;
var marg = 50;


function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	cnv.position(0,40);
	cnv.style('z-index','-1');
	x = windowWidth / 2;
	y = windowHeight / 2;
}

function draw() {

	background(0);
	for(var j = 0; j<100;j++){
		avoid();
		move();
		for (var i = 0; i < 42; i++) {
			display();
			bound();
		}

	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function display() {
	//stroke(42, randomGaussian(255, 255), 42, randomGaussian(255, 180));
	stroke(randomGaussian(255, 255), 21, 21, randomGaussian(255, 180));
	//fill(20, 20, 240);
	line(x, y, x + random(-10, 10), y);

}

function move() {
	x += randomGaussian(random(-7, 7), 2);
	y += randomGaussian(random(-7, 7), 2);
}

function bound(){
	if (x >= width-40)  {
		x -= 40;
	}else if (x <= 40){
		x += 40;
	}
	if (y >= height-40){
		y -= 40;
	} else if (y <= 40){
		y += 40;
	}
}

function avoid(){
	if(x >= mouseX-10){
		x+=random(-2,5);
		y += randomGaussian(random(-7, 7), 2);
	}else if(x <= mouseX+10){
		x+=random(-5,2);
		y += randomGaussian(random(-7, 7), 2);
	}else{
		x += randomGaussian(random(-7, 7), 2);
		y += randomGaussian(random(-7, 7), 2);
	}   
	if(y >= mouseY-10){
		x += randomGaussian(random(-7, 7), 2);
		y+=random(-2,5); 
	}else if(y <= mouseY+10){
		x += randomGaussian(random(-7, 7), 2);
		y+=random(-5,2); 
	}else{
		x += randomGaussian(random(-7, 7), 2);
		y += randomGaussian(random(-7, 7), 2);
	}   

}

