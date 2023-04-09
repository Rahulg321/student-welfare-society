
let g_button = document.getElementById('btn');
let arr = ['BUY FOOD!', 'STAGE ACTING', 'STORY TELLING!'];

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

function genrate() {
    console.log('ran');
    document.getElementsByTagName("h5")[0].innerHTML = arr[(Math.floor(random(1, 4))) - 1];
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
});



const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));