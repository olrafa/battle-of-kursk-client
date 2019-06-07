//import React from 'react'

const toArabic = require ('roman-numerals').toArabic

const toRoman = require ('roman-numerals').toRoman

const newNumber = Math.floor(Math.random()*91)+10
const newNumber2 = Math.floor(Math.random()*91)+10

console.log(newNumber, toRoman(newNumber))
const numberArray = [newNumber]

const addRomans = () => {
  return numberArray.push(newNumber2)
}

addRomans();

console.log(numberArray)

const joinRomans = () => {
  const joined = numberArray.reduce((a, b) => a + b)
  console.log(joined)
  return joined
}

joinRomans();

