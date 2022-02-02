class rope {
	constructor(body1, body2, pointA, pointB) {
	this.pointA = pointA
	this.pointB = pointB
var option = {
	pointB: { x: this.pointA, y: this.pointB },
	bodyA: body1,
	bodyB: body2

}
	
 this.rope  = Constraint.create(option);
 World.add(world, this.rope);
}


display(){
	var pointA = this.rope.bodyA.position;
	var pointB = this.rope.bodyB.position;
	strokeWeight(2);
	line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB)
}

}
