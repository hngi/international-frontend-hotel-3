<script>
$(function() {
    // Enable Carousel
    $('#my-corousel').carousel({interval: 500, pause: "hover", wrap: false})
    // Enable carousel previous/next controls

    $(".carousel-control-prev").click(function() {

        $("#my-corousel").carousel('prev')

    });

    $(".carousel-control-next").click(function() {

        $("my-corousel").carousel('next')

    });

    // Enable carousel indicators

    $("#my-corousel1").click(function() {

        $("#my-corousel").carousel(0)

    });

    $("#my-corousel2").click(function() {

        $("#my-corousel").carousel(1)

    });

    $("#my-corousel3").click(function() {

        $("#my-corousel").carousel(2)

    });

});

</script>