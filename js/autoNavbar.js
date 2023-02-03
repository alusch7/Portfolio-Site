var prevScrollPosition = window.scrollY;

window.onscroll = function() {
    var bar = document.getElementById("mainNav");
    const height = bar.offsetHeight;
    var currentScrollPosition = window.scrollY;
    if (currentScrollPosition < height-20) {
        bar.classList.add("atTop");
    } else {
        bar.classList.remove("atTop");
    }
    if (prevScrollPosition > currentScrollPosition) {
        bar.style.top = "0";
    } else if (currentScrollPosition >= (height+10)){
        bar.style.top = "-100%";
    }
    prevScrollPosition = currentScrollPosition;
}