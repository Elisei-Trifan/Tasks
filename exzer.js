// const numbers = [1, 2, 3]

// console.log(
//   numbers.reduce((acc, item, _, arr) => {
//     const a = acc + item / arr.length
//     return a
//   }, 0)
// )

// const obj = [
//   { name: 'alina', age: 30 },
//   { name: 'elisei', age: 30 },
//   { name: 'andrei', age: 30 },
// ]

// console.log(
//   obj.reduce((acc, item, _, arr) => {
//     return acc + item.age / arr.length
//   }, 0)
// )

// const meetups = [
//   { name: 'JavaScript', isActive: true, members: 100 },
//   { name: 'HTML', isActive: false, members: 100 },
//   { name: 'React', isActive: true, members: 900 },
//   { name: 'Git', isActive: true, members: 500 },
// ]

// const meetupsOnActivMembers = (array) => {
//   return array
//     .filter((xx) => xx.isActive)
//     .reduce((sum, meetup) => {
//       return sum + meetup.members
//     }, 0)
// }
// console.log(meetupsOnActivMembers(meetups))

// function capitalize(s, arr) {
//   return [...s]
//     .map((item, index) => (arr.includes(index) ? item.toUpperCase() : item))
//     .join('')
// }

// console.log(capitalize('abcdscadzef', [1, 2, 5]))

// function friend(friends) {
//   return friends
//     .map((item) => (item.length === 4 ? item : ''))
//     .filter((item) => item != '')
// }

// console.log(friend(['Ryan', 'Kieran', 'Mark']))

// function accum(s) {
//   return [...s]
//     .map((item, index) => item.toUpperCase() + item.repeat(index).toLowerCase())
//     .join('-')
// }

// console.log(accum('djmsun'))

// function digitalRoot(n) {
//   a = n
//     .toString()
//     .split('')
//     .map(Number)
//     .reduce((acc, item) => {
//       return acc + item
//     }, 0)
//   if (a < 10) {
//     return a
//   } else if (a >= 10) {
//     return digitalRoot(a)
//   }
// }

// console.log(digitalRoot(49))

// function getCount(str) {
//   m = str.match(/[aoiue]/gi)
//   return m === null ? 0 : m.length
// }

// console.log(getCount('asfwrooodgw'))

// console.log('helloaAa'.match(/[ao]/))

// console.log('a aa aaa aaaa'.split(' '))

// console.log('Привет, как дела, у тебя?'.search(/[как]/gi))

// function vaporcode(string) {
//   return string
//     .replace(/\s+/g, '')
//     .split('')
//     .map((item) => item.toUpperCase())
//     .join('  ')
// }

// console.log(vaporcode('hello   hello'))

// function persistence(num) {
//   let count = 0
//   while (num.toString().length > 1) {
//     num = num
//       .toString()
//       .split('')
//       .reduce((acc, el) => (acc *= +el), 1)
//     count++
//   }
//   return count
// }

// console.log(persistence(1435563))

// const row = ['a', 'b', 'c']

// for (let i = row.length; i > 0; i--) {
//   console.log(row[i - 1])
// }

// const value = prompt('Введите число')
// const number = Number(value)

// if (!isNaN(number)) {
//   for (let i = 1; i <= 10; i++) {
//     if (number === 0) {
//       console.log(`Это  ${number}, такой таблицы нет`)
//       break
//     }
//     console.log(`${number} * ${i} = ${number * i}`)
//   }
// } else {
//   console.log(`Это буква ${value}, а не число`)
// }

// function arrayDiff(a, b) {
//   return a.filter((item) => !b.includes(item))
// }

// //   return [...a, ...b].filter((item, index, arr) => item)
// console.log(arrayDiff([1, 2, 2], [1]))

// function narcissistic(value) {
//   const num = [...value.toString()].map(Number)
//   return value ===
//     num.reduce(
//       (acc, item, _, arr) => (acc = acc + Math.pow(item, arr.length)),
//       0
//     )
//     ? true
//     : false
// }

// console.log(narcissistic(153))

// function count(string) {
//   let count = {}
//   string.split('').forEach((item) => {
//     count[item] ? count[item]++ : (count[item] = 1)
//   })
//   return count
// }

// function count(string) {
//   let count = {}
//   string
//     .split('')
//     .forEach((item) => (count[item] ? count[item]++ : (count[item] = 1)))
//   return count
// }

// console.log(count2('ппривет'))

function sumOfRoots(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c

  if (discriminant < 0) {
    return null
  }

  const a1 = (-b + Math.sqrt(discriminant)) / (2 * a)
  const a2 = (-b - Math.sqrt(discriminant)) / (2 * a)

  const sum = a1 + a2
  return parseFloat(sum.toFixed(2))
}

console.log(sumOfRoots(1, -11, 30))
