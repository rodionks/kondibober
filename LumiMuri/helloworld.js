console.log("Hello World")
let a=33
//console.log(a)
//console.log("Значение переменной а="+a)

console.log(Number.MIN_VALUE)

let s="Значение переменной а="
s =s+a
//console.log(s)

let arr=[222,222,547,488,-2,547,488,-1]
//console.log(arr.length)

let arrl=arr.length
//console.log(arrl)
//console.log("3ий элемент массива="+arr[2])
if (arrl===0) {
    console.log("в массиве 0 элементов")
}
let max1=arr[0]
//for(let i=0; i<arrl;i=i+1) {
    //console.log(arr[i])
    //if (arr[i+1]>max1){
        //max1=arr[i+1]
//}
//console.log("максимум массива="+max)
if(arrl===1) {
    console.log("максимум массива="+max1)
}
let max2
if(arrl>1) {
    if (arr[0] > arr[1]) {
        max2 = arr[1]
    }
    if (arr[1] > arr[0]) {
        max1 = arr[1]
        max2 = arr[0]
    }


    for (let i = 0; i < arrl; i = i + 1) {
        if (arr[i + 1] > max1) {
            max2 = max1
            max1 = arr[i + 1]
        }
        if (arr[i + 1] < max1) {
            max2 = arr[i + 1]
        }
    }
    for (let i = 0; i < arrl; i = i + 1) {
        if (arr[i + 1] > max1) {
            max2 = max1
            max1 = arr[i + 1]
        }
        if (arr[i + 1] < max1 && arr[i + 1] > max2) {
            max2 = arr[i + 1]
        }
    }
}
if(max1===max2) {
    console.log("максимум массива ="+max1)
}
if(max1!==max2) {
    console.log("максимум 1 = "+max1)
    console.log("максимум 2 = "+max2)
}







