const heros = ['iron man','spiderman']
const dc_heros = ['superman','flash']

// heros.push(dc_heros)
// console.log(heros)//array inside an array

let h = heros.concat(dc_heros)
console.log(h)

//there is also a spread operator
const hi = [...heros, ...dc_heros]
console.log(hi);

const hiii = [1,2,3,[4,5],[6,7],8,[9,0]]
let hn=hiii.flat(Infinity)
console.log(hn)