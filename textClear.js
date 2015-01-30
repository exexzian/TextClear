/* ===================================================
 * textClear.js v0.0.3
 * jQuery Plugin to clear input field text on fly - like as provided in Internet Explorer 10
 * 
 *==========================================================================================
 * The MIT License (MIT)
 * 
 * Copyright(c)2013 Exex Zian
 * 
 * =========================================================================================
 * Requires: textClearStyle.css and jQuery.js
 * =========================================================================================
 */


; (function($) {
  $.fn.textClear = function( opts ) {
  		opts = opts || 0
		$(this).on({
			'keypress' : function(e) {
				$(this).addClass('crossClear');
				if (opts!=0){
					$(this).css('background-image','url('+opts.image+')')
				}
			},
			'focusout' : function() {
				$(this).removeClass('crossClear');
				if (opts!=0){
					$(this).css('background-image','none')
				}
			},
			'click' : function(e) {
				if (($(this).hasClass('crossClear'))) {
					var mousePosInElement = e.pageX - $(this).position().left;
					if (mousePosInElement > $(this).width()) {
						$(this).removeClass('crossClear');
						if (opts!=0){
							$(this).css('background-image','none')
						}
						$(this).val('');
					}
				}
			}
		});
	}
})(jQuery);
