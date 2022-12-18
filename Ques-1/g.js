let func = (function(a) {
    return [...new Set(a)]
})
let arr = [1,1,2,2,3,3,3,4]
console.log(func(arr));