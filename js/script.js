$('.test__card').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive:[
        {
            breakpoints:576,
            settings:{
                slidesToShow:2
            }
        }
    ]
})