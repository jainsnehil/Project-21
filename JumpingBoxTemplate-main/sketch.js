var canvas;
var music,blueSurface,redSurface,yellowSurface,greenSurface;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
       blueSurface=createSprite(40,380,75,10);
       blueSurface.shapeColor="blue"; 
       redSurface=createSprite(240,380,75,10);
       redSurface.shapeColor="red";
       yellowSurface=createSprite(140,380,75,10);
       yellowSurface.shapeColor="yellow";
       greenSurface=createSprite(340,380,75,10);
       greenSurface.shapeColor="green";
       ball=createSprite(Math.round(random(20,380)),200,20,20);
       ball.shapeColor="white";
       ball.velocityX=3;
       ball.velocityY=4;
    //create box sprite and give velocity
       
}

function draw() {
    background(rgb(0));
    
     
    if(ball.isTouching(blueSurface)){
        ball.shapeColor="blue";
        music.play();
    }
    //else {ball.shapeColor="white";}

    if(ball.isTouching(redSurface)){
        ball.shapeColor="red";
        music.play();
    }
    //else{ball.shapeColor="white";}
    
    if(ball.isTouching(greenSurface)){
        ball.shapeColor="green";
        music.play();
    }
    //else{ball.shapeColor="white";}
     
    if(ball.isTouching(yellowSurface)){
        ball.shapeColor="yellow";
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
    }
    //else{ball.shapeColor="white";}
    
    //create edgeSprite
    edges = createEdgeSprites();



    ball.bounceOff(redSurface)||ball.bounceOff(greenSurface)||ball.bounceOff(blueSurface)||ball.bounceOff(edges[1])||ball.bounceOff(edges[2])||ball.bounceOff(edges[3])
    ||ball.bounceOff(edges[0]) 


     drawSprites();
    //add condition to check if box touching surface and make it box
}
