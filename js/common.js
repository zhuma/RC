/**
 * Created by hanshaojie on 2016/11/4.
 */


/*锁屏*/
function lockScreen(obj) {

    obj.css({
        width:$(window).width() + $(window).offsetWidth + "px",
        height:$(window).height() + "px"
    });

    if($(window).scrollTop() == 0){
        obj.css({
            top: 0
        });
    }else{
        obj.css({
            top: $(window).scrollTop() + ($(window).height() / 2 - obj.height() / 2) + "px"
        });
    }

    obj.css({
        "visibility": "visible"
    });
    $("body,html").css("overflow-y", "hidden");
}

/*取消锁屏*/
function unlockScreen(obj) {
    obj.css({
        "visibility": "hidden"
    });
    $("body,html").css("overflow-y", "auto");
}

