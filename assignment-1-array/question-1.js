let array = [10, 2, 3, 4, 5, 1]

let find = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < target){
            for (let j = i + 1; j < arr.length; j++) {
                if(arr[i] + arr[j] === target){
                    return [i, j]
                }
                
            }
        }
        
    }
}
let both = find(array, 11);

console.log(both)