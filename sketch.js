const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;
var ball1,ball2,ball3,ball4,ball5;

function setup() {
	createCanvas(windowWidth/2,windowHeight/1.2);
	engine = Engine.create();
	world = engine.world;

	//let canvasmouse = Mouse.create(canvas.elt);
	//canvasmouse.pixelRatio = pixelDensity();
	//let options = {
	//	mouse: canvasmouse
	//}
	//mConstraint = MouseConstraint.create(engine,options);
	//World.add(world,mConstraint);

	pendulum1 = new Pendulum(250,350);
	pendulum2 = new Pendulum(300,350);
	pendulum3 = new Pendulum(350,350);
	pendulum4 = new Pendulum(400,350);
	pendulum5 = new Pendulum(450,350);

	ball1 = new Ball(250,550);
	ball2 = new Ball(300,550);
	ball3 = new Ball(350,550);
	ball4 = new Ball(400,550);
	ball5 = new Ball(450,550);

	sling1 = new Sling(pendulum1.body,ball1.body,-100,0);
	World.add(world,sling1);

	sling2 = new Sling(pendulum2.body,ball2.body,-50,0);
	World.add(world,sling2);

	sling3 = new Sling(pendulum3.body,ball3.body,0,0);
	World.add(world, sling3);

	sling4 = new Sling(pendulum4.body,ball4.body,+50,0);
	World.add(world, sling4);

	sling5 = new Sling(pendulum5.body,ball5.body,+100,0);
	World.add(world, sling5);


	Engine.run(engine);
  
}


function draw() {
  background(0);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

 
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body,{x: mouseX, y: mouseY});
	}



