let array = [-1, 1, 4, 5, 8, 9, 11]
let num = 1

let find = (arr, n) => {
    let first = 0;
    let last = arr.length - 1;

    if(arr[0] > n || arr[last] < n){
        return -1
    }
    
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        
        if(arr[mid] === n){
            return mid
        }
        else if(arr[mid] < n){
            first = mid + 1
        }else if(arr[mid] > n){
            last = mid - 1
        }
    }
    
    return -1;
}
let result = find(array, num);

console.log(result)