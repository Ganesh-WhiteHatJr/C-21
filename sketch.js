var bullet,wall,thickness; 
var speed, weight; 
function setup() { 
    createCanvas(1600, 400); 
    
    speed=random(223,321) 
    weight=random(30,52) 

    thickness=random(22,83);

    bullet=createSprite(50, 200, 10, 30); 
    bullet.velocityX = speed; 
    bullet.shapeColor="White"; 
    
    wall=createSprite(800,200, thickness, height/2);
    wall.shapeColor="Red";
} 
function draw() { 
   
    background(0); 

    if(wall.x-bullet.x < (bullet.width+wall.width)/2) { 
        bullet.velocityX=0; 
          
        var damage=(0.5 * weight * speed* speed)/(thickness*thickness*thickness); 
          
    if(damage<10) { 
        wall.shapeColor="green"; 
        fill("blue");
        stroke("red");
        textSize(30);
        text("Wall is effective against bullet",100,200);

          } 
    if(damage>10) { 
        wall.shapeColor="red"; 
        push();
        fill("blue");
        stroke("red");
        textSize(30);
        text("Wall is not effective against bullet ",100,200);
        pop()
     } 
    drawSprites(); 
     }
    }