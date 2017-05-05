var activeClass = '';
var previousClass = '';

$(document).ready(function() {
	console.log('jQuery Ready!');
	$('#titleButton').click(function() {
		window.location = 'home.html';
	})
	$('#classesButton').click(function() {
		alert('Not Yet Implemented');
	})
	$('#optionsButton').click(function() {
		alert('Not Yet Implemented');
	})
	$('#logOutButton').click(function() {
		alert('Not Yet Implemented');
	})
	$('#physics1Button').click(function() {
		previousClass = activeClass;
		activeClass = 'physics1';
		displayEquations();
	})
	$('#geometryButton').click(function() {
		previousClass = activeClass;
		activeClass = 'geometry';
		displayEquations();
	})
})

function displayEquations() {
	switch(activeClass) {
		case 'physics1':
			$('#physicsEquations').toggleClass('hidden').toggleClass('equation');
			switch(previousClass) {
				case 'physics1':
					$('#physicsEquations').toggleClass('hidden').toggleClass('equation');
					break;
				case 'geometry':
					$('#geometryEquations').toggleClass('hidden').toggleClass('equation');
					break;
				default:
					break;
			}
			break;
		case 'geometry':
			$('geometryEquations').toggleClass('hidden').toggleClass('equation');
			switch(previousClass) {
				case 'physics1':
					$('#physicsEquations').toggleClass('hidden').toggleClass('equation');
					break;
				case 'geometry':
					$('#geometryEquations').toggleClass('hidden').toggleClass('equation');
					break;
				default:
					break;
			}
			break;
		default:
			break;
	}
}