/*===================================================================================*/
/*	SMOOTH SCROLL
/*===================================================================================*/ 
        smoothScroll.init();
/*===================================================================================*/
/*	LIGHTBOX
/*===================================================================================*/
      $(document).ready(function() {
        $('.lightbox').magnificPopup({type:'image'});
      });

/*===================================================================================*/
/*	HEADER SHRINK
/*===================================================================================*/
      $(window).scroll(function () {
        if ($(document).scrollTop() < 120) {
          $('.navbar').removeClass('tiny');
        } else {
          $('.navbar').addClass('tiny');
        }
      });
      
/*===================================================================================*/
/*	CLOSE NAVBAR DROPDOWN WHEN LINK CLICKED ON MOBILE
/*===================================================================================*/
    // call jRespond and add breakpoints
    var jRes = jRespond([
        {
            label: 'handheld',
            enter: 0,
            exit: 767
        },{
            label: 'tablet',
            enter: 768,
            exit: 979
        },{
            label: 'laptop',
            enter: 980,
            exit: 1199
        },{
            label: 'desktop',
            enter: 1200,
            exit: 10000
        }
    ]);

    // register enter and exit functions for a single breakpoint
    jRes.addFunc({
        breakpoint: 'handheld',
        enter: function() {
          $('.navbar-collapse a').click(function(){
              $(".navbar-collapse").collapse('hide');
          });
        }
    });

/*===================================================================================*/
/*  140 characters limit
/*===================================================================================*/



   $(document).ready(function(){ 
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });    
});

/*===================================================================================*/
/*  Expand Semester
/*===================================================================================*/

   $(document).on('click', '.btn-click', function(e){
    var $this = $(this);
    if(!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
    }
})