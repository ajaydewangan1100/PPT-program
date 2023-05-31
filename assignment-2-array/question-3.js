let array = [4, 3, 3, 7, 6, 6, 7]

let find = (arr) => {
    let countMapNum = new Map();
    let maxLen = 0;

    for (let num of arr) {
        countMapNum.set(num, (countMapNum.get(num) || 0) + 1);
    }

    for (let [num, count] of countMapNum) {
        if (countMapNum.has(num + 1)) {
          let subLen = count + countMapNum.get(num + 1);
          maxLen = Math.max(maxLen, subLen);
        }
    }
    return maxLen;
}
let result = find(array);

console.log(result)

