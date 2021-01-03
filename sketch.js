const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box,ground,bar1,bar2,bar3,barImage,rope;
var score = 0  ;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    
    box = new Box(150,400,75,75);
    ground = new Ground2(1536/2,698,1536,40);
    base1 = new Ground2(640,600,290,20);
    base2 = new Ground2(1150,350,200,20);

    block1 = new Block(550,558,40,60);
    block2 = new Block(590,558,40,60);
    block3 = new Block(630,558,40,60);
    block4 = new Block(670,558,40,60);
    block5 = new Block(710,558,40,60);
    block6 = new Block(750,558,40,60);
    block7 = new Block2(590,498,40,60); 
    block8 = new Block2(630,498,40,60); 
    block9 = new Block2(670,498,40,60); 
    block10 = new Block2(710,498,40,60); 
    block11 = new Block3(630,438,40,60);
    block12 = new Block3(670,438,40,60);
    block13 = new Block(650,378,40,60);
    block14 = new Block(1110,308,40,60);
    block15 = new Block(1150,308,40,60);
    block16 = new Block(1190,308,40,60);
    block17 = new Block3(1130,248,40,60);
    block18 = new Block3(1170,248,40,60);
    block19 = new Block2(1150,188,40,60);
    
    rope = new SlingShot(box.body,{x:150,y:350});
}  

function draw(){
    background(55,43,43);
    Engine.update(engine);

    strokeWeight(2);
    stroke(0);
	
    textSize(18);
    textFont("Georgia");
    textStyle(BOLD);
    text("Press space to get one more chance to play!!",10,20);
    

    box.display();
    ground.display();
    base1.display();
    base2.display();

   block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
   block14.display();
   block15.display();
   block16.display();
   block17.display();
   block18.display();
   block19.display();

    
   rope.display();

   text("Score : "+score, 750,70);


   block1.score();
   block2.score();
   block3.score();
   block4.score();
   block5.score();
   block6.score();
   block7.score();
   block11.score();
   block13.score();
   block14.score();
   block15.score();
   block12.score();
   block13.score();
   block14.score();
   block15.score();
   block16.score();
   block17.score();
   block18.score();
   block19.score();
 
}
  



textSize(50);
    if(score===500){text("Congratulations!! You win.....",300,300)}


    function mouseDragged(){
        if (gameState!=="launched"){
            Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
        }
    }
    
    function mouseReleased(){
        rope.fly();
        gameState = "launched";
    }
    
    function keyPressed(){
        if(keyCode === 32){
            Matter.Body.setPosition(box.body,{x:235, y:420})
            rope.attach(box.body);
            gameState = "onSling";
      }
      
      if(keyCode === space){
        box.x=200;
        box.y=200;
      }
    }
 async function getTime(){
     var response =  await fetch("http://worldtimeapi.org/timezone/Asia/India");
     var responseJSON = await response.json();
       console.log(responseJSON);

    var datetime = responseJSON.dateteime;
    var hour = datetime.slice(11,13);

    if(hour>-6 && hour<-19){
          background="blue";
        
    }
    else{
        background="brown";
        
    }
        
}

