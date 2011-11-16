/*!
* Still Alive v1.2
* http://github.com/sidewaysmilk/still-alive
*
* Copyright 2011, Justin Force
* Licensed under the BSD 3-Clause License
*/

/*jslint browser: true, indent: 2 */
/*global jQuery */

(function ($) {

  'use strict';

  // default values for optional arguments
  var DEFAULT_WAKEEVENTS = 'mousemove mousedown mouseup keydown keyup',
    DEFAULT_INTERVAL     = 60000,
    DEFAULT_IMMEDIATELY  = true;

  // sugar. Just get the current time in milliseconds
  function getTime() {
    return (new Date()).getTime();
  }

  $.stillAlive = function (callback, interval, immediately, wakeEvents) {

    var ptr,                // pointer to the interval so it can be cleared from outside
      args,                 // object containing optional arguments
      awake = true,         // awake status. Are we awake?
      lastSeen = getTime(); // the last time the user was seen (a wake event triggered)

    // For named arguments, copy the arguments object and assign its supported
    // properties.
    if (typeof interval === 'object') {
      args = interval;
      interval = args.interval;
      immediately = args.immediately;
      wakeEvents = args.wakeEvents;
    }

    // set default values for optional arguments
    if (interval === undefined) {
      interval = DEFAULT_INTERVAL;
    }
    if (immediately === undefined) {
      immediately = DEFAULT_IMMEDIATELY;
    }
    if (wakeEvents === undefined) {
      wakeEvents = DEFAULT_WAKEEVENTS;
    }

    // true if it's been (1.5 x interval) milliseconds
    function timeToSleep() {
      return (getTime() - lastSeen > (interval + (interval / 2)));
    }

    // set status to awake and update the lastSeen time, then execute the
    // callback.
    function wake() {
      if (!awake) {
        callback();
      }
      awake = true;
      lastSeen = getTime();
    }

    // set status to !awake (asleep)
    function sleep() {
      awake = false;
    }

    $(window).bind(wakeEvents, wake);

    // if enough time has passed without a wake event, sleep. If we happen to
    // be awake, execute the callback.
    ptr = setInterval(function () {
      if (timeToSleep()) {
        sleep();
      }
      if (awake) {
        callback();
      }
    }, interval);

    // if we're supposed to run immediately, execute the callback once
    if (immediately) {
      callback();
    }

    return ptr;
  };

}(jQuery));

