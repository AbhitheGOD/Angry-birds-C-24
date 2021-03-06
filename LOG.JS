class Log{
    constructor(x,y,height,angle){
        var options={
            restitution:0.5,
            density:1.0,
            friction:1.3

        }
        this.body=Bodies.rectangle(x,y,20,height,options);
        World.add(world,this.body)
        this.width=20;
        this.height=height
        Matter.Body.setAngle(this.body,angle)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("green")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
pop()
    }
}