class Bird{
    constructor(x,y){
        var options={
            restitution:0.5,
            density:1.5,
            friction:0.8

        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
        this.width=50;
        this.height=50;
    }
    display(){
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("red")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
pop()
    }
}