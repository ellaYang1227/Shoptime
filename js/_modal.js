// 開啟 modal
$('[data-toggle="modal"]').click(function (e) {
    const currentId = $(this).data('target');
    $(currentId).addClass('modal-show');
    $('body').css('overflow', 'hidden');
});

// 關閉 modal
$('[data-dismiss="modal"]').click(function (e) {
    $(this).parents('.modal').removeClass('modal-show');
    $('body').removeAttr('style');
});

// 點擊背景關閉 modal
$('.modal').click(function (e) {
    const currentId = $(this).attr('id');
    $(`#${currentId}`).removeClass('modal-show');
    $('body').removeAttr('style');
});

// modal_content 不關閉 modal
$('.modal_content').click(function (e) {
    e.stopPropagation();
});
