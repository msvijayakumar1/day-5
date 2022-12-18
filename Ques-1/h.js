let func = (function(a,n) {
    for (let i = 0; i < n; i++) {
        a.unshift(a.pop());
    }
    console.log(a);
})
let arr = [1,2,3,4,5]
let rot = 2
func(arr, rot)