class Dustbin {
    constructor(x, y) {
    
     this.x = x;
     this.y = y;
     

      this.dustbinwidth = 70;
      this.dustbinheight = 10;
      this.wallthickness = 20;
      this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth, this.wallthickness,{isStatic: true})
      this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2, this.wallthickness, this.dustbinHeight,{isStatic: true})
      Matter.Body.setAngle(this.leftWallBody, this.angle);
      this.rightWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2, this.wallthickness, this.dustbinHeight,{isStatic: true})
      Matter.Body.setAngle(this.rightWallBody, this.angle);
      World.add(world, this.bottomBody)
      World.add(world, this.leftWallBody)
      World.add(world, this.rightWallBody)

      



      
    }
    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRight = this.rightWallBody.position;
        Push();
        Translate(posLeft.x , posLeft.y);
        rectMode(CENTER);
        fill(255)
        stroke(255)
        rotate(this.angle)
        rect(0,0,this.wallthickness, this.dustbinHeight)
        Pop();

        Push();
        Translate(posRight.x , posRight.y);
        rectMode(CENTER);
        fill(255)
        stroke(255)
        rotate(-1*this.angle)
        rect(0,0,this.wallthickness, this.dustbinHeight)
        Pop();

        Push();
        Translate(posBottom.x , posBottom.y);
        rectMode(CENTER);
        fill(255)
        stroke(255)
       
       rect(0,0,this.dustbinWidth, this.wallThickness)
        Pop();
        

     
     

  }
};