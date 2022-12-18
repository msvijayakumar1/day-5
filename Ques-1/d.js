let func = (function(a) {
    let prim_arr = [], conduction;
    for (const ele of a) {
        //console.log("1st");
        if(ele != 1 || ele != 2) {
            for (i=2; i<ele; i++) {
                //console.log("2nd");
                if (ele%i != 0) 
                    conduction = true
                else
                    conduction = false
            }
            if(conduction)
            prim_arr.push(ele);
        }        
    }
    return prim_arr;
});
let arr = [1,2,3,5,7]
let return_arr = func(arr);
console.log(return_arr);