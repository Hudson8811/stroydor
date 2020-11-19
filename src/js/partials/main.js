const scrollbar = Scrollbar.init(document.getElementById('smoothScroll'), {
    damping: 0.03,
});

const $win = $(window);
const winHeight = $win.height();
function animateScrollEffect($element, pixelsToScroll, $trigger, isDebug, isPercent, additionDuration){
    //если элемент существует, тогда продолжаем
    if($element.length){
        var elementOffsetTop = $element.offset().top - $win.height();
        var duration = $win.height() + $element.outerHeight() + pixelsToScroll;
        var scrollAmountY = 0;
        var scrolledInside = 0;
        var scrolledPercents = 0;
        if($trigger) {
            elementOffsetTop = $trigger.offset().top - $win.height();
            duration = $win.height() + $trigger.outerHeight() ;
        }
        if(elementOffsetTop < 0 ){
            elementOffsetTop = 0;
        }
        duration += additionDuration;
        var durationFromStartToEnd = elementOffsetTop + duration;
        if(isDebug){
            console.log("durationTo: "+ durationFromStartToEnd)
        }


        scrollbar.addListener(function (s) {
            if(s.offset.y >= elementOffsetTop && s.offset.y <= durationFromStartToEnd){
                scrolledInside = scrollbar.offset.y - elementOffsetTop;
                scrolledPercents = scrolledInside / duration * 100;
                scrollAmountY = pixelsToScroll * scrolledPercents / 100;

                if (isPercent === true){
                    TweenLite.set($element, {yPercent:scrollAmountY  });
                }
                else{
                    TweenLite.set($element, {y:scrollAmountY  });
                }
                if(isDebug){
                    console.log('Всего пикселей проскролено: '+s.offset.y)
                    console.log('пикселей с начала блока: '+ scrolledInside)
                    console.log('Процентов проскролено: '+ scrolledPercents)
                    console.log('Проскролено из нужного: '+ scrollAmountY)
                    console.log("ScrollAmountY: "+ scrollAmountY)
                }
            }

        });
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
    var controllerMain = new ScrollMagic.Controller();

    animateScrollEffect($(".equipment-grid-item1"), $win.height() * -0.45  , $(".equipment-grid "), false, 0, $win.height());
    animateScrollEffect($(".equipment-number"), $win.height() * -0.6  , $(".equipment-number "), false, 0, $win.height());
    animateScrollEffect($(".project-item-wrap .project-item"), $win.height() * -0.8  , $(".project-item-wrap"), false, 0, $win.height());
    animateScrollEffect($(".equipment-bg"), $win.height() * 1  , $(".equipment"), false, 0, $win.height());


    new ScrollMagic.Scene({triggerElement: '.equipment-heading', triggerHook: 0.9}).setTween( TweenMax.staggerFrom('.equipment-heading > h2 > span', 2, {y:50, autoAlpha:0, delay: 0.5}, 0.4 ) ).addTo(controllerMain);

    var equipmentTimes = {};
    $(".equipment-icon").each(function (index, elem) {
        var title = $(this);
        equipmentTimes[index] = new TimelineLite();
        var delay = 0.5;
        if (index > 1) delay = 1.5;
        new ScrollMagic.Scene({triggerElement: elem, triggerHook: 0.9})
            .setTween(equipmentTimes[index].from(title, 2, {opacity: 0, delay:delay}))
            .addTo(controllerMain);
    });

    $(".equipment-text").each(function (index, elem) {
        var title = $(this);
        equipmentTimes[index] = new TimelineLite();
        var delay = 1;
        if (index > 1) delay = 2;
        new ScrollMagic.Scene({triggerElement: elem, triggerHook: 0.9})
            .setTween(equipmentTimes[index].from(title, 2, {opacity: 0, delay:delay}))
            .addTo(controllerMain);
    });

    var warrantyTimeline = new TimelineLite()
        .staggerFrom('.warranty-title > span', 1.5, {y:50, autoAlpha:0}, 0.5 )
        .from('.warranty-line', 1.5, {x:-2000, autoAlpha:0}, "-=1.5" )
        .staggerFrom('.warranty-desc span', 1.5, {y:50, autoAlpha:0}, 0.5, "-=1" );
    new ScrollMagic.Scene({triggerElement: '.warranty-title', triggerHook: 0.8}).setTween( warrantyTimeline ).addTo(controllerMain);

    new ScrollMagic.Scene({triggerElement: '.users-line', triggerHook: 0.9}).setTween( TweenMax.from('.users-line', 2, {x:-2000, autoAlpha:0} ) ).addTo(controllerMain);

    var videoPlay = new ScrollMagic.Scene({triggerElement: ".services", triggerHook:1})
        .on("enter", function () {
            $('.services-video')[0].play();
        })
        .on("leave", function () {
            $('.services-video')[0].pause();
        })
        .addTo(controllerMain);
    scrollbar.addListener(function (s) {
        videoPlay.refresh();
    });



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


    if (scrollbar.offset.y > 185) {
        $(".header").addClass("header-fixed");
    } else {
        $(".header").removeClass("header-fixed");
    }

    $('.users-slider').mousemove(function(){
        $('.fake-cursor').addClass('active')
    });

    $('.users-slider').mouseleave(function(){
        $('.fake-cursor').removeClass('active')
    });

    scrollbar.addListener(function (status) {
        if (status.offset.y > 185) {
            $(".header").addClass("header-fixed");
        }else {
            $(".header").removeClass("header-fixed");
        }
    });


    $(".to-scroll").click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $({ top: scrollbar.offset.y }).animate({ top: top }, {
            duration: 1000,
            easing: 'swing',
            step(value) {
                scrollbar.setPosition(0, value);
            }
        });
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


$('.main').mousemove(function(event){
    var pos = $(this).offset();
    var elem_left = pos.left.toFixed(0);
    var elem_top = pos.top.toFixed(0);
    mouseX = event.pageX - elem_left;
    mouseY = event.pageY - elem_top;
});


});

function animate(item, animType, delay, ){
    $window = $(window);
    if($window.scrollTop() + (window.innerHeight / 1.1) > $(item).offset().top &&
        $window.scrollTop() - (window.innerHeight) < $(item).offset().top){
        setTimeout(() => {
            $(item).addClass(animType);
        }, delay);
    }
}



$(window).on('load', function() {
    setTimeout(() => {
        $('.loader-container').addClass('loader-container-disabled');
    }, 300);
});
