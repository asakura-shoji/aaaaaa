$(function() {
  var obj = JSON.parse(document.getElementById('json').innerText);
  console.log(2100*8*19);
  console.log(190000);
  console.log(1+1);
  var insertData = function() {
    for (var i = 0; i < obj.length; i++) {
      $('.link_id').append('<li></li>');
      $('.link_id > li')[i].innerText += obj[i].id;
    };
  };
  
  var boxFurl = function() {
    $('#animate__btn').on('click', function() {
      $( "#animate-complete-block-1" ).animate(
        {
          width: 'toggle',
        },{
          duration: 1000,
          easing: 'easeOutBounce',
          complete: function(){
            $( "#animate-complete-block-2" ).animate(
              {
                width: 'toggle',
              },{
                duration: 1000,
                easing: 'easeOutBounce',
                complete: function(){
                  $( "#animate-complete-block-3" ).animate(
                    {
                      width: 'toggle',
                    },{
                      duration: 1000,
                      easing: 'easeOutBounce',
                    }
                  );
                }
              }
            );
          }
        }
      );
    });
  };
  
  var opacity = {
    test: function() {
      $('#animate__btn2').on('click', function() {
        $('#opacity').stop().animate({opacity:'toggle'}, {duration:1000, easing:'swing'});
      });
    },
    test2: function() {
      console.log("test2");
    }
  };
  
  var continuity = function() {
    $('#animate__btn3').on('click', function() {
      $('#continuity__box').animate({ 'left': '100%' }).animate({ 'top': '100px' }).animate({ 'left': '0' }).animate({ 'top': '0' },{complete: complete()});
    });
  }
  
  var complete = function() {
    console.log('AA');
  }
  
  var COMMON = {};
  COMMON.COMMON_OBJ = {
    a: 'a',
    addZero: function(int) {
      int = '0'+int
      console.log(int);
    }
  }
  
  var LEI = {};
  LEI.COMMON = {};
  LEI.COMMON.OBJ = {
    test: function() {
      console.log('test');
    }
  }
  
  LEI.COMMON.TEST = {
    test: function() {
      test = 'tttt';
      console.log(test);
    },
    test2: function() {
      test = 'tttttttttttt';
      console.log(test);
    }
  }
  
  LEI.COMMON.LESSON = function() {
    var lesson = 'lesson';
    console.log(lesson);

    return {
      init: function() {
        console.log('init');
      },
      tete: function() {
        console.log('tete');
      }
    };
  }
  
  var initialize = function() {
    boxFurl();
    opacity.test();
    opacity.test2();
    COMMON.COMMON_OBJ.addZero(3);
    LEI.COMMON.OBJ.test();
    LEI.COMMON.TEST.test();
    LEI.COMMON.TEST.test2();
    LEI.COMMON.LESSON();
    LEI.COMMON.LESSON().init();
    LEI.COMMON.LESSON().tete();
    // setInterval(opa,4000);
    continuity();
    insertData();
  };
  initialize();
});

(function(APP, undefined) {
  APP.test = function() {
    console.log(undefined === APP.hoge);
  }
})(AAA = window.AAA || {});
AAA.test();
