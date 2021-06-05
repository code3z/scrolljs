# Scroll.js

Turn CSS animations into cool (and useful) parallax effects.

More documentation coming soon. See `demo.html` for an example.


## Usage

Simply add the JavaScript to your site, and add the class `scrolljs` to any
elements you want to effect. Then, for the elements you want to animate, add the
`data-range` attribute like so:

```html
<div class="scrolljs" data-range="0to100">Hello world</div>

```

A single number in `data-range` is based on the value of the window's height. Scrolljs will recalculate this on resize.

## How it works
