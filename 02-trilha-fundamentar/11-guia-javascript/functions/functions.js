/**
 * Function() constructor
 *
 * expressão new
 * criar um novo objeto
 * this keyword
 */

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' está andando.'
  }
}
const kleber = new Person('Kleber')
const alves = new Person('Alves')
console.log(kleber.walk())
console.log(alves.walk())
