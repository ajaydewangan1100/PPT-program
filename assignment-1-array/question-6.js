let array = [10, 40, 4, 9]

let find = (arr1) => {
    let arr = arr1.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i++){
        if(arr[i-1] === arr[i]){
            return true
        }
    }
    return false
    
}
let result = find(array);

console.log(result)