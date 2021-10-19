function setup() {
  createCanvas(800, 800,WEBGL);
}
let lip;
let cap;
let body;
let spacing= 50
let img;

function preload() {
  lip= loadModel('LipStick.obj',true);
  cap= loadModel('Cap.obj',true);
  body= loadModel('Body.obj',true);
  img= loadImage('mac.jpg');
}

function draw() {
  background(0);

  noStroke();

  for (x=0; x<=width; x +=spacing) {
    for (y=0; y<=height; y +=spacing) {

      normalMaterial();
      push();
      translate(x - 400, y - 400)
      rotateX(frameCount * 0.01)
      rotateY(frameCount *0.01)
      scale(0.25);
      model(lip);
      pop()

      ambientLight(60);

      let locX = mouseX - width / 2;
      let locY = mouseY - height / 2;
      pointLight(255, 255, 255, locX, locY, 50);

      specularMaterial(250);
      shininess(50);

      // normalMaterial();

      push();
      translate(x - 400, y - 400)
      rotateX(-frameCount * 0.01)
      rotateY(-frameCount *0.01)
      texture(img);
      scale(0.25);
      model(cap);
      pop()

      normalMaterial();

      push();
      translate(mouseX-400,mouseY-400)
      translate(x - 400, y - 400)
      rotateX(frameCount * 0.01)
      rotateY(frameCount *0.01)

      scale(0.25);
      model(body);
      pop()




  }
}
}
