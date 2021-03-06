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
            var dataErr = err.responseJSON;
            if (dataErr.codeStatus === 401) {
                if (dataErr.message === 'unauthorized') {
                    redirect("/public_html/html/login.html");
                }
            }
        },
        "success": function (data) {
            if (data.codeStatus === 200) {
                document.title = document.title + " " + data.NOMBRE_USUARIO;
                $("#lblWelcome").html("Bienvenido " + data.NOMBRE_USUARIO);
            }
        },
        "type": "post",
        "url": url
    });
}

function logout() {
    var locationOrigin = window.location.origin;
    var url = locationOrigin + "/server/logout";
    $.ajax({
        "data": {},
        "dataType": "json",
        "error": function (err) {
            showError(err.responseJSON.message);
        },
        "success": function (data) {
            if (data.codeStatus === 200) {
                if (data.message === "closed session") {
                    window.location.reload();
                }
            }
        },
        "type": "post",
        "url": url
    });
}


