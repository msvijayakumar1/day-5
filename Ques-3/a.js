let func = (a) => {
    let odd_num =[];
    for (const arr of a){
        if (arr%2 != 0){
            odd_num.push(arr);
        }
    }
    console.log(odd_num);
};
let arr = [1,2,3,4,5,6,7,8]
func(arr);