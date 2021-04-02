
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, line1, line2, line3;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,300,10)
	



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



