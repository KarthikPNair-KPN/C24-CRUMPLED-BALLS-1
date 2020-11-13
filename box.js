class box{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        };

        this.x=x
        this.y=y
        this.width=width
        this.height=height

        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)
    }

    display(){
        var boxpos=this.body.position
        boxpos.x=this.body.position.x
        boxpos.y=this.body.position.y

        stroke("green");
        strokeWeight(4);
        fill(255,255,255)
        rectMode(CENTER);
        rect(boxpos.x,boxpos.y,this.width,this.height);
    }
}