let func = (a) => {
    let string = a.toLowerCase().split(' ');
    for (const i in string) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1)
    }
    console.log(string.join(" ").toString());
}
let str = "hello gUvI"
func(str)