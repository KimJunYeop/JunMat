//TODO :: 파일업로드 구현해야함.

$(document).ready(function () {
    UICssSetting();
});


function UICssSetting() {
    $("#writeInput").addClass("w3-container w3-card-2");
    $('input').addClass("w3-input w3-border w3-light-grey");
    $('label').addClass("w3-text-teal");
    $("#address_x").parent().addClass("w3-row");
    $("#address_x").addClass("w3-col s6").attr("disable");
    $("#address_y").addClass("w3-col s6").attr("disable");

    

    $('#writeSubmit').addClass("w3-btn w3-blue-grey w3-margin w3-right");
    // $("#map").attr({height : "400px" , width : "400px"});
    $("#map").hide();

    writeBind();
    fnMapInit();
}


function writeBind() {
    $("#writeSubmit").unbind("click").bind("click", function () {
        console.log('clicked');
        fnAjaxWrite();
    });

    $("#address_x,#address_y").unbind("click").bind("click", function () {
        fnOpenMap();
    });
}

function fnAjaxWrite() {
    var title = $("#title").val();
    var address_x = $("#address_x").val();
    var address_y = $("#address_y").val();

    var data = {
        title: title,
        coord_x: address_x,
        coord_y: address_y
    }

    $.ajax({
        method: 'post',
        url: '/api/write',
        data: data
    })
}

function fnOpenMap() {
    $("#mapDialog").dialog({
        width: 500,
        height: 500
    });
    $("#map").show();
}

function fnMapInit() {
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10
    });
    
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.3595704, 127.105399),
        map: map
    });

    //TODO :: 이전 마커 삭제해야함.
    naver.maps.Event.addListener(map, 'longtap', function(e) {
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(e.coord.y, e.coord.x),
            map: map
        });
        $("#address_x").val(e.coord.x);
        $("#address_y").val(e.coord.y);
    });
}