function Doodler(x,y,enemy,s,c){

	this.loc = createVector(x,y);
	this.vel = createVector(0,0);

//	this.max_alt=alt;
//	this.pre_max_alt=alt;

	this.force = 12;

	this.c = c; //color
	this.s = s; //size

	this.enemy = enemy;
}

 Doodler.prototype.update = function() {
 	this.loc.add(this.vel);
 	this.vel.mult(0.8);
 };


 Doodler.prototype.applyForce = function(force) {
 	this.vel.add(force);
 };

 Doodler.prototype.draw = function() {
 	stroke(255);
 	strokeWeight(3);
 	ellipse(190,560,50,50);
 	fill(this.c);
 	this.loc.add(this.vel);
 	this.vel.mult(0.8);
 };