const object1 = {
    name: 'Mato Gulli',
    age: 35,
    education: 'tyoton',

}

const object2 = {
    name: 'Full Stack -websovelluskehitys',
    lavel: 'aineopinnot',
    size: 5,
}

const object3 = {
    name: {
        first: 'Juha',
        last: 'Tauriainen'
    },
    grades: [2,3,5,3],
    departent: 'TKLT',
}

const fieldName = 'age'

object1.address = 'Tapiola'
object1['secret number'] = 12341

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1,5)
console.log(result)

const square = p => {
    console.log(p)
    return p * p
}

console.log(square(2))

const t = [1,2,3]
const tSquare = t.map(p => p * p)

console.log(tSquare)

function product(a,b) {
    return a * b
}

const vastaus = product(2, 6)

console.log('--------------')
console.log(vastaus)

console.log('--------------')

const avarage = function(a, b) {
    return (a+b) / 2
}
const vastaus1 = avarage(2,5)

console.log(vastaus1)


