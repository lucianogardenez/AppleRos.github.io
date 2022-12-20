const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")

const Products = [
 
    {
        id: 1,
        name: "iPhone 13 ProMax 512 GB (Graphite)",
        price: 2199,
        stock: 7,
        img: "../images/iPhone-13-Pro-Max-512-Graphite.jpg"
    },

    {
        id: 2,
        name: "iPhone 13 ProMax 256 GB (Sierra-Blue)",
        price: 2199,
        stock: 5,
        img: "../images/iPhone-13-Pro-Max-256-Sierra-Blue.jpg "
    },

    {
        id: 3,
        name: "iPhone 13 ProMax 256 GB (Gold)",
        price: 2199,
        stock: 10,
        img: "../images/iPhone-13-Pro-Max-256-Gold.jpg"
    },

    {
        id: 4,
        name: "iPhone 13 Pro Max 128 GB (Silver)",
        price: 1650,
        stock: 16,
        img: "../images/iPhone-13-Pro-Max-128-Silver.jpg"
    },

    {
        id: 5,
        name: "iPhone 13 128 GB (Starlight)",
        price: 1399,
        stock: 7,
        img: "../images/iPhone-13-128-Starlight.jpg"
    },

    {
        id: 6,
        name: "iPhone 13 128 GB (Red)",
        price: 1399,
        stock: 4,
        img: "../images/iPhone-13-128-Red.jpg"
    },
    
    {
        id: 7,
        name: "iPhone 13 128 GB (Pink)",
        price: 1399,
        stock: 3,
        img: "../images/iPhone-13-128-Pink.jpg"
    },

    {
        id: 8,
        name: "iPhone 13 128 GB (Blue)",
        price: 1399,
        stock: 4,
        img: "../images/iPhone-13-128-Blue.jpg"
    },

    {
        id: 9,
        name: "iPhone 13 128 GB (Midnight)",
        price: 1399,
        stock: 9,
        img: "../images/iPhone-13-128-Midnight.jpg"
    },

    {
        id: 10,
        name: "iPhone 12 64 GB (White)",
        price: 1050,
        stock: 5,
        img: "../images/iPhone-12-64-White.jpg"
    },

    {
        id: 11,
        name: "iPhone 12 64 GB (Red)",
        price: 1050,
        stock: 6,
        img: "../images/iPhone-12-64-Red.jpg"
    },

    {
        id: 12,
        name: "iPhone 12 64 GB (Purple)",
        price: 1030,
        stock: 4,
        img: "../images/iPhone-12-64-Purple.jpg"
    },

    {
        id: 13,
        name: "iPhone 12 64 GB (Green)",
        price: 999,
        stock: 5,
        img: "../images/iPhone-12-64-Green.jpg"
    },

    {
        id: 14,
        name: "iPhone 12 64 GB (Black)",
        price: 999,
        stock: 1,
        img: "../images/iPhone-12-64-Black.jpg"
    },
    
    
    
    
    
]

let carrito =  JSON.parse(localStorage.getItem("carrito")) || [];

 Products.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <h4>Stock: ${product.stock}</h4>
        <p class="price">${product.price} u$s</p>

    `

    shopContent.append(content)

    let buy = document.createElement("button");
    buy.innerHTML = "Comprar";
    buy.className = "Comprar"

    content.append(buy);

    buy.addEventListener("click", () =>{
        carrito.push({
            id : product.id,
            img: product.img,
            name: product.name,
            price: product.price,

            
        });
        saveLocal();
    })


 })

 verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-tittle">Carrito
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalbutton);


    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.name}</h3>
            <p>${product.price} $</p>
        `
        modalContainer.append(carritoContent)
    })

    const total = carrito.reduce((acc, el) => acc + el.price, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = ` Total a pagar: ${total} u$s`
    modalContainer.append(totalBuying)
   

 });


 const saveLocal = () => {
    (localStorage.setItem)("carrito", JSON.stringify(carrito));
 };



 







    
 