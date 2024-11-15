// Main menu js

$(function () {
    $("#menu-icon.glyphicon").click(function () {
        slideMenu();
    });

    $('#menu-outer').click(function () {
        slideMenu();
    });

});

function slideMenu() {
    $("#menu-icon.glyphicon").toggleClass('menu-icon-gray');
    var options = { direction: 'right' };
    $('#menu-outer').toggle('slide', options, 500);

}
