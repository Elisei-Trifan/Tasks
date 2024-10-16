/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

/*const date = new Date()
const dateMs = date.getTime()
console.log(dateMs)*/

let start, end

// const array = [1, 2]
// array.forEach((element) => {
//   return console.log(element)
// })

// end = new Date()

start = new Date()
for (let i = 1; i < 5; i++) {
  console.log(i)
}
end = new Date()
console.log(end.getTime() - start.getTime())
