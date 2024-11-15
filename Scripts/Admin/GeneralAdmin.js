
// clear validation errors
$.fn.clearErrors = function () {
    $('.field-validation-error').text('');
    $('.input-validation-error').text('');
};

// hide alert instead of removing
$('.alert a.close').click(function () {
    $(this).parent().hide();
});

// show success/error validation
function showValidation(type, message) {
    switch (type) {
        case "success":
            $('#validationError').hide();
            $('#validationSuccess .message').html(message);
            $('#validationSuccess').show();
            break;
        case "error":
            $('#validationSuccess').hide();
            $('#validationError .message').html(message);
            $('#validationError').show();
            break;
    }
}

// toggle button and loading image
function toggleLoading(buttonId, showLoading) {
    $(buttonId).prop('disabled', showLoading);
    if (showLoading) {
        $('.popup-loading-image').show();
    }
    else {
        $('.popup-loading-image').hide();
    }
}

// disable dialog button
function disableDialogButton(dialogId, disabled) {
    if (dialogId.indexOf("addEdit") >= 0) {
        $('button#addEditButton').prop('disabled', disabled);
    }
    else {
        $('button#deleteButton').prop('disabled', disabled);
    }
}

// restore dialog button, hide loading gif
function resetDialog(dialogId) {
    disableDialogButton(dialogId, false);
    $('.popup-loading-image').hide();
}

// format date picker
$(".date-picker").datepicker({
    inline: true,
    showOtherMonths: true,
    selectOtherMonths: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dateFormat: 'm/d/yy',
    defaultDate: 0
});

function setupMultiselects() {
    initMultiselect('userItems');
    initMultiselect('continentItems');
    initMultiselect('brandItems');
    initMultiselect('levelItems');
    initMultiselect('workareaItems');
    initMultiselect('functionItems');

    $('.dropdown-div').show();
}

function initMultiselect(dropdownId) {
    $('#' + dropdownId).multiselect({
        buttonWidth: '100%',
        maxHeight: 200,
        enableHTML: true,
        nonSelectedText: '&nbsp;',
        includeSelectAllOption: true,
        includeSelectAllIfMoreThan: 1,
        selectAllText: '(Select all)',
        numberDisplayed: 1,
        enableFiltering: ((dropdownId === 'userItems')? true : false)
    });
}
