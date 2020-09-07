let categoria = document.querySelector('.categorias-header');
let desplegable = document.querySelector('.sub-menu-header');
// let header = document.querySelector('.header-center')

categoria.addEventListener( 'click', () => {
    if (desplegable.style.display == 'block') {
        desplegable.style.display = 'none'
    }else{
        desplegable.style.display = 'block'
    }
} )
// categoria.addEventListener('dblclick', () => {
   
//     desplegable.style.display = 'none'

// })

