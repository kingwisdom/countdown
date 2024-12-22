let arr = [1, 2, 5]
let arr2 = [4, 7]

function checkMidium(arr, arr2) {
    let merge = [...arr, ...arr2]

    let sortArr = merge.sort((a, b) => a - b);
    const mid = Math.floor(sortArr.length / 2)

    if (sortArr.length % 2 === 0) {
        return (sortArr[mid - 1] + sortArr[mid] / 2)
    }
    else {
        return (sortArr[mid])
    }
}

// console.log(checkMidium([1, 2, 5], [4, 7]))
// console.log(checkMidium([11, 20, 13, 16], [2, 6, 5, 18]))