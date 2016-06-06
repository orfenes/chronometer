var count = {
  init : function(dt){

    (function start() {

      var end = new Date(dt);
      var now = new Date();
      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;

      var distance = end - now;
          if (distance < 0) {
              clearTimeout(start);
              return;
          }

      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      // console.log('days ->',  days);
      // console.log('hours ->', hours);
      // console.log('minutes ->',  minutes);
      // console.log('seconds ->', seconds);
      // console.log('--------------------');

      setTimeout(start, 1000);
    }());
  }
};

pan_data = 11 + '/' + 01 + '/' + 2016;
count.init(pan_data + ' '  +  '19:00:16');




