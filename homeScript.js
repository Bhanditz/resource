var activeClass = '';
var previousClass = '';

$(document).ready(function() {
	console.log('jQuery Ready!');
	$('#titleButton').click(function() {
		window.location = 'index.html';
	})
	$('#classesButton').click(function() {
		$(this).toggleClass('favorited');
		$('#classes').toggleClass('hidden');
		$('#classes').toggleClass('classesBar')
	})
	$('#logOutButton').click(function() {
		alert('Accounts not yet Implemented');
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
	$('.favoriteButton').click(function() {
		$(this).parent().toggleClass('favorited');
	})
	$('#noneButton').click(function() {
		previousClass = activeClass;
		activeClass = 'none'
		displayEquations();
	})
	$('#enterButton').click(function() {
		window.location = 'home.html';	
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
			break;
		case 'none':
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