//let a = 5
//let s = "третй элемент массива = "
//s = s + a
//console.log(s)

arr = [-1, -2, -10, -85, -75]
let array_len = arr.length
let max = -10000000000000
let max2 = -1000000000000
//console.log(s , arr[2])
for ( let i = 0; i < array_len ; i = i + 1 ) {
    let r = arr[i]
    if (max < r)
      max = r
       let r2 = arr[i-1]
       if (max2 < r2)
}
console.log(max, max2)