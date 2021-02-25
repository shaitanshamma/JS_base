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

checkCart()

for (const prod of catalog) {
    drawProduct(prod)
}

function drawProduct(product) {
    let prodDiv = document.createElement('div')
    prodDiv.className = 'prod'
    catalogHtml.insertAdjacentHTML('beforeend',
        `<div class="fature_item" >
            <div class="overlay" id="modal_${product.id}">
                <a>
                    <div class="add_to_card_block" id="add_to_cart_${product.id}">
                        <img src="img/cart.png" alt="">
                            <p>Add to Cart</p>
                    </div>
                </a>
            </div>
            <a >
                <img src=img/feature_${product.id + 1}.png alt="" >
                    <h3>ELLERY X M'O CAPSULE</h3>
                    <p class="pgf">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym
                        Ellery teams up with Moda Operandi.</p>
                    <p class="price">$ ${product.price}</p>
            </a>
        </div>`
    )
}

catalogHtml.addEventListener('click', addProdToCart)


catalogHtml.addEventListener('click', showModal)

function addProdToCart(e) {
    for (const prod of catalog) {
        if (e.target.id === `add_to_cart_${prod.id}`) {
            cart.push(prod)
            drawProductInCart(prod)
            checkCart()
        }
    }
}

function removeProduct(id) {
    let prod = document.getElementById(`${id}`)
    prod.remove()
}


let carItems = document.createElement("div")
let productInCart = document.createElement("div")
productInCart.className = 'products_in_cart'
productInCart.appendChild(carItems)
cartDiv.appendChild(productInCart)

carItems.className = 'cart_items'
carItems.insertAdjacentHTML('afterend', `                    
                    <div class="proceed_button">
                        <button class="next">NEXT</button>
                    </div>`)
productInCart.insertAdjacentHTML('afterbegin', `                    
                    <div class="cart_overlay">
                        Cart
                    </div>`)


function createSubDiv() {
    cartDiv.insertAdjacentHTML("beforeend", `
            <div class="order_and_price">
                    <div class="order_and_price_overlay">Order form</div>
                <div class="order_form none_width">
                    <h4>SHIPPING ADDRESS</h4>
                    <label>
                        <input type="text" placeholder="Bangladesh">
                    </label>
                    <label>
                        <input type="text" placeholder="State">
                    </label>
                    <label>
                        <input type="text" placeholder="Postcode / Zip">
                    </label>
                    <div class="">
                        <button class="get_quote">GET A QUOTE</button>
                    </div>
                </div>
                <div class="price_overlay">Cart price</div>
                <div class="total_price none_width">
                    <h5 class="sub_total">SUB TOTAL 0</h5>
                    <h4>GRAND TOTAL <span class="grand_total">$0</span></h4>
                    <div class="proceed_button">
                        <button class="proceed">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>`)
}

let getQuote = document.querySelector('.get_quote')
let orderFormOverlay = document.querySelector('.order_and_price_overlay')
let priceOverlay = document.querySelector('.price_overlay')
let totalPrice = document.querySelector('.total_price')
let cartOverlay = document.querySelector('.cart_overlay')
let orderForm = document.querySelector('.order_form')
let productsInCart = document.querySelector('.cart_items')
let procced = document.querySelector('.proceed')
let next = document.querySelector('.next')

function checkCart() {
    if (cart.length === 0) {
        document.querySelector('.total_price').classList.toggle('none_width')
        document.querySelector('.total_price').classList.toggle('none_width')
        document.querySelector('.cart').style.display = 'none'
    }
    else {
        document.querySelector('.cart').style.display = 'flex'
    }
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
                            <a class="close_prd">
                                <i class="far fa-window-close product-close" id="delete_${product.id}"></i>
                            </a>
                        </div>
                    </div>`)
    carItems.addEventListener('click', (e) => {
        if (e.target.id === `delete_${product.id}`) {
            removeItem(product.id)
        }
    })
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

function showModalWindow(id) {
    let modal = document.querySelector(`.modal`)
    modal.classList.toggle('open')
    let imgSrc = document.querySelector('.modal > .img_modal')
    imgSrc.src = `img/feature_${id + 1}.png`
    cartDiv.classList.toggle('opacity')
    catalogHtml.classList.toggle('opacity')
}

function showModal(e) {
    for (const prod of catalog) {
        if (e.target.id === `modal_${prod.id}`) {
            showModalWindow(prod.id)
        }
    }
}


getQuote.addEventListener('click', () => {
    orderForm.classList.toggle('none_width')
    totalPrice.classList.toggle('none_width')
})

procced.addEventListener('click', () => {

    document.querySelector('.order_and_price').style.display = 'none'
    document.querySelector('.products_in_cart').style.display = 'none'
    document.querySelector('.cart').textContent = 'Заказ отправлен!'
})

next.addEventListener('click', () => {
    productsInCart.classList.toggle('none_width')
    orderForm.classList.toggle('none_width')
    next.classList.toggle('none_width')
})

orderFormOverlay.addEventListener('click', ()=>{
    orderForm.classList.toggle('none_width')
})

cartOverlay.addEventListener('click', ()=>{
    productsInCart.classList.toggle('none_width')
    next.classList.toggle('none_width')
})

priceOverlay.addEventListener('click', ()=>{
    totalPrice.classList.toggle('none_width')
    next.classList.toggle('none_width')
})

