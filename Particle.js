class Particle{
    constructor(x,y) {
        var options ={
            restitution:0.4,
            isStatic: false
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }
}