$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        
        event.preventDefault();
  
        var hash = this.hash;
  
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      } 
    });
  });

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          document.getElementById("arrowUp").style.display = "block";
      } else {
          document.getElementById("arrowUp").style.display = "none";
      }
  }
  
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

