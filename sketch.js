var paper1
var ground1
var box1,box2,box3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(10,670,3200,10);
	paper1 = new paper(90,640,55);
	box1 = new box(1200,650,200,20);
	box2 = new box(1100,610,20,100);
	box3 = new box(1300,610,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  paper1.display();
  box1.display();
  box2.display();
  box3.display();



  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:175,y:-175})
 
	}
}




