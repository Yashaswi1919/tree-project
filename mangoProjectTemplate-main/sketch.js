
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango8, mango9, mango10, mango;
var world, boy;

function preload() {
	boy = loadImage("images/boy.png");
	stoneObjImage = loadImage("images/stone.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100, 100, 30);
	mango2 = new Mango(1200, 200, 30);
	mango3 = new Mango(1100, 200, 30);
	mango4 = new Mango(1000, 200, 30);
	mango5 = new Mango(1200, 100, 30);
	mango6 = new Mango(900, 200, 40);
	mango7 = new Mango(1200, 300, 30);
	mango8 = new Mango(1000, 80, 30);
	mango9 = new Mango(1000, 250, 30);
	mango10 = new Mango(1100, 300, 30);

	stoneObj = new Stone(100, 60);

	treeObj = new tree(1050, 580);
	groundObject = new ground(width / 2, 600, width, 20);

	Engine.run(engine);
}
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, { x: 235, y: 429 })
		launcherObject.attach(stoneObj.body);
	}
}



function draw() {

	background(230);
	//Add code for displaying text here!
	image(boy, 200, 340, 200, 300);



	treeObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	stoneObj.display();
	groundObject.display();
}
