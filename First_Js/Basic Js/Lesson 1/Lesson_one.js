// 1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let vitannia = 'hello';
// let okten = 'owu';
// let company = 'com';
// const ukr = 'ua';
// let one = 1;
// let ten = 10;
// let minus = -999;
// let digit = 123;
// const Pi = 3.14;
// let total = 2.7;
// const sqrt = 16;
// const Andrii = true;
// const Sergii = false;
// 2. Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(vitannia);
// console.log(okten);
// console.log(ukr);
// console.log(company);
// console.log(one);
// console.log(ten);
// console.log(minus);
// console.log(digit);
// console.log(Pi);
// console.log(total);
// console.log(sqrt);
// console.log(Andrii);
// console.log(Sergii);
//   alert(vitannia);
// alert(okten);
// alert(ukr);
// alert(company);
// alert(one);
// alert(ten);
// alert(minus);
// alert(digit);
// alert(Pi);
// alert(total);
// alert(sqrt);
// alert(Andrii);
// alert(Sergii);
// document.write(` <h1>${vitannia} ${okten} ${ukr} ${company} ${one} ${ten} ${minus} ${digit} ${Pi} ${total} ${sqrt} ${Andrii} ${Sergii}`);
// // 3 .Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// vitannia= ' Good morning';
// okten = ' Okten Web';
// company = 'BigCompany';
// one = 12;
// ten = 125;
// minus = 1535;
// digit = 12452;
// total = 4,2;
// const не можна переприсвоїти тому я більше його не писав;
// 4. Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(vitannia);
// console.log(okten);
// console.log(ukr);
// console.log(company);
// console.log(one);
// console.log(ten);
// console.log(minus);
// console.log(digit);
// console.log(Pi);
// console.log(total);
// console.log(sqrt);
// console.log(Andrii);
// console.log(Sergii);
//   alert(vitannia);
// alert(okten);
// alert(ukr);
// alert(company);
// alert(one);
// alert(ten);
// alert(minus);
// alert(digit);
// alert(Pi);
// alert(total);
// alert(sqrt);
// alert(Andrii);
// alert(Sergii);
// document.write(` <h1>${vitannia} ${okten} ${ukr} ${company} ${one} ${ten} ${minus} ${digit} ${Pi} ${total} ${sqrt} ${Andrii} ${Sergii}`);
// 5.  За допомогою 3х різних prompt() отримати  3 слова які являються вашими Імям, По-Батькові та роками.
// const userName = prompt(`Enter Name`);
// const  userF = prompt(` Enter surname`);
// const userAge = prompt(`Enter age`);
// console.log(` ${userName} ${userF} ${userAge}` );
// 6.  Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// const userName = prompt(`Enter Name`);
// const  userF = prompt(` Enter surname`);
// const userAge = prompt(`Enter age`);
// console.log(` ${userName} ${userF} ${userAge}` );
//console.log('Вітаю '+ userName+ ' '+ userF + '. '+ 'Тобі '+ userAge + ' '+ 'роки'  );
//
// 7.Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// document.write(` <h1>${vitannia} ${okten} ${ukr} ${company} ${one} ${ten} ${minus} ${digit} ${Pi} ${total} ${sqrt} ${Andrii} ${Sergii}`);

// 8.За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let number1 =parseInt( prompt(' Enter 1 digit'));
// let number2 =parseInt( prompt(' Enter 2 digit'));
// let number3 =parseInt( prompt(' Enter 3 digit'));
//  console.log(number1, number2 ,number3);
// 9 За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
// let number1 = parseInt(prompt(' Enter 1 digit'));
// let number2 = parseInt(prompt(' Enter 2 digit'));
// let number3 = parseInt(prompt(' Enter 3 digit'));
// let number4 = parseInt(prompt(' Enter 4 digit'));
// console.log(number1, number2, number3, number4);
// let result = number4 + number3 + number2 + number1;
// console.log(result);
//10 i 11  За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let number1 = parseFloat(prompt(' Enter 1 digit'));
//  let number2 = parseFloat(prompt(' Enter 2 digit'));
//  let number3 = parseFloat(prompt(' Enter 3 digit'));
//  console.log(number1, number2, number3, );
//  let result = ( number1 + number2 + number3);
// console.log(result);
// 12 За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let number1 = parseFloat(prompt(' Enter 1 digit'));
// let number2 = parseFloat(prompt(' Enter 2 digit'));
// let number3 = parseFloat(prompt(' Enter 3 digit'));
// let newnumber1= Math.round(number1);
// let newnumber2= Math.round(number2);
// let newnumber3= Math.round(number3);
// console.log(newnumber1 + newnumber2+ newnumber3);

