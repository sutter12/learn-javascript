// https://www.youtube.com/watch?v=oMjrl_Txps8&ab_channel=MichaelHulbert
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
  
  function strokeSize(size) {
    render.lineWidth = String(size);
  }//end strokeSize
  
  function background(r, g, b) {
    fillColor(r, g, b);
    rectangle(0, 0, 0);
  }//end background
  
  function strokeColor(r, g, b) {
    r = String(r);
    g = String(g);
    b = String(b);
    render.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
  }//end strokeColor