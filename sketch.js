var canvas;
var music;
var box,tab1,tab2,tab3,tab4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    tab1 = createSprite(50,height-20,190,20);
    tab1.shapeColor = "red";
    tab2 = createSprite(250,height-20,190,20);
    tab2.shapeColor =  "green";
    tab3 = createSprite(450,height-20,190,20);
    tab3.shapeColor = "yellow";
    tab4 = createSprite(650,height-20,190,20);
    tab4.shapeColor = "blue";


    //create box sprite and give velocity
    box = createSprite(random(40,80),height-70,20,20);
    box.velocityY=5;
    box.velocityX=2;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges = createEdgeSprites();


    //add condition to check if box touching surface and make it box
    box.bounceOff(edges);

    if(tab1.isTouching(box) && box.bounceOff(tab1)){
        box.shapeColor = tab1.shapeColor;
        music.play();
    }

    if(tab2.isTouching(box) && box.bounceOff(tab2)){
        box.shapeColor = tab2.shapeColor;
        box.velocityX=0;
        box.velocityY=0;
        music.stop();    
    }

    if(tab3.isTouching(box) && box.bounceOff(tab3)){
        box.shapeColor = tab3.shapeColor;
        //box.bounceOff(tab3);
        music.play();
        
    }

    if(tab4.isTouching(box) && box.bounceOff(tab4)){
        box.shapeColor = tab4.shapeColor;
        // box.velocityX=0;
        // box.velocityY=0;
        // music.stop();
        music.play();
    }

    drawSprites();
}
