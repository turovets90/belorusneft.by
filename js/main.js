$(document).ready(function(){

    $('.slider_item').each(function(){
        var tag = $(this).find('.desc_overflow .desc');
        var tag_text = $(tag).text();
        if (tag_text.length > 130) {
            var truncated = tag_text.trim().substring(0, 130) + "…";
            $(tag).text(truncated);
        }
    });

    $('.row_opinion .item').each(function(){
        var tag1 = $(this).find('.desc');
        var tag_text1 = $(tag1).text();
        if (tag_text1.length > 65) {
            var truncated1 = tag_text1.trim().substring(0, 65) + "…";
            $(tag1).text(truncated1);
        }
    });

    /*$('.type_news').each(function(){
        var tag2 = $(this).find('.article_desc');
        var tag_text2 = $(tag2).text();
        if (tag_text2.length > 220) {
            var truncated2 = tag_text2.trim().substring(0, 220) + "…";
            $(tag2).text(truncated2);
        }
    });*/

    $('.type_latest_news').each(function(){
        var tag3 = $(this).find('.item_desc');
        var tag_text3 = $(tag3).text();
        if (tag_text3.length > 140) {
            var truncated3 = tag_text3.trim().substring(0, 140) + "…";
            $(tag3).text(truncated3);
        }
    });

    $('.sidebar_news .type_news').each(function(){
        var tag4 = $(this).find('.article_desc');
        var tag_text4 = $(tag4).text();
        if (tag_text4.length > 165) {
            var truncated4 = tag_text4.trim().substring(0, 165) + "…";
            $(tag4).text(truncated4);
        }
    });

    $('.article_list_fullwidth_slider .type_news').each(function(){
        var tag5 = $(this).find('.article_desc');
        var tag_text5 = $(tag5).text();
        if (tag_text5.length > 200) {
            var truncated5 = tag_text5.trim().substring(0, 200) + "…";
            $(tag5).text(truncated5);
        }
    });



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
            responsive: [

                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 5,
                    }
                }
            ]
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
                    breakpoint: 769,
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


    if($('.big_gallery_slider .item').length > 1) {
        $('.big_gallery_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.nav_slider'
        });
        $('.nav_slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.big_gallery_slider',
            dots: false,
            arrows: false,
            focusOnSelect: true,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });
    }


    if($(window).width() < 769){
        var opinion = $('#opinion');
        var subscribe_home = $('#subscribe_home');
        var latest_news_home = $('#latest_news_home');
        $(subscribe_home).before(opinion);
        $(subscribe_home).after(latest_news_home);
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






});


