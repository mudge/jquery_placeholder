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
    
    /* Determine whether the browser natively supports a placeholder.
     * As seen in Mark Pilgrim's "Detecting HTML5 Features - Dive Into HTML5"
     * http://diveintohtml5.org/detect.html#input-placeholder
     */
    supportedNatively: function() {
      var testInput = document.createElement('input');
      return 'placeholder' in testInput;
    },
    
    backwardsCompatibility: function() {
      if (!$.placeholder.supportedNatively()) {
        $(window).unload(function() {
          $(':input.' + $.placeholder.className).val('');
        });
        
        $(':input[placeholder]').each(function() {
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
  
  $.placeholder.backwardsCompatibility();
  
})(jQuery);

