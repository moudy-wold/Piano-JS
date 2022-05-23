addEventListener("keydown", function (e) {
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // audio.currentTime = 0;
    audio.play();
    key.classList.add("active");
    setTimeout(function () {
        key.classList.remove("active");
    }, 700);

});

