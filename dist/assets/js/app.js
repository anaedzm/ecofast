

function slide(el) {
    const buttons = document.querySelector('#'+ el.parentNode.parentNode.id).querySelector('#'+el.parentNode.id).childNodes
    console.log(buttons)
    buttons.forEach(function(elem) {
        elem.classList.remove('active')
    })
    el.classList.add('active');

    const slides = document.getElementById(el.parentNode.parentNode.id + '-' + 'slides-container').childNodes
    const currSlide = document.getElementById(el.parentNode.parentNode.id + '-' + el.id)
    slides.forEach(function(elem) {
        elem.classList.remove('active')
    })
    currSlide.classList.add('active')
}


