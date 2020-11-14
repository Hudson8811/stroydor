function paralax(item, num){
    let position = window.pageYOffset;
    position /= num;
    document.querySelector(`${item}`).style.marginTop = -position + 'px';
}

$(document).ready(function () {
    new WOW().init();

    window.addEventListener('scroll', function(){
        paralax('.equipment-grid-item1', 5);
        paralax('.equipment-grid-item2', 2);
        paralax('.equipment-grid-item4', 7);
        paralax('.equipment-grid-item5', 6);
    })

    $('.services-grid-item').mousemove(function(){
        const servId = $(this).data('id');
        $('.services-imageBg').css('display', 'none');
        $(`.services-imageBg[data-id="${servId}"]`).css('display', 'block');
    });

    $('.services-grid-item').mouseleave(function(){
        $('.services-imageBg').css('display', 'none');
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

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) $(".header").addClass("header-fixed");
        else $(".header").removeClass("header-fixed");
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
    
});

