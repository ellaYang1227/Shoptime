
// 當前頁面 新增 class；反之 移除
$(document).ready(function(){
    const navLinks = $("a.navber_nav_link");
    for(let i = 0; i < navLinks.length; i++){
        const pathname = navLinks[i].href.replace(location.origin, '');
        if(location.pathname === '/' && i === 0){
            navLinks[0].classList.add("navber_nav_link-active");
        }else if(location.pathname === pathname){
            navLinks[i].classList.add("navber_nav_link-active");
        }else{
            navLinks[i].classList.remove("navber_nav_link-active");
        }
    }
});

// 打開 navber nav
$("#js-open_navber_nav").click(function(){
    $("#js-navber_nav").addClass("navber_nav-show");
});

// 關閉 navber nav
$("#js-close_navber_nav").click(function(){
    $("#js-navber_nav").removeClass("navber_nav-show");
});
