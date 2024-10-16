/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const name = 'Elisei'
const lastName = 'Trifan'
const stack = 'frontendDeveloper'

function user(a, b, c) {
  return `Меня зовут ${a} ${b} и я ${c}`
}

console.log(user(name, lastName, stack))

const userInfo = `Меня зовут ${name} ${lastName} и я ${stack}`

console.log(userInfo)
