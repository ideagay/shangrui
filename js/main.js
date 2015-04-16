// JavaScript Document


//幻灯片
$(function(){
    $('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false
    });
});


$(function(){
    window.onload=function(){
        var heightL=$(".ny-main-left").outerHeight();
        var heightR=$(".ny-main-right").outerHeight();
        var mh=Math.max(heightL,heightR);
        $(".ny-main-left").height(mh);
        $(".ny-main-right").height(mh);
    }
})







