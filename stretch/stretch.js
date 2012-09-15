// Place any jQuery/helper plugins in here.
;
(function($) {
	$.fn.stretch = function(customOptions) {
		var options = $.extend({}, $.fn.stretch.defaultOptions, customOptions);
		return this.each(function() {

			var $this = $(this);

			//wrap the img in forced block element
			$this.wrap("<span style=\"display:block\" class='" + options.className + "' />");
			$("span." + options.className).css("width", options.spanWidth).children('img').css("max-width", options.maximumWidth);

			_debug([encodeURI($this.attr('src')), $this]);
		});
	};
	// default options
	$.fn.stretch.defaultOptions = {
		spanWidth: '32%',
		maximumWidth: '100%',
		className: 'wrapped',
		debug: 0
	};

	// private function for debugging
	function _debug(msg) {
		// Avoid `console` errors in browsers that lack a console.
		if (!(window.console && console.log)) {
			(function() {
				var noop = function() {};
				var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
				var length = methods.length;
				var console = window.console = {};
				while (length--) {
					console[methods[length]] = noop;
				}
			}());
		}
		// Check if debug is on and that we have a message
		if (msg && $.fn.stretch.defaultOptions.debug) {
			console.log(msg);
		}
	}


})(jQuery);
