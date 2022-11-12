$(document).ready(function () {
    $("span.gmui-tag_badges-badges").each(function () {
        $(this).css('right', "-" + parseInt($(this).css('width')) / 2 + 'px');
    });

    $("span.gmui-tag_badges-badges").bind('DOMSubtreeModified', function () {
        $(this).css('right', "-" + parseInt($(this).css('width')) / 2 + 'px');
    });
});
