class bbox {
    constructor(x, y, w, h) {
        this.x1 = x;
        this.y1 = y;
        this.w = w;
        this.h = h;
        this.x2 = this.x1 + this.w;
        this.y2 = this.y1 + this.h;
    }//end constructor

    update(x, y) {
        this.x1 = x;
        this.y1 = y;
        this.x2 = x + this.w;
        this.y2 = y + this.h;
    }//end update

    collision(bbx) {
        return (this.x1 < bbx.x2 && this.x2 > bbx.x1
            && this.y1 < bbx.y2 && this.y2 > bbx.y1);
    }//end collision

    draw() {
        noStroke();
        fillColor(255, 0, 0);
        rectangle(this.x1, this.y1, this.w, this.h);
    }//end draw
}//end bbox class