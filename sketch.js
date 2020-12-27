
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var Box1,Box2,Box3;
var Ground1;
var ball1;
var Ball1;

function preload(){

	dustbin=loadImage("dustbingreen.png");
	blue = loadImage("BLUE.png");

}




function setup() {
	createCanvas(1800, 700);


		engine = Engine.create();
		world = engine.world;

		
		//Create the Bodies Here.
		
			Box1 = new Box(1400,670,200,20);
			Box2 = new Box(1500,600,20,250);
			Box3 = new Box(1300,600,20,250);
			Ground1 = new Ground(900,690,1800,20);

			Ball1 = new Ball(100,180,70);
			Engine.run(engine);
		
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  	
		Box1.display();
		Box2.display();
		Box3.display();
		imageMode(CENTER);
		image(dustbin,1400,570,200,200);

		imageMode(CENTER);
		image(blue,900,80,700,150);
	
	  
		Ball1.display();
	
	 	
	 	 Ground1.display();
	
		

	
	

	


} 


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Ball1.body,Ball1.body.position,{x:1200,y:-900});
	

	}
}





