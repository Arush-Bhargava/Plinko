class Particle {
  constructor(x, y) {
    var options = {
      isStatic: false,
      restitution: 0.1,
      friction: 0.5,
    };

    this.x = x;
    this.y = y;
    this.r = 12;

    this.body = Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    this.body.debug = true; 

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill("red");
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}
