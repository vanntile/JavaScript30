// start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2)

age = 200
console.log(age, age2)

let name = 'vanntile'
let name2 = name
console.log(name, name2)

name = 'ianito'
console.log(name, name2)

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players
console.log(players, team)

// You might think we can just do something like this:
team[3] = 'Lux'

// however what happens when we update that array?
console.info('An Array is a reference')

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice()
team2[3] = 'Alpha'
console.log(team2)

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players)
console.log(team3)

// or use the new ES6 Spread
const team4 = [...players]
team4[3] = 'Another'
console.log(team4)

const team5 = Array.from(players)
team5[3] = 'Blah blah'
console.log(team5)

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person
captain.number = 99

// how do we take a copy instead?
const cap2 = Object.assign({}, person, {
  expectancy: 99
})
console.log(person, cap2)

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const vanntile = {
  name: 'Vann',
  age: 10000,
  social: {
    twitter: '@vanntile',
    fb: '@vanntile'
  }
}
console.log(vanntile)

const dev = Object.assign({}, vanntile)
dev.social.twitter = '@johny'

console.log(vanntile, dev)
