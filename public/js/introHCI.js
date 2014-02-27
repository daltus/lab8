'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});


var startTime;

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	startTime = new Date().getTime();
	$('.likeBtn').click(likeClicked);
}

function likeClicked(e) {
	ga("send", "event", "like", "click");
	var endTime = new Date().getTime();
	var timeSpent = endTime - startTime;
	ga('send', 'timing', 'user actions', 'load to like', timeSpent, 'label');
}