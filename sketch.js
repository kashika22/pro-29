var holder1;
function setup() {
  createCanvas(800,400);

  holder1 = new holder(300,200,400,10);
  
 //level one
 box1 = new box (150,275,30,40);
 box2 = new box (230,275,30,40);
 box3 = new box (260,275,30,40);
 box4 = new box (290,275,30,40);
 box5 = new box (220,275,30,40);
 box6 = new box (250,275,30,40);
 box7 = new box (300,275,30,40);

  //level two.
  box8 = new box (330,235,30,40);
  box9 = new box (360,235,30,40);
  box10 = new box (390,235,30,40);
  box11 = new box (420,235,30,40);
  box12 = new box (450,235,30,40);

  //level 3.
  box13 = new box (360,195,30,40);
  box14 = new box (390,195,30,40);
  box15 = new box (420,195,30,40);

  //top.
  box16 = new box (390,155,30,40);
  

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  box1.display();
  box2.display();
  box1.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  drawSprites();
}