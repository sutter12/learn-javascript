function rectangle(x, y, w, h) {
    render.beginPath();
    render.rect(x, y, w, h);
    render.fill();
    render.stroke();
}//end rectangle

function fillColor(r, g, b) {
    r = String(r);
    g = String(g);
    b = String(b);
    render.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
}//end fillColor

function noFill() {
    render.fillStyle = "rgba(0, 0, 0, 0)";
}//end noFill

function strokeSize(size) {
    render.lineWidth = String(size);
}//end strokeSize

function strokeColor(r, g, b) {
    r = String(r);
    g = String(g);
    b = String(b);
    render.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
}//end strokeColor

function noStroke() {
    render.strokeStyle = "rgba(0, 0, 0, 0)";
}//end noStroke

function background(r, g, b) {
    noStroke();
    fillColor(r, g, b);
    rectangle(0, 0, width, height);
}//end background

function line(x1, y1, x2, y2) {
    render.beginPath();
    render.moveTo(x1, y1);
    render.lineTo(x2, y2);
    render.stroke();
}//end line

function circle(x, y, r) {
    render.beginPath();
    render.arc(x, y, r, 0, 2*Math.PI);
    render.fill();
    render.stroke();
}//end circle