const listProducts = [
 
    {
        id: 1,
        name: "iPhone 13 ProMax 512 GB (Graphite)",
        price: 2199,
        stock: 7,
    },

    {
        id: 2,
        name: "iPhone 13 ProMax 256 GB (Sierra-Blue)",
        price: 2199,
        stock: 5,
    },

    {
        id: 3,
        name: "iPhone 13 ProMax 256 GB (Gold)",
        price: 2199,
        stock: 10,
    },

    {
        id: 4,
        name: "iPhone 13 Pro Max 128 GB (Silver)",
        price: 1650,
        stock: 16,
    },

    {
        id: 5,
        name: "iPhone 13 128 GB (Starlight)",
        price: 1399,
        stock: 7,
    },

    {
        id: 6,
        name: "iPhone 13 128 GB (Red)",
        price: 1399,
        stock: 4,
    },
    
    {
        id: 7,
        name: "iPhone 13 128 GB (Pink)",
        price: 1399,
        stock: 3,
    },

    {
        id: 8,
        name: "iPhone 13 128 GB (Blue)",
        price: 1399,
        stock: 4,
    },

    {
        id: 9,
        name: "iPhone 13 128 GB (Midnight)",
        price: 1399,
        stock: 9,
    },

    {
        id: 10,
        name: "iPhone 12 64 GB (White)",
        price: 1050,
        stock: 5,
    },

    {
        id: 11,
        name: "iPhone 12 64 GB (Red)",
        price: 1050,
        stock: 6,
    },

    {
        id: 12,
        name: "iPhone 12 64 GB (Purple)",
        price: 1030,
        stock: 4,
    },

    {
        id: 13,
        name: "iPhone 12 64 GB (Green)",
        price: 999,
        stock: 5,
    },

    {
        id: 14,
        name: "iPhone 12 64 GB (Black)",
        price: 999,
        stock: 1,
    },
    
    
    
    
    
]


let catalog= document.getElementById('items')
let cart = []
let cartList = document.getElementById('carrito')
let buttonEmpty = document.getElementById('boton-vaciar')
let totalValue = document.getElementById('total')

buttonEmpty.addEventListener('click', emptyButtonHandler)

loadCartFromStorage()
renderCart()

listProducts.forEach((prod) => {
    let container = document.createElement('div')
    container.classList.add('card', 'col-sm-4')
    //Body
    let cardBody = document.createElement("div")
    cardBody.classList.add('card-body')
    //Title
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add('card-title')
    cardTitle.innerText = prod.name
    //Price
    let cardPrice = document.createElement("p")
    cardPrice.classList.add('card-text')
    cardPrice.innerText = `u$s ${prod.price}`
    //stock
    let cardStock = document.createElement("p")
    cardStock.classList.add('card-text')
    cardStock.innerText = `Stock: ${prod.stock}`
    //ButtonBuy
    let cardButton = document.createElement("button")
    cardButton.classList.add('btn', 'btn-primary')
    cardButton.innerText = `Comprar`
    cardButton.setAttribute('mark', prod.id)
    cardButton.addEventListener('click', addProdToCart)

    cardBody.append(cardTitle)
    cardBody.append(cardPrice)
    cardBody.append(cardStock)
    cardBody.append(cardButton)
    container.append(cardBody)
    catalog.append(container)
})

function addProdToCart(e){
    cart.push(e.target.getAttribute('mark'))
    renderCart()
}

function renderCart(){

    saveCartToStorage()
    
    cartList.innerHTML = ''
    
    let cartWithOutRepeatedElemets = [...new Set(cart)]
    
    cartWithOutRepeatedElemets.forEach((itemId) => {
        let item = listProducts.filter((products) => {
            return products.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)
    

    let linea = document.createElement('li')
    linea.classList.add('list-group-item', 'text-right', 'mx-2')
    linea.innerText = `${quantity} x ${item[0].name} - $${item[0].price}`

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
    buttonDelete.innerText = 'X'
    buttonDelete.dataset.item = itemId
    buttonDelete.addEventListener('click', deleteProduct)

   linea.append(buttonDelete)
   cartList.append(linea)
    })

    totalValue.innerText = calculateTotalPrice()
}

function deleteProduct(event){
    let id = event.target.dataset.item
    cart = cart.filter((cartId) => {
        return cartId != id
    })
    renderCart()
        
}

function emptyButtonHandler(){
    cart = []
    cartList.innerHTML = ''
    totalValue.innerHTML = 0 
}

function calculateTotalPrice(){
    return cart.reduce((total, itemId) => {
        let item = listProducts.filter((producto) => {
            return producto.id === parseInt(itemId)
        })

        return total + item[0].price
    },0)
}

function saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadCartFromStorage(){
    if(localStorage.getItem('cart') !== null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
    
}