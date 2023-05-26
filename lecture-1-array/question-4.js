let array = [9, 4, 9]

let find = (arr) => {
    let n = arr.length ;
    let carry = 1
    for (let i = n - 1; i >= 0; i--){
        arr[i]++;
        if(arr[i] < 10){
            return arr
        }
        arr[i] = 0;
    }
    
    arr.unshift(1);
    return arr
}
let result = find(array);

console.log(result)