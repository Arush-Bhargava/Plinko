const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var plinkos = [];
var divisions = [];
var particles = [];

function setup() {
  createCanvas(720, 720);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  for (var i = 50; i < 720; i = i + 60) {
    plinkos.push(new Plinko(i, 150));
  }

  for (var i = 25; i < 720; i = i + 60) {
    plinkos.push(new Plinko(i, 200));
  }

  for (var i = 50; i < 720; i = i + 60) {
    plinkos.push(new Plinko(i, 250));
  }

  for (var i = 25; i < 720; i = i + 60) {
    plinkos.push(new Plinko(i, 300));
  }

  for (var i = 50; i < 720; i = i + 60) {
    plinkos.push(new Plinko(i, 350));
  }

  for (var i = 25; i < 720; i = i + 60) {
    plinkos.push(new Plinko(i, 400));
  }

  ground = new Ground(240, 700);

  for (i = 0; i <= 720; i = i + 80) {
    divisions.push(new Division(i, 600));
  }

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background("black");
  for (var p = 0; p < plinkos.length; p++) {
    plinkos[p].display();
  }
  ground.display();
  for (var p = 0; p < divisions.length; p++) {
    divisions[p].display();
  }

  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 40));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
}