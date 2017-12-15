function initMap() {
    var bodyWidth = $('body').width();
    var style = [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#fec157"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#fec157"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fec157"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#fec157"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    var id = 'hsj-map';
    var left = 300;
    var top = 150;
    var myLatLng = {lat: 55.6444095, lng: 37.5875884};
    
    if (bodyWidth <= 1200) {
        myLatLng = {lat: 55.6444095, lng: 37.5875871};
        left = 220;
    }
    if (bodyWidth <= 768) {
        myLatLng = {lat: 55.6455155, lng: 37.5875871};
    }
    if (bodyWidth <= 450) {
        myLatLng = {lat: 55.6455155, lng: 37.5875871};
        console.log(myLatLng);
    }
    var myMarkerPos = {lat: 55.6447603, lng: 37.5905287};
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('hsj-map'), {
        center: myLatLng,
        zoom: 16,
        styles: style,
        scrollwheel: false,
        mapTypeControl: false,
        zoomControl: true,
        scaleControl: false,
    });
    var contentString = '<div class="hsb-contacts__address"><i class="fa fa-caret-left" aria-hidden="true"></i><div class="hsb-contacts__address-title">Вы затрудняетесь с выбором продукции,которую хотели бы заказать? Звоните, мы подскажем.</div><ul class="hsb-contacts__address-list"><li><span class="hs-icon-location-simple"></span><span>Россия, г. Москва, Балаклавский проспект, д. 28Б, с.1</span></li><li><span class="hs-icon-tel"></span><span>+7 (795) 215 01 72</span></li><li><span class="hs-icon-desk"></span><span>ask@askatrade.ru</span></li></ul></div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        pixelOffset: new google.maps.Size(left, top)
      });

    var marker = new google.maps.Marker({
      map: map,
      position: myMarkerPos,
    });

    if (bodyWidth > 767) {
         infowindow.open(map, marker);
    }

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    })
}

