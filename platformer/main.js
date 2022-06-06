// https://www.youtube.com/watch?v=oMjrl_Txps8&ab_channel=MichaelHulbert

var canvas = document.getElementById("gamescreen");
var render = canvas.getContext("2d");

//used for size of screen
var width; 
var height;

//fix white bar on top and left
canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

//redraws everything anytime window is resized or created
window.onresize = function() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // background(25, 25, 25);

    // fillColor(255, 0, 255);
    // // noFill()
    // strokeColor(0, 255, 0);
    // strokeSize(4);
    // rectangle(25, 25, 50, 100);

    // //line does not need a fill
    // strokeColor(255, 0, 0);
    // line(50, 100, 25, 300);

    // //circle
    // noStroke();
    // fillColor(0, 0, 255);
    // circle(200, 200, 75);

    // background(25, 25, 25); //here to prevent flicker
    drawLoop();
}//end onresize

var objects = [];

for(var i=0; i<32; i++) {
    new wall(i*32, 400);
}//end for i loop
new wall(15*32, 400-32);

var player = new Player(50, 50);

window.onresize();

function gameLoop() {
    // console.log("Hello"); // use to see fps

    stepLoop();
    drawLoop();
    keyEnd();
}//end gameLoop()

function stepLoop() {
    //math to factor fps I think???
    for(var i=0; i<objects.length; i++) { 
        if(objects[i].step) {
            objects[i].step();
        }//end if statement
    }//end for i loop
}//end stepLoop

function drawLoop() {
    background(25, 25, 25);
    for(var i=0; i<objects.length; i++) { //loop to draw all objects that are able to be drawn
        if(objects[i].draw) {
            objects[i].draw();
        }//end if statement
    }//end for i loop

}//end drawLoop

var targetFPS = 30;
setInterval(gameLoop, 1000/targetFPS);