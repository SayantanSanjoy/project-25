class wood2{

    constructor(x,y,width,height){
    
    var options={
    
    isStatic:true
    
    }
    
    this.body=Bodies.rectangle(x,y,width,height)
    
    this.width=width;
    
    this.height=height;
    
    World.add(world,this.body)
    this.image=loadImage("sprites/dustbin.png")
    
    }
    
    display(){
    
        var pos = this.body.position
    
        
        rectMode(CENTER)
        fill ("red")
        image(this.image,pos.x,pos.y,this.width,this.height)
        
    }
    
    
    
    }