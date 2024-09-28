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

// let b = 0
// function persistence(num) {
//   if (num < 10) {
//     return 0
//   }

//   let a = num
//     .toString()
//     .split('')
//     .map(Number)
//     .reduce((acc, item) => (acc = acc * item), 1)
//   b++

//   if (a < 10) {
//     return a
//   } else if (a > 9) {
//     persistence(a)
//   }
//   return b
// }

function persistence(num) {
  let count = 0
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split('')
      .reduce((acc, el) => (acc *= +el), 1)
    count++
  }
  return count
}

console.log(persistence(1435563))
