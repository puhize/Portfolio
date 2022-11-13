// Toggle between Day and Night Mode
$('#switch1').on('click', function () {
    $('body').toggleClass('night')
});

//Scroll to the top of the page
document.getElementById('top-button').addEventListener('click',function(){
    window.scrollTo(0,0);
});

$(window).scroll(function(){
    var threshold = 208; // number of pixels before bottom of page that you want to start fading
    var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
    if( op <= 13 ){
      $("#top-button").show();
    } else {
      $("#top-button").hide();
    }
  });

  $(window).load(function() {
    $("#top-button").hide();
});


// If user visits after 7p.m. the body will change the style to night class
$(document).ready(function(){
    var date = new Date();
    var current_time = date.getHours();
    if (current_time > 19 && current_time<6)
      // If time is after 7PM or before 6AM, apply night theme to ‘body’
      document.body.className = "night";
    else
      // Else use ‘day’ theme
      document.body.className = "";
  });