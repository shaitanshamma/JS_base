/* 1 task*/

const celsiusToFahrenheit = function (temp) {
    temp = prompt('Введите температуру в Градусах Цельсия: ')
    const tempFar = (9 / 5) * temp + 32
    alert('Температура в Фарейгейтах = ' + tempFar)
    console.log(tempFar)
}

celsiusToFahrenheit(30)

/* 2 task*/

let admin, name

name = 'Василий'

admin = name

console.log(admin)


/* 3 task */
/*Т.к. нет явного преобразования к числу, то получится новая строка */

console.log(1000 + '108')


/* 4 task */

/*
* Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда он загрузится.
*
* Атрибут async означает, что скрипт абсолютно независим:

    Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.
    Остальные скрипты не ждут async, и скрипты c async не ждут другие скрипты.

*
* */