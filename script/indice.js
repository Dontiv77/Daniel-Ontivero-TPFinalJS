window.onload = iniciar;
// DOM
let nombre = prompt("Por Favor Ingrese sus Datos")

const bienvenida = document.getElementById("saludo")
const saludo = document.createElement('h1')
saludo.textContent = "Hola " + nombre 
bienvenida.append(saludo)
let detalleDeCompra  = document.getElementById("detalleDeCompra")

const contenedor = document.getElementById("contenedor")
const titulo = document.createElement('h1')
titulo.textContent = "Bienvenido a Cascos Van Damme" 
contenedor.append(titulo)

let listadoDeProductos = document.getElementById("listadoDeProductos")

let carrito = []
console.log(carrito)
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

        buyButton.addEventListener("click", function () {
            carrito.push(product)
            alert("Agregaste " + product.name + " al carrito")
            detalleDeCompra.innerHTML = `` 
            mostrarCarrito()
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
        let btnQuitarProducto = document.getElementById("btnBorrar")
        btnQuitarProducto.addEventListener("click", ()=>{
            carrito = []
            detalleDeCompra.innerHTML =``
            sumaTotal()
        })
    //Local Storage 
    localStorage.setItem("carrito", JSON.stringify(carrito))
    let storage = localStorage.getItem("carrito")
    console.log(JSON.parse(storage))
    })
    }

//CARRITO VACIO: 
if (!carrito.length) {
    detalleDeCompra.innerHTML = ("El carrito esta vacio")
}  
function sumaTotal (){
    const importes = carrito.map(({price})=>price) 
    console.log(importes) 
    
    const acumular = (acumulador, importes) => acumulador + importes ;
    let total = importes.reduce(acumular, 0)
    return total;
    
}
// llamado a las funciones
mostrarProductos()
iniciar()

// boton
function iniciar(){
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);    
}   

function clickBtnCalcular() {
    let btnCalcular = document.getElementById("btnCalcular")
    btnCalcular = alert("el total es $ " + sumaTotal())
}  

////////////////////////////////////////////////////////////////////////////////////








