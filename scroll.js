(function(window){
  // This function will contain the code
  function scrolljsFunc(){
    // Enabling strict mode, see developer.mozilla.org
    // Only enables strict mode for scroll.js
    'use strict';
    let _scrolljsObj = {};

    _scrolljsObj.init = () =>  {
      _scrolljsObj.parts = document.querySelectorAll("[data-animation]");
      _scrolljsObj.num = window.innerHeight / 100;
      window.addEventListener("scroll", scrolljs.scroll_function);
      // Run scroll_function twice to ensure current animation prgress is calulated
      scrolljs.scroll_function();
      scrolljs.scroll_function();
    };
    _scrolljsObj.scroll_function = () => {
      for (var x of _scrolljsObj.parts) {
        let range = x.getAttribute("data-range").split("to");
        // if... then determines if animation should currently run
        if (window.pageYOffset > range[0] * _scrolljsObj.num &&
          window.pageYOffset < range[1] * _scrolljsObj.num) {
            // Calculate current progress through animation
          let fraction =  (window.pageYOffset - range[0] * _scrolljsObj.num) /  (range[1] * _scrolljsObj.num - range[0] * _scrolljsObj.num);

          x.style.animationDelay = "-" + fraction.toString() + "s";
        }
      }
    };


    return _scrolljsObj;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.scrolljs) === 'undefined'){
    window.scrolljs = scrolljsFunc();
  }
})(window); // We send the window variable withing our function


// Then we can call it using
console.log(scrolljs);

window.addEventListener("load", scrolljs.init);
