'use strict'

let listFibonacci = [0,1];

const sumPositions = (position1, position2) => {
    return position1 + position2
}

const fibonacci = () => {
    while(listFibonacci[listFibonacci.length - 1] <= 350) {
        let nextNumber = sumPositions(listFibonacci[listFibonacci.length - 1], listFibonacci[listFibonacci.length - 2])
        listFibonacci.push(nextNumber)
    }
    return listFibonacci
}

const isFibonnaci = (num) => {
    return listFibonacci.includes(num)
}

module.exports = {
    fibonacci,
    isFibonnaci
}