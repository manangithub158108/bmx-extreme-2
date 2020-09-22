class ramp {
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic : true});
        this.width = 100;
        this.height = 20;
        Body.setAngle(this.body,PI/4);
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("black") 
        rect(pos.x,pos.y,this.width,this.height);
        pop ();
    }
}