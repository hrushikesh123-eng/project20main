var car,wall;
var speed,weight,rating;
var deformation;

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor=color(80,80,80);

  car = createSprite(50,200,50,50);
  weight = Math.round(random(400,2500));
  speed = Math.round(random(55,70));
  car.velocityX = speed;

}

function draw() {
  background("black");  

  
    
  

  
   
  if(wall.x-car.x<wall.width/2+car.width/2) {
    car.velocityX=0;
    deformation = Math.round(0.5*weight*speed*speed/22500);
     
    if(deformation>=180) {
    car.shapeColor=color(255,0,0);
  
    }

    if(deformation<180 && deformation>=80) {
      car.shapeColor=color(230,230,0);
      
    }

    if(deformation<80) {
      car.shapeColor=color(0,255,0);
      
    }

    
  
}

  

    

    
 
     
    
  

  drawSprites();
}


