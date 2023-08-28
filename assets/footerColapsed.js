
function toggleView(e) {
    if (screen.width <= 440) {
        e.currentTarget.classList.toggle('rotate')
        const ElementToHide = e.currentTarget.closest(".footer__block.footer__block--menu").querySelector('.toogle_vision')
       
        if (ElementToHide.style.maxHeight){
            ElementToHide.style.maxHeight = null;
          } else {
            ElementToHide.style.maxHeight = ElementToHide.scrollHeight + "px";
          }

        // ElementToHide.classList.toggle('hide_me')
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const menuHeadings = document.querySelectorAll('.footer__block.footer__block--menu .bold')
    menuHeadings.forEach(el => {
        el.addEventListener('click', toggleView)
    })

})

