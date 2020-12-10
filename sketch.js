
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground= new Ground(600,697,1200,20);

  for (var k=0; k <=500; k=k+80) {
	divisions.push(new Divisions(k, 700-divisionheight/2,10,divisionheight));
	
  }

  for (var j=40; j <=500; j=j+50) {
	plinko.push(new Plinko(j,75,10));
	
  }

  for (var j=15; j <=500-10; j=j+50) {
	plinko.push(new Plinko(j,165,10));
	
  }

  for (var j=40; j <=500; j=j+50) {
	plinko.push(new Plinko(j,255,10));
	
  }

  for (var j=15; j <=500-10; j=j+50) {
	plinko.push(new Plinko(j,355,10));
	
  }
  
	Engine.run(engine);
  

}

var divisions=[];
var divisionheight=300;

var plinko=[];
var particle=[];
//var plinkoheight=300;


function draw() {
  rectMode(CENTER);
  background(0);
  
 if(frameCount%60===0){
	particle.push(new Particle(random(500/2-10),random(500/2+10),10));
 } 
 
for (var i=0;i<divisions.length;i++){
	divisions[i].display();
}

for (var a=0;a<plinko.length;a++){
	plinko[a].display();
}

for (var b=0;b<plinko.length;b++){
	plinko[b].display();
}

for (var c=0;c<divisions.length;c++){
	plinko[i].display();
}

for (var d=0;d<plinko.length;d++){
	plinko[d].display();
}

for (var e=0;e<particle.length;e++){
	particle[e].display();
}

drawSprites();
ground.display();


}
