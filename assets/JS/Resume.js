//當檔案讀取完成後，要執行的所有功能
$(function () {
    /*for Bootstrap
    $(".carousel").carousel({
        interval: 2000
    });
    */

    var owl = $(".owl-carousel"); //一定要加這行，不知道為甚麼?

    $("#slideshow .item").on("mouseenter", function (e) {
        owl.trigger("stop.owl.autoplay");
    })
    $("#slideshow .item").on("mouseleave", function (e) {
        owl.trigger("play.owl.autoplay");
    })

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

})
