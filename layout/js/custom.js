let menu = document.getElementById('menu');
let sidepanel = document.getElementById('sidepanel');


menu.onclick = () => {
    sidepanel.classList.toggle('active');
}
function closeMenue() {
    sidepanel.classList.remove('active');
}