//13. За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25 
// let first = prompt(' enter 1 digit');
// let second = prompt(' enter 2 digit');
// let pow = Math.pow( first, second);
// console.log(pow);
// 14. За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100; let b = '100'; let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// 
// 15Поставтe відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true
//  console.log(5!=6);
// console.log(5==6);
// console.log(5===6);
// console.log(`5`>6);
// console.log(10 === 10);
// console.log(10==10);
// console.log(10!=10);
// console.log(10!==10);
// console.log(10>`10`);
// console.log(123 ==='123');
// console.log(123=='123');

// Класна робота
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
// let str = 'Привіт';
// let num = 123;
// let flag= true;
// let txt = 'true';
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof flag);
// console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
// let a1 = 12*2+10;
// let a2 = 3*4/1;
// let a3 = 13*5+1;
// let a4 = 9*8+18;
// let a5 = 8*10+7
// console.log(a1 , a2, a3, a4, a5);

// 3 Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
// let a6 = 5 % 3;
// let a7 = 3%5;
// let a8 =  (5 + '3');
// let a9 = ( '5 ' - 3 );
// let a10 = (75+ 'Кг');
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);

// 4 . Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
// let height = 23;
// let width = 10;
// let s = (width*height);
// console.log(s);

// 5. Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let heightC = 10;
// let Dc = 4;
// let v = (3.14*(Dc/2)*2* heightC);
// console.log(v);
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n = 3;
// let m = 4;
// k= Math.sqrt((n*n)+ (m*m));
// console.log(k);
// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str =  ' Hello world';
// document.write(str);
// console.log(str);
// alert(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let Fio = ' Soloninko Andriy Anatolich';
// let age=  (23);
// let hobby= ('Football');
// alert ( Fio + " \n" + age + "\n"+ hobby);

// 9.Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//    Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//    Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = 'Xto';
// let str2= 'ти';
// let str3 = 'такий?';
// let concatenation = ( str1 + ' '+  str2 +' '+  str3);
// document.write(concatenation);
// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//      let str = "20";
//  let a = 5;
//document.write(str + a + "<br/>"); - 205 тому що стрінга просто з*єднується з 5
//document.write(str - a + "<br/>"); 15 - стрінга перетворюється в цифру і виконується віднімання
// document.write(str * "2" + "<br/>");  2 i str  перетворюється на цифру і виконується множення
// document.write(str / 2 + "<br/>"); 10 стрінга перетворюється на чифру і виконується ділення

// 11.Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//  parseInt("3.14"); =3
// parseInt("-7.875"); = -7;
//  parseInt("435"); = 435
// parseInt("Вася"); = NaN
// // 12.С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something",);
// console.log(str);
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let a = prompt(' Enter number1');
// let b = prompt(' Enter number2');
// let res =alert (a + b);

// 14.С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let name = prompt(" Enter your name");
// let surname = prompt(" Enter your surname");
// let age = prompt(" Enter your age");
// let res = alert( 'Доброго вечора '+ name + ' '+  surname + ' мої вітання  вам '+ age );
// додаткові
// 1.Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// Це трохи не зрозумів як правильно робити, Чомусь не виводить в консоль?
// let a = prompt(' enter first');
// let b = prompt(' enter second');
// let c = prompt(' third');
// if (a > b && a > c) {
//     if (b > c) {
//         console.log(c, b, a);
//     } else {
//         console.log(b, c, a)
//     }
//     if (b > a && b > c) {
//         if (a > c) {
//             console.log(c, a, b);
//         } else {
//             console(a, c, b);
//         }
//     } else if (c > b && c > a) {
//         if (b > a) {
//             console.log(a, b, c);
//         } else {
//             console.log(b, a, c);
//         }
//     }
// }

// }
// 2. Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let colors = prompt(' Enter Color');
// if (colors == 'green') {
//     console.log('Іди');
// } else if (colors == " yellow") {
//     console.log('Почекай');
// } else if (colors == 'red') {
//     console.log(' Стій');
// } else {
//     console.log(' Роби що хочеш')
// }
// 3. Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let colors = prompt(' Enter Color');
// let isRoadClear = confirm(" Do you see a cars on the road?")
// if (colors == 'green') {
//     if (isRoadClear == true) {
//         console.log('Іди');
//     } else if (isRoadClear == false) {
//         console.log(' Почекай поки порушники проїдуть')
//     }
// } else if (colors == " yellow") {
//     if (isRoadClear == true) {
//         console.log('Почекай поки проїдуть авто')
//     } else if (isRoadClear == false) {
//         console.log(' Всерівно чекай');
//     }
// } else if (colors == 'red') {
//     if (isRoadClear == false) {
//         console.log(' стій ще рано');
//     } else if (isRoadClear = true) {
//         console.log(' Стій і жди');
//     } else {
//         console.log(' Роби що хочеш');
//     }
// }

