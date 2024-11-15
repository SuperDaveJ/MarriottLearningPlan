// Global site js

$(function () {
    $.ajaxSetup({ cache: false });

    $.material.init();

    // workaround for iOS devices
    $('[data-toggle=dropdown]').each(function () {
        this.addEventListener('click', function () { }, false);
    });

});
