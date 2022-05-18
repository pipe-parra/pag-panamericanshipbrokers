$(document).ready(function(){
  $(".dropdown").hover(            
      function() {
          $('.dropdown-menu', this).stop( true, true ).slideDown("slow");
          $(this).toggleClass('open');        
      },
      function() {
          $('.dropdown-menu', this).stop( true, true ).slideUp("slow");
          $(this).toggleClass('open');       
      }
  );
});