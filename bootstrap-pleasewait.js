/**
 * Module for displaying "Please wait..." dialog with a circular throbber using Bootstrap
 *
 * @author Vanco Ordanoski <vordan@infoproject.biz>
 *
 * Partly based on work from Eugene Maslovich <ehpc@em42.ru>
 */

var pleaseWaitDialog = (function ($) {

    // Creating modal dialog's DOM
	var $dialog = $(
		'<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true">'+
			'<div class="modal-dialog modal-s">' +
				'<div class="modal-content">' +
					'<div class="modal-body">'+
						'<img src="assets/img/ajax-loader.gif"><span class="modal-text" style="margin-left:20px;">Loading, please wait&hellip;</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'
	);

	return {
		/**
		 * Opens our dialog
		 * @param message Custom message
		 * @param options Custom options:
		 * 				  options.width - width in pixels;
		 * 				  options.offsetTop - modal offset from the top of the screen.
		 */
		show: function (message, options) {
			// Assigning defaults
			var settings = $.extend({
				width: '300px',
				offsetTop: 50,
			}, options);

			if (typeof message === 'undefined') {
				message = "Loading, please wait&hellip;";
			}
			if (typeof options === 'undefined') {
				options = {};
			}

			// Configuring dialog
			$dialog.find('.modal-dialog').css('width', settings.width);
			$dialog.find('.modal-text').html(message);

			$dialog.css('top', 0);
			$dialog.css('left', 0);
			$dialog.css('margin-left', ($(window).width()  - settings.width)   / 2 - parseInt($dialog.css('padding-left')));
			$dialog.css('margin-top',  ($(window).height() - $dialog.height()) / 2 - parseInt($dialog.css('padding-top')) - $dialog.height() - settings.offsetTop);

			$dialog.modal({show:true});

			// Opening dialog
			$dialog.modal();
		},
		/**
		 * Closes dialog
		 */
		hide: function () {
			$dialog.modal('hide');
		}
	}

})(jQuery);
