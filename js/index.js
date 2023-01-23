const fullscreenButton = document.getElementById("fullscreen");
fullscreenButton.addEventListener("click", function() {
if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
} else {
    if (document.exitFullscreen) {
    document.exitFullscreen();
    }
}
});
console.log(document.fullscreenElement);