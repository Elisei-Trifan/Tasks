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

// function sumOfRoots(a, b, c) {
//   const discriminant = b ** 2 - 4 * a * c

//   if (discriminant < 0) {
//     return null
//   }

//   const a1 = (-b + Math.sqrt(discriminant)) / (2 * a)
//   const a2 = (-b - Math.sqrt(discriminant)) / (2 * a)

//   const sum = a1 + a2
//   return parseFloat(sum.toFixed(2))
// }

// console.log(sumOfRoots(1, -11, 30))

/* const a = {
  x: 3,
  y: 3,
}

const b = {
  x: 3,
  y: 2,
}

function distanceBetweenPoints(a, b) {
  let aa = Object.values(a)
  let bb = Object.values(b)
  const cc = Math.pow(aa[0] - bb[0], 2)
  const dd = Math.pow(aa[1] - bb[1], 2)

  return Math.sqrt(cc + dd)
} */

/* function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
}

console.log(distanceBetweenPoints(a, b)) */

/* function abbrevName(name) {
  return name
    .split(' ')
    .map((item) => item[0].toUpperCase())
    .join('.')
}

console.log(abbrevName('Trifan elisei')) */

/* const game = ['3:1', '2:2', '2:1']

function points(games) {
  let points = 0
  games.map((item) => {
    if (item[0] > item[2]) {
      points += 3
    } else if (item[0] < item[2]) {
      points += 0
    } else if ((item[0] = item[2])) {
      points += 1
    }
  })
  return points
}

console.log(points(game)) */

/* function stringToArray(string) {
  return string.split(' ')
}

console.log(stringToArray('dfwsds dvsdvs aefdvsdz sdvszdv aevqa')) */

/* function countSheeps(sheep) {
  let count = 0
  sheep.map((item) => {
    if (item === true) {
      count += 1
    } else if (item === null || undefined) {
      count += 0
    }
  })
  return count
} */

/*function testEven(n) {
  if (n % 2 === 0) {
    return true
  } else {
    return false
  }
}*/

/* "scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  }

  if (
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'paper' && p2 === 'rock')
  ) {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
} */

/*class Circle {
  constructor(center, radius) {
    this.center = center
    this.radius = radius
  }
}

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

function circleArea(circle) {
  return Math.PI * Math.pow(circle.radius, 2)
}*/

/*function removeEveryOther(arr) {
  let a = []
  arr.map((item, index) => (index % 2 === 0 ? a.push(item) : false))
  return a
}

function removeEveryOther(arr) {
  return arr.filter((_, index) => index % 2 === 0)
}

console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']))*/

/* const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump >= fuelLeft * mpg
}

console.log(zeroFuel(50, 25, 2))
 */

/* function toBinary(n) {
  const binStr = n.toString(2)
  const d = parseInt(binStr, 10)
  return d
}

console.log(toBinary(5)) */

// function createFn(n = 0) {
//   let count = n
//   return function () {
//     count++
//     console.log(count)
//   }
// }

// step1 = createFn()
// step2 = createFn(5)
// step1()
// step1()
// step2()
// step1()
// step1()

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

// console.log(randomInteger(5, 6))

function createBeggar(n) {
  let s = n
  return function beggar(name) {
    s += randomInteger(0, 100)
    console.log(s)
    if (s >= 250) return
    beggar()
  }
}

const beg1 = createBeggar(50)
const beg2 = createBeggar(30)
// beg1()
// console.log('============')
// beg2()

// const name1 = 'Mozilla'
// function init() {
//   // name - локальная переменная, созданная в init
//   function displayName() {
//     // displayName() - внутренняя функция, замыкание
//     alert(name1) // displayName() использует переменную, объявленную в родительской функции
//   }
//   displayName()
// }
// init()

const name2 = 'Chrome'

function init2() {
  function displayName2() {
    function displayName3() {
      alert(name2)
    }
    displayName3()
  }
  displayName2()
}

// init2()

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

const str5 = '(()()(()))[]{{}}}'
function checkBrackets(str) {
  let stack = []
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i])
    } else {
      const lastEl = stack.pop()
      if (str[i] !== obj[lastEl]) {
        return false
      }
    }
  }
  if (stack.length !== 0) return false
  return true
}
// console.log(checkBrackets(str5))

// console.log('Начало ')

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const backend = {
      server: 2000,
      app: false,
    }

    resolve(backend)
  }, 2000)
})

p1.then((dara) => {
  // console.log('Данные получены', dara)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dara.modify = true
      resolve(dara)
    }, 4000)
  })
})
  .then((daramod) => {
    // console.log('Модифицированные данные', daramod)
  })
  .catch((err) => {
    // console.error('Ошибка', err)
  })

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((data) => data.json())
  .then((data2) => console.log(data2))
