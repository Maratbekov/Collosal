$('.test__card').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive:[

        {
            breakpoint:769,
            settings:{
                slidesToShow: 2
            }

        },
        {
            breakpoint: 993,
            settings:{
                slidesToShow: 2
            }
        },
        {
            breakpoint: 577,
            settings:{
                slidesToShow: 1
            }
        }
    ]
})