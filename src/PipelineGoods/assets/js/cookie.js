function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function checkLogin() {
    if (readCookie("user")) {
        document.getElementById("userNotLogin").style.display = "none";
        document.getElementById("userLogin").style.display = "block";
    } else {
        document.getElementById("userNotLogin").style.display = "block";
        document.getElementById("userLogin").style.display = "none";
    }
}

function logout() {
    eraseCookie("user");
}

function goCookie() {
    var user = document.getElementById("user").value;
    if (user != "") {
        createCookie("user", user, 1);
    }
}