let array = [3,2,1,4,5]
let n = 3

let find = (arr) => {
    arr = arr.sort((a, b) => a - b);
    let len = arr.length;
    return arr[len - 1] * arr[len - 2] * arr[len - 3] 
}
let result = find(array, n);

console.log(result)