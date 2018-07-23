$(document).ready(function () {
    writeUICssSetting();
});


function writeUICssSetting() {
    $('#mySidebar').addClass('w3-sidebar w3-bar-block w3-black w3-animate-right w3-top w3-text-light-grey w3-large');
    $('.mySidebarValue').addClass('w3-bar-item w3-button w3-center w3-padding-16');
    $('header').addClass('w3-container w3-top w3-white w3-xlarge');
    $('header > span').addClass('w3-left w3-padding');
    $('header > a').addClass('w3-right w3-button w3-white');
    writeBind();
}

function writeBind() {
    $('#sideMenu').on('click', function () {
        $('#mySidebar').show();
    })

    $('.mySidebarValue').on('click',function(){
        w3_close();
    });

    $('#layoutTitle').hover(function() {
        $(this).css('cursor','pointer');
    });

    $("#layoutTitle").on('click',function(){
        console.log('clcik');
        var url = "http://127.0.0.1:8090/"
        $(location).attr('href', url);
    })
}

function w3_close() {
    $('#mySidebar').hide();
}