class Plinko{
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.radius);
        pop();
    }
}