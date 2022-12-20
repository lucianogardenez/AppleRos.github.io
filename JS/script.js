function Product(name, price, stock, img){
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.img = img;
}

let productA = new Product("Iphone 13 ProMax 512gb(Graphite)", 2350, 5)
let productB = new Product("Iphone 13 128gb (Pink)", 1399, 5)
let productC = new Product ("Iphone 12 65gb (Black)", 1099, 2)
let productD = new Product ("Iphone 14 ProMax", 2700, 0)

let listProducts = [productA, productB, productC, productD]

let listProductWithStock = listProducts.filter((prod) => prod.stock > 0)

let listNames = listProductWithStock.map((prod) => prod.name)

for (const prod of listProductWithStock){

    let catalog = document.getElementById("catalog")

    let card = document.createElement("div")

    card.className = "card"

    card.innerHTML = `<h2 class="tittle">${prod.name}</h2><p>Precio: u$s ${prod.price}</p><img src=${prod.img}</img>`

    catalog.append(card)

}

let button = document.getElementById("firstButton")

button.addEventListener("click", viewForConsole)

function viewForConsole(){
    console.log("Hiciste Click")
}













let priceTotal = 0;

let discountProduct = 0;


function price (quantity, price,discountProduct){
    priceTotal += (quantity * price) - discountProduct
}

let visitorName = prompt("Hola, bienvenidos a AppleRos ingrese su nombre:");
//Iphone 13 ProMax 512gb (Graphite) - 2350 U$S\nB- Iphone 13 128gb (Pink) - 1399 U$S\nC- Iphone 12 64gb (Black) - 1099 U$S")
alert("Productos disponibles: \n- " + listNames.join("\n- "))

let quantityBuy = prompt("Ingrese cantidad de productos distintos desea comprar:");

for(let i = 0; i < quantityBuy; i = i + 1){
    
    let productBuy = prompt("Ingrese la letra del producto que desea comprar: \nA- Iphone 13 ProMax 512gb (Graphite) - 15% OFF!!!\nB- Iphone 13 128gb (Pink)\nC- Iphone 12 64gb (Black)")

    if (productBuy.toUpperCase() == "A"){   
        let quantityProductA = prompt("Ingrese cantidad de " + productA.name + " desea comprar:")
        if(quantityProductA <= productA.stock){
            discountProduct = quantityProductA * productA.price * 0.15
            //discount(quantityProductA, productA.price, 0.50)
            price(quantityProductA, productA.price,discountProduct)     
        }
        else{       
            alert("Actualmente tenemos en stock " + productA.stock + " Iphone 12 64gb (Black)." )
        } 
     
    }

    else if(productBuy.toUpperCase() == "B"){
        let quantityProductB = prompt("Ingrese cantidad de " + productB.name + " desea comprar:")
        if(quantityProductB <= productB.stock){
            discountProduct = quantityProductB * productB.price * 0
            price(quantityProductB, productB.price,discountProduct) 
            
        }
        else{ 
            alert("Actualmente tenemos en stock " + productA.stock + " Iphone 13 128gb (Pink)." )
        } 
    }
    
    else if(productBuy.toUpperCase() == "C"){
        let quantityProductC = prompt("Ingrese cantidad de " + productC.name + " desea comprar:")
        if(quantityProductC <= productC.stock){
            discountProduct = quantityProductC * productC.price * 0
            price(quantityProductC, productC.price,discountProduct) 
            
        }
        else{
            alert("Actualmente tenemos en stock " + stockProductC + " Iphone 12 64gb (Black).")
        } 
    }
    
    else{
        alert("¡Muchas gracias " + visitorName + " por su visita!")
    }
}

if (priceTotal !=0){
    alert("El precio total es: " + priceTotal + " U$S")
    alert("¡Muchas gracias " + visitorName + " por su compra!")
}

