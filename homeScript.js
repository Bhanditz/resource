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
	$('#english1Button').click(function() {
		previousClass = activeClass;
		activeClass = 'english1';
		displayEquations();
	})
})

function displayEquations() {
	switch(activeClass) {
		case 'physics1':
			$('#physicsEquations').toggleClass('hidden').toggleClass('equation');
			removePreviousClass();
			break;
		case 'geometry':
			$('#geometryEquations').toggleClass('hidden').toggleClass('equation');
			removePreviousClass();
			break;
		case 'english1':
			$('#english1Equations').toggleClass('hidden').toggleClass('equation');
			removePreviousClass();
		default:
			break;
	}
}

function removePreviousClass() {
	switch(previousClass) {
				case 'physics1':
					$('#physicsEquations').toggleClass('hidden').toggleClass('equation');
					break;
				case 'geometry':
					$('#geometryEquations').toggleClass('hidden').toggleClass('equation');
					break;
				case 'english1':
					$('#english1Equations').toggleClass('hidden').toggleClass('equation');
				default:
					break;
			}
}