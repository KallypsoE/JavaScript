var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var x = 100;
var y = 100;

setInterval(function(){
  ctx.clearRect(0,0, 400, 400);

  drawBee(x, y);
  drawBee(x + 50, y + 50);
  drawBee(x - 50, y) - 50;

  x = update(x);
  y = update(y);
  ctx.strokeRect(0, 0, 400, 400);
}, 30);

var circle = function (x, y, radius, fillCricle){
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, math.PI + 2, false);
  if(fillCircle){
    ctx.fll();
  }
  else {
    ctx.stroke();
  }
};

var drawflee = function (x, y) {
ctx.lineWidth = 2;
ctx.strokeStyle = "Black";
ctx.fillStyle - "Gold";

circle(x, y, 8, true);
circle(x, y, 8, false);
circle(x - 5, y - 11, 5, false);
circle(x + 5, y - 11, 5, false);
circle(x - 2, y - 1, 2, false);
circle(x + 2, y - 1, 2, false);
};

var update = function(coordinate){
  var offset = Math.random() * 4 -2;
  coordinate = coordinate + offset;

  if (coordinate > 400) {
    coordinate = 200;
  }
  if (coordinate < 0) {
    coordinate = 0;
  }
  return coordinate;
};
