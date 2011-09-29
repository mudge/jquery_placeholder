jQuery Placeholder Plugin
=========================

A plugin to make HTML5's [`placeholder`][placeholder_spec] attribute work in non-HTML5 
browsers.

This started as an attempt to simplify [my jQuery Form Example plugin][jquery_example]
by delegating functionality to the browser where possible.

  [placeholder_spec]: http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#the-placeholder-attribute
  [jquery_example]: http://github.com/mudge/jquery_example

Usage
-----

Simply use the `placeholder` attribute on your `input` and `textarea` tags and include 
`jquery.placeholder.js` somewhere in your page (you'll need [jQuery][jquery] as well, of course).

e.g.

    <input type="text" placeholder="Username">
    <textarea placeholder="Comment here..."></textarea>
    
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.placeholder.js"></script>

  [jquery]: http://jquery.com/

Placeholder values in non-HTML5 browsers will be given the CSS class of `jquery_placeholder` so 
you can style them to mimic other browsers' defaults which for Safari seems to be something 
like the following:

    .jquery_placeholder { color: #aaa; }

If you want to customise the class name used, you'll have to stop the plugin from
automatically running itself by commenting out `$($.placeholder.backwardsCompatibility);`
towards the end of `jquery.placeholder.js`. You can then set the class name via
`$.placeholder.className` and call `backwardsCompatibility()` yourself.

e.g.

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.placeholder.js"></script>
    <script type="text/javascript">
      $.placeholder.className = 'myPlaceholderCSSClass';
      $.placeholder.backwardsCompatibility();
    </script>

All event handlers are namespaced with `.placeholder` so they can be unbound or
triggered selectively:

* `unload.placeholder` on the window;
* `blur.placeholder` on the affected inputs;
* `focus.placeholder` on the affected inputs;
* `change.placeholder` on the affected inputs;
* `submit.placeholder` on the affected forms.

Licensing
---------

Copyright (c) Paul Mucur (http://mudge.name), 2010-2011.
Licensed under the MIT license (see LICENSE.txt).

