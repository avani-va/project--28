class Mango {
  constructor(x,y,r){

    var options ={
      isStatic : true,
      restitution : 0,
      friction : 1,
    
   }
   this.x=x
   this.y=y
   this.r=r

   this.image = loadImage("mango.png")
   this.body = Bodies.circle(this.x,this.y,this.r,options)
   World.add(world, this.body);
  }


display()
{

  //var pos =this.body.position;
  //pos.x = mouseX;
  //pos.y = mouseY;
  //var angle = this.body.angle;

  var pos =this.body.position;

  push();
  translate(pos.x,pos.y);
  rectMode(CENTER);
  //strokeWeight(3);
  //stroke(3);
  fill(0,255,0);
  ellipse(0,0,this.r,this.r)
  pop();
};
}

