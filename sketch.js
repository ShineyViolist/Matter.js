const World = Matter.World;

var Engine = Matter.Engine;

var Bodies = Matter.Bodies;

var Render = Matter.Render;

var Composites = Matter.Composites;

var myCar,cradle,myPyramid,ball;

var balls = [];

var redColor = '#C44D58';

function setup() {
  //createCanvas(800,1600);


  engine = Engine.create();

  render = Render.create({element:document.body,engine:engine,wireFrames: false});

  world = engine.world;

  ground = Bodies.rectangle(-100,390,800,40,{isStatic:true});
  World.add(world, ground);

  ground2 = Bodies.rectangle(900,390,800,40,{isStatic:true});
  World.add(world, ground2);

  //myCar = Composites.car(400,250,100,30,40);
  //World.add(world,myCar);

  //cradle = Composites.newtonsCradle(200,50,4,10,80);
  //World.add(world,cradle);

  for(var i = 0; i< 100; i++){
    fill("blue");
    ball = Bodies.circle(random(-100,900),-10,30,{render:{fillStyle:"blue"}});
    World.add(world,ball);
    balls.push(ball);
  }

  myPyramid = Composites.pyramid(0,20,100,20,2,2,function (x,y){
    return Bodies.rectangle(x,y,20,20,{ render:{fillStyle:redColor,strokeStyle:redColor}})
  });
  World.add(world,myPyramid);
}

function draw() {
  Engine.update(engine);

  Render.run(render);

  //background("blue");  
  drawSprites();
}