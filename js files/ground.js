class Ground {
  constructor(x, y) {
   var  options = {
      isStatic: true,
      friction: 0,
    };

    this.x = x;
    this.y = y;

    this.body = Bodies.rectangle(this.x, this.y, windowWidth, 20, options);
    World.add(world, this.body);
  }
  display() {
    var gpos = this.body.position;
    push();
    fill("white")
    rect(gpos.x,gpos.y ,windowWidth, 10 )
    pop();
  }
}
