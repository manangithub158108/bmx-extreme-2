// creating the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// creating the variables.
var bikeRider;
var rampImg, rocketImg

function preload(){
	bikeRiderImg = loadImage("Images/bicycle.png");
	rampImg = loadImage("Images/ramp.png");
	layoutImg = loadImage("Images/background.png");
  }

function setup() {
	createCanvas(1700, 700);
    engine = Engine.create();
	world = engine.world;

	
   // creating the elements of the game 

	layout = createSprite(width/2,height/2,width,height);
	layout.addImage(layoutImg);
	layout.scale = 3;

	ground = createSprite(width/2,600,width,20);
	ground.shapeColor = "blue";

	bikeRider = createSprite(100,100,10,10);
	bikeRider.addImage(bikeRiderImg);
	bikeRider.scale = 1.2;
	bikeRider.debug = true;
	bikeRider.setCollider("circle",0,5,55);
	bikeRider.velocityX = 0;
	bikeRider.velocityY = 15;

	gameState = 0;

	Engine.run(engine);

	compressorGroup = new Group();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bikeRider.collide(ground);
  drawSprites();

  if(keyDown("a") && gameState === 1){
	gameState = 2;
  }

  if(gameState === 2){
	  
	//camera.position.x = camera.position.x + 10; 

	if(layout.x < 0 ){
		layout.x = width/2;
	}

	// spawning of the objects should take place and the paddles should appear.
/*
	if(frameCount % 80 === 0){
		var ramp = createSprite(1710,560,10,10);
		ramp.addImage(rampImg);
		ramp.scale = 4.6;
		ramp.velocityX = -10;
		ramp.lifetime = 200;
		ramp.collide(bikeRider);
	}
*/

if(frameCount % 10 === 0){
	var compressor = createSprite(1710,160,50,50);
	//compressor.addImage(compressorImg);
	//compressor.scale = 4.6;
	compressor.velocityX = -10;
	compressor.lifetime = 200;
	compressorGroup.add(compressor);
	if(frameCount % 40 === 0){
		compressor.velocityY = 30;
	}

	if(compressorGroup.isTouching(bikeRider)){
		gameState = 3;
	}
}
// gamestate 3
  

	paddle1 = createSprite(width/2,650,50,50);
	paddle1.shapeColor = "red";

	fill("red");
	textSize(25);
	textFont("Georgia"); 
	text("Acceleration Paddle ",20,690); 

	// adding the acceleration and brakes function
	if(mousePressedOver(paddle1)){
	  bikeRider.velocityX = bikeRider.velocityX + 1;
  }
}

 if(keyDown("space") && gameState === 0){
	gameState = 1;
  }

  if(gameState === 1){

	// creatng the rules.

	fill("yellow");
	textSize(50);
	textFont("Georgia"); 
	text("The rules of the game are -: ",605,100); 

	fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text(" - To make the rider jump use the up arrow key ",625,150); 

	fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text("- The obstacles of the game are - ",630,200); 

    fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text("1. The ramp",630,250); 

	fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text("2. The Ball launcher",630,300); 

	fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text("3. The crusher",630,350); 

	fill("yellow");
	textSize(25);
	textFont("Georgia"); 
	text(" Press the letter a on the keyboard to start the adventure. ",630,500); 

	fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text("- Press the paddle1 for acceleration ",630,400); 

	fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text("- Press the paddle2 for applying brakes",630,450); 

  }

  if(gameState === 0){

  // writing the neccessary text functions

	fill("yellow");
	textSize(50);
	textFont("Georgia"); 
	text("BMX extreme",725,100); 

	fill("yellow");
	textSize(35);
	textFont("Georgia"); 
	text("Welcome BMX extreme !!",680,200); 

	fill("yellow");
	textSize(25);
	textFont("Georgia"); 
	text("Press space to read the rules of the game ",660,300); 
  }
 
}



