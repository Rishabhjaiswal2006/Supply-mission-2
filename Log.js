class Log{
    constructor(x,y,width,height){
        var rest={
           
                'restitution' : 0.8,
                'density':0.3,
                'friction':5
            }
    
            this.body = Bodies.rectangle(x,y,width,height,rest);
            this.width = width;
            this.height = height;
            World.add(world,this.body);
    }   
    
        display(){
            var pos = this.body.position ;
            rectMode(CENTER);
            fill("red");
            rect(pos.x,pos.y,this.width,this.height);
        }
    }