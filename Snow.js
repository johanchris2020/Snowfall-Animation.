class Snow {
    constructor(x, y, width, height) {
        var options = {
            'density': 0.5,
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.snow = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.snow, 0, 0, this.width, this.height);
        pop();
    }
}