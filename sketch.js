const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,140);
    box2 = new Box(920,320,70,140);
    box3 = new Box(700,240,70,150);
    box4 = new Box(920,240,70,150);
    box5 = new Box(810,160,70,290);
    box6 = new Box(600,160,70,150);
    box7 = new Box(600,200,70,60);
    box8 = new Box(550,320,70,290);
    ground = new Ground(600,height,1200,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    ground.display();
   
}