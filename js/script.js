// Sitewide javascript - loaded as theme library

(function (Drupal, $) {

  "use strict";

  Drupal.behaviors.MY_CUSTOM_UNIQUE_NAMESPACE = {
    attach: function (context, settings) {

      // $('#mybutton').click(function(){
      //   alert("You clicked #mybutton!");
      // });

    }
  };

}) (Drupal, jQuery);