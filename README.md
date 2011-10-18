Still Alive
=====================

Do something periodically. If the user appears to be absent, go to sleep and
stop doing the thing until they return.

API
---------------------

### Syntax

    $.stillAlive(callback [, interval] [, immediately] [, wakeEvents])
    $.stillAlive(callback [,options])

#### callback

`callback` _(required)_ is the function which will be called periodically.

#### interval

`interval` _(optional)_ is the number of milliseconds to elapse between
executions of `callback`. The default value is **60000** (60 seconds).

#### immediately

`immediately` _(optional)_ must evaluate to a boolean. The default value is
**true**.

  * When `immediately` is `true`, `callback` is executed immediately after
    `$.stillAlive()` is called. `callback` will also be executed immediately
    upon a wake event.
  * When `immediately` is `false`, `callback` only executes after `interval`
    milliseconds have elapsed, and subsequently only executes every `interval`
    milliseconds. `callback` **does not** execute upon a wake event.

#### wakeEvents

`wakeEvents` is a string containing all of the [events][] which will set an
"awake" status and allow `callback` to be executed. The default value is
**"mousemove mousedown mouseup keydown keyup"**.

#### options

Options is a list of any combination of the optional arguments in [object
literal notation][].  Here is an example of explicitly calling `$.stillAlive()`
on a function called "glados" (defined elsewhere) with default options in
object literal notation:

    $.stillAlive(glados, {
      interval: 60000,
      immediately: true,
      wakeEvents: 'mousemove mousedown mouseup keydown keyup'
    });

Example Usage
---------------------

Say I have a function called _update_ defined elsewhere. I want _update_ to be
called every 60 seconds unless the user doesn't seem to be around. I'd just

    $.stillAlive(update);

How about every 15 seconds? 

    $.stillAlive(update, 15);

Let's toggle a class of some elements every 90 seconds, but only if the user
has clicked or typed something, and don't run it immediately after being set or
waking up—only run on the interval.

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
---------------------

Copyright © 2011, Justin Force
Licensed under the 3-clause BSD License

[events]:http://api.jquery.com/category/events/ "Events in jQuery"
[object literal notation]:https://developer.mozilla.org/en/JavaScript/Guide/Values,_Variables,_and_Literals#Object_Literals "Object Literals at Mozilla Developer Network"

