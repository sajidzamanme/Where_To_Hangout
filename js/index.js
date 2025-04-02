const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
})

document.addEventListener('click', (event) => {
    if(menu.classList.contains('flex') && !event.target.closest('#menu') && !event.target.closest('#menuBtn')) {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    }
})