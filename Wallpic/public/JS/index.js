const izquierda = document.getElementById("leftarrow");
const derecha = document.getElementById("rightarrow");
const fila = document.querySelector (".carousel")
const productos = document.querySelectorAll(".producto")

derecha.addEventListener('click', function (){
fila.scrollLeft += 300;

});
izquierda.addEventListener('click', function (){
	fila.scrollLeft -= 300;
	
	});
productos.forEach ((producto)=> {
	producto.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout (() => {
			productos.forEach(producto => producto.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});
fila.addEventListener ('mouseleave', ()=> {
	productos.forEach(producto => producto.classList.remove('hover'));
});


