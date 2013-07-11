/* ===================================================
 * textClear.js v0.0.1
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
  $.fn.textClear = function() {
		var txtVal;
		$(this).on({
			'keypress' : function(e) {
				$(this).addClass('crossClear');
			},
			'focusout' : function() {
				$(this).removeClass('crossClear');
			},
			'click' : function(e) {
				if (($(this).hasClass('crossClear'))) {
					var mousePosInElement = e.pageX - $(this).position().left;
					if (mousePosInElement > $(this).width()) {
						$(this).removeClass('crossClear');
						$(this).val('');
					}
				}
			}
		});
	}
})(jQuery);
