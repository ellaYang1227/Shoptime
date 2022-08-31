// 點擊空白處 關閉下拉選單
$(document).click(function (e) {
    $('.dropdown_menu-show').removeClass('dropdown_menu-show');
});

$('[data-toggle="dropdown"]').click(function (e) {
    e.stopPropagation();
    const dropdowns = $('[data-toggle="dropdown"]');
    const currentIndex = dropdowns.index(this);
    for (let i = 0; i < dropdowns.length; i++) {
        const dropdownMenu = dropdowns[i].nextSibling.nextSibling;
        if (i === currentIndex) {
            dropdownMenu.classList.toggle('dropdown_menu-show');
        } else {
            dropdownMenu.classList.remove('dropdown_menu-show');
        }
    }
});

// form_check(checkbox) 下拉選單不關閉
$('.form_check').click(function (e) {
    e.stopPropagation();
});

// 重設下拉選項
$('[data-updateBtnText="true"]').click(function (e) {
    e.preventDefault();
    $(this).addClass('dropdown_menu_item-active');
    const updateText = $(this).text();
    $(this)
        .siblings('.dropdown_menu_item-active')
        .removeClass('dropdown_menu_item-active');
    $(this).parent().prev('[data-toggle="dropdown"]').text(updateText);
});
