const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine , myWorld , ground ;





var ball


function setup() {
  createCanvas(400,400);
 

  myEngine = Engine.create();

myWorld=myEngine.world;
var ball_options ={ restitution: 1.0 }


ball=Bodies.circle(200,200,25,ball_options)
World.add(myWorld,ball)




var options = {
isStatic: true
}
ground=  Bodies.rectangle(200,390,400,20,options);

World.add(myWorld, ground);


console.log(ground.position.x)


  
}

function draw() {
  background(0);
Engine.update(myEngine)

  rectMode(CENTER)  ;
  rect(ground.position.x,ground.position.y,400,20)
ellipseMode(CENTER)
ellipse(ball.position.x,ball.position.y,25)

}