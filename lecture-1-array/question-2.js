let array = [10, 2, 3, 10, 5, 1]

let find = (arr, val) => {
    let count = 0;
    let newA = [];
    for (let i = 0; i < arr.length; i++){
        arr[i] === val 
        ? 
        (count++ ,
        newA.push("_"))
        :
        newA.unshift(arr[i])
    }
    return [(arr.length - count), newA]
}
let [count, findedArr] = find(array, 10);

console.log(count, ":", findedArr)