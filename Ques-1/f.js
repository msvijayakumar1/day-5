let func = (function(a,b) {
    if(a.lenght == b.lenght) {
        let merg_arr = a.concat(b).sort((a,b) => {return a-b});
        //console.log(merg_arr);
        let arr_len = merg_arr.length;
        //console.log(arr_len);
        return (merg_arr[arr_len/2]+merg_arr[(arr_len/2)+1])/2
    }    
})
let arr1 = [1,3,4,5,9]
let arr2 = [2,6,7,8,10]
let ans = func(arr1,arr2);
console.log(ans);