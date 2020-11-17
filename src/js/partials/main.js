function paralax(item, num, path){
    let position = window.pageYOffset;
    position /= num;
    
    if(path){
        document.querySelector(`${item}`).style.marginTop = -position + 'px';
    } else{
        document.querySelector(`${item}`).style.marginTop = position + 'px';
    }
}


function scrollControl(){
    if($(window).width() < 470){

        $('.castom_scroll').mCustomScrollbar({
            axis:"x",
              scrollInertia:500,
              contentTouchScroll:10
        });
    } else{
        $('.castom_scroll').mCustomScrollbar('destroy');
    }
}

$(document).ready(function () {
    new WOW().init();

    window.addEventListener('scroll', function(){
        paralax('.equipment-grid-item1', 5, true);
        paralax('.equipment-grid-item5', 6, true);
        paralax('.project-item-wrap .project-item', 15, true);
        paralax('.equipment-bg', 10, false);
        $('body').css({
            height: $('.wrapper').height(),
        })
    })

    $('.services-grid-item').mousemove(function(){
        const servId = $(this).data('id');
        $('.services-imageBg').css('opacity', '0');
        $(`.services-imageBg[data-id="${servId}"]`).css('opacity', '1');
    });

    $('.services-grid-item').mouseleave(function(){
        $('.services-imageBg').css('opacity', '0');
    });

    $('.users-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true
      });

    $('.useMap-title-link').click(function(e){
        e.preventDefault();
    })
    $('.useMap-title-link').mousemove(function(){
        const posId = $(this).data('pos-id');
        $('.useMap-title-link').removeClass('useMap-title-link-active');
        $(`.useMap-title-link[data-pos-id="${posId}"]`).addClass('useMap-title-link-active');
        $('.useMap-maping-dote').removeClass('useMap-maping-dote-active');
        $(`.useMap-maping-dote[data-pos="${posId}"]`).addClass('useMap-maping-dote-active');
    });
    $('.useMap-maping-dote').mousemove(function(){
        const posId = $(this).data('pos');
        $('.useMap-title-link').removeClass('useMap-title-link-active');
        $(`.useMap-title-link[data-pos-id="${posId}"]`).addClass('useMap-title-link-active');
        $('.useMap-maping-dote').removeClass('useMap-maping-dote-active');
        $(`.useMap-maping-dote[data-pos="${posId}"]`).addClass('useMap-maping-dote-active');
    });

    if ($(this).scrollTop() > 236) $(".header").addClass("header-fixed");
        else $(".header").removeClass("header-fixed");

        
        
    $(window).scroll(function () {
        if ($(this).scrollTop() > 236) {
            $(".header").addClass("header-fixed");
        }else {
            $(".header").removeClass("header-fixed");
        }
        
    });

    $(".to-scroll").click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.equipment-scroll').mousemove(function(){
        $('.equipment-heading').addClass('equipment-heading-active');
    });
    $('.equipment-scroll').mouseleave(function(){
        $('.equipment-heading').removeClass('equipment-heading-active');
    });
    
    $('.burger').click(function(){
        $(this).toggleClass('burger-active');
        $('.header-container').toggleClass('header-container-active');
    })


    scrollControl()

    $(window).resize(function(){
        scrollControl()
    })

   $('body').css({
       height: $('.wrapper').height(),
   })
});


