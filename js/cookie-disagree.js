(function ($) {
  Drupal.behaviors.SPCookieDisagree = {
    attach: function(context,settings) {
      $(document).on('click','.popup-content-wrapper .disagree-button',function(){
        Drupal.eu_cookie_compliance.setStatus(1);
        next_status = 0;
        Drupal.eu_cookie_compliance.changeStatus(next_status);
      });
    }
  };
})(jQuery);

