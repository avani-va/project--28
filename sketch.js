
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImg;
var mango1,mango2,mango3,mango4,mango5;
var ground;

function preload()
{
 boyImg = loadImage("boy.png")	
	
}

function setup() {
	createCanvas(1100,500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(200,200,10,10);
	//boy = addImage("boy",boyImg);
	
	mango1 = new Mango (500,100,20);


	ground = new Ground (0,1)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  
  mango1.display()

  drawSprites();
 
}



