// @codekit-append "_images-loaded.js"
// @codekit-append "_jquery.finger.js"
// @codekit-append "_icon.js"
// @codekit-append "_menu.js"
// @codekit-append "_menu-hover.js"
// @codekit-append "_overlay.js"
// @codekit-append "_customizer.js"

jQuery(document).ready(function($) {
	
	// Create a container for the whole page
	$('body > *').wrapAll('<div id="hamburger-content-wrapper"></div>');
	
	// State whether the menu should be static
	if ( hamburger_vars.is_fixed === '1' ) {
		$('html').addClass('hamburger_fixed');
	}
	// Compatibility mode
	if ( hamburger_vars.compatibility_mode === 'compat' ) {
		$('html').addClass('hamburger-compat');
	}
	$('html').addClass( 'slide-' + hamburger_vars.menu_slide_type )
		.addClass( 'hamburger-' + hamburger_vars.menu_location )
		.addClass( hamburger_vars.theme_name );
	
	
	$('body').on('hamburger_open', function() {
		$('#hamburger-button').addClass('close');
		$('#hamburger-menu-container').addClass('open');
		$('html').addClass('hamburger_open');
		console.log('open menu');
	});
	
	
	$('body').on('hamburger_close', function() {
		$('#hamburger-button').removeClass('close');
		$('#hamburger-menu-container').removeClass('open');
		$('html').removeClass('hamburger_open');
		console.log('close menu');
	});
	
		
});