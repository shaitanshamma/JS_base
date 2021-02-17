/* 1 task*/


let cart = []
const catalog = []

class Product {
    constructor(id, title, brand, type, size, price) {
        this.id = id;
        this.title = title;
        this.brand = brand;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

for (let j = 0; j < 10; j++) {
    let prod = new Product(j, 'title_' + j, 'brand_' + j, 'type_' + j, 'size_' + j * 4, j * 1000 + 20)
    // cart.push(prod)
    catalog.push(prod)
}

let cartDiv = document.querySelector('.cart')

let catalogHtml = document.querySelector('#catalog')

createSubDiv()


for (const prod of catalog) {
    drawProduct(prod)
}

function drawProduct(product) {
    let prodDiv = document.createElement('div')
    prodDiv.className = 'prod'
    catalogHtml.insertAdjacentHTML('beforeend',
        `<div class="fature_item" onclick="showModalWindow(${product.id})">
            <div class="overlay">
                <a>
                    <div class="add_to_card_block" onclick="addToCart(${product.id})">
                        <img src="img/cart.png" alt="">
                            <p>Add to Cart</p>
                    </div>
                </a>
            </div>
            <a>
                <img src=img/feature_${product.id + 1}.png alt="">
                    <h3>ELLERY X M'O CAPSULE</h3>
                    <p class="pgf">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym
                        Ellery teams up with Moda Operandi.</p>
                    <p class="price">$ ${product.price}</p>
            </a>
        </div>`
    )
}

function removeProduct(id) {
    let prod = document.getElementById(`${id}`)
    prod.remove()
}

function addToCart(id) {
    for (const prod of catalog) {
        if (prod.id === id) {
            cart.push(prod)
            drawProductInCart(prod)
            checkCart()
        }
    }
}

let carItems = document.createElement("div")
let productInCart = document.createElement("div")
productInCart.className = 'products_in_cart'
productInCart.appendChild(carItems)
cartDiv.appendChild(productInCart)
carItems.className = 'cart_items'

function createSubDiv() {
    cartDiv.insertAdjacentHTML("beforeend", `
            <div class="order_and_price">
                <div class="total_price">
                    <h5 class="sub_total">SUB TOTAL 0</h5>
                    <h4>GRAND TOTAL <span class="grand_total">$0</span></h4>
                    <div class="proceed_button">
                        <button class="proceed" onclick="location.href='cart.html'">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>`)
}


function checkCart() {
    let average = cart.reduce((price, prod) => price + prod.price, 0)
    let subTotal = document.querySelector('.sub_total')
    let grandTotal = document.querySelector('.grand_total')

    subTotal.textContent = `SUB TOTAL $ ${average}`
    grandTotal.textContent = `GRAND TOTAL $ ${average}`
}

function drawProductInCart(product) {
    carItems.insertAdjacentHTML("beforeend", `
        <div class="product_in_cart" id = ${product.id}>
                        <img src="img/feature_${product.id + 1}.png" alt="" class="product_img">
                        <div class="description">
                            <h3>${product.title}</h3>
                            <p class="product_decr">Price: <span>$ ${product.price}</span></p>
                            <p class="product_decr">Color: Red</p>
                            <p class="product_decr">Size: Xl</p>
                            <label>
                                <span class="product_decr">Quantity:</span>
                                <input type="number" class="input_number">
                            </label>
                            <a class="close_prd" onclick="removeItem(${product.id})">
                                <i class="far fa-window-close product-close"></i>
                            </a>
                        </div>
                    </div>`)
}

function removeItem(id) {
    for (const prod of cart) {
        if (prod.id === id && cart.length === 1) {
            removeProduct(id)
            cart = []
        } else {
            removeProduct(id)
            cart.splice(cart.findIndex(prod => prod.id === id), 1)
        }
        checkCart()
    }
    console.log(cart)
}

function showModalWindow(id){
    let modal = document.querySelector(`.modal`)
    modal.classList.toggle('open')
    let imgSrc = document.querySelector('.modal > .img_modal')
    imgSrc.src = `img/feature_${id + 1}.png`
    cartDiv.classList.toggle('opacity')
    catalogHtml.classList.toggle('opacity')
}

