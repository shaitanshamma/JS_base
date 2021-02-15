/* 1 task*/

let i = 0
while (i <= 100) {
    while (i < 6) {
        if (i === 0 || i === 1 || i===4) {
            i++
            continue
        } else {
            console.log(i)
            i++
        }
    }
    if ((i % 2 === 0)) {
        i++
        continue
    } else if ((i % 3 === 0)) {
        i++
        continue
    } else if ((i % 5 === 0)) {
        i++
        continue
    } else if (i === 7) {
        console.log(i)
        i++
        continue
    } else if ((i % 7 === 0)) {
        i++
        continue
    } else {
        console.log(i)
        i++
    }
}

/* 2 task and 3 task*/

let cart = []

for (let j = 0; j < 10; j++) {
    let prod = {
        title: 'title_' + `${j}`,
        price: j * 100 + 0.99
    }
    cart.push(prod)
}
console.log(cart)

let price = function countBasketPrice(cart) {
    let elementsPrice = 0
    for (const cartElement of cart) {
        elementsPrice += cartElement.price
    }
    return elementsPrice
}

console.log('Сумма всех цен товаров в корзине = ' + price(cart) + ' у.е.')

/*Альтернативный вариант*/
//
// function countBasketPrice(cart){
//     let elementsPrice = 0
//     for (const cartElement of cart) {
//         elementsPrice+=cartElement.price
//     }
//    console.log('Сумма всех цен товаров в корзине = ' + elementsPrice + ' у.е.')
// }
// countBasketPrice(cart)
//
// 2 -ой Альтернативный

// let redPrice = cart.reduce((total, prod)=>total+=prod.price, 0)
// console.log('С помощью reduce '+ redPrice);

/* 4 task */

for (let j = 0; j <= 9; console.log(j), j++) {

}

/* 5 task*/

for (let j = 1; j <= 20; j++) {
    console.log("x".repeat(j))
}

/*Альтернативный вариант*/

// let str = ''
//
// for (let j = 1; j <= 20; j++) {
//     str += 'x'
//     console.log(str)
// }
