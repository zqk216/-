var teg = /^1[345678]\d{9}$/;
$(".input-phone").on("change", function () {
    var val = $(".input-phone").val();
    console.log(val);
    if (!teg.test(val)) {
        $(".mb1").show();
        $(".input-phone").val("");
    } else {
        var timer = null;
        var num = 60;

        function daoshu() {
            num--;
            if (num > 0) {
                $('.time').html(num + '秒后发送')
            } else {
                num = 60;
                clearInterval(timer);
                $('.time').html('获取验证码');
                $('.time').on('tap', fn);
            }
        }
        $('.time').on('tap', fn = function () {
            $('.time').off('tap');
            timer = setInterval(daoshu, 1000);
        });

        $('.time').on('tap', function () {
            clearInterval(timer);
            $('.time').html('获取验证码');
            num = 60;
            $('.time').on('tap', fn);
        })
    }
})
$(".btn").on('tap', function () {
    $(".mb1").hide();
})

$(".click").on("tap", function () {
    if ($('.inut-pwd').attr("type") == "password") {
        $('.inut-pwd').attr("type", "text");
    } else {
        $('.inut-pwd').attr("type", "password");
    }

})

$('#submit').on('tap', function () {
    location.href = '../html/login.html';
})