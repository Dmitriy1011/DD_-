document.addEventListener("DOMContentLoaded", function(event) {
    let upBtn = document.querySelector('.up__btn')
    upBtn.addEventListener('click', () => {
        window.scroll(0,0);
    })
});