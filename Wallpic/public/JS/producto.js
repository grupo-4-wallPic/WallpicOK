let precio = document.querySelector('.main-price')
let sizes = document.querySelectorAll('.size-input')
let checkPrice = document.querySelector('.checkPrice')


sizes.forEach(size => {
    size.addEventListener('click', function (){
        precio.textContent = '$' 
        precio.textContent += size.id
        checkPrice.value = size.id
    })

})