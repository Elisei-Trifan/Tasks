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

function capitalize(s, arr) {
  return [...s]
    .map((item, index) => (arr.includes(index) ? item.toUpperCase() : item))
    .join('')
}

console.log(capitalize('abcdscadzef', [1, 2, 5]))

function friend(friends) {
  return friends
    .map((item) => (item.length === 4 ? item : ''))
    .filter((item) => item != '')
}

console.log(friend(['Ryan', 'Kieran', 'Mark']))

function accum(s) {
  return [...s]
    .map((item, index) => item.toUpperCase() + item.repeat(index).toLowerCase())
    .join('-')
}

console.log(accum('djmsun'))

function digitalRoot(n) {
  a = n
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, item) => {
      return acc + item
    }, 0)
  if (a < 10) {
    return a
  } else if (a >= 10) {
    return digitalRoot(a)
  }
}

console.log(digitalRoot(49))
