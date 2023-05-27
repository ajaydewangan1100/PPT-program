let array = [2, 4, 9]
let ar = [1, 3, 8];

let find = (arr1, arr2) => {
    arr1 = [...arr1, ...arr2];
    console.log(arr1)
    return arr1.sort((a, b) => a - b);
    
}
let result = find(array, ar);

console.log(result)