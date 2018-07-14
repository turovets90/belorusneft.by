$(document).ready(function(){

    $('.mobile_btn').click(function () {
        $(this).toggleClass('active');
        $('.main_menu').toggleClass('open');
        $('body').toggleClass('m_menu_active');
        return false;
    });

   $('.main_slider_desktop .slider_item, .main_slider_mobile .slider_item').each(function(){
        var desc_overflow = $(this).find('.desc_overflow');
        var desc_overflow_height = $(this).find('.desc_overflow').height();
        var main_slider_caption = $(this).find('.caption');
        $(main_slider_caption).css({
            'transform':'translateY('+desc_overflow_height+'px)',
            'transition':'.3s linear'
        });
        $(desc_overflow).css({
            'opacity':'0',
            'transition':'.3s linear'
        });
        $(this).hover(function(){
            $(main_slider_caption).css({
                'transform':'translateY(0)'
            });
            $(desc_overflow).css({
                'opacity':'1'
            });
        },function(){
            $(main_slider_caption).css({
                'transform':'translateY('+desc_overflow_height+'px)'
            });
            $(desc_overflow).css({
                'opacity':'0'
            });
        });
    });

    $('.main_slider_desktop').slick({
        dots: false,
        arrows:false,
        slidesToShow: 1,
        draggable:false,
    });

    $('.main_slider_desktop').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.main_slider_desktop .green, .main_slider_desktop .caption').animate({'opacity': '0'}, 0);
    });

    $('.main_slider_desktop').on('afterChange', function(event, slick, currentSlide){
        $('.main_slider_desktop .green, .main_slider_desktop .caption').animate({'opacity': '1'}, 300);
    });

    $('.main_slider_mobile').slick({
        dots: false,
        arrows:false,
        slidesToShow: 1,
        variableWidth:true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    variableWidth:false,
                }
            }
        ]
    });

    if($(document).width() > 1200){
        $('.main_slider_btn_prev').click(function(){
            $('.main_slider_desktop').slick('slickPrev');
        });

        $('.main_slider_btn_next').click(function(){
            $('.main_slider_desktop').slick('slickNext');
        });
    }else{
        $('.main_slider_btn_prev').click(function(){
            $('.main_slider_mobile').slick('slickPrev');
        });

        $('.main_slider_btn_next').click(function(){
            $('.main_slider_mobile').slick('slickNext');
        });
    }











    $(function () {
        $('.form input[type="text"], .form textarea').each(function () {
            $(this).blur(function(){
                if(!this.value){
                    $(this).removeClass('hide_label');
                }
                else{
                    $(this).addClass('hide_label');
                }
            });
            if ( !this.value ) {
                $(this).removeClass('hide_label');
            }
            else{
                $(this).addClass('hide_label');
            }
        });
    });

    $('.js-example-basic-single').select2();


    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });
    $('.scrolltop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $("a.anchor").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });






    if($('.gallery_block .big_img .item').length > 1) {
        $('.gallery_block .big_img').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.gallery_nav'
        });
        $('.gallery_nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.gallery_block .big_img',
            dots: false,
            arrows: false,
            focusOnSelect: true
        });
    }



    if($('.object_slider  .type_product_img').length > 1) {
        $('.object_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }



    if($('.related_object_slider > div').length > 3){
        $('.related_object_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 3,
            draggable:false,
            slidesToScroll: 1,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.related_object_slider > div').length > 1){
        $('.related_object_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable:false
        });
    }



    $('.js_favorite').on('click', function(){
        $(this).toggleClass('active');
    });



    $('.adv_f_btn').on('click', function(){
        if($('.advanced_objects_filter').is(':visible')){
            $('.advanced_objects_filter').slideUp();
            $(this).text('Расширенный поиск');
            $(this).removeClass('active');
        }else{
            $('.advanced_objects_filter').slideDown();
            $(this).text('Свернуть расширенный поиск');
            $(this).addClass('active');
        }
    });


    $('.map-objects_toggler').on('click', function(){
        $('.section_views').addClass('map-objects_views');
        $('.section_views').removeClass('objects_views');
        $('.section_views').removeClass('map_views');
        $('.objects_toggler').removeClass('active');
        $('.map_toggler').removeClass('active');
        $(this).addClass('active');
    });
    $('.objects_toggler').on('click', function(){
        $('.section_views').removeClass('map-objects_views');
        $('.section_views').addClass('objects_views');
        $('.section_views').removeClass('map_views');
        $('.map-objects_toggler').removeClass('active');
        $('.map_toggler').removeClass('active');
        $(this).addClass('active');
    });
    $('.map_toggler').on('click', function(){
        $('.section_views').removeClass('map-objects_views');
        $('.section_views').removeClass('objects_views');
        $('.section_views').addClass('map_views');
        $('.map-objects_toggler').removeClass('active');
        $('.objects_toggler').removeClass('active');
        $(this).addClass('active');
    });


    if($(window).innerWidth() > 768){
        $('.banner_parallax').paroller({
            factor:-0.3,
            direction: 'vertical'
        });
    }


    if($(window).innerWidth() < 1200){
        $('.section_views').removeClass('map-objects_views');
        $('.objects_toggler').addClass('active');
    }

    $('.m_show_filters').on('click', function(){
        $('.section_filters').addClass('visible');
    });

    $('.close_filter').on('click',function(){
        $('.section_filters').removeClass('visible');
    });



});


