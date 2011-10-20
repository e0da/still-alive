Still Alive
================================================================================

Do something periodically. If the user appears to be absent, go to sleep and
stop doing the thing until they return.

Monitor user activity. While the user is active, execute the defined function
periodically on the defined time interval. When the user does not interact with
the page in the defined way for a specified amount of time, go to sleep. While
asleep, the specified function is not called. Upon waking, the specified
function is executed immediately and the periodic execution of the function
resumes.



Syntax
--------------------------------------------------------------------------------

    $.stillAlive(callback [, interval] [, immediately] [, wakeEvents])
    $.stillAlive(callback [,options])

### callback

`callback` _(required)_ is the function which will be called periodically. 

### interval

`interval` _(optional)_ is the number of milliseconds to elapse between
executions of `callback`. The default value is **60000** (60 seconds).

### immediately

`immediately` _(optional)_ must evaluate to a boolean. The default value is
**true**.

  * When `immediately` is `true`, `callback` is executed immediately after
    `$.stillAlive()` is called.
  * When `immediately` is `false`, `callback` executes for the first time only
    after `interval` milliseconds have elapsed.

In both cases, `callback` is called immediately upon transitioning from a sleep
to wake state.

### wakeEvents

`wakeEvents` _(optional)_ is a string containing all of the [events][] which
will set an "awake" status and allow `callback` to be executed. The default
value is **"mousemove mousedown mouseup keydown keyup"**.

### options

`options` _(optional)_ is a list of any combination of the optional arguments
in [object literal notation][].  Here is an example of explicitly calling
`$.stillAlive()` on a function called "glados" (defined elsewhere) with default
options in object literal notation:

    $.stillAlive(glados, {
      interval: 60000,
      immediately: true,
      wakeEvents: 'mousemove mousedown mouseup keydown keyup'
    });



Examples
--------------------------------------------------------------------------------

Say I have a function called _update_ defined elsewhere. I want _update_ to be
called every 60 seconds unless the user doesn't seem to be around. I'd just

    $.stillAlive(update);

How about every 15 seconds? 

    $.stillAlive(update, 15);

Let's toggle a class of some elements every 90 seconds, but only if the user
has clicked or typed something, and don't run it immediately after being set.

    $.stillAlive(function() {
      $('.togglies').toggleClass('toggly');
    }, 90, false, 'click keyup');

The previous code could also be more explicitly called thusly:

    $.stillAlive(function() {
      $('.togglies').toggleClass('toggly');
    }, {
      interval: 90,
      immediately: false,
      wakeEvents: 'click keyup'
    });

And for good measure, here's a call using object literal notation, but only
adjusting the interval:

    $.stillAlive(update, { interval: 5 });



Copyright and License
--------------------------------------------------------------------------------

Copyright © 2011, Justin Force

Licensed under the [BSD 3-Clause License](http://www.opensource.org/licenses/BSD-3-Clause)



[events]:http://api.jquery.com/category/events/ "Events in jQuery"
[object literal notation]:https://developer.mozilla.org/en/JavaScript/Guide/Values,_Variables,_and_Literals#Object_Literals "Object Literals at Mozilla Developer Network"

