
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 function preload()
{
	
}

function setup() {
	createCanvas(1000,1000);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(200,500,10);
ground = new Ground(400,600,1200,20);
leftSide = new Dustbin(815,540,20,100);
bottom = new Dustbin(695,580,220,20);
rightSide = new Dustbin(580,540,20,100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();
  paper.display();
  drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.posotion,{x:12.8, y:-12.8});
    bottom.collide(rightSide);
	}

}