jQuery(document).ready(function(){
    //$('.gm-style-iw').prev('div').hide();
    $('.place-card, .place-carde-large').hide();


    $(function() {

    $('ul.hsj-tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.hsj-tabs').find('div.hsj-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
    //--------------------------------
    // Parallax
   //setTimeout(function() {
    $('.hsj-parralax-layer_1').parallax({
        mouseport: $('.hsb-make__product')},
        {xparallax: '26px', yparallax: '36px'}
    );
    $('.hsj-parralax-layer_2').parallax({
        mouseport: $('.hsb-make__product')},
        {xparallax: '16px', yparallax: '46px'}
    ); 
    //}, 2000);

    /*$('.hsb-make').hover(function(){
        var marginLeft = $('.hsj-parralax-layer').css('margin-left');
        if (parseInt(marginLeft) < -200) {
            $('.hsb-make__product img').css({
                marginTop: '0px',
                marginLeft: '0px'
            }); 
        }
        console.log(marginLeft+' '+parseInt(marginLeft));
    }, function(){});*/
    //--------------------------------
    // Parallax
    $('.hsj-parralax-layer-women-bg').parallax({
        mouseport: $('.hsj-parallax-women')},
        {xparallax: '12px', yparallax: '18px'}
    );
    $('.hsj-parralax-layer-women').parallax({
        mouseport: $('.hsj-parallax-women')},
        {xparallax: '32px', yparallax: false}
    );
    $('.hsj-parralax-layer-women-front').parallax({
        mouseport: $('.hsj-parallax-women')},
        {xparallax: '40px', yparallax: '40px'}
    );
    //--------------------------------
    // validate empty input
    $('.hsj-input-validate').blur(function() {
        //console.log ($(this).val());
        var form = $(this).closest('form');
        var val = $('this').val();
        if ($(this).val() === '') {
            $(this).addClass('hs-input-error');
            form.addClass('hsj-valid-error');
        } else {
            $(this).removeClass('hs-input-error');
            //if (form.find('hs-input-error'))
        };
    });
    /*$('.hs-input-error').on('blur', function(){
        var val = $('this').val();
        if ($(this).val() != '') {
            $(this).removeClass('hs-input-error');
        }
    });
    $('.hsj-valid-error').on('submit', function() {
        if ($(this).find('.hs-input-error').length == 0)
            return false;
        else {
            $(this).removeClass('hsj-valid-error');
            return true;
        }
    });
    $('form').submit(function(){
        var ret = true;
        $(this).find('input').each(function(){
            if ($(this).val() == ''){
                    $(this).addClass('hs-input-error');
                    ret = false;
                }    
        });
        if (!ret) {
            $(this).addClass('hsj-valid-error');
        }
        return ret;
    });*/
    var width_window = $(window).width();
    // send mail AJAX
    /*if ($('.hsj-form-ajax').length > 0)
        (function(){
            $('.hsj-form-ajax').each(function(){
                var classContent = '.hsj-form-ajax__content';
                
                var self = $('.hsj-form-ajax');
                var form = self.find('form');
                var btn = self.find('.hsj-form-ajax__btn');
                var content = self.find(classContent);
                
                form.submit(function(){
                    return false;
                });
                
                btn.click(function(){
                    console.log(form.serialize());  
                });
            });
        })();*/
        if ($('.hsj-form-ajax-file').length > 0)
            $('.hsj-form-ajax-file').on('click', function(){
                var $input = $("#ws-file");
                var form = $(this).parent('form');
                var fd = new FormData;
                
                
                fd.append('file', $input.prop('files')[0]);
                fd.append('mail', form.find('input[name="mail"]').val());
                fd.append('form-action', form.find('input[name="form-action"]').val());
                
                form.submit(function(e){
                    e.preventDefault();
                    return false;
                });
                
                $.ajax({
                    url: "include/include.php",
                    data: fd,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function (data) {
                        //alert(data);
                        console.log(data);
                        $('.hsw-popup').each(function(){
                            $(this).css('display', 'none');
                        });
                        $('#hsj-popup-thank').css('display', 'block');
                    }
                }); 
            });
        if ($('.hsj-form-ajax-submit').length > 0)
            (function(){
                $('.hsj-form-ajax-submit').on('click', function(){
                    var classContent = '.hsj-form-ajax__content';
                    var form = $(this).parent('form');
                    
                    var ret = true;
                    form.find('input').each(function(){
                        if ($(this).val() == ''){
                                $(this).addClass('hs-input-error');
                                ret = false;
                            }    
                    });
                    if (!ret) {
                        $(this).addClass('hsj-valid-error');
                        return false;
                    }
                    if (form.hasClass('hsj-valid-error')) {
                        
                    }
                    var data = form.serialize();
                    //console.log(data);

                    form.submit(function(){
                        return false;
                    });

                    $.ajax({
                        url: "include/include.php",
                        data: data,
                        success: function(response) {
                            $('.hsw-popup').each(function(){
                                $(this).css('display', 'none');
                            });
                            $('#hsj-popup-thank').css('display', 'block');
                            form.find('input').each(function(){
                                if ($(this).attr('type') != 'hidden') {
                                    $(this).val('');   
                                }
                            });
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.log(jqXHR, textStatus, errorThrown);
                        }
                    });  

                });
            })();
    //--------------------------------
    // mask for input
    $('input[name=phone]').mask('+7 ( 999 ) 9999999');
    //--------------------------------
    // scroll animate
    $(function () {
        var $window = $(window),
                win_height_padded = $window.height() * 1.1,
                isTouch = Modernizr.touch;
                
        if (isTouch) {
            $('.revealOnScroll').addClass('animated');
        }
        
        $window.on('scroll', revealOnScroll);
        
        function revealOnScroll() {
            var scrolled = $window.scrollTop(),
                    win_height_padded = $window.height() * 1.1;
                    
            $(".revealOnScroll:not(.animated)").each(function () {
                var $this = $(this),
                        offsetTop = $this.offset().top;
                        
                if (scrolled + win_height_padded > offsetTop) {
                    if ($this.data('timeout')) {
                        window.setTimeout(function () {
                            $this.addClass('animated ' + $this.data('animation'));
                        }, parseInt($this.data('timeout'), 10));
                    } else {
                        $this.addClass('animated ' + $this.data('animation'));
                    }
                }
            });
            
            $(".revealOnScroll.animated").each(function (index) {
                var $this = $(this),
                        offsetTop = $this.offset().top;
                if (scrolled + win_height_padded < offsetTop) {
                    $(this).removeClass('animated '+ $(this).data('animation'))
                }
            });
        }
        revealOnScroll();
    });
    //--------------------------------
    // popup
    function setPopUp (ID, Button) {
            var time = 500;
            var popup = $(ID);
            var key = 27;
            var flag = true;
            
            $('body').keyup(onPressClose);
            
            popup.find('.hsj-popup__close').click(function () {
                flag = true;
                hide();
                return false;
            });
            
            $(Button).click(function () {
                show();
                return false;
            });
            
            popup.find('.hsj-popup__content').mouseenter(function () {
                flag = false;
            });
            
            popup.find('.hsj-popup__content').mouseleave(function () {
                flag = true;
            });
            
            popup.click(function () {
                if (flag) {
                        hide();
                } else {
                        show();
                }
            });
            
            function onPressClose(object) {
                if (object.which == key) {
                        hide();
                }
            }
            function show() {
                //$('body').css('overflow','hidden');
                popup.show();
                //popup.fadeIn(time);                
            }
            function hide() {
                //$('body').css('overflow','visible');
                popup.hide();
                //popup.fadeOut(time);
            }   
    }
    if ($('#hsj-popup-callback').length > 0) {
        setPopUp ('#hsj-popup-callback', '.hsj-btn__popup-callback');
    }
    if ($('#hsj-popup-order').length > 0) {
        setPopUp ('#hsj-popup-order', '.hsj-btn__popup-order');
    }
    if ($('#hsj-popup-resume').length > 0) {
        setPopUp ('#hsj-popup-resume', '.hsj-btn__popup-resume');
    }
    if ($('#hsj-popup-thank').length > 0) {
        setPopUp ('#hsj-popup-thank', '');
    }
    if ($('#hsj-popup-download').length > 0) {
        setPopUp ('#hsj-popup-download', '.hsj-btn__popup-download');
    }
    if ($('#hsj-popup-get').length > 0) {
        setPopUp ('#hsj-popup-get', '.hsj-btn__popup-get');
    }
    if ($('#hsj-popup-all').length > 0) {
        setPopUp ('#hsj-popup-all', '.hsj-btn__popup-all');
    }    
    //--------------------------------
    // carousel products
    if ($('#hsj-carousel-product').length > 0){
        var args = {
            auto: true,
            autoControls: false,
            minSlides: 5,
            maxSlides: 5,
            slideWidth: 240,
            controls: false,
            pause: 8000,
            autoHover: true,
            pagerSelector: '#hsj-carousel-product__pager'
        }
        if(width_window < 1220) {
            args.minSlides = 4;
            args.maxSlides = 4;
        }
        if(width_window < 992) {
            args.minSlides = 3;
            args.maxSlides = 3;
        }
        if(width_window < 768) {
            args.minSlides = 2;
            args.maxSlides = 2;
        }
        if(width_window < 550) {
            args.minSlides = 1;
            args.maxSlides = 1;
        }
        
        $('#hsj-carousel-product__list').bxSlider(args);
    }
    //--------------------------------
    // carousel clients
    if ($('#hsj-carousel-clients').length > 0){
        var args = {
            auto: true,
            autoControls: false,
            minSlides: 6,
            maxSlides: 6,
            slideWidth: 145,
            controls: true,
            prevSelector: '#hsj-carousel-clients__prev',
            nextSelector: '#hsj-carousel-clients__next',
            prevText: '',
            nextText: '',
            pause: 8000,
            autoHover: true,
            pager: false,
        }
        
        if(width_window < 1220) {
            args.minSlides = 5;
            args.maxSlides = 5;
        }
        if(width_window < 992) {
            args.minSlides = 4;
            args.maxSlides = 4;
        }
        if(width_window < 768) {
            args.minSlides = 3;
            args.maxSlides = 3;
        }
        if(width_window < 550) {
            args.minSlides = 2;
            args.maxSlides = 2;
        }
        if(width_window < 420) {
            args.minSlides = 1;
            args.maxSlides = 1;
        }
        
        $('#hsj-carousel-clients__list').bxSlider(args);
    }
    //--------------------------------
    // slider works
    if ($('.hsj-slider-works-tab1').length > 0)
        $('.hsj-slider-works-tab1__list').bxSlider({
            auto: true,
            autoControls: false,
            minSlides: 1,
            maxSlides: 1,
            controls: true,
            prevSelector: '.hsj-slider-works-tab1__prev',
            nextSelector: '.hsj-slider-works-tab1__next',
            prevText: '',
            nextText: '',
            pause: 8000,
            autoHover: true,
            pager: false,
        });
    //--------------------------------
    // slider works tab-2
    if ($('.hsj-slider-works-tab2').length > 0)
        $('.hsj-slider-works-tab2__list').bxSlider({
            auto: true,
            autoControls: false,
            minSlides: 1,
            maxSlides: 1,
            controls: true,
            prevSelector: '.hsj-slider-works-tab2__prev',
            nextSelector: '.hsj-slider-works-tab2__next',
            prevText: '',
            nextText: '',
            pause: 8000,
            autoHover: true,
            pager: false,
        });
    //--------------------------------
    // slider works tab-3
    if ($('.hsj-slider-works-tab3').length > 0)
        $('.hsj-slider-works-tab3__list').bxSlider({
            auto: true,
            autoControls: false,
            minSlides: 1,
            maxSlides: 1,
            controls: true,
            prevSelector: '.hsj-slider-works-tab3__prev',
            nextSelector: '.hsj-slider-works-tab3__next',
            prevText: '',
            nextText: '',
            pause: 8000,
            autoHover: true,
            pager: false,
        });
    //--------------------------------
    // slider works tab-4
    if ($('.hsj-slider-works-tab4').length > 0)
        $('.hsj-slider-works-tab4__list').bxSlider({
            auto: true,
            autoControls: false,
            minSlides: 1,
            maxSlides: 1,
            controls: true,
            prevSelector: '.hsj-slider-works-tab4__prev',
            nextSelector: '.hsj-slider-works-tab4__next',
            prevText: '',
            nextText: '',
            pause: 8000,
            autoHover: true,
            pager: false,
        });
    //--------------------------------
    // slider works tab-5
    if ($('.hsj-slider-works-tab5').length > 0)
        $('.hsj-slider-works-tab5__list').bxSlider({
            auto: true,
            autoControls: false,
            minSlides: 1,
            maxSlides: 1,
            controls: true,
            prevSelector: '.hsj-slider-works-tab5__prev',
            nextSelector: '.hsj-slider-works-tab5__next',
            prevText: '',
            nextText: '',
            pause: 8000,
            autoHover: true,
            pager: false,
        });
    //--------------------------------
    // scroll to anchor
    if ($('.hsj-menu').length > 0)
        (function () {
            var self = $('.hsj-menu');
            var link = self.find('a');
            
            link.click(function (e) {
                e.preventDefault();
                var id = $($(this).attr('href'));
                if (id.length > 0)
                    $('html,body').animate({scrollTop: id.offset().top}, 'fast');
            });
        })();
    //--------------------------------
    // fixed header
    if ($('#hsj-fixed-header').length > 0)
        (function(){
            var self = $('#hsj-fixed-header');
            var scrollPosition= self.offset().top+self.height;
            var classFixed = '.hsj-fixed_on';
            
            $(document).scroll(function(){
                if (($(document).scrollTop() ) >= scrollPosition) {
                    $(self).addClass(classFixed);
                }else{
                    $(self).removeClass(classFixed);
                }
            });
        })();
    //--------------------------------
    // responsive toggle
    if ($('.hsj-toggle').length > 0) 
        $('.hsj-toggle').each(function () {
            var self = $(this);
            var btn = self.find('.hsj-toggle__btn');// класс для кнопки
            var list = self.find('.hsj-toggle__list');// класс для меню
            var classClose = 'hsj-toggle_close';
            var time = 300;
            
            btn.click(function () {
                if (!$(this).hasClass(classClose)) {
                    list.stop().slideDown(time);
                } else {
                    list.stop().slideUp(time);
                }
                $(this).toggleClass(classClose);
            });
        });
    //--------------------------------
    // tabs
    if ($('#hsj-tabs').length > 0)
        (function () {
            $('#hsj-tabs__header a').click(e)(function(){
                e.preventDefault()
                $(this).tab('show')
            });
        })();
});