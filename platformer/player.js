class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        objects.push(this);
    }//end constructor

    step() {
        // this.x = mouseX;
        // this.y = mouseY;

        if(keyDown.W) {
            this.y += 4;
        }//end if key W pressed
    }//end step

    draw() {
        //draw white square to draw player
        strokeColor(255, 255, 255); // player is white
        // strokeColor(0, 0, 0); //player is black
        noFill();
        rectangle(this.x, this.y, this.size, this.size);
    }//end draw

}//end player class