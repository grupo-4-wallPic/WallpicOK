let precio = document.querySelector('.main-price')
let select = document.querySelector('.select-size')
let checkPrice = document.querySelector('.checkPrice')

      console.log(select.value)
// size.forEach(size => {
    select.addEventListener('change', function (){
        let valores = select.value.split(',');
        console.log(valores[1])
        precio.textContent = '$' 
        precio.textContent += valores[0]
        checkPrice.value = valores[0]
        select.value = 'hola'
    })

// })