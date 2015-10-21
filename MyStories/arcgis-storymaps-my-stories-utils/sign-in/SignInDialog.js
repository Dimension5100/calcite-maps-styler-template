
define(['dojo/i18n!sign-in/nls/app.js?v=' + '0', 'lib-build/hbars!./templates/signInDialog', 'lib-build/hbars!./templates/signInUnavailable'],
	function(signIni18n, signInDialogTemplate, signInUnavailableTemplate) {
	'use strict';


	// all you really need this for is to templatize the two screens. That's it.
	var SignInDialog = function() {
		var strings = signIni18n,

		init = function() {
			templatizeSignInDialog();
			templatizeSignInUnavailableDialog();
		},


		templatizeSignInDialog = function() {
			$('#sign-in-wrapper').html(signInDialogTemplate({
				labels: strings.signInDialog
			}));
		},


		templatizeSignInUnavailableDialog = function() {
			$('#sign-in-unavailable-wrapper').html(signInUnavailableTemplate({
				labels: strings.unavailableDialog
			}));
		};


		init();
	};


	return SignInDialog;
});