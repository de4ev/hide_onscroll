let prevScrollPosition = 0;
let currentScrollPosition = window.pageYOffset;
const navbar = document.querySelector('.hide-onscroll')

window.onscroll = function() {
    currentScrollPosition = window.pageYOffset;

    if ((prevScrollPosition > currentScrollPosition) && (prevScrollPosition <= document.body.scrollHeight - window.innerHeight) || (prevScrollPosition < 0)) {
        navbar.style.top = '0'
    } else if ((prevScrollPosition < currentScrollPosition) && (prevScrollPosition !== 0)) {
        navbar.style.top = '-80px'
    }
    prevScrollPosition = currentScrollPosition
    console.log(currentScrollPosition, prevScrollPosition, this.document.body.scrollHeight - window.innerHeight);
}

