/*global $, scrollTop, location, document*/
window.onload = function(){
$(function () {

$('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1400);
                return false;
            }
        }
    });
        $(document).on("scroll", function () {
          var profileDiv = ($("#Profile").offset().top)-12;
          var footerStart = ($("#footerStart").offset().top)-12;
          var bookingEnd = ($("#beginSeat").offset().top)-12;
          var splashbottom = ($("#splashBottom").offset().top)-12;
          var heightTop = ($("#top").offset().top)-12;

          var height = $(window).scrollTop();


            if (heightTop < splashbottom) {$('.navbar').css('margin-right', '-30%')}
            else {$('.navbar').css('margin-right', '0%')};

            if (heightTop > profileDiv && heightTop < bookingEnd || heightTop > footerStart){$("#top").css('color', 'white')}
            else {$("#top").css('color', '#282CC1')}

            var heightConf = $("#conf").offset().top;
            if (heightConf > profileDiv && heightConf < bookingEnd || heightConf > footerStart){$("#conf").css('color', 'white')}
            else {$("#conf").css('color', '#282CC1')}

            var heightTime = $("#time").offset().top;
            if (heightTime > profileDiv && heightTime < bookingEnd || heightTime > footerStart){$("#time").css('color', 'white')}
            else {$("#time").css('color', '#282CC1')}

            var heightProf = $("#prof").offset().top;
            if (heightProf > profileDiv && heightProf < bookingEnd || heightProf > footerStart){$("#prof").css('color', 'white')}
            else {$("#prof").css('color', '#282CC1')}

            var heightSeats = $("#seats").offset().top;
            if (heightSeats > profileDiv && heightSeats < bookingEnd || heightSeats > footerStart){$("#seats").css('color', 'white')}
            else {$("#seats").css('color', '#282CC1')}

            var heightSponsor = $("#sponsor").offset().top;
            if (heightSponsor > profileDiv && heightSponsor < bookingEnd || heightSponsor > footerStart){$("#sponsor").css('color', 'white')}
            else {$("#sponsor").css('color', '#282CC1')}

            // var heightFooter = 6 + $('#foot').offset().top;
            // if (heightFooter > profileDiv && heightFooter < bookingEnd || heightFooter > footerStart){$("#foot").css('color', 'white')}
            // else {$("#foot").css('color', '#282CC1')}
    });




});
}();
