let array = [1, 3, 3, 4, 5, 6]

let find = (arr) => {
    arr = arr.sort((a, b) => a - b);
    let values = [];
    console.log(arr)
    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i + 1] === arr[i]){
            values.unshift(arr[i])
        }else if(arr[i + 1] === arr[i] + 2){
            values.push(arr[i] + 1)
        }
    }
    return values
}
let result = find(array);

console.log(result)