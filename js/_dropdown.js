// 點擊空白處 關閉下拉選單
$(document).click(function (e) {
    e.stopPropagation();
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

const statusList = {
  paid: 'btn-success',
  unpaid: 'btn-darkGrey',
  shipping: 'btn-warning',
  done: 'btn-primary',
  published: 'btn-success',
  unpublished: 'btn-darkGrey'
};

// 重設下拉選項
$('[data-updateBtnText="true"]').click(function (e) {
    e.preventDefault();
    // 按鈕文字 & 狀態
    const dropdown = $(this).parent().prev('[data-toggle="dropdown"]');
    if($(this).is('.dropdown_menu_item-active')){
        e.stopPropagation();
        dropdown.addClass('dropdown_menu-show');
    }else{
        // 更新按鈕文字 & 顏色
        const updateText = $(this).text().toLowerCase();
        const originalText = dropdown.text().toLowerCase();
        dropdown.text(updateText).removeClass(statusList[originalText]).addClass(statusList[updateText]);

        // 更新 tb 樣式
        const currentTrGroupId = dropdown.parents('tr').data('group');
        const currentTrDom = $(`[data-group="${currentTrGroupId}"]`);
        if(updateText === 'done' || updateText === 'unpaid' || updateText === 'unpublished'){
            currentTrDom.addClass('text-darkGrey');

            if(updateText === 'done'){
                currentTrDom.children().addClass('text-decoration-delete');
            }else{
                currentTrDom.children().removeClass('text-decoration-delete');
            }
        } else {
            currentTrDom.removeClass('text-darkGrey').children().removeClass('text-decoration-delete');
        }
    }

    $(this).addClass('dropdown_menu_item-active').siblings('.dropdown_menu_item-active')
        .removeClass('dropdown_menu_item-active');

    
});
