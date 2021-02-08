/* 1 task*/

var a = 1, b = 1, c, d;
c = ++a;
console.log(c); //  2 т.к. форма префиксная, то сначала идет инкремент, потом возврат
d = b++;
console.log(d); //  1 т.к. форма постфиксная, то сначала возврат, а потом инкремент
c = (2 + ++a);
console.log(c); // 5 а = 2 из прошлого примера, потом префиксный инкремент - 3 и сложение с 2 = 5
d = (2 + b++);
console.log(d); // 4 b = 2 из прошлого примера, потом постфиксный инкремент - 2 и сложение с 2 = 4
console.log(a); // 3 инкремент от 2 из прошлого и возврат
console.log(b); // 3 инкремент от 2 из прошлого и возврат

/* 2 task*/

var e = 2;
var x = 1 + (e *= 2);

console.log(x)
/* результат 5 т.к. e сначала умножается на 2 и присваивается e, а потом прибавляется 1 */


/* 3 task */


function math(a, b) {
    if (a >= 0 && b >= 0) {
        console.log(a - b)
    } else if (a < 0 && b < 0) {
        console.log(a * b)
    } else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
        console.log(a + b)
    }
}

math(-1, -2)
math(5, -2)
math(0, 2)


/* 4 task */

let z = 0

console.log("Четвертое задание")

switch (z) {
    case 0:
        console.log(0)
    case 1:
        console.log(1)
    case 2:
        console.log(2)
    case 3:
        console.log(3)
    case 4:
        console.log(4)
    case 5:
        console.log(5)
    case 6:
        console.log(6)
    case 7:
        console.log(7)
    case 8:
        console.log(8)
    case 9:
        console.log(9)
    case 10:
        console.log(10)
    case 11:
        console.log(11)
    case 12:
        console.log(12)
    case 13:
        console.log(13)
    case 14:
        console.log(14)
    case 15:
        console.log(15)
        break
}
console.log('Конец 4 задания')

/* 5 task*/

function summ(a, b) {
    return a + b
}

function subtraction(a, b) {
    return a - b
}

function comp(a, b) {
    return a * b
}

function splitting(a, b) {
    return a / b
}

console.log('5 задание')
console.log(summ(1, 4));
console.log(subtraction(56, 4));
console.log(comp(2, 4));
console.log(splitting(-2, 0));
console.log('Конец 5 задания')

/* 6 task*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'summ':
            console.log(`Сумма двух чисел =`, summ(arg1, arg2));
            break
        case 'subtraction':
            console.log(`Разность двух чисел =`, subtraction(arg1, arg2));
            break
        case 'comp':
            console.log(`Произведение двух чисел =`, comp(arg1, arg2));
            break
        case 'splitting':
            console.log(`Деление первого на второе =`, splitting(arg1, arg2));
            break
    }
}

mathOperation(2, 3, 'summ')
mathOperation(2, 3, 'subtraction')
mathOperation(2, 3, 'comp')
mathOperation(2, 3, 'splitting')

/* 7 task*/

console.log(null == 0) //false т.к. 0 это математическое число, а null "ничто"
console.log(null === 0)//false т.к. 0 это математическое число, а null "ничто"
console.log(null != 0)//true т.к. 0 это математическое число, а null "ничто", следовательно они не равны
console.log(null !== 0)//true т.к. 0 это математическое число, а null "ничто", следовательно они тождественно не равны

/* 8 task*/

function power(val, pow) {
    if (pow === 0) {
        return 1
    } else {
        return val *= power(val, pow - 1)
    }
}

console.log(`Число в стенени =`,power(2, 4))