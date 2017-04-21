(function($) {

  'use strict';

  // variables
  var $isAnimatedFirst = $('.first .is-animated'),
      $isAnimatedFirstSingle = $('.first .is-animated__single'),
      $isAnimatedFirstButton = $('.first .is-animated__button'),
      $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedSecondButton = $('.second .is-animated__button'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedThirdButton = $('.third .is-animated__button'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single'),
      $isAnimatedFourthButton = $('.fourth .is-animated__button'),
      $isAnimatedFifth = $('.fifth .is-animated'),
      $isAnimatedFifthSingle = $('.fifth .is-animated__single'),
      $isAnimatedFifthButton = $('.fifth .is-animated__button');

  // initialize fullPage
  $('#fullpage').fullpage({

    navigation: true,
    onLeave: function(index, nextIndex, direction) {

      /**
      * use the following condition:
      *
      *   if( index == 1 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur
      * when you jump (using the dot navigation)
      * from the first section to another sections
      */

      // first animation
      if(nextIndex === 1) {
        $isAnimatedFirst.addClass('animated fadeInDown');
        $isAnimatedFirst.eq(0).css('animation-delay', '.4s');
        $isAnimatedFirst.eq(1).css('animation-delay', '.4s');
        $isAnimatedFirst.eq(2).css('animation-delay', '.4s');
        $isAnimatedFirstSingle.addClass('animated fadeIn').css('animation-delay', '.4s');
        $isAnimatedFirstButton.addClass('animated flipInX').css('animation-delay', '.8s');
      }
      if (index === 1) {
        $isAnimatedFirst.removeClass('animated fadeInDown');
        $isAnimatedFirstSingle.removeClass('animated fadeIn').css('animation-delay', '.4s');
        $isAnimatedFirstButton.removeClass('animated flipInX').css('animation-delay', '.8s');
      }

      // second animation
      if(nextIndex === 2) {
        $isAnimatedSecond.addClass('animated fadeInDown');
        $isAnimatedSecond.eq(0).css('animation-delay', '.4s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.4s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.4s');
        $isAnimatedSecondSingle.addClass('animated fadeIn').css('animation-delay', '.4s');
        $isAnimatedSecondButton.addClass('animated flipInX').css('animation-delay', '.8s');
      }
      if (index === 2) {
        $isAnimatedSecond.removeClass('animated fadeInDown');
        $isAnimatedSecondSingle.removeClass('animated fadeIn').css('animation-delay', '.4s');
        $isAnimatedSecondButton.removeClass('animated flipInX').css('animation-delay', '.8s');
      }

    /**
      * use the following condition:
      *
      *   else if( index == 2 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur
      * when you jump (using the dot navigation) from the first section to the third one
      */

      // third animation
      if( nextIndex === 3 ) {
        $isAnimatedThird.addClass('animated fadeInDown');
        $isAnimatedThird.eq(0).css('animation-delay', '.4s');
        $isAnimatedThird.eq(1).css('animation-delay', '.4s');
        $isAnimatedThird.eq(2).css('animation-delay', '.4s');
        $isAnimatedThirdSingle.addClass('animated fadeIn').css('animation-delay', '.4s');
        $isAnimatedThirdButton.addClass('animated flipInX').css('animation-delay', '.8s');
      }
      if (index === 3) {
        $isAnimatedThird.removeClass('animated fadeInDown');
        $isAnimatedThirdSingle.removeClass('animated fadeIn').css('animation-delay', '.4s');
        $isAnimatedThirdButton.removeClass('animated flipInX').css('animation-delay', '.8s');
      }


     /**
      * use the following condition:
      *
      *   else if( index == 3 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur
      * when you jump (using the dot navigation)
      * from the first or second section to the fourth one
      */

      // fourth animation
      if( nextIndex === 4 ) {
        $isAnimatedFourth.addClass('animated fadeInDown');
        $isAnimatedFourth.eq(0).css('animation-delay', '.4s');
        $isAnimatedFourth.eq(1).css('animation-delay', '.4s');
        $isAnimatedFourth.eq(2).css('animation-delay', '.4s');
        $isAnimatedFourthSingle.addClass('animated fadeIn').css('animation-delay', '.4s');
        $isAnimatedFourthButton.addClass('animated flipInX').css('animation-delay', '.8s');
      }
      if (index === 4) {
        $isAnimatedFourth.removeClass('animated fadeInDown');
        $isAnimatedFourthSingle.removeClass('animated fadeIn').css('animation-delay', '.4s');
        $isAnimatedFourthButton.removeClass('animated flipInX').css('animation-delay', '.8s');
      }





      // fifth animation
      if( nextIndex === 5 ) {
        $isAnimatedFifth.addClass('animated fadeInDown');
        $isAnimatedFifth.eq(0).css('animation-delay', '.4s');
        $isAnimatedFifth.eq(1).css('animation-delay', '.4s');
        $isAnimatedFifth.eq(2).css('animation-delay', '.4s');
        $isAnimatedFifthSingle.addClass('animated fadeIn').css('animation-delay', '.4s');
        $isAnimatedFifthButton.addClass('animated flipInX').css('animation-delay', '.8s');
      }
      if (index === 5) {
        $isAnimatedFifth.removeClass('animated fadeInDown');
        $isAnimatedFifthSingle.removeClass('animated fadeIn').css('animation-delay', '.4s');
        $isAnimatedFifthButton.removeClass('animated flipInX').css('animation-delay', '.8s');
      }
    }

  });

})(jQuery);
