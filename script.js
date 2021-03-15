$(document).ready(function () {
    $('.slider-gallery__preview').on('click', function () { let slideId = $(this).attr('slide-id'); setGallerySlide(slideId); }); slickInit(); setGallerySlide(0); function setGallerySlide(slideId) { $('.slider-gallery__for').slick('slickGoTo', slideId); $('.slider-gallery__preview').removeClass('slider-gallery__preview_active'); $('.slider-gallery__preview[slide-id=' + slideId + ']').addClass('slider-gallery__preview_active'); }
    function slickInit() { $('.slider-gallery__for').slick({ slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, draggable: false, swipeToSlide: false, touchMove: false, }); }
    $('.dealers-modal').on('classChanged', function () { $('.slider-gallery__for').slick('setPosition'); setGallerySlide(0); });
});