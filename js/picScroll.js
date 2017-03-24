/**
 * Created by hanshaojie on 2016/12/7.
 */
/*banner轮播*/
$(function () {

    var aLi = $(".banner-slide>li");
    var aSpan = $(".switch-btn>span");
    var oPause = $(".banner-slide,.switch-btn>span");
    slide(aLi,aSpan,oPause);

    var aImg = $(".wel-ban>img");
    var aBtn = $(".suc-btn>span");
    var allPause = $(".wel-ban,.suc-btn>span");
    slide(aImg,aBtn,allPause);

    function slide(aLi,aSpan,oPause) {
        var curIndex = 0;
        var timer = null;
        aSpan.each(function () {
            $(this).click(function () {
                defaultSlide();
            })
        });
        /*默认播放*/
        function defaultSlide() {
            aLi.stop();
            curIndex++;
            if (curIndex > aLi.length - 1) {
                curIndex = 0;
            }
            aLi.eq(curIndex).fadeIn().siblings().fadeOut();
            aSpan.eq(curIndex).addClass("active").siblings().removeClass("active");
        }
        /*自动播放*/
        timer = setInterval(function () {
            defaultSlide();
        }, 3000);
        oPause.mouseover(function () {
            clearInterval(timer);
        });
        oPause.mouseout(function () {
            timer = setInterval(function () {
                defaultSlide();
            }, 3000);
        });
    }

});