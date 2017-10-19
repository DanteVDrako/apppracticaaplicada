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
                    redirect("/home/");
                }
            }
        },
        "type": "post",
        "url": url
    });
}

function login() {
    var locationOrigin = window.location.origin;
    var url = locationOrigin + "/app/server/login";
    var user = $("#user");
    var pwd = $("#pwd");
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
                    redirect("/app/home/");
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