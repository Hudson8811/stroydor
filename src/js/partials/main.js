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
        paralax('.project-item-wrap .project-item', 8, true);
        paralax('.equipment-bg', 10, false);
      
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

    if ($(this).scrollTop() > 185) $(".header").addClass("header-fixed");
        else $(".header").removeClass("header-fixed");

        $('.users-slider').mousemove(function(){
            $('.fake-cursor').addClass('active')
        });

        $('.users-slider').mouseleave(function(){
            $('.fake-cursor').removeClass('active')
        });
        
    $(window).scroll(function () {
        if ($(this).scrollTop() > 185) {
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


    var follower = $(".fake-cursor");
var posX = 0,
	posY = 0;
var mouseX = 0,
	mouseY = 0;
TweenMax.to({}, 0.001, {
	repeat: -1,
	onRepeat: function () {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;
		TweenMax.set(follower, {
			css: {
				x: posX - 12,
				y: posY - 12
			}
		});
	}
});

$(document).on("mousemove", function (e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
});


SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 1600,
    // Размер шага в пикселях 
    stepSize         : 50,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 30,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})


});



$(window).on('load', function() {
    setTimeout(() => {
        $('.loader-container').addClass('loader-container-disabled');
    }, 300);
});
