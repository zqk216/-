var teg = /^1[345678]\d{9}$/;
var timer = null;
var num = 60;
$(".input_").on("change", function () {
    var val = $(".input_").val();
    console.log(val);
    if (!teg.test(val)) {
        $(".mb1").show();
    } else {
        function daoshu() {
            num--;
            if (num > 0) {
                $('.get').html(num + '秒后发送')
            } else {
                num = 60;
                clearInterval(timer);
                $('.get').html('获取验证码');
                $('.get').on('tap', fn);
            }
        }
        $('.get').on('tap', fn = function () {
            $('.get').off('tap');
            timer = setInterval(daoshu, 1000);
        });
    }
})
$(".btn").on('tap', function () {
    $(".mb1").hide();
    $(".input_").val("");
})
$('.login').on('tap',function(){
    location.href = '../html/my_msg.html';
})