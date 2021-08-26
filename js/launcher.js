class Launcher{
 constructor(body,anchor){
 var options = {
  bodyA:body,
  pointB:anchor,
  stiffness:0.004,
  length:4   
 }
this.bodyA = body
this.pointB = anchor
this.launcher = Constraint.create(options)

World.add(world,this.launcher)

 }
 fly(){
 this.launcher.bodyA = null;
 }
 attach(body){
 this.launcher.bodyA = body

 }


display(){

if (this.launcher.bodyA){
 line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)

}
 }
  }