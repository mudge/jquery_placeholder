/*global window, document, jQuery */

/*
 * jQuery Placeholder Plugin.
 * http://github.com/mudge/jquery_placeholder
 *
 * A plugin to make HTML5's placeholder attribute work in non-HTML5-supporting
 * browsers.
 *
 * Copyright (c) Paul Mucur (http://mudge.name), 2010-2011.
 * Licensed under the MIT licence (see LICENSE.txt).
 */
(function ($) {
    "use strict";

    $.placeholder = {

        /* Allow the user to customise the class name of an example. */
        className: 'jquery_placeholder',

        /* Determine whether the browser natively supports a placeholder on a given
         * element type.
         * As seen in Mark Pilgrim's "Detecting HTML5 Features - Dive Into HTML5"
         * http://diveintohtml5.org/detect.html#input-placeholder
         */
        supportedNatively: function (element) {
            var testInput = document.createElement(element);
            return testInput.placeholder !== undefined;
        },

        backwardsCompatibility: function () {

            var elementSelector;

            /* Determine whether backwards compatibility is required for
             * both inputs and textareas or just for textareas.
             */
            if (!$.placeholder.supportedNatively('input') &&
                    !$.placeholder.supportedNatively('textarea')) {
                elementSelector = ':input';
            } else if (!$.placeholder.supportedNatively('textarea')) {
                elementSelector = 'textarea';
            }

            if (elementSelector) {
                $(window).bind('unload.placeholder', function () {
                    $(elementSelector + '.' + $.placeholder.className).val('');
                });

                $(elementSelector + '[placeholder]').each(function () {
                    var $this = $(this),
                        placeholder = $this.attr('placeholder');

                    /* A fix for Internet Explorer caching placeholder form values even
                     * when they are cleared on wndow unload.
                     */
                    if ($this.val() !== this.defaultValue && $this.val() === placeholder) {
                        $this.val(this.defaultValue);
                    }

                    $this.bind('blur.placeholder', function () {

                        /* As this handler is called on document ready make sure
                         * that the currently active element isn't populated with
                         * a placeholder.
                         */
                        if (this !== document.activeElement && $this.val() === '') {
                            $this.addClass($.placeholder.className).val(placeholder);
                        }
                    }).bind('focus.placeholder', function () {
                        if ($this.hasClass($.placeholder.className)) {
                            $this.val('').removeClass($.placeholder.className);
                        }
                    }).bind('change.placeholder', function () {
                        if ($this.hasClass($.placeholder.className)) {
                            $this.removeClass($.placeholder.className);
                        }
                    }).parents('form:first').bind('submit.placeholder', function () {
                        $this.triggerHandler('focus.placeholder');
                    }).end().triggerHandler('blur.placeholder');
                });
            }
        }
    };

    /* Comment this out if you don't want the plugin to automatically
     * execute itself on document ready and want to customise the class name.
     * (You'll have to call backwardsCompatibility() yourself, of course.)
     */
    $($.placeholder.backwardsCompatibility);

}(jQuery));

