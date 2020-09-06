window.addEventListener('load', () => {

    const price = document.querySelectorAll('.price-change');
    const quantity = document.querySelectorAll('.quantity-change');
    const btnMinus = document.querySelectorAll('.cart-hero-center-minus')
    const btnPlus = document.querySelectorAll('.cart-hero-center-plus')
    const unityPrice = document.querySelectorAll('.unity-price')
    // Subtotal
    const subPrice = document.querySelector('.sub-price')
    // Postal
    const postalBtn = document.querySelector('.postal-btn')
    const inputPostal = document.querySelector('.input-postal')
    const divDestination = document.querySelector('.destination') 
    // Precio total
    const totalPrice = document.querySelector('.price-total')

    let acuPrice = 0;

    // Valores para el subtotal
    
    price.forEach( price => {
        acuPrice += Number(price.textContent)
       } )
       subPrice.textContent = `$${acuPrice}.00`
       totalPrice.textContent = `$${acuPrice}.00`

    quantityHolder = [];

    btnMinus.forEach( (btn, idx) => {

        quantityHolder.push(Number(quantity[idx].value))
        let priceHolder = Number(unityPrice[idx].textContent)

        btn.addEventListener( 'click', () => {
            if (quantityHolder[idx] > 1){
                // Modifico cantidad
            quantityHolder[idx] -= 1
            quantity[idx].value = quantityHolder[idx]
                // Hago calculo para el precio
            price[idx].textContent = (priceHolder * quantityHolder[idx]) + '.00' 
                // Hago calculo para Subtotal
            let acuPrice = 0;
            price.forEach(price => {
                acuPrice += Number(price.textContent)
            })
            subPrice.textContent = `$${acuPrice}.00`
            totalPrice.textContent = `$${acuPrice}.00`

            } 
        } )

    } );

    btnPlus.forEach( (btn, idx) => {

        quantityHolder.push(Number(quantity[idx].value))
        let priceHolder = Number(unityPrice[idx].textContent)
        let subTotal = Number(subPrice.textContent)

        btn.addEventListener( 'click', () => {
            // Modifico cantidad
            quantityHolder[idx] += 1
            quantity[idx].value = quantityHolder[idx]
            // Hago calculo para precio
            price[idx].textContent = (priceHolder * quantityHolder[idx]) + '.00' 
            // Modifico subtotal
            let acuPrice = 0;
            price.forEach(price => {
                acuPrice += Number(price.textContent)
            })
            subPrice.textContent = `$${acuPrice}.00`
            totalPrice.textContent = `$${acuPrice}.00`

        } )

    } );


    // Buscador código postal

    const codigosPostales = [
        {
            codigo: 5700,
            provincia: 'San Luis',
            ciudad: 'Ciudad de San Luis',
            precio: 400
        },
        {
            codigo: 5000,
            provincia: 'Córdoba',
            ciudad: 'Ciudad de Córdoba',
            precio: 200
        },
        {
            codigo: 4600,
            provincia: 'Jujuy',
            ciudad: 'San Salvador de Jujuy',
            precio: 600
        },
        {
            codigo: 3300,
            provincia: 'Misiones',
            ciudad: 'Posadas',
            precio: 550
        } 
    ];




    postalBtn.addEventListener('click', () => {

        acuPrice = 0;

        price.forEach(price => {
            acuPrice += Number(price.textContent)
        })
        
        let numberCp = Number(inputPostal.value)
        let findCp = codigosPostales.find( codigo =>
            codigo.codigo == numberCp)

        if(findCp) {

            divDestination.innerHTML = `<p>Ciudad: ${findCp.ciudad}</p>\n<p>Precio del envío: $${findCp.precio}</p>`
            
            acuPrice = acuPrice + findCp.precio
            totalPrice.textContent = `$${acuPrice}.00`

        }else {
            divDestination.innerHTML = `<p>No encontrado</p>`
        }

    })

})

    
