$(document).ready(function () {
    $("span.vdui-tag_badges-badges").each(function () {
        $(this).css('right', "-" + parseInt($(this).css('width')) / 2 + 'px');
    });

    $("span.vdui-tag_badges-badges").bind('DOMSubtreeModified', function () {
        $(this).css('right', "-" + parseInt($(this).css('width')) / 2 + 'px');
    });
});
