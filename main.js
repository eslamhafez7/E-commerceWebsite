// const bar = document.getElementById('bar');
// const nav = document.getElementById('navbar');
// const close = document.getElementById('close')

// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.add('show-menu')       
//     })
// }
// if (close) {
//     close.addEventListener('click', () => {
//         nav.classList.remove('show-menu')
//     })
// }
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('show-menu')
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('show-menu')
    })
}