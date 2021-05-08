class Mango{
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            isStatic:true
        }
        this.body=Bodies.circle(x,y,radius,options )
        this.radius=radius
        this.image=loadImage("mango.png")
        World.add(world,this.body)
    }
    
display(){
    var pos =this.body.position
   // ellipseMode(RADIUS)
   // ellipse (pos.x,pos.y,this.radius,this.radius) 


    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.radius*2,this.radius*2) 
}

}
