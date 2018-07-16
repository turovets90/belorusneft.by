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


    if($(document).width() >=1200){
        $('.grid_news').masonry({
            itemSelector: '.grid-item',
            columnWidth: 309,
        });
    }


    if($('.gallery_slider .item').length > 1) {
        $('.gallery_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.gallery_slider_nav'
        });
        $('.gallery_slider_nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.gallery_slider',
            dots: false,
            arrows: false,
            centerMode:true,
            focusOnSelect: true,
            variableWidth:true,
        });
    }



    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
        }else{
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });

    var video = document.getElementsByTagName('video');
    var timer = document.getElementById('timer');

    /*video.addEventListener(function () {
        timer.innerHTML = secondsToTime(video.currentTime);
    }, false);*/




    $(".video_gallery_overflow").mCustomScrollbar({
        theme:"rounded-dark"
    });



    $('.article_sidebar_slider').slick({
        autoplay: false,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $('.btn_slider_news_prev').click(function(){
        $('.article_sidebar_slider').slick('slickPrev');
    });

    $('.btn_slider_news_next').click(function(){
        $('.article_sidebar_slider').slick('slickNext');
    });


    if($('.article_list_fullwidth_slider > div').length > 3){
        $('.article_list_fullwidth_slider').slick({
            dots: true,
            arrows: true,
            slidesToShow:4,
            slidesToScroll: 4,
            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.article_list_fullwidth_slider > div').length > 1){
        $('.article_list_fullwidth_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }

































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










});


