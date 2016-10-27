/*
 * Alternative implementation of `gatherCorrelations` using
 * `Array.forEach`
 */
function gatherCorrelations(journal) {
	var phis = {};
	var addEventIfEventNoAlreadyPresent = function(event) {
		if (! (event in phis)) {
			phis[event] = phi(tableFor(event, journal));
		}
	};
	var summarizeEventsForEntry = function(entry) {
		entry.events.forEach(addEventIfEventNotAlreadyPresent);
	}

	journal.forEach(summarizeEventsForEntry);

	return phis;
}
