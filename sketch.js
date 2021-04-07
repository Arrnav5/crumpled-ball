
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var right,left,bottum;
var ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	left=new Box(600,610,10,100);
	right=new Box(700,610,10,100);
	bottum=new Box(650,660,100,10);
	ground=new Ground(390,680,800,10);
	ball=new Ball(100,655,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  right.display()
  left.display()
  bottum.display()
  ground.display()
  ball.display()
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85 , y:-85} )
	}
}

