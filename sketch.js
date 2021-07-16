const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var base1,base2;
var slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var polygonImg;
function preload(){
    polygonImg=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    base1 = new Base(200,600,100,20);
    base2 = new Base(600,400,100,20);

    polygon = Bodies.circle(120,720,10);
   World.add(world,polygon);
    slingshot = new Slingshot(this.polygon,{x:100,y:700});

    box1 = new Box(205,595,20,30);
    box2 = new Box(225,595,20,30);
    box3 = new Box(245,595,20,30);
    box4 = new Box(265,595,20,30);
    box5 = new Box(215,565,20,30);
    box6 = new Box(235,565,20,30);
    box7 = new Box(255,565,20,30);
    box8 = new Box(225,535,20,30);
    box9 = new Box(245,535,20,30);
    box10 = new Box(235,505,20,30);

}
function draw(){
    base1.display();
    base2.display();
  polygon.addImage("polygonImg");
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);
  
    slingshot.display();

    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    
}