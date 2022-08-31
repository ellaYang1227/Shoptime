// modal 內新增衣服規格
$('#js-addSpecification').click(function (e) {
    const addHTML = `<div class="form_row mb-2">
        <div class="col-auto">
            <div class="input_group">
                <div class="input_group_prepend">
                    <span class="input-group-text">Size</span>
                </div>
                <select class="form_control">
                    <option>L</option>
                    <option>M</option>
                    <option>S</option>
                </select>
            </div>
        </div>
        <div class="col">
            <div class="input_group">
                <div class="input_group_prepend">
                    <span class="input-group-text">Color</span>
                </div>
                <input type="text" class="form_control text-center" value="Gray">
            </div>
        </div>
        <div class="col">
            <div class="input_group">
                <div class="input_group_prepend">
                    <span class="input-group-text">Inventory</span>
                </div>
                <input type="number" class="form_control text-center" value="15">
            </div>
        </div>
    </div>`;

    $(this).before(addHTML);
});
