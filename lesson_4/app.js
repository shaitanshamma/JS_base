/* 1 task*/

function createObj(num) {
    let obj = {}
    if (num > 999) {
        console.log('Слишком большое число')
        return obj
    } else {
        const newNum = num.toString()
        for (let i = 0; i < newNum.length; i++) {
            if (newNum.length === 1) {
                obj = {
                    hundreds: 0,
                    tens: 0,
                    num: Number(newNum[newNum.length - 1])
                }
            } else if (newNum.length === 2) {
                obj = {
                    hundreds: 0,
                    num: Number(newNum[newNum.length - 1]),
                    tens: Number(newNum[newNum.length - 2])
                }
            } else {
                obj = {
                    hundreds: Number(newNum[0]),
                    tens: Number(newNum[newNum.length - 2]),
                    num: Number(newNum[newNum.length - 1])
                }
            }
        }
        return obj
    }
}

console.log(createObj(231))


function createObj2(num) {
    let obj2 = {}
    if (num > 999) {
        console.log('Слишком большое число')
        return obj2
    } else {
        let hundreds = Math.floor(num / 100)
        let tensWithNum = num % 100
        let tens = Math.floor(tensWithNum / 10)
        let numbers = tensWithNum % 10
        obj2 = {
            hundreds: hundreds,
            tens: tens,
            num: numbers
        }
        return obj2
    }
}

console.log(createObj2(231));

/* 2 task and 3 task*/


const cart = []

class Product {
    constructor(title, brand, type, size, price) {
        this.title = title;
        this.brand = brand;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

for (let j = 0; j < 10; j++) {
    let prod = new Product('title_' + j, 'brand_' + j, 'type_' + j, 'size_' + j * 4, j * 1000)
    cart.push(prod)
}
console.log(cart)

let totalPrice = function countBasketPrice(cart) {
    let elementsPrice = 0
    for (const cartElement of cart) {
        elementsPrice += cartElement.price
    }
    return elementsPrice
}

let average = cart.reduce((price, prod) => price += prod.price, 0)

console.log('Сумма всех цен товаров в корзине = ' + average + ' у.е.')

console.log('Сумма всех цен товаров в корзине = ' + totalPrice(cart) + ' у.е.')


