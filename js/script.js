$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });
  

  // 送信ボタンを無効化
    $('#submit-btn').prop("disabled", true);

    // 必須項目チェック
    $('.q-required').change(function () {
        let flag = true;

        // 値が入っていない場合はフラグをfalseにする
        $('.q-required').each(function (e) {
            if ($('.q-required').eq(e).val() === "") {
                flag = false;
            }
        });

        // フラグがtrueの場合は送信ボタン有効
        if (flag) {
            $('#submit-btn').prop("disabled", false);

            /*$('#submit-btn').on('click', evt => {
                $('#contact-form').submit();
                alert('お問い合わせありがとうございます。\n確認メールを送信しましたのでご確認をお願いします。\nもし届かない場合は、メールアドレスが間違っている可能性がありますので、ご確認をお願いいたします。');
                window.location.reload();
                return false;
            });*/

        } else {
            $('#submit-btn').prop("disabled", true);
        }
    });

});
