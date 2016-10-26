'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
}

$(".cross").hide();
$(".menu").hide();
$(".hamburger").click(function() {
	$(".menu").slideToggle("slow", function() {
		$(".hamburger").hide();
		$(".cross").show();
	});
});

$(".cross").click(function() {
	$(".menu").slideToggle("slow", function() {
		$(".cross").hide();
		$(".hamburger").show();
	});
});
