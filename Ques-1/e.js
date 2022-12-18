let func = (function(a) {
    let reverse_string = [];;
    for (const arr of a) {
        //let reverse_string = "";
        if (arr === arr.split("").reverse().join("")) {
            reverse_string.push(arr);
        }
    }
    return reverse_string;
})
let arr = ["noon", "abcba", "hello", "text"];
let reverse_arr = func(arr);
console.log(reverse_arr);
