  
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var backgroundation, bgIMG;

function preload(){
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png"); 
  bgIMG = loadAnimation ("frame_00_delay-0.04s.gif", "frame_01_delay-0.04s.gif", "frame_02_delay-0.04s.gif", "frame_03_delay-0.04s.gif", "frame_04_delay-0.04s.gif", "frame_05_delay-0.04s.gif", "frame_06_delay-0.04s.gif", "frame_07_delay-0.04s.gif", "frame_08_delay-0.04s.gif", "frame_09_delay-0.04s.gif", "frame_10_delay-0.04s.gif", "frame_11_delay-0.04s.gif", "frame_12_delay-0.04s.gif", "frame_13_delay-0.04s.gif", "frame_14_delay-0.04s.gif", "frame_15_delay-0.04s.gif", "frame_16_delay-0.04s.gif", "frame_17_delay-0.04s.gif", "frame_18_delay-0.04s.gif", "frame_19_delay-0.04s.gif", "frame_20_delay-0.04s.gif", "frame_21_delay-0.04s.gif", "frame_22_delay-0.04s.gif", "frame_23_delay-0.04s.gif", "frame_24_delay-0.04s.gif", "frame_25_delay-0.04s.gif", "frame_26_delay-0.04s.gif", "frame_27_delay-0.04s.gif", "frame_28_delay-0.04s.gif", "frame_29_delay-0.04s.gif", "frame_30_delay-0.04s.gif", "frame_31_delay-0.04s.gif", "frame_32_delay-0.04s.gif", "frame_33_delay-0.04s.gif", "frame_34_delay-0.04s.gif", "frame_35_delay-0.04s.gif", "frame_36_delay-0.04s.gif", "frame_37_delay-0.04s.gif", "frame_38_delay-0.04s.gif", "frame_39_delay-0.04s.gif", "frame_40_delay-0.04s.gif", "frame_41_delay-0.04s.gif", "frame_42_delay-0.04s.gif", "frame_43_delay-0.04s.gif", "frame_44_delay-0.04s.gif", "frame_45_delay-0.04s.gif", )
}

function setup() {
  createCanvas(600,600);
  
  score = 0;
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;

  foodGroup = new Group();
  obstacleGroup = new Group();

  backgroundation = createSprite(300,300,80,80);
  backgroundation.addAnimation("MovingJungle", bgIMG);
  backgroundation.scale = 1.5
}

function draw() {
  background("white");

  if (monkey.isTouching(foodGroup)){
    score=score+1;
  }
  textSize(15)
  StrokeWeight=10
  text("score: " + score,50,50);

  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacle();
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    
    foodGroup.setVelocityXEach(0);
    foodGroup.setLifetimeEach(-1);
  }
  
  
  stroke("black");
  fill("black");
  textSize(20);
  
  drawSprites();
}

function spawnFood(){
  if(frameCount % 80 === 0){
    var banana = createSprite(600,250,40,10);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.05;
    banana.y = random(120,200);
    banana.velocityX = -5;
    banana.lifetime = 300;
    
    monkey.depth = banana.depth+1;
    
    foodGroup.add(banana);
  }
}

function spawnObstacle(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(800,320,10,40);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
  }
}
