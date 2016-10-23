function makeEntry(squirrel) {
	var result = { events: [], squirrel: squirrel };
	for (var i = 0; i < arguments.length; i++) {
		result.events.push(arguments[i]);
	};
	return result;
}

