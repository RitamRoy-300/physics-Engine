const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;

  var groundOptions ={
    isStatic:true
  }

  ground = Bodies.rectangle(400,390,800,20,groundOptions);
  World.add(world,ground);
  console.log(ground);

  var ballOptions ={
    restitution:1
  }
  ball = Bodies.circle(400,20,50,ballOptions);
  World.add(world,ball);
}

function draw() {
  background("lightblue");
  Engine.update(engine);
  rectMode(CENTER);
  push();
  fill("green") ; 
  rect(ground.position.x,ground.position.y,800,20);
  pop();

  ellipseMode(RADIUS);
  push();
  fill("red") ; 
  ellipse(ball.position.x,ball.position.y,50);
  pop();
}