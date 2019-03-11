 $(document).ready(function () {

     //  Loder
     $(".loading").animate({
         "top": "-100%"
     }, 1000, function () {
         $(this).remove();
     });

     // Typed Letter
     $(".header .middle_text h3 span").typed({
         strings: ["UI Developer", "Angular Developer"],
         loop: true,
         startDelay: 1000,
         backDelay: 1000
     });


     //Nav Bar 
     $(".slide-nav-btn").click(function () {
         $(this).toggleClass("slide-nav-btn-active")
         $(".slide-nav").toggleClass("slide-nav-active")
     });

     //Single Click Website 
     $(".side_menu_bar nav ul li a").click(function (e) {
         e.preventDefault()

         var paths = $(this).attr("href");
         $("body,html").animate({
             "scrollTop": $(paths).offset().top
         });
     });

     $(window).scroll(function () {
         var top = $(this).scrollTop();

         var home = $("#home").offset().top;
         var about_me = $("#about_me").offset().top;
         var resume = $("#resume").offset().top - 228;
         var skill = $("#skill").offset().top - 8;
         var portfolio = $("#portfolio").offset().top;
         var contact = $("#contact").offset().top - 8;


         if (top >= home && top < about_me) {
             $(".side_menu_bar nav ul li").removeClass("active");
             $(".side_menu_bar nav ul li:nth-child(1)").addClass("active")
         } else if (top >= about_me && top < resume) {
             $(".side_menu_bar nav ul li").removeClass("active");
             $(".side_menu_bar nav ul li:nth-child(2)").addClass("active")
         } else if (top >= resume && top < skill) {
             $(".side_menu_bar nav ul li").removeClass("active");
             $(".side_menu_bar nav ul li:nth-child(3)").addClass("active")
         } else if (top >= skill && top < portfolio) {
             $(".side_menu_bar nav ul li").removeClass("active");
             $(".side_menu_bar nav ul li:nth-child(4)").addClass("active")
         } else if (top >= portfolio && top < contact) {
             $(".side_menu_bar nav ul li").removeClass("active");
             $(".side_menu_bar nav ul li:nth-child(5)").addClass("active")
         } else if (top >= contact) {
             $(".side_menu_bar nav ul li").removeClass("active");
             $(".side_menu_bar nav ul li:nth-child(6)").addClass("active")
         }


     });
     $(".go_to_top").click(function () {

         $("html,body").animate({
             "scrollTop": "0px"
         });
          })
     
          $(window).scroll(function () {
              var top = $(this).scrollTop();
              if (top >= 100) {
                  $(".go_to_top").fadeIn();
              } else {
                  $(".go_to_top").fadeOut();
              }
          });


     $(window).scroll(function () {
         var top = $(this).scrollTop();

         var home = $("#home").offset().top;
         var about_me = $("#about_me").offset().top;
         var resume = $("#resume").offset().top - 228;
         var skill = $("#skill").offset().top - 8;
         var portfolio = $("#portfolio").offset().top;
         var contact = $("#contact").offset().top - 8;

         if (top >= skill && top < contact) {

             $('#demo-pie-1').pieChart({
                 barColor: '#cf9c63',
                 trackColor: '#cf9c6354',
                 lineCap: 'round',
                 lineWidth: 3,
                 onStep: function (from, to, percent) {
                     $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                 }
             });
             $('#demo-pie-2').pieChart({
                 barColor: '#cf9c63',
                 trackColor: '#cf9c6354',
                 lineCap: 'round',
                 lineWidth: 3,
                 onStep: function (from, to, percent) {
                     $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                 }
             });
             $('#demo-pie-3').pieChart({
                 barColor: '#cf9c63',
                 trackColor: '#cf9c6354',
                 lineCap: 'round',
                 lineWidth: 3,
                 onStep: function (from, to, percent) {
                     $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                 }
             });
             $('#demo-pie-4').pieChart({
                 barColor: '#cf9c63',
                 trackColor: '#cf9c6354',
                 lineCap: 'round',
                 lineWidth: 3,
                 onStep: function (from, to, percent) {
                     $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                 }
             });
         }


     });


     $(".p_bar1").LineProgressbar({
         percentage: 95,
         fillBackgroundColor: "#cf9c63",
         backgroundColor: "#cf9c6354",
         height: "2px"

     });


     $(".p_bar2").LineProgressbar({
         percentage: 90,
         fillBackgroundColor: "#cf9c63",
         backgroundColor: "#cf9c6354",
         height: "2px"

     });
     $(".p_bar3").LineProgressbar({
         percentage: 60,
         fillBackgroundColor: "#cf9c63",
         backgroundColor: "#cf9c6354",
         height: "2px"

     });
     $(".p_bar4").LineProgressbar({
         percentage: 65,
         fillBackgroundColor: "#cf9c63",
         backgroundColor: "#cf9c6354",
         height: "2px"

     })
     $(".p_bar5").LineProgressbar({
         percentage: 90,
         fillBackgroundColor: "#cf9c63",
         backgroundColor: "#cf9c6354",
         height: "2px"

     })
     $(".p_bar6").LineProgressbar({
         percentage: 98,
         fillBackgroundColor: "#cf9c63",
         backgroundColor: "#cf9c6354",
         height: "2px"

     })
     $(".p_bar7").LineProgressbar({
         percentage: 30,
         fillBackgroundColor: "#cf9c63",
         backgroundColor: "#cf9c6354",
         height: "2px"

     })
     $(".p_bar8").LineProgressbar({
         percentage: 60,
         fillBackgroundColor: "#cf9c63",
         backgroundColor: "#cf9c6354",
         height: "2px"

     })

     // Parallax Part
     $('.parallax').parallax();

     //// ISOTOPE TRIGGER
     var grid = $('.portfolio-content').isotope({
         itemSelector: '.portfolio-item',
         stagger: 30
     });
     $('.filter-portfolio').on('click', '.button', function () {
         var filterValue = $(this).attr('data-filter');
         grid.isotope({
             filter: filterValue
         });
     });
     // change is-checked class on buttons
     $('.button-group').each(function (i, buttonGroup) {
         var $buttonGroup = $(buttonGroup);
         $buttonGroup.on('click', 'a', function () {
             $buttonGroup.find('.is-checked').removeClass('is-checked');
             $(this).addClass('is-checked');
         });
     });

     //// MASONRY
     $('.portfolio-content').isotope({
         itemSelector: '.portfolio-caption img',
         masonry: {
             columnWidth: 0
         }
     });

     //// MAGNIFIC POPUP TRIGGER
     $('.modal-image').magnificPopup({
         type: 'inline',
         midClick: true
     });

 });
