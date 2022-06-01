var walls = [];

class wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        objects.push(this);
        walls.push(this);
    }//end constructor

    draw() {
        strokeColor(255, 255, 255);
        noFill();
        strokeSize(2);
        rectangle(this.x, this.y, this.size, this.size);
    }//end draw
}//end wall class