const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

close.addEventListener('click', () => {
    menu.classList.remove('active');
})

const bars = document.querySelectorAll('.skills__bars__bar-percent');
const q = document.querySelectorAll('.quantity');
bars.forEach((bar, index) => {
    q[index].style.width = bar.innerText;
});