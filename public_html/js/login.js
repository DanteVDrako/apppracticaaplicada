function init() {
    loadUser();
}

function loadUser() {
    var locationOrigin = window.location.origin;
    var url = locationOrigin + "/server/user";
    $.ajax({
        "data": {},
        "dataType": "json",
        "error": function (err) {

        },
        "success": function (data) {
            if (data.codeStatus === 200) {
                if (data.ID_USUARIO) {
                    redirect("/public_html/html/home.html");
                }
            }
        },
        "type": "post",
        "url": url
    });
}

function login() {
    var locationOrigin = window.location.origin;
    var url = locationOrigin + "/server/login";
    var user = $("#user");
    if (user.val() === "") {
        user.addClass("err");
    }
    var pwd = $("#pwd");
    if (pwd.val() === "") {
        pwd.addClass("err");
    }
    $.ajax({
        "data": {
            "user": user.val(),
            "pwd": pwd.val()
        },
        "dataType": "json",
        "error": function (err) {
            showError(err.responseJSON.message);
        },
        "success": function (data) {
            if (data.codeStatus === 200) {
                if (data.message === "authorized") {
                    redirect("/public_html/html/home.html");
                }
            }
        },
        "type": "post",
        "url": url
    });
}

function reset() {
    $("#user").val("");
    $("#pwd").val("");
}