var mango1,mango2,mango3,mango4,mango5,mango6;
var boyImage,boy;
var stone;
var tree;
var ground;
var launcher;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
 boyImage=loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(765,690,50,10);
	boy.addImage(boyImage);

	ground = new Ground(600,height,1200,20);

	stone = new Stone(380,567,10,50);
	tree = new Tree(380,490,20,70);

	mango1 = new Mango(100,500,70,70);
	mango2 = new Mango(200,400,70,70);
	mango3 = new Mango(300,300,70,70);
	mango4 = new Mango(400,200,70,70);
	mango5 = new Mango(500,100,70,70);
	mango6 = new Mango(600,600,70,70);

	launcher = new Launcher(stone.body,{x:200, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function detectCollision(stone,mango){
mangoBodyPosition = mango.body.position;
stoneBodyPosition = stone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

if(distance<=mango.r+stone.r){
   Matter.Body.setStatic(mango.body,false);
}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235, y:420});
		launcher.attach(stone.body);
	}
}

