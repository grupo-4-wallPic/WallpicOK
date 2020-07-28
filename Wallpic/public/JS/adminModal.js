//********* Lógica de Admin ********
window.addEventListener('load', () => {

 
let btnNewPic = document.getElementById('btn-newpic')
let btnColor = document.getElementById('btn-color')
let btnSizes = document.getElementById('btn-sizes')
let btnCategories = document.getElementById('btn-categories')

let newPic = document.getElementById('admin-form-new')
let newColor = document.getElementById('admin-form-color')
let newSizes = document.getElementById('admin-form-sizes')
let newCategory = document.getElementById('admin-form-categories')



btnNewPic.addEventListener('click', function () {
    newPic.style.display = 'flex'
    newColor.style.display = 'none'
    newSizes.style.display = 'none'
    newCategory.style.display = 'none'
});

btnColor.addEventListener('click', function () {
    newPic.style.display = 'none'
    newColor.style.display = 'flex'
    newSizes.style.display = 'none'
    newCategory.style.display = 'none'
});

btnSizes.addEventListener('click', function () {
    newPic.style.display = 'none'
    newColor.style.display = 'none'
    newSizes.style.display = 'flex'
    newCategory.style.display = 'none'
});

btnCategories.addEventListener('click', function () {
    newPic.style.display = 'none'
    newColor.style.display = 'none'
    newSizes.style.display = 'none'
    newCategory.style.display = 'flex'
});

// Lógica de formularios Update y destroy
// Color

colorList = document.querySelectorAll('.form-list-color')

// console.log(colorList)

colorList.forEach( (color) => {
    color.addEventListener('click', () => {
        // Tomo valores
        let idColor = color.attributes.id.value
        let colorName = color.innerHTML
        // Saco formulario creacion y pongo el de update
        document.querySelector("#admin-color-form-create").style.display="none"
        document.querySelector("#admin-form-color-update").style.display="flex"
        // Pongo valores en el formulario update y en delete
        document.querySelector('#color-form-input-update').attributes.value.value = colorName
        document.querySelector("#admin-form-color-update").attributes.action.value= `admin/color/update/${idColor}`
        // Formulario destroy
        let destroy = document.querySelector("#form-destroy-color")
        destroy.style.display= 'flex'
        destroy.attributes.action.value= `admin/color/delete/${idColor}`
        // console.log(input)
    })
})  

// Lógica de formularios Update y destroy
// Size

sizeList = document.querySelectorAll('.form-list-size')
console.log(sizeList)
// console.log(colorList)

sizeList.forEach( (size) => {
    size.addEventListener('click', () => {
        // Tomo valores
        let idSize = size.attributes.id.value
        let sizeName = size.children[0].innerHTML
        let sizePrice = size.children[1].innerHTML
        
        // Saco formulario creacion y pongo el de update
        document.querySelector("#admin-size-form-create").style.display="none"
        document.querySelector("#admin-size-form-update").style.display="flex"
        // Pongo valores en el formulario update
        document.querySelector('#size-input-size').attributes.value.value = sizeName;
        let precio = document.querySelector('#input-price').attributes.value.value = sizePrice;
        
        document.querySelector("#admin-size-form-update").attributes.action.value= `admin/size/update/${idSize}`
        // Formulario destroy, valores y display
        let destroy = document.querySelector("#form-destroy-size")
        destroy.style.display= 'flex'
        destroy.attributes.action.value= `admin/color/delete/${idSize}`
        // console.log(input)
    })
})   

})
