//import React from 'react'

const toArabic = require ('roman-numerals').toArabic

const toRoman = require ('roman-numerals').toRoman

const newNumber = Math.floor(Math.random()*101)+10

console.log(toRoman(newNumber))
console.log(toArabic('MMXIX'))

