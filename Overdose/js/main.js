(function ($) {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });


  // local scroll
  jQuery('.navbar').localScroll({
    hash: true,
    offset: {
      top: 0
    },
    duration: 800,
    easing: 'easeInOutExpo'
  });


  // portfolio
  if ($('.isotopeWrapper').length) {

    var $container = $('.isotopeWrapper');
    var $resize = $('.isotopeWrapper').attr('id');
    // initialize isotope

    $container.isotope({
      itemSelector: '.isotopeItem',
      resizable: false, // disable normal resizing
      masonry: {
        columnWidth: $container.width() / $resize
      }

    });

    $('#filter a').click(function () {

      $('#filter a').removeClass('current');
      $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 1000,
          easing: 'easeOutQuart',
          queue: false
        }
      });
      return false;
    });


    $(window).smartresize(function () {
      $container.isotope({
        // update columnWidth to a percentage of container width
        masonry: {
          columnWidth: $container.width() / $resize
        }
      });
    });
  }

  // fancybox
  jQuery(".fancybox").fancybox();

  if (Modernizr.mq("screen and (max-width:1024px)")) {
    jQuery("body").toggleClass("body");

  } else {
    var s = skrollr.init({
      mobileDeceleration: 1,
      edgeStrategy: 'set',
      forceHeight: true,
      smoothScrolling: true,
      smoothScrollingDuration: 300,
      easing: {
        WTF: Math.random,
        inverted: function (p) {
          return 1 - p;
        }
      }
    });
  }

  //scroll menu
  jQuery('.appear').appear();
  jQuery(".appear").on("appear", function (data) {
    var id = $(this).attr("id");
    jQuery('.nav li').removeClass('active');
    jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
  });

  //parallax
  var isMobile = false;

  if (Modernizr.mq('only all and (max-width: 1024px)')) {
    isMobile = true;
  }

  if (isMobile == false && ($('#parallax1').length || isMobile == false && $('#parallax2').length || isMobile == false && $('#testimonials').length)) {


    $(window).stellar({
      responsive: true,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });

  }


})(jQuery);

function ShowImage(page, tag)
{
    var i = 1;
    var el;
    while (el = document.getElementById(tag + i)) {
        if (i == page) {
            el.style.display = 'block';
            el.children[0].contentWindow.location.reload();
        } else
            el.style.display = 'none';
        i++;
    }
}
function showresult() {
    var crime = parseFloat(document.getElementById("crimeval").value);
    var unemployment = parseFloat(document.getElementById("unval").value);
    var income = parseFloat(document.getElementById("income").value);
    var res = null;
    // low 0 medium 1 high 2 extreme 3
    if (crime > 0.005) {
        if (unemployment > 4.608) {
            if(unemployment > 4.992){
                if (crime > 0.005) {
                    if (income > 56591.5) {
                        res = 1;
                    }else {
                        res = 2
                    }
                }else {
                    if (income > 51898) {
                        res = 2;
                    }else {
                        res = 1;
                    }
                }
            }else{
                res = 2;
            }
        } else {
            if(income > 55123){
                res = 3;
            } else{
                if (crime > 0.006) {
                    res = 3;
                }else {
                    if (crime > 0.005) {
                        res = 1;
                    }else {
                        res = 2;
                    }
                }
            }
        }
    } else {
        if (income > 66326) {
            if (crime > 0.002){
                if (crime > 0.002) {
                    if (crime > 0.003) {
                        res = 3;
                    }else {
                        res = 1;
                    }
                } else {
                    if (income > 69853.5) {
                        res = 2;
                    }else {
                        res = 1;
                    }
                }
            } else{
                if (unemployment > 5.435) {
                    res = 2;
                } else {
                    if (income > 72145) {
                        res = 3;
                    }else {
                        res = 1;
                    }
                }
            }
        } else {
            if (unemployment > 4.196) {
                if (crime > 0.003) {
                    if (income > 55281) {
                        res = 0;
                    } else {
                        res = 1;
                    }
                } else {
                    if (income > 44460.5) {
                        res = 2;
                    } else {
                        res = 0;
                    }
                }
            } else {
                if (crime > 0.002) {
                    if (unemployment > 3.865) {
                        res = 0;
                    } else {
                        res = 0;
                    }
                } else {
                    if (income > 57333.5) {
                        res = 2;
                    } else {
                        res = 1;
                    }
                }
            }
        }

    }
    imgsrc = "img/featured/res_".concat(res.toString(), ".jpg" );
    document.getElementById("predictimg").src = imgsrc;
    return res;
}

var slider1 = document.getElementById("income");
var output1 = document.getElementById("val3");
output1.innerHTML = slider1.value;

slider1.oninput = function () {
    output1.innerHTML = this.value;
};
var slider2 = document.getElementById("unval");
var output2 = document.getElementById("val2");
output2.innerHTML = slider2.value.toString() + "%";

slider2.oninput = function () {
    output2.innerHTML = this.value.toString() + "%";
};
var slider3 = document.getElementById("crimeval");
var output3 = document.getElementById("val1");
output3.innerHTML = slider3.value;

slider3.oninput = function () {
    output3.innerHTML = this.value;
};

