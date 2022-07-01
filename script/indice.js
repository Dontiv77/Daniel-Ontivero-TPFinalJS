window.onload = iniciar;

// DOM
/* let nombre = prompt("Por Favor Ingrese sus Datos")

const bienvenida = document.getElementById("saludo")
const saludo = document.createElement('h1')
saludo.textContent = "Hola " + nombre 
bienvenida.append(saludo)
let detalleDeCompra  = document.getElementById("detalleDeCompra") */

const contenedor = document.getElementById("contenedor")
const titulo = document.createElement('h1')
titulo.textContent = "Bienvenido a Cascos Van Damme" 
contenedor.append(titulo)

let listadoDeProductos = document.getElementById("listadoDeProductos")

let carrito = []
//////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrarProductos() {
    products.forEach((product) => {
        let card = document.createElement("div")
        listadoDeProductos.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", product.img)
        img.setAttribute("class", "cascos")
        let name = document.createElement("h3")
        name.innerText = (product.name)
        let price = document.createElement("p")
        price.innerText = (product.price)
        let buyButton = document.createElement("button")
        buyButton.innerText = ("Agregar al carrito")
        card.append(img, name, price, buyButton)
        carritoVacio()
        buyButton.addEventListener("click", function () {
            carrito.push(product)
            swal({
                text: "Agregaste 1 " + product.name + " al carrito",
                icon: "success",
                button: "OK",
            });
            
            detalleDeCompra.innerHTML = `` 
            mostrarCarrito()
            // ejemplo de desestructurarion de array
            const [a] = carrito
            console.log(a) 
        }) 
    }) 
} 
// Carrito 
function mostrarCarrito() {
    carrito.forEach((product) => {
        const carro = document.createElement("li")
        carro.innerHTML += ` 
        <img src="${product.img}">
        <h3>${product.name} </h3>
        <h3>$${product.price} </h3>
        <h3>${product.color}</h3>
        `
        detalleDeCompra.appendChild(carro) 
        //Local Storage 
        localStorage.setItem("carrito", JSON.stringify(carrito))
        let storage = localStorage.getItem("carrito")
        console.log(JSON.parse(storage))
    })
}
//Carrito vacio: 
const carritoVacio = () =>  carrito.length === 0 && (detalleDeCompra.innerHTML = ("El carrito esta vacio"))

function sumaTotal (){
const total = carrito.map((item) => parseInt(item.price)).reduce((carritoTotalPrice, currentItemPrice) => carritoTotalPrice + currentItemPrice, 0);
return total;
    // const importes = carrito.map(({price})=>price) 
    // console.log(importes) 
    
    // const acumular = (acumulador, importes) => acumulador + importes ;
    // let total = importes.reduce(acumular, 0)
    // return total; 
}
//llamado a las funciones
mostrarProductos()
iniciar()
// boton
function iniciar(){
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular); 
    
    let btnBorrar = document.getElementById("btnBorrar");
    btnBorrar.addEventListener("click", clickBtnBorrar);
}   
function clickBtnCalcular() {
    swal("¿Quiere terminar su compra?", {
        buttons: ["Seguir Comprando","El total de su compra es $"+ sumaTotal()],
    });
    let carTotal = document.getElementById("carTotal")
    carTotal.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>' + (" El total de su compra es $" + sumaTotal())
}  

function clickBtnBorrar() {
    swal({
        title: "Seguro que quiere eliminar su carrito?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            detalleDeCompra.innerHTML =``
            carrito = []
            sumaTotal()
            carritoVacio() 
            carTotal.innerHTML =``
        swal("Listo! su carrito fue eliminado", {
            icon: "success",
        });
        } 
    });
}  

