// Place any jQuery/helper plugins in here.
;
(function($) {
	$.fn.stretch = function(customOptions) {
		var options = $.extend({}, $.fn.stretch.defaultOptions, customOptions);
		return this.each(function() {

			    var $this = $(this);

				  // Remove existing CSS
				// Remove HTML attributes
				$this.css({"width":"auto", "height":"auto"}).removeAttr("width").removeAttr("height");

				//wrap the img in forced block element
				$this.wrap("<span class='"+options.className+"' />");

				$( $this ).load(function(){
						var width  = $this.width();
						var height = $this.height();	
				if(width > height) {
					$("span."+options.className).css({'width' : options.spanWidth, 'display' : 'block'} );
					$this.css({ 'max-width' : options.maximumWidth, 'max-height' : options.maximumWidth });						

				}
				if(height > width) {
					$("span."+options.className).css({'height' : options.spanWidth, 'display' : 'block'} );
					$this.css({ 'max-height' : 'auto', 'max-width' : options.maximumWidth });										
				}
			});
			_debug([encodeURI($this.attr('src')), $this]);
		});
	};
	// default options
	$.fn.stretch.defaultOptions = {
		spanWidth: '32%',
		maximumWidth: '100%',
		className: 'wrapped',
		debug: 'false'
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


