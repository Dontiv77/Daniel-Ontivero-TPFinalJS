const products = [
    {
        id: 1,
        category: "Casco Integral",
        description: "Lorem ipsum dolor sit ame",
        name: "Casco integral",
        price:  8500,
        img: "./Assets/img/Casco Integral.JPG",
        color: "Negro",
        
    },  
    {
        id: 2,
        category: "Casco Abierto",
        description: "Lorem ipsum dolor sit ame",
        name: "Casco Abierto",
        price:  16500,
        img: "./Assets/img/Casco Abierto Negro.JPG",
        color: "Negro"  
    },
    {
        id: 3,
        category: "Casco Modular",
        description: "Lorem ipsum dolor sit ame",
        name: "Casco Modular",
        price:  6500,
        img: "./Assets/img/Casco Modular.JPG",
        color: "Negro"
    },    
] 

//ejemplo de spread 
const proximaLista = [...products, { id: 4 , category: "proximo casco", name:"sin definir ", price: "sin definir", img:"" ,color:"blanco" }]
console.log(proximaLista)