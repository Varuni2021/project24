const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,670,width,20);
	paper = new Paper(200,450,10);
	dustbin = new Dustbin(1150,650);
	




	Engine.run(engine);
  
}


function draw() {
background(0);
  rectMode(CENTER);
  

  ground.display();
  paper.display();
  dustbin.display();


  
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}

    
  };


