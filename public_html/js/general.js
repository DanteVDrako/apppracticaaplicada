function redirect(path) {
    var locationOrigin = window.location.origin;
    window.location = locationOrigin + path;
}

function showError(message) {
    alert(message);
}
