/*
window.addEventListener('load', ()=>{
    const parent = document.querySelectorAll('.parent')
    const sbox = document.querySelectorAll('.sbox')q
    const loader = document.querySelector('.loader')

    loader.classList.add('loader-hidden')

    loader.addEventListener("transitionend", ()=>{
        document.body.removeChild('loader')
        parent.classList.remove('parent-hide')
        sbox.classList.remove('sbox-hide')
    })
}) */

window.addEventListener('load', () => {
    const parent = document.querySelector('.parent');
    const sbox = document.querySelector('.sbox');
    const loader = document.querySelector('.loader');
    const text = document.querySelector('.toptxt')

    loader.classList.add('loader-hidden');

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
        parent.classList.remove('parent-hide');
        sbox.classList.remove('sbox-hide');
        text.classList.remove('txthide')
    });
});






