/**
 * --- SOAL SATU
 * Buatlah variabel nama, nim, dan jurusan kemudian masukkan ke variabel array secara berurut
 */

module.exports = function variable() {
    // Write your code here
    var nama = "Pandu Utomo"
    var nim = "2110511007"
    var jurusan = "Informatika"

    const array = []; // Assign here
    
    array.push(nama)
    array.push(nim)
    array.push(jurusan)
    
    return array;
}

// const variable = require("./Soal_1")

// console.log(variable())