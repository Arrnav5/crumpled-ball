class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            density:0.8,
            friction:0.9,

        }
        this.body=Bodies.circle(x, y, radius, [options])
        console.log(this.body)
        this.radius=radius;
        
    }

    display(){
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}