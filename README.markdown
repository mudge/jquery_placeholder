jQuery Placeholder Plugin
=========================

A plugin to make HTML5's [`placeholder`][placeholder_spec] attribute work in non-HTML5 
browsers.

This is currently a work in progress to simplify [my jQuery Form Example plugin][jquery_example]
by delegating functionality to the browser where possible.

  [placeholder_spec]: http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#the-placeholder-attribute
  [jquery_example]: http://github.com/mudge/jquery_example

Usage
-----

Simply use the `placeholder` attribute on your `input` tags and include 
`jquery.placeholder.js` somewhere in your page (you'll need [jQuery][jquery] as well, of course).

e.g.

    <input type="text" placeholder="Username">
    
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.placeholder.js"></script>

  [jquery]: http://jquery.com/