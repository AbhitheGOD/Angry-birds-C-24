class Pig{
    constructor(x,y){
        var options={
            restitution:0.5,
            density:1.0,
            friction:0.8

        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body)
        this.width=50;
        this.height=50;
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("Pink")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
pop()
    }
}