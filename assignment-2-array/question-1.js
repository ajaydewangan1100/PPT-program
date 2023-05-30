let array = [1, 3, 3, 4, 5, 6]

let find = (arr) => {
    arr = arr.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < arr.length; i += 2) {
        count += arr[i]
    }

    return count
}
let result = find(array);

console.log(result)