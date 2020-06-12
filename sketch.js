
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
	
var world;
var database;
var foodLeft=20;
lastFedTime=0;
var dog1;
var dogImg;
var bottleImg;
function preload(){
	dogImg=loadImage("doggo.png");
	bottleImg=loadImage("s.png");
}
function setup() {
	createCanvas(1600, 600);
	rectMode(CENTER);
	database=firebase.database();

	
	engine = Engine.create();
	world = engine.world;
	lastFedTime=hour();
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	
	});
	
ground1=new ground(width/2,370,width,20);
dog1=new dog(250,100,20,30);
bottle=createSprite(750,390,20,20);
bottle.addImage(bottleImg);
bottle.scale=0.5;

	Engine.run(engine);
	//Render.run(render);
	foodData=database.ref("pet/foodleft")
	foodData.on("value",readFoodLeft)

	
	
  
}


function readFoodLeft(data)
{
	//console.log(data.val())
	foodLeft=data.val()
	//console.log(foodLeft)
}
function showError()
{

}


function draw() {
  rectMode(CENTER);
  background("#FFDAC1");
  textSize(20);
  
  text("FOOD-LEFT: "+foodLeft,1200,80);
 dog1.display(); 
// ground1.display();

  drawSprites();
 
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(dog1.body,dog1.body.position,{x:4.5,y:0});
  		foodLeft=foodLeft-1;
  		database.ref('pet/feedtime').set(hour())
		  database.ref('pet/foodleft').set(foodLeft);
		  

  	}
}





