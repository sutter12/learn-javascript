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
    
    background(25, 25, 25);

    fillColor(255, 0, 255);
    // noFill()
    strokeColor(0, 255, 0);
    strokeSize(4);
    rectangle(25, 25, 50, 100);

    //line does not need a fill
    strokeColor(255, 0, 0);
    line(50, 100, 25, 300);

    //circle
    noStroke();
    fillColor(0, 0, 255);
    circle(200, 200, 75)
}

window.onresize();