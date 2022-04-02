$('input:radio').click(function () {
    var domName = $(this).attr('name');
    var $radio = $(this);
    if ($radio.data('waschecked') == true) {
        $radio.prop('checked', false);
        $("input:radio[name='" + domName + "']").data('waschecked', false);
    } else {
        $radio.prop('checked', true);
        $("input:radio[name='" + domName + "']").data('waschecked', false);
        $radio.data('waschecked', true);
    }
});

$(function () {
    $('.enemy a').on('click', function() {
        var _ = $(this);
        var url = _.attr('href');

        //点击a跳转页面
        location.href = url;

        //添加背景色 css设置a.on { background: #09e; color: #fff; }
        _.addClass('on').siblings('a').removeClass('on');
        return false;
    });
});