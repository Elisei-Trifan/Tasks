/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */

// const str = 'Good Morning'

// const string = str.split(' ')
// string[1] = 'Evening'
// console.log(string.join(' '))

const str = 'Good Morning'
const string = str.replace('Morning', 'Evening')
console.log(string)
