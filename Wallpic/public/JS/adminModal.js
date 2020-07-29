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

// Update and Destroy forms 
let createCategory= document.querySelector("#admin-category-form-create")
let updateCategory= document.querySelector("#admin-category-form-update")
let destroyCategory = document.querySelector("#form-destroy-category")

let createColor= document.querySelector("#admin-color-form-create")
let updateColor= document.querySelector("#admin-form-color-update")
let destroyColor = document.querySelector("#form-destroy-color")

let createSize= document.querySelector("#admin-size-form-create")
let updateSize= document.querySelector("#admin-size-form-update")
let destroySize = document.querySelector("#form-destroy-size")

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
    createColor.style.display= 'flex'
    updateColor.style.display= 'none'
    destroyColor.style.display= 'none'
});

btnSizes.addEventListener('click', function () {
    newPic.style.display = 'none'
    newColor.style.display = 'none'
    newSizes.style.display = 'flex'
    newCategory.style.display = 'none'
    createSize.style.display= 'flex'
    updateSize.style.display= 'none'
    destroySize.style.display= 'none'
});

btnCategories.addEventListener('click', function () {
    newPic.style.display = 'none'
    newColor.style.display = 'none'
    newSizes.style.display = 'none'
    newCategory.style.display = 'flex'
    createCategory.style.display= 'flex'
    updateCategory.style.display= 'none'
    destroyCategory.style.display= 'none'
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
        createColor.style.display="none"
        updateColor.style.display="flex"
        // Pongo valores en el formulario update y en delete
        document.querySelector('#color-form-input-update').attributes.value.value = colorName
        document.querySelector("#admin-form-color-update").attributes.action.value= `admin/color/update/${idColor}?_method=PUT`
        // Formulario destroy
        
        destroyColor.style.display= 'flex'
        destroyColor.attributes.action.value= `admin/color/delete/${idColor}?_method=DELETE`
        // console.log(input)
    })
})  

// Lógica de formularios Update y destroy
// Size

sizeList = document.querySelectorAll('.form-list-size')

// console.log(colorList)

sizeList.forEach( (size) => {
    size.addEventListener('click', () => {
        // Tomo valores
        let idSize = size.attributes.id.value
        let sizeName = size.children[0].innerHTML
        let sizePrice = size.children[1].innerHTML
        
        // Saco formulario creacion y pongo el de update
        createSize.style.display="none"
        updateSize.style.display="flex"
        // Pongo valores en el formulario update
        document.querySelector('#size-input-size').attributes.value.value = sizeName;
        let precio = document.querySelector('#input-price').attributes.value.value = sizePrice;
        
        document.querySelector("#admin-size-form-update").attributes.action.value= `admin/size/update/${idSize}?_method=PUT`
        // Formulario destroy, valores y display
        
        destroySize.style.display= 'flex'
        destroySize.attributes.action.value= `admin/color/delete/${idSize}?_method=DELETE`
        // console.log(input)
    })
})   


// Lógica de formularios Update y destroy
// Categorías

categoriesList = document.querySelectorAll('.form-list-categories')

// console.log(colorList)

categoriesList.forEach( (category) => {
    category.addEventListener('click', () => {
        // Tomo valores
        let categoryId = category.attributes.id.value
        let categoryName = category.innerHTML
        // Saco formulario creacion y pongo el de update
        createCategory.style.display="none"
        updateCategory.style.display="flex"
        // Pongo valores en el formulario update y en delete
        document.querySelector('#category-form-input-update').attributes.value.value = categoryName
        document.querySelector("#admin-category-form-update").attributes.action.value= `admin/category/update/${categoryId}?_method=PUT`
        // Formulario destroy
    
        destroyCategory.style.display= 'flex'
        destroyCategory.attributes.action.value= `admin/category/delete/${categoryId}?_method=DELETE`
        // console.log(input)
    })
})  

})
