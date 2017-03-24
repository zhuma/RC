/**
 * Created by hanshaojie on 2016/12/8.
 */
//发送位置
$(function () {
   var oS = $(".send");
   var oDia = $(".send-pos");
   var oClose = $(".close-btn");
   var oMapTit = $(".send-map-tit");
   oS.click(function () {
       lockScreen(oDia);
       oMapTit.text($(this).siblings(".address").text());
   });
   oClose.click(function () {
       unlockScreen(oDia);
   });
});

//导航

$(function(){
   var aLi = $(".nav>ul>li");
   aLi.hover(function () {
       var curr = $(this).find(".sub-nav-bg");
       curr.stop().slideDown();
   },function () {
       var curr = $(this).find(".sub-nav-bg");
       curr.stop().slideUp();
   })
});


//用户资料

$(function () {
   $(".user-interest>p").click(function () {
       $(this).addClass("active").siblings().removeClass("active");
       $(".interest-list>section").eq($(this).index()).show().siblings().hide();
   });
});

//车场列表 动态加载

$(function () {
   var oHtml = "";
    oHtml += "<div class='interest-one clearFix'>";
    oHtml += "<img src='img/ticket.png' class='fl'>";
    oHtml += "<div class='interest-detail fl'>";
    oHtml += "<h4>四番大奖赛</h4>";
    oHtml += "<p>北京盈控国际体育发展有限公司</p>";
    oHtml += "<p>11/26/16 - 11/26/16</p>";
    oHtml += "<p><span>顺义区天竺杨二营26号</span><span class='send'>发送位置到手机</span></p>";
    oHtml += "<p>http://www.incomsports.com/</p>";
    oHtml += "</div>";
    oHtml += "</div>";
    oHtml += "<div class='timer clearFix'>";
    oHtml += "<div class='name-t fl'>";
    oHtml += "<span class='nn'>四番大奖赛</span>";
    oHtml += "<span class='nt'>时间：11-26-2016-2016</span>";
    oHtml += "</div>";
    oHtml += "<button class='fr' type='button'>登陆</button>";
    oHtml += "</div>";

    $("#load").click(function () {
        $(".recommend-park-con").append(oHtml);
    })
});

//车手列表 动态加载

$(function () {
   var oHtml = "";
    oHtml += "<div class='fans-data-detail'>";
    oHtml += "<img src='img/fans-pic.png' class='fl'>";
    oHtml += "<div class='fans-des fl'>";
    oHtml += "<h4>四番大奖赛</h4>";
    oHtml += "<p>北京盈控国际体育发展有限公司</p>";
    oHtml += "<p>1/10电房</p>";
    oHtml += "</div>";
    oHtml += "</div>";
    $("#load-mt").click(function () {
        $(this).before(oHtml);
    })
});

/*注册*/

$(function () {
    var cur = $("#agreement");
    cur.click(function () {
        if($(this).prop("checked")){
            $(this).siblings("span").addClass("checked").removeClass("check");
        }else{
            $(this).siblings("span").addClass("check").removeClass("checked");
        }
    });

    $(".reg-btn,.login-btn").click(function () {
        lockScreen($(".begin-reg"));
    });

    $(".back-btn").click(function () {
        unlockScreen($(".reg-suc"));
    })
});

//验证
$(function () {

    $("#sub").click(function () {
        if(isNull($(".code")) && pwdFn($(".pwd")) && $("#agreement").prop("checked") && phoneNum($(".dynamic-code"))){
            alert("提交成功");
            unlockScreen($(".begin-reg"));
            lockScreen($(".reg-suc"));
        }
        else{
            return false;
        }
    });
});
function phoneNum(obj) {
    if(/^\d{11}$/.test(obj.val())){
        return true;
    }
    else{
        return false;
    }
}
function pwdFn(obj) {
    if(/^.{6,32}$/.test(obj.val())){
        return true;
    }
    else{
        return false;
    }
}
function isNull(obj) {
    if(obj.val() != ""){
        return true;
    }
    else{
        return false;
    }
}

/*无缝滚动*/
$(function(){
    var oA=$(".h a");
    var liW=$(".list").eq(0).width();
    var boxCon=$(".box-con");
    var oul=$(".list").eq(0);
    oul.clone().appendTo(boxCon);
    var liL=$(".box-con ul").length;
    var boxConW=liW * liL;
    var n=1;
    boxCon.css({
        width: boxConW
    });
    oA.click(function() {
        if (n>liL-1) {
            boxCon.animate({left: 0},0);
            n=1;
        }

        boxCon.animate({
            left: -n*liW
        });
        n++;
    });
})


$(function () {
    var oUl = $("#list>ul");
    var ulHeight =oUl.eq(0).height();
    var oList=$("#list");
    var oul=oUl.eq(0);
    oul.clone().appendTo(oList);
    var newHeight = ulHeight * $("#list>ul").length;
    var aRadio = $(".radio-btn>span");
    var n = 1;
    var timer = null;
    oList.css({
        height: newHeight + "px"
    });

    timer = setInterval(function () {
        play();
    },1500);

    $(".radio-btn>span,#list").mouseover(function () {
        clearInterval(timer);
    });
    $(".radio-btn>span,#list").mouseout(function () {
        timer = setInterval(function () {
            play();
        },2000);

    });
    aRadio.each(function (i) {
        $(this).click(function () {
            clearInterval(timer);
            oList.animate({
                top:-i*ulHeight+"px"
            });
            $(this).addClass("noBg").siblings().removeClass("noBg");
            n=i;
        })
    });
    function play(){
        if (n == $("#list>ul").length-1) {
            aRadio.eq(0).addClass("noBg").siblings().removeClass("noBg");
        }
        if (n > $("#list>ul").length-1) {
            oList.animate({top:0},0);
            n=1;
        }
        oList.animate({
            top:-n*ulHeight+"px"
        });
        aRadio.eq(n).addClass("noBg").siblings().removeClass("noBg");
        n++;
    }
});







