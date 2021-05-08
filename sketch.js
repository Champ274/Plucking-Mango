
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy, boyimg
var mango,mangoimg
var tree,treeimg
const Constraint = Matter.Constraint;
function preload()
{
	boyimg=loadImage('boy.png')
	treeimg=loadImage("tree.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy=createSprite(200,600,100,100)
boy.addImage(boyimg)
boy.scale=0.12
tree=createSprite(700,500,30,30)
tree.addImage(treeimg)
tree.scale=0.3
stone1=new stone(140,560,20)
console.log(stone1)
slingshot1=new Sling(stone1.body,{x:140,y:540})
mango1=new Mango(730,500,30)
mango2=new Mango(770,420,30)
mango3=new Mango(600,460,30)
mango4=new Mango(700,380,30)
mango5=new Mango(640,400,30)
	Engine.run(engine);
  ground1 = new Ground(500,670,1000,10)
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    //}
}
function mouseReleased(){
    slingshot1.fly();
   // gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot1.attach(stone1.body);
    }
}
function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.radius+lstone.radius)
{
	Matter.Body.setStatic(lmango.body,false)
}
}

function draw() {
  rectMode(CENTER);
  background('white');
 // boy.display
  drawSprites();
 stone1.display()
 slingshot1.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 ground1.display()
 detectcollision(stone1,mango1)
 detectcollision(stone1,mango2)
 detectcollision(stone1,mango3)
 detectcollision(stone1,mango4)
 detectcollision(stone1,mango5)

}



