class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        this.bbx = new bbox(this.x, this.y, this.size, this.size);

        //physics
        this.gravity = 5; //gravity
        this.yspeed = 0; //speed in the y direction
        this.jspeed = 30; //jump speed
        this.mspeed = 10; //movement speed
        this.xspeed = 0; //speed in the x direction

        objects.push(this);
    }//end constructor

    step() {
        // this.x = mouseX;
        // this.y = mouseY;

        this.yspeed += this.gravity;

        var ground = wallCollision(this.bbx, this.x, this.y+1);
        if(keyPress.W && ground) {
            this.yspeed = -this.jspeed;
        }//end if key W pressed
        
        if(wallCollision(this.bbx, this.x, this.y + this.yspeed)) {
            while(!wallCollision(this.bbx, this.x, this.y + Math.sign(this.yspeed))) {
                this.y += Math.sign(this.yspeed);
            }//end while loop
            this.yspeed = 0;
        }//end if statement
        
        if(this.yspeed > 30) { //not needed but keeps falling speed to a max
            this.yspeed = 30;
        }//end if statement
        
        this.y += this.yspeed;
        this.bbx.update(this.x, this.y);
        var d = keyDown.D - keyDown.A;
        this.xspeed = d * this.mspeed;

        if(wallCollision(this.bbx, this.x + this.xspeed, this.y)) {
            while(!wallCollision(this.bbx, this.x + Math.sign(this.xspeed), this.y)) {
                this.x += Math.sign(this.xspeed);
            }//end while loop
            this.xspeed = 0;
        }//end if statement
        
        this.x += this.xspeed;
    }//end step

    draw() {
        //draw white square to draw player
        strokeColor(255, 255, 255); // player is white
        // strokeColor(0, 0, 0); //player is black
        noFill();
        rectangle(this.x, this.y, this.size, this.size);
        // this.bbx.draw();
    }//end draw

}//end player class