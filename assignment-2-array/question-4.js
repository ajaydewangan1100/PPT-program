let array = [1,0,0,0,1]
let n = 3

let find = (arr, n) => {
    let equal = 0;

    for (let num of arr) {
        if(!num){
            equal++;
            if(equal >= n){
                return true
            }
        }else{
            equal = 0;
        }
    }
    return false;
}
let result = find(array, n);

console.log(result)