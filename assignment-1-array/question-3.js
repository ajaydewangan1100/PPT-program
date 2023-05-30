let array = [1, 2, 3, 5, 11, 12]

let find = (arr, val) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] >= val){return i}
    }
    
}
let result = find(array, 10);

console.log(result)