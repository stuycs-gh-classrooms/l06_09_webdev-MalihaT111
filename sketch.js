function setup() {
  // put setup code here
  createCanvas(400,400) ;
  background(260,200,200) ;
  avatar (50,200) ;
  var x= 50 ;
  var y = 200 ;
  while (x <= 500) {
    avatar(x,y) ; 
    x = x +100 ;
  }
}

function draw() {
  // put drawing code here
}


function avatar(var x, var y) {

fill(#3AA076);

circle(x,y,100);

fill(200,200,200);

circle(x,y,66);

fill(#9052B9);

square(x,y,33); }
