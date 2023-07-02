const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let a;
let b;

readline.question('1. sayı: ', (sayi) => {
    if(isNaN(sayi)){
        console.log('bu bir sayı değil, lütfen tekrar dene')
        readline.resume()
    } else {
        a = sayi
        readline.question('2. sayı: ', (sayi) => {
            if (isNaN(sayi)) {
                console.log('bu bir sayı değil, lütfen tekrar dene')
                readline.resume()
            } else {
                b = sayi
                ekok(a,b)
                readline.close()
            }
        })   
    }
})

function ekok(a,b){
    if(isNaN(a) || isNaN(b)) return console.log('a veya b sayı değil')
    let ks;
    let bs;
    if(a > b) {
        bs = a;
        ks = b;
    } else {
        bs = b;
        ks = a;
    }
    for(let i = 1; i<a*b+1; i++){
        if(bs * i % ks == 0){
            return console.log(`${a} ve ${b} nin ekoku: ${bs*i}`)
        }
    }
}
