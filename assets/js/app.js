const cargarImagen = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            document.getElementById('svg1').children[0].children[0].classList.add('active')
            document.getElementById('svg1').children[1].children[0].classList.add('active')
            document.getElementById('svg1').children[2].children[0].classList.add('active')
            document.getElementById('svg2').children[0].classList.add('active2')

        } 
        else {
            document.getElementById('svg1').children[0].children[0].classList.remove('active')
            document.getElementById('svg1').children[1].children[0].classList.remove('active')
            document.getElementById('svg1').children[2].children[0].classList.remove('active')
            document.getElementById('svg2').children[0].classList.remove('active2')

        }
    })
}
const observador = new IntersectionObserver(cargarImagen,{
    root: null,
    rootMargin: '0px',
    threshold: 0.3
});





observador.observe(svg1);
