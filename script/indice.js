window.onload = iniciar;

const contenedor = document.getElementById("contenedor")
const titulo = document.createElement('h1')
titulo.textContent = "Bienvenido a Cascos Van Damme" 
contenedor.append(titulo)

let listadoDeProductos = document.getElementById("listadoDeProductos")

let carrito = []

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
            mostrarCarrito()
            carTotal.innerHTML = "$ " + sumaTotal()
            
            const [a] = carrito
            //console.log(a) 
        })         
    }) 
} 
// Carrito 
function mostrarCarrito() {
    detalleDeCompra.innerHTML = ``
    carrito.forEach((product) => {
        const carro = document.createElement("li")
        carro.innerHTML += ` 
        <img src="${product.img}">
        <h3>${product.name} </h3>
        <h3>$${product.price} </h3>
        <h3>${product.color}</h3>
        <button id="btnEliminar"onclick="btnEliminar(${product.id})">Eliminar</button>
        `
        detalleDeCompra.appendChild(carro) 
        
        localStorage.setItem("carrito", JSON.stringify(carrito))
        let storage = localStorage.getItem("carrito")
        //console.log(JSON.parse(storage))
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
//timeOut
const timeOut = () => {
    setTimeout(()=>{
        Swal.fire({
            imageUrl: './Assets/img/FotoCasco.jpg',
            imageHeight: 180,
            text: "??El Casco Salva Vidas!"
        })
    }, 7000);
}
timeOut()
// Boton
function iniciar(){
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular); 
    
    let btnBorrar = document.getElementById("btnBorrar");
    btnBorrar.addEventListener("click", clickBtnBorrar);
}   
function clickBtnCalcular() {
    swal("??Quiere terminar su compra?", {
        buttons: ["Seguir Comprando","El total de su compra es $"+ sumaTotal()],
    });
    let carTotal = document.getElementById("carTotal")
    carTotal.innerHTML = " " +"El total de su compra es $" + sumaTotal()
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

function btnEliminar(productId){
    const item = carrito.find((product) => product.id ===productId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    sumaTotal()
    mostrarCarrito()
    carTotal.innerHTML = "$" + sumaTotal()
    
} 

// ejemplo de fetch con una url 
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>response.json())
// .then((json)=>console.log(json))

const getDataByAJAX = () => {
    $.ajax({
        url: "https://swapi.dev/api/people",
        success: function (result){
            //console.log("result: ",result)
        },
        error: (error) =>{
            console.error(error);
        }
    });
}

getDataByAJAX()

const fetchLocalData=()=>{
    fetch('./data.json').then((response)=>response.json())
    .then((result)=>{
        renderTitle(result.contactoSection)
    }).catch((err)=>{
        console.error(err)
    })
}

fetchLocalData()

const rederContactSection = (body)=> {
    //console.log(body)
}

const renderTitle = (body)=>{
    //console.log(body)
    let container = document.getElementById('contacto')
    let title = document.createElement('p')
    title.textContent ="Desarrollado por "+ body.contacto +" " + body.mail
    container.append(title)
}