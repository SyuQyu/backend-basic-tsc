/**
 * --- SOAL TIGA
 * Buatlah logika pengecekan apabila role pada argumen adalah "admin" (dalam string) maka return "Halo admin!", 
 * kalau role adalah "user" maka return "Halo user!", selain itu return "Halo!"
 * 
 * Boleh menggunakan if..else, switch, atau ternary
 * 
 * Test Case:
 * role = "admin"
 * return value = "Halo admin!"
 */

module.exports = function authorize(role) {
    // Write your code here
    if (role == "admin") {
        return "Halo admin!"
    } else if (role == "user") {
        return "Halo user!"
    } else {
        return "Halo!"
    }
    
}