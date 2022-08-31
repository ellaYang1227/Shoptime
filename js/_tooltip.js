$(function () {
    $('[data-toggle="tooltip"]').click(function (event) {
        event.preventDefault();
    });

    $(document).tooltip({
        // 內容 - title
        content: function () {
            const element = $(this);
            if (element.is('[title]')) {
                return element.attr('title');
            }
        },
        // 位置
        position: {
            my: 'center bottom-20',
            at: 'center top',
            using: function (position, feedback) {
                $(this).css(position);
                $('<div>')
                    .addClass('ui-tooltip_arrow')
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });
});
