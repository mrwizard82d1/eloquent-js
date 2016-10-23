function randomPointOnCircle(radius) {
	var angle = Math.random() * 2 * Math.PI;
	return {x: radius * Math.cos(angle),
			y: radius * Math.sin(angle)};
}

function randomRange() {
	if (arguments.length < 1) {
		throw Error('`randomRange()` requires at least one (integer) argument.');
	}
	else if (arguments.length == 1) {
		return Math.floor(Math.random() * arguments[0]);
	}
	else {
		return arguments[0] + (Math.floor(Math.random() * (arguments[1] - arguments[0])));
	}
}

