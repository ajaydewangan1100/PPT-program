let array = [0, 10, 0, 4, 9, 0, 78]

let find = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arr = [...arr.slice(0, i), ...arr.slice(i + 1)];
            arr.push(0);
        }
    }
    return arr
}
let result = find(array);

console.log(result)