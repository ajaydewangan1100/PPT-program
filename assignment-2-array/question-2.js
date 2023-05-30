let array = [4, 3, 3, 7, 6, 6]

let find = (arr) => {
    arr = arr.sort((a, b) => a - b);
    const half = arr.length / 2;
    let count = [];
    for (let i = 1; i < arr.length; i += 2) {
        if(!count.includes(arr[i])){
            count.push(arr[i]);
        }
        if(count.length >= half){
            return half
        }
    }
    return count.length
}
let result = find(array);

console.log(result)