window.sr = ScrollReveal();

//animacion header
/* 
hace una transicion de arriba acia abajo que dura 2 segundos en ejecutarse (2000)
el -100 indica que venga desde la 
*/
sr.reveal('.encabezado', {
    duration: 1000,
    origin: 'bottom',
    distance: '-100px'
})

sr.reveal('.abajo', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
})

sr.reveal('.rotacion', {
    duration: 2000,
    rotate: {
        x: 1,
        y: 180
    }
})

//animacion portada
/* 
hace una transicion de arriba acia abajo que dura 1 segundo en ejecutarse (1000)
*/
sr.reveal('.scroll-portada', {
    duration: 4000,
    origin: 'bottom',
    distance: '100px'
})


//animaomos cion s"index.html"
/* 
hace una transicion desde el lado izquierdo que dura 2 segundo en ejecutarse (2000)
*/
sr.reveal('.izquierda', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
    opacity: 0.2
})
sr.reveal('.derecha', {
    duration: 2000,
    origin: 'left',
    distance: '-200px',
    opacity: 0.2
})

//animacion nuestros servicios/nuestras sedes "index.html"/"servicios.html"/"nosotros.html"
/* 
transicion de derecha a izquierda 2 segundos
*/
sr.reveal('.cartas', {
    duration: 3000,
    origin: 'bottom',
    distance: '-150px',

})

sr.reveal('.opacidad', {
    duration: 2000,
    origin: 'right',
    distance: '50px',
    opacity: 0.2,
});






/* animacion targetas "nosotros.html*/
sr.reveal('.targetas1', {
    duration: 3000,
    origin: 'right',
    distance: '200px'
})
sr.reveal('.targetas2', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
})


sr.reveal('.fin', {
    duration: 2000,
    origin: 'right',
    distance: '200px'
})
sr.reveal('.finbtn', {
    duration: 2000,
    origin: 'right',
    distance: '-200px'
})



//animacion footer
/* 
hace una trancicion de arriba acia abajo que dura 1 segundo en ejecutarse (1000)
*/
sr.reveal('.footer-links', {
    duration: 2000,
    origin: 'right',
    distance: '-300px'
})

