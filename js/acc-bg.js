/*
  Made by: Jonas Badalic
  https://codepen.io/JonasBadalic
*/

/*
  Modified by: JustDeveloper
  https://justdeveloper.is-a.dev/
*/



const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
var w = 0;
var h = 0;
var ww = width;
var wh = height;
var partCount = 100;
var particles = [];

function particle(){
  this.color = 'rgba(255,255,255,'+ Math.random()+')';
  console.log(this.color);
  this.x = randomInt(0,ww);
  this.y = randomInt(0,wh);
  this.direction = {
    "x": -1 + Math.random() * 2,
    "y": -1 + Math.random() * 2
  };
  this.vx = 0.3 * Math.random();
  this.vy = 0.3 * Math.random();
  this.radius = randomInt(2,3);
  this.float = function(){
    this.x += this.vx * this.direction.x;
    this.y += this.vy * this.direction.y;
  };
  this.changeDirection = function (axis) {
    this.direction[axis] *= -1;
  };
  this.boundaryCheck = function () {
            if (this.x >= ww) {
                this.x = ww;
                this.changeDirection("x");
            } else if (this.x <= 0) {
                this.x = 0;
                this.changeDirection("x");
            }
            if (this.y >= wh) {
                this.y = wh;
                this.changeDirection("y");
            } else if (this.y <= 0) {
                this.y = 0;
                this.changeDirection("y");
            }
        };
  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };
}
function clearCanvas() {
 ctx.clearRect(0, 0, ww, wh);
}
function createParticles(){
  for (i=0;i<partCount;i++){
    var p = new particle();
    particles.push(p);
  }
}
function drawParticles() {
   for (i=0;i<particles.length;i++) {
     p = particles[i];
     p.draw();
   }
}
function updateParticles() {
        for (var i = particles.length - 1; i >= 0; i--) {
            p = particles[i];
            p.float();
            p.boundaryCheck();
        }
}
createParticles();
drawParticles();
function animateParticles() {
        clearCanvas();
        drawParticles();
        updateParticles();
        requestAnimationFrame(animateParticles);
    }
requestAnimationFrame(animateParticles);

window.addEventListener('resize', function() {
  const width0 = window.innerWidth  || document.documentElement.clientWidth || document.body.clientWidth;
  const he1ght = window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight;
  ww = width0;
  wh = he1ght;
  canvas.width = ww;
  canvas.height = wh;
  clearCanvas();
  particles = [];
  createParticles();
  drawParticles();
});
function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function velocityInt(min,max)
{
    return Math.random()*(max-min+1)+min;
}
