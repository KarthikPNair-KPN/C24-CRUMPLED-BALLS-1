class Ground {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        };

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        
        World.add(world,this.body);

        
    }
    display(){
        var groundpos = this.body.position;
        groundpos.x=this.body.position.x;
        groundpos.y=this.body.position.y;

        fill(255,255,0);
        rectMode(CENTER);
        rect(groundpos.x,groundpos.y,this.width,this.height);
    }
}