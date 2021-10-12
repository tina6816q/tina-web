var lastScrollTop = 0;
var isMobile = false; //initiate as false

// 行動裝置判定 device detection
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
}






// 設定會員中心hover選單顏色
function userNav_setColor(){
    let mainNav_color = $('#WY-main-nav').css('background-color');
    $('.WY-user_subnav').css('background-color', mainNav_color);
}






// ------頁面滾動設定---------------------------------------------------
$(window).scroll(function(){
    let scrollTop=$(this).scrollTop();
    let windowHeight=$(window).height();
    let menuActive = $("#WY-menu_bars").hasClass("active");
    
    // function showBtn(){  // 設定滾動結束後1秒顯示回到頁首按鈕
    //     setTimeout(function(){
    //         $("#WY-topBtn").addClass("show"); 
    //     },500)
    // }
    

    
    

    if (scrollTop>windowHeight*1){ //如果滾動後的位置大於一個半視窗高度，則呼叫showBtn
        $("#WY-topBtn").addClass("show"); 
    }else{
        $("#WY-topBtn").removeClass("show");
    }

    //$("#WY-topBtn").removeClass("show");//滾動時隱藏回到頁首按鈕
    

    //nav fix setting
    if(scrollTop>0){
        $('#WY-main-nav').addClass('fix');
    }else{
        $('#WY-main-nav').removeClass('fix');
    }
    if(scrollTop > windowHeight/2 && scrollTop < lastScrollTop){
        $('#WY-main-nav').addClass('show');
    }else if( scrollTop > lastScrollTop){
        $('#WY-main-nav').removeClass('show');
    }
    lastScrollTop = scrollTop;
    
    if(!isMobile){
        //若非行動裝置，捲動則收起手機選單
        $("#WY-menu_bars").removeClass("active");
        $(".WY-mobile_nav").removeClass("active"); 
    }

    if(isMobile && menuActive){
        $('#WY-main-nav').addClass('show');
    }

    //設定會員登入hover選單顏色
    userNav_setColor();
})




// // 回到頁首按鈕
// $("#WY-topBtn").click(function(){
//     $("html, body").animate({
//         scrollTop:0
//     },500)
// })
$("#WY-topBtn").click(function(){
    window.scroll({
        top: 0,  
        behavior: 'smooth'
        });
});
//手機menu
$("#WY-menu_bars").click(function(){
    
    $("#WY-menu_bars").toggleClass("active");
    $(".WY-mobile_nav").toggleClass("active");
})

