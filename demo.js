$(function () {
  $.stillAlive(function() {
    console.log('ronk');
  }, 3000, true);

  $.stillAlive(function() {
    console.log('bonk');
  }, {
    interval: 3000,
    immediately: false,
    wakeEvents: 'click'
  });

});

