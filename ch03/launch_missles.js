var missleSystem = {
	launch: function(when) {
		console.log("Going boom! " + when);
	}
}; 

var launchMissles = function(value) {
	missleSystem.launch('Now');
};
launchMissles(null);

var safeMode = true;
console.log("Launching missles in safe mode: " + safeMode);
if (safeMode) {
	launchMissles = function(value) { /* do nothing */ };
};

launchMissles(null);
