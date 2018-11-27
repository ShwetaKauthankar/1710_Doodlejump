function Platform(x,y,s,c){
	this.x=x;
	this.y=y;

	this.s;
	this.c;

	this.onScreen = true;

}

Platform.prototype.draw = function(altitude){

	stroke(255);
	strokeWeight(4);
	fill(this.color);

	if ( y - this.y < height / 2){
		rect(this.x, (y - this.y + height / 2) , this.size , 15)
	}
	else{
		this.onScreen = false;
	}
};

Platform.prototype.colloideWith = function(doodler) {
	var PlatformTop  = this.altitude;
	var doodlerBottom = doodler.location.y - doodler.size/2;

	stroke(#FFF000);
	strokeWeight(10);

	if(Math.abs(PlatformTop - doodlerBottom) < -doodler.velocity.y && PlatformTop < doodlerBottom) {
		var PlatformLeftX = this.x;
		var PlatformRightX = this.x + this.size;

		var doodlerLeftX = doodler.location.x - doodler.size / 2;
		var doodlerRightX = doodler.location.x + doodler.size / 2;

		return (( doodlerLeftX >= PlatformLeftX   && doodlerRightX <= PlatformRightX) || (doodlerRightX >= PlatformRightX && )))
	}

}
