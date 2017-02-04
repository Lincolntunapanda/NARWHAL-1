var bird;

function setup()
{
	createCanvas(900,500);
	bird = new bird();
}
function draw()
{
	background(0,0,255);
	bird.update();
	bird.show();
}
function keyPressed()
{
	if (key == ""){
		bird.up();

		// console.log("SPACE");
	}
}
	

