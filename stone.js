class stone{
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            isStatic:false
        }
        this.body=Bodies.circle(x,y,radius,options )
        this.radius=radius
        this.image=loadImage("stone.png")
        World.add(world,this.body)
    }
    
display(){
    var pos =this.body.position
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.radius*2,this.radius*2) 
}

}
