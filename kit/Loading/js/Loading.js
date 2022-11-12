setTimeout(function () {
    $('.gmui-loading-animation').fadeOut(200);
    $('.gmui-loading-progress-bar').fadeIn(200);
}, 800);

var progress = 30;
var timer = setInterval(function () {
    progress += 1;
    $('.gmui-loading-progress-bar-content').css('width', progress + '%');
    if (progress >= 100) {
        clearInterval(timer);
        $('#gmui-loading').fadeOut(300);
        document.body.style.overflow = '';
    }
}, 10);
