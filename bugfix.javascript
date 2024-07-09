let url = window.location.href;

if (url.match("index.html")) {
    window.location.href = url.replace("index.html", "");
} else if (url.match(".html")) {
    window.location.href = url.replace(".html", "");
} else if (url.match(/\.\w+$/)) { // This regex matches any file extension
    window.location.href = "/";
}
