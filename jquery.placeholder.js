/*
 * jQuery Placeholder Plugin.
 * A plugin to make HTML5's placeholder attribute work in non-HTML5-supporting
 * browsers.
 *
 * Copyright (c) Paul Mucur (http://mucur.name), 2009.
 */
(function($) {
  
  $.placeholder = {
    
    /* Allow the user to customise the class name of an example. */
    className: '_placeholder',
    
    /* Determine whether the browser natively supports a placeholder on a given
     * element type.
     * As seen in Mark Pilgrim's "Detecting HTML5 Features - Dive Into HTML5"
     * http://diveintohtml5.org/detect.html#input-placeholder
     */
    supportedNatively: function(element) {
      var testInput = document.createElement(element);
      return 'placeholder' in testInput;
    },
    
    backwardsCompatibility: function() {
      
      /* Determine whether backwards compatibility is required for
       * both inputs and textareas or just for textareas.
       */
      if (!$.placeholder.supportedNatively('input') && !$.placeholder.supportedNatively('textarea')) {
        var elementSelector = ':input';
      } else if (!$.placeholder.supportedNatively('textarea')) {
        var elementSelector = 'textarea';
      } else {
        var elementSelector = null;
      }
      
      if (elementSelector) {
        $(window).unload(function() {
          $(elementSelector + '.' + $.placeholder.className).val('');
        });
        
        $(elementSelector + '[placeholder]').each(function() {
          var $this = $(this);
          var placeholder = $this.attr('placeholder');
          
          $this.blur(function() {
            if ($this.val() == '') {
              $this.addClass($.placeholder.className).val(placeholder);
            }
          }).focus(function() {
            if ($this.hasClass($.placeholder.className)) {
              $this.val('').removeClass($.placeholder.className);
            }
          }).parents('form:first').submit(function() {
            $this.triggerHandler('focus');
          }).end().triggerHandler('blur');
        });
      }
    }
  };
  
  /* 
   * Comment this out if you don't want the plugin to automatically
   * execute itself and want to customise the class name.
   * (You'll have to call backwardsCompatibility() yourself, of course.)
   */
  $.placeholder.backwardsCompatibility();
  
})(jQuery);

