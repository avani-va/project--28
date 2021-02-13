class Stone {
  constructor(body1,body2,offsetX,offsetY){
    this.offsetX = offsetX 
    this.offsetY = offsetY

    var option ={
      isStatic : false,
      restitution : 0,
      friction : 0,
      density : 1.2,
   }

   //this.body = Constraint.create(option);
   //World.add(world, this.body);

  }

  display() {
   var pointA = this.rope.body1.position;
   var pointB = this.rope.body2.position;
   strokeWeight(4);
   
   line(pointA.x,pointA.y,pointB.x,pointB.y);

  }
}
