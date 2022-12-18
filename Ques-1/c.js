let func = (function(a) {
    let sum =0;
    for(const sum_arr in a){
        sum += a[sum_arr];
    }
    console.log(sum);
})
let arr = [1,2,3,4,5];
func(arr);