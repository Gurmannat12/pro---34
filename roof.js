class Ball{
    constructor(x,y,r) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.rectangle(x,y,10,options);
        World.add(world, this.body);
      }
      display(){	

        push()
        ellipseMode(CENTER)
        //strokeWeight(4);
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,10,10);
        pop()

    }
} 