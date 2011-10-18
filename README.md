jquery.still-alive.js
=====================

Do something periodically. If the user appears to be absent, go to sleep and
stop doing the thing until they return.

Use
---------------------

Say I have a function called _update_ defined elsewhere. I want _update_ to be
called every 60 seconds unless the user doesn't seem to be around. I'd just

    $.stillAlive(update);

How about every 15 seconds? 

    $.sameHeight(update, 15);

Let's toggle a class of some elements every 90 seconds.

    $.sameHeight(function() {
      $('.togglies').toggleClass('toggly');
    }, 90);

Demo
---------------------

For a demo, just see `demo.html` in action. Play with it. Change the
width of the elements and resize the page.

Copyright and License
---------------------

Copyright © 2011, Justin Force
Licensed under the 3-clause BSD License

