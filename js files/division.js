class Division {
  constructor(x, y) {
    var options = {
      isStatic: true,
      friction: 0,
    };

    this.x = x;
    this.y = y;

    this.body = Bodies.rectangle(this.x,this.y,10,200,options);
    World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;

    push();
    fill("white");
    rect(pos.x,pos.y,10,200);
    pop();
  }
}
