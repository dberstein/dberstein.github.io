jQuery(document).ready(function($) {
    $(window).on('load', function() {
        (function g(elems, d) {
            var elem = elems.eq(Math.floor(elems.length*Math.random())),
                title = elem.find('.level-title'),
                bar = elem.find('.level-bar-inner'),
                flash = (Math.random() < 0.3)*Math.ceil(2+8*Math.random());
            setTimeout(g, Math.floor(d*Math.random()), elems, d);
            title.toggleClass('active');
            for (var i = 0; i < flash; i++) bar.fadeToggle(200);
            bar.fadeIn(200, function() {
                $(this).toggleClass('active').animate({width: 0, opacity: 0}, 0, function() {
                    $(this).animate({width: '100%', opacity: 1}, 800, function() {
                        $(this).removeClass('active');
                        title.removeClass('active');
                    });
                });
            });
        })($('.skillset .item') , 4000);
        if (window['ga']) {
            var trk = {
                'nav': $('nav a'),
                'mailto': $('a[href^="mailto:"]'),
                'link': $('a').not('a[href^="mailto:"]').not('nav a')
            };
            for (var cat in trk) {
                trk[cat].click(function(cat){
                    return function(evt) {
                        ga('send','event',{eventCategory:cat,eventAction:$(this).text()||'unknown',eventLabel:evt.target.href,transport:'beacon'});
                    }
                }(cat))
            }
        }
        $('.contact-container .blog a').attr('target', '');
        $('.contact-container .pdf a').attr('target', '_blank');
    });
});
