console.log("Soal 1")
const variable = require('./Tugas/Soal_1')
console.log(variable())

console.log("\n")

console.log("Soal 2")
const perkalianDuaBilangan = require("./Tugas/Soal_2")
console.log(perkalianDuaBilangan(10, 5))

console.log("\n")

console.log("Soal 3")
const authorize = require("./Tugas/Soal_3")
console.log(authorize("admin"))

console.log("\n")

console.log("Soal 4")
const submission = require("./Tugas/Soal_4")
console.log(submission(10))

console.log("\n")

console.log("Soal 5")
const sortByAge = require("./Tugas/Soal_5")
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [ pete, john, mary ];
sortByAge(arr)