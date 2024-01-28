console.log("Hello World")
let a=33
//console.log(a)
//console.log("Значение переменной а="+a)

let s="Значение переменной а="
s =s+a
//console.log(s)

let arr=[222,-34,547,-35,-2,-76,488,-1]
//console.log(arr.length)

let arrl=arr.length
//console.log(arrl)
//console.log("3ий элемент массива="+arr[2])

let max1=arr[0]
//for(let i=0; i<arrl;i=i+1) {
    //console.log(arr[i])
    //if (arr[i+1]>max1){
        //max1=arr[i+1]
//}
//console.log("максимум массива="+max)

let max2=arr[1]
if(max2>max1){max1=arr[1]
max2=arr[0]}

    for(let i=0; i<arrl;i=i+1) {
    if (arr[i+1]>max1){
        max2=max1
        max1=arr[i+1]
    }
        if(arr[i+1]<max1&&arr[i+1]>max2) {
            max2 = arr[i + 1]
        }
}
console.log("максимум 1="+max1)
console.log("максимум 2="+max2)